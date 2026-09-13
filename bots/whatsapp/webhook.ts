/**
 * WhatsApp Cloud API webhook — Express app. GET handles Meta's webhook
 * verification handshake; POST handles inbound messages. Reuses the same
 * shared/flow.ts state machine as the Telegram bot; only the rendering
 * (interactive lists/buttons vs. Telegram inline keyboards) differs.
 */
import express, { type Request, type Response } from 'express';
import {
  addAttachment,
  advance,
  buildLead,
  createInitialState,
  editStep,
  finishAttachments,
  formatSummary,
  getOptionsFor,
  getPromptText,
  isAttachmentsStep,
  isChoiceStep,
  isReadyToSubmit,
  isOptional,
  restart,
  skip,
} from '../shared/flow.js';
import { getBotDictionary } from '../shared/i18n.js';
import { notifyStaff } from '../shared/notify.js';
import { getMediaInfo, sendButtons, sendOptionList, sendText, sendTextPromptWithSkip } from './graph-api.js';
import type { FlowState, StepId } from '../shared/types.js';

const sessions = new Map<string, FlowState>();

function getSession(waId: string): FlowState {
  const existing = sessions.get(waId);
  if (existing) return existing;
  const fresh = createInitialState();
  sessions.set(waId, fresh);
  return fresh;
}

const EDITABLE_STEPS: StepId[] = ['service', 'location', 'projectType', 'description', 'budget', 'timeline', 'contactName', 'contactDetail'];

function labelFor(step: StepId, dict: ReturnType<typeof getBotDictionary>): string {
  switch (step) {
    case 'service':
      return dict.reviewService;
    case 'location':
      return dict.reviewLocation;
    case 'projectType':
      return dict.reviewProjectType;
    case 'description':
      return dict.reviewDescription;
    case 'budget':
      return dict.reviewBudget;
    case 'timeline':
      return dict.reviewTimeline;
    case 'contactName':
      return dict.reviewName;
    case 'contactDetail':
      return dict.reviewContact;
    default:
      return step;
  }
}

async function renderStep(to: string, state: FlowState): Promise<void> {
  const dict = getBotDictionary(state.language ?? 'en');

  if (state.step === 'review') {
    await sendText(to, `${getPromptText(state)}\n\n${formatSummary(state)}`);
    await sendOptionList(
      to,
      dict.reviewHeading,
      dict.confirmSubmit,
      [
        { value: 'review:submit', label: dict.confirmSubmit },
        ...EDITABLE_STEPS.map((step) => ({ value: `edit:${step}`, label: `✎ ${labelFor(step, dict)}` })),
        { value: 'review:restart', label: dict.restart },
      ]
    );
    return;
  }

  if (isAttachmentsStep(state.step)) {
    await sendButtons(to, getPromptText(state), [{ id: 'attachments:done', label: dict.doneWithAttachments }]);
    return;
  }

  if (isChoiceStep(state.step)) {
    await sendOptionList(to, getPromptText(state), dict.editAnswer, getOptionsFor(state));
    return;
  }

  if (state.step === 'submitted') {
    await sendText(to, getPromptText(state));
    return;
  }

  // Free-text step (description/budget/timeline/contactName/contactDetail).
  if (isOptional(state.step)) {
    await sendTextPromptWithSkip(to, getPromptText(state), dict.skip);
  } else {
    await sendText(to, getPromptText(state));
  }
}

async function handleChoiceOrCommand(to: string, id: string): Promise<void> {
  let state = getSession(to);
  const dict = getBotDictionary(state.language ?? 'en');

  if (id === 'skip') {
    state = skip(state);
  } else if (id === 'attachments:done') {
    state = finishAttachments(state);
  } else if (id === 'review:restart') {
    state = restart(state);
  } else if (id === 'review:submit') {
    if (isReadyToSubmit(state)) {
      const lead = buildLead(state, 'whatsapp');
      await notifyStaff(lead);
      state = { ...state, step: 'submitted' };
    }
  } else if (id.startsWith('edit:')) {
    state = editStep(state, id.slice('edit:'.length) as StepId);
  } else {
    // A list-row id from a choice step (language/service/location/projectType value).
    const result = advance(state, id, { returnTo: state.step === 'review' ? 'review' : undefined });
    if (!result.accepted) {
      await sendText(to, dict.invalidChoice);
      return;
    }
    state = result.state;
  }

  sessions.set(to, state);
  await renderStep(to, state);
}

async function handleFreeText(to: string, text: string): Promise<void> {
  let state = getSession(to);

  if (isChoiceStep(state.step) || state.step === 'review' || isAttachmentsStep(state.step) || state.step === 'submitted') {
    await renderStep(to, state);
    return;
  }

  const result = advance(state, text);
  state = result.accepted ? result.state : state;
  sessions.set(to, state);
  await renderStep(to, state);
}

async function handleMedia(to: string, mediaId: string, kind: 'photo' | 'document'): Promise<void> {
  let state = getSession(to);
  const dict = getBotDictionary(state.language ?? 'en');

  if (!isAttachmentsStep(state.step)) return;

  let sizeBytes: number | undefined;
  try {
    const info = await getMediaInfo(mediaId);
    sizeBytes = info.sizeBytes;
  } catch (err) {
    console.error('[whatsapp] Failed to resolve media info', err);
  }

  const { state: nextState, ok } = addAttachment(state, { id: mediaId, kind, channel: 'whatsapp', sizeBytes });
  state = nextState;
  sessions.set(to, state);
  await sendText(to, ok ? dict.attachmentSaved : dict.attachmentRejected);
}

export function createWhatsAppApp(): express.Express {
  const app = express();
  app.use(express.json());

  app.get('/webhook', (req: Request, res: Response) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN) {
      res.status(200).send(challenge);
      return;
    }
    res.sendStatus(403);
  });

  app.post('/webhook', async (req: Request, res: Response) => {
    // Ack immediately — WhatsApp retries aggressively if a 200 isn't returned quickly.
    res.sendStatus(200);

    try {
      const entry = req.body?.entry?.[0];
      const change = entry?.changes?.[0]?.value;
      const message = change?.messages?.[0];
      if (!message) return; // status callbacks, etc — nothing to do

      const from = message.from as string;

      if (message.type === 'text') {
        // A brand-new session's own state is 'language' (a choice step), so
        // handleFreeText's guard re-renders the language list rather than
        // trying to parse the greeting as an answer.
        await handleFreeText(from, message.text.body as string);
        return;
      }

      if (message.type === 'interactive') {
        const reply = message.interactive?.list_reply ?? message.interactive?.button_reply;
        if (reply?.id) await handleChoiceOrCommand(from, reply.id as string);
        return;
      }

      if (message.type === 'image' || message.type === 'document') {
        const mediaId = message[message.type]?.id as string;
        if (mediaId) await handleMedia(from, mediaId, message.type === 'image' ? 'photo' : 'document');
        return;
      }
    } catch (err) {
      console.error('[whatsapp] Error handling webhook payload', err);
    }
  });

  return app;
}
