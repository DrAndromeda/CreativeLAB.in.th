/**
 * Bot intake channels are not wired to a live Telegram/WhatsApp backend yet
 * (see Phase 5 in PROGRESS.md and NOTES.md). Set these env vars once the
 * bots exist; until then BotEntry falls back to the contact form so no
 * broken or fabricated link ships to production.
 */
export const INTEGRATIONS = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  telegramBotHandle: process.env.NEXT_PUBLIC_TELEGRAM_BOT ?? "",
} as const;

export function whatsappLink(context?: string) {
  if (!INTEGRATIONS.whatsappNumber) return null;
  const text = context ? `?text=${encodeURIComponent(context)}` : "";
  return `https://wa.me/${INTEGRATIONS.whatsappNumber}${text}`;
}

export function telegramLink() {
  if (!INTEGRATIONS.telegramBotHandle) return null;
  return `https://t.me/${INTEGRATIONS.telegramBotHandle}`;
}
