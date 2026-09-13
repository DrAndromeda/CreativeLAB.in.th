/**
 * Forwards a finished Lead to the shared staff Telegram chat — used by
 * BOTH bots (the WhatsApp bot notifies staff via Telegram too, so there's
 * one inbox to watch, not two). Uses the Telegram Bot API's sendMessage
 * directly via fetch rather than pulling in a client library here, since
 * this is the only Bot API call this module needs.
 */
import type { Lead } from './types.js';
import { serviceLabel, locationLabel, projectTypeLabel } from './data.js';

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function formatLeadMessage(lead: Lead): string {
  const lines = [
    `<b>New lead — ${lead.channel}</b>`,
    `Stage: ${lead.stage}`,
    '',
    `Service: ${escapeHtml(serviceLabel(lead.language, lead.service))}`,
    `Location: ${escapeHtml(locationLabel(lead.language, lead.location))}`,
    `Project type: ${escapeHtml(projectTypeLabel(lead.language, lead.projectType))}`,
    `Description: ${escapeHtml(lead.description)}`,
    `Budget: ${lead.budget ? escapeHtml(lead.budget) : '—'}`,
    `Timeline: ${lead.timeline ? escapeHtml(lead.timeline) : '—'}`,
    `Attachments: ${lead.attachments.length}`,
    '',
    `Name: ${escapeHtml(lead.name)}`,
    `Contact: ${escapeHtml(lead.contact)}`,
    `Language: ${lead.language}`,
    lead.source ? `Source: ${escapeHtml(lead.source)}` : null,
    `Time: ${lead.timestamp}`,
  ].filter((l): l is string => l !== null);
  return lines.join('\n');
}

export interface NotifyResult {
  ok: boolean;
  error?: string;
}

/**
 * Sends the lead to the staff chat. Requires TELEGRAM_BOT_TOKEN and
 * TELEGRAM_STAFF_CHAT_ID — logs (never throws) if either is missing, so a
 * misconfigured deployment fails loudly in logs rather than silently
 * dropping leads with no trace at all.
 */
export async function notifyStaff(lead: Lead): Promise<NotifyResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_STAFF_CHAT_ID;

  if (!token || !chatId) {
    console.error('[notify] TELEGRAM_BOT_TOKEN or TELEGRAM_STAFF_CHAT_ID not set — lead was NOT forwarded to staff.', lead);
    return { ok: false, error: 'missing_config' };
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatLeadMessage(lead),
        parse_mode: 'HTML',
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error('[notify] Telegram API rejected the staff message', res.status, body);
      return { ok: false, error: `telegram_${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error('[notify] Failed to reach the Telegram API', err);
    return { ok: false, error: 'network_error' };
  }
}
