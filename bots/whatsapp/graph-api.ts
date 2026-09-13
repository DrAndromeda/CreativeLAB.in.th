/**
 * Thin wrapper around the WhatsApp Cloud API — just the calls this bot
 * needs (send text/buttons/list, resolve a media id to bytes). No SDK
 * dependency; the Cloud API is a plain REST/JSON API over fetch.
 */
import type { Option } from '../shared/types.js';

const GRAPH_VERSION = 'v21.0';

function apiBase(): string {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!phoneNumberId) throw new Error('WHATSAPP_PHONE_NUMBER_ID is not set');
  return `https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}`;
}

function authHeaders(): Record<string, string> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  if (!token) throw new Error('WHATSAPP_ACCESS_TOKEN is not set');
  return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
}

async function postToGraph(body: unknown): Promise<void> {
  const res = await fetch(`${apiBase()}/messages`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ messaging_product: 'whatsapp', ...(body as object) }),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error('[whatsapp] Cloud API rejected message', res.status, text);
  }
}

export async function sendText(to: string, text: string): Promise<void> {
  await postToGraph({ to, type: 'text', text: { body: text } });
}

/**
 * WhatsApp interactive list rows are capped at 10 per section — every
 * option list this bot renders (services=8, locations=7, project types=6,
 * languages=4) fits in one section, so no pagination is needed here.
 */
export async function sendOptionList(to: string, body: string, buttonLabel: string, options: Option[]): Promise<void> {
  if (options.length > 10) {
    console.error(`[whatsapp] sendOptionList got ${options.length} options, WhatsApp caps a section at 10 — truncating.`);
  }
  await postToGraph({
    to,
    type: 'interactive',
    interactive: {
      type: 'list',
      body: { text: body },
      action: {
        button: buttonLabel,
        sections: [
          {
            rows: options.slice(0, 10).map((opt) => ({ id: opt.value, title: opt.label.slice(0, 24) })),
          },
        ],
      },
    },
  });
}

/** For a text step that can be skipped — a single "Skip" reply button. */
export async function sendTextPromptWithSkip(to: string, body: string, skipLabel: string): Promise<void> {
  await postToGraph({
    to,
    type: 'interactive',
    interactive: {
      type: 'button',
      body: { text: body },
      action: { buttons: [{ type: 'reply', reply: { id: 'skip', title: skipLabel.slice(0, 20) } }] },
    },
  });
}

export interface ReplyButton {
  id: string;
  label: string;
}

export async function sendButtons(to: string, body: string, buttons: ReplyButton[]): Promise<void> {
  await postToGraph({
    to,
    type: 'interactive',
    interactive: {
      type: 'button',
      body: { text: body },
      action: {
        buttons: buttons.slice(0, 3).map((b) => ({ type: 'reply', reply: { id: b.id, title: b.label.slice(0, 20) } })),
      },
    },
  });
}

export interface MediaInfo {
  url: string;
  mimeType: string;
  sizeBytes?: number;
}

export async function getMediaInfo(mediaId: string): Promise<MediaInfo> {
  const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${mediaId}`, {
    headers: { Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Failed to resolve media ${mediaId}: ${res.status}`);
  const data = (await res.json()) as { url: string; mime_type: string; file_size?: number };
  return { url: data.url, mimeType: data.mime_type, sizeBytes: data.file_size };
}
