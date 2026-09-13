/**
 * Telegram adapter: renders shared/flow.ts's state machine as inline
 * keyboards and plain-text prompts, using grammY. Session storage is an
 * in-memory Map keyed by chat id — fine for a single always-on process;
 * swap for Redis/a KV store before running more than one instance (the
 * in-memory store would silently lose sessions on restart or with >1
 * replica behind a load balancer).
 */
import { Bot, InlineKeyboard, type Context } from 'grammy';
import {
  advance,
  createInitialState,
  editStep,
  finishAttachments,
  formatSummary,
  getOptionsFor,
  getPromptText,
  goBack,
  isAttachmentsStep,
  isChoiceStep,
  isOptional,
  isReadyToSubmit,
  addAttachment,
  buildLead,
  restart,
  skip,
  preselectService,
} from '../shared/flow.js';
import { getBotDictionary } from '../shared/i18n.js';
import { notifyStaff } from '../shared/notify.js';
import type { FlowState, StepId } from '../shared/types.js';

const sessions = new Map<number, FlowState>();

function getSession(chatId: number): FlowState {
  const existing = sessions.get(chatId);
  if (existing) return existing;
  const fresh = createInitialState();
  sessions.set(chatId, fresh);
  return fresh;
}

function setSession(chatId: number, state: FlowState): void {
  sessions.set(chatId, state);
}

const EDITABLE_STEPS: StepId[] = ['service', 'location', 'projectType', 'description', 'budget', 'timeline', 'contactName', 'contactDetail'];

function choiceKeyboard(state: FlowState): InlineKeyboard {
  const kb = new InlineKeyboard();
  for (const opt of getOptionsFor(state)) {
    kb.text(opt.label, `choice:${opt.value}`).row();
  }
  if (isOptional(state.step)) {
    const dict = getBotDictionary(state.language ?? 'en');
    kb.text(dict.skip, 'skip').row();
  }
  if (state.step !== 'language') {
    const dict = getBotDictionary(state.language ?? 'en');
    kb.text(`← ${dict.editAnswer}`, 'back');
  }
  return kb;
}

function textStepKeyboard(state: FlowState): InlineKeyboard | undefined {
  if (!isOptional(state.step)) return undefined;
  const dict = getBotDictionary(state.language ?? 'en');
  return new InlineKeyboard().text(dict.skip, 'skip');
}

function attachmentsKeyboard(state: FlowState): InlineKeyboard {
  const dict = getBotDictionary(state.language ?? 'en');
  return new InlineKeyboard().text(dict.doneWithAttachments, 'attachments:done');
}

function reviewKeyboard(state: FlowState): InlineKeyboard {
  const dict = getBotDictionary(state.language ?? 'en');
  const kb = new InlineKeyboard();
  kb.text(dict.confirmSubmit, 'review:submit').row();
  for (const step of EDITABLE_STEPS) {
    kb.text(`✎ ${labelFor(step, dict)}`, `edit:${step}`).row();
  }
  kb.text(dict.restart, 'review:restart');
  return kb;
}

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

async function renderStep(ctx: Context, state: FlowState): Promise<void> {
  if (state.step === 'review') {
    await ctx.reply(`${getPromptText(state)}\n\n${formatSummary(state)}`, { reply_markup: reviewKeyboard(state) });
    return;
  }
  if (isAttachmentsStep(state.step)) {
    await ctx.reply(getPromptText(state), { reply_markup: attachmentsKeyboard(state) });
    return;
  }
  if (isChoiceStep(state.step)) {
    await ctx.reply(getPromptText(state), { reply_markup: choiceKeyboard(state) });
    return;
  }
  await ctx.reply(getPromptText(state), { reply_markup: textStepKeyboard(state) });
}

export function createTelegramBot(token: string): Bot {
  const bot = new Bot(token);

  bot.command('start', async (ctx) => {
    const chatId = ctx.chat.id;
    const payload = ctx.match?.toString().trim();
    let state = createInitialState();

    // Deep link from a service page: t.me/<bot>?start=service_<slug>
    if (payload?.startsWith('service_')) {
      state = preselectService(state, payload.slice('service_'.length));
    }

    setSession(chatId, state);
    await renderStep(ctx, state);
  });

  bot.on('callback_query:data', async (ctx) => {
    const chatId = ctx.chat?.id;
    if (chatId == null) return;
    await ctx.answerCallbackQuery();

    let state = getSession(chatId);
    const data = ctx.callbackQuery.data;

    if (data === 'back') {
      state = goBack(state);
    } else if (data === 'skip') {
      state = skip(state);
    } else if (data === 'attachments:done') {
      state = finishAttachments(state);
    } else if (data === 'review:restart') {
      state = restart(state);
    } else if (data === 'review:submit') {
      if (isReadyToSubmit(state)) {
        const lead = buildLead(state, 'telegram');
        await notifyStaff(lead);
        state = { ...state, step: 'submitted' };
      }
    } else if (data.startsWith('edit:')) {
      state = editStep(state, data.slice('edit:'.length) as StepId);
    } else if (data.startsWith('choice:')) {
      const result = advance(state, data.slice('choice:'.length), { returnTo: state.step === 'review' ? 'review' : undefined });
      if (!result.accepted) {
        const dict = getBotDictionary(state.language ?? 'en');
        await ctx.reply(dict.invalidChoice);
        return;
      }
      state = result.state;
    }

    setSession(chatId, state);
    await renderStep(ctx, state);
  });

  bot.on('message:text', async (ctx) => {
    const chatId = ctx.chat.id;
    let state = getSession(chatId);

    if (isChoiceStep(state.step) || state.step === 'review' || isAttachmentsStep(state.step) || state.step === 'submitted') {
      // These steps expect a button tap, not free text — gently re-prompt.
      await renderStep(ctx, state);
      return;
    }

    const result = advance(state, ctx.message.text);
    state = result.accepted ? result.state : state;
    setSession(chatId, state);
    await renderStep(ctx, state);
  });

  bot.on(['message:photo', 'message:document'], async (ctx) => {
    const chatId = ctx.chat.id;
    let state = getSession(chatId);

    if (!isAttachmentsStep(state.step)) return;

    const fileId = ctx.message.photo ? ctx.message.photo[ctx.message.photo.length - 1].file_id : ctx.message.document?.file_id;
    const dict = getBotDictionary(state.language ?? 'en');

    if (!fileId) {
      await ctx.reply(dict.attachmentRejected);
      return;
    }

    const { state: nextState, ok } = addAttachment(state, {
      id: fileId,
      kind: ctx.message.photo ? 'photo' : 'document',
      channel: 'telegram',
    });
    state = nextState;
    setSession(chatId, state);
    await ctx.reply(ok ? dict.attachmentSaved : dict.attachmentRejected, { reply_markup: attachmentsKeyboard(state) });
  });

  return bot;
}
