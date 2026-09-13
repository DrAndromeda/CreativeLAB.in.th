# Bot Integration (Telegram + WhatsApp)

**Priority:** P0
**Phase:** 5
**Status:** Partial — built and type-checked, not deployed

A structured project-intake bot (language → service → location → project
type → description → budget → timeline → files → contact → review →
submit → CRM handoff) over official Telegram Bot API and WhatsApp
Business/Cloud API, per `proposal.md` §15.

`src/components/blocks/BotEntry.tsx` and `src/lib/integrations.ts` fall
back to a plain "Message Us" link to `/contact` until real bot
credentials exist — nothing fake or broken ships from the site itself.

The intake flow now lives in `bots/` as its own package:

- `bots/shared/` — channel-agnostic state machine (`flow.ts`), the
  service/location/project-type option data (`data.ts`, matching the 8
  hub slugs and proposal §3 commercial models), EN/RU/TH/HE bot copy
  (`i18n.ts`), core types (`types.ts`), and the staff-notification helper
  (`notify.ts`, posts to a shared Telegram chat from either channel).
- `bots/telegram/` — grammY adapter (inline keyboards, deep-link
  `?start=service_<slug>` preselection, photo/document uploads).
- `bots/whatsapp/` — Cloud API adapter (Express webhook, interactive
  list/button messages, media id resolution).

`npm run typecheck` in `bots/` passes. Session state is in-memory per
adapter (a `Map` keyed by chat id) — fine for one always-on process, not
yet backed by a shared store.

## Blocked on

- Real Telegram bot token + WhatsApp Business/Cloud API account
  (client-side credentials, not something to fabricate) — see
  `bots/.env.example` for exactly what's needed.
- Where this runs in production (a long-running process/small service;
  the WhatsApp adapter needs a public HTTPS endpoint for its webhook).
- A decision on persistent session storage if it needs to survive
  restarts or run as more than one instance.

## Remaining scope

- [ ] Provision real Telegram bot token + WhatsApp Cloud API app
- [ ] Deploy both processes somewhere with a stable public URL for the
      WhatsApp webhook
- [ ] Wire `BotEntry` to the live bot links once credentials exist
- [ ] CRM handoff beyond "notify staff chat" (proposal §01 MASTER_TZ
      pipeline: NEW LEAD → … → MONTHLY CLIENT) — currently a lead's
      terminal state is a formatted Telegram message, not a CRM record
- [ ] Swap in-memory session Maps for a shared store if/when this needs
      to run as more than one instance
