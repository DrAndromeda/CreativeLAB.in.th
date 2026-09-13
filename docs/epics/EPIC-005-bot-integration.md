# EPIC-005: Bot Integration (Telegram + WhatsApp)

- **Status:** Not started (scaffolded fallback only)
- **Priority:** P0
- **Phase:** Phase 5 (`PROGRESS.md`)
- **Proposal:** [proposal.md](../../proposal.md) — §15 BOT
- **GitHub Issue:** _link once created_

## Summary

A structured project-intake bot (language → service → location → project
type → description → budget → timeline → files → contact → review →
submit → CRM handoff) over official Telegram Bot API and WhatsApp
Business/Cloud API, per `proposal.md` §15.

`src/components/blocks/BotEntry.tsx` and `src/lib/integrations.ts` already
exist and read `NEXT_PUBLIC_WHATSAPP_NUMBER` / `NEXT_PUBLIC_TELEGRAM_BOT`;
until a real backend and credentials exist, they fall back to a plain
"Message Us" link to `/contact` — nothing fake or broken ships.

## Blocked on

- Real Telegram bot token + WhatsApp Business/Cloud API account
  (client-side credentials, not something to fabricate).
- A decision on where the intake flow's backend/state machine runs
  (a serverless function, a small dedicated service, etc.).

## Suggested tasks (once unblocked)

- [ ] Decide bot backend architecture (webhook handler, hosting)
- [ ] Telegram bot: conversation flow + webhook route
- [ ] WhatsApp bot: conversation flow + webhook route
- [ ] CRM handoff (proposal §01 MASTER_TZ pipeline: NEW LEAD → … →
      MONTHLY CLIENT)
- [ ] Wire `BotEntry` to the live bot links once credentials exist
- [ ] Localize the bot flow for EN/RU/TH/HE (depends on EPIC-007)
