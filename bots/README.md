# CreativeLAB bots

Telegram + WhatsApp project-intake bots. Both channels share one
conversation state machine (`shared/flow.ts`) and forward finished leads
to a single staff Telegram chat (`shared/notify.ts`) — a structured lead
funnel, not a generic AI chat. See `proposal.md` §15 BOT for the spec.

## Setup

```bash
cd bots
npm install
cp .env.example .env   # fill in tokens/ids, see below
```

## Running

```bash
npm run telegram   # long-polling Telegram bot
npm run whatsapp    # Express webhook server for the WhatsApp Cloud API
npm run typecheck   # tsc --noEmit
```

### Telegram

1. Create a bot with [@BotFather](https://t.me/BotFather), copy its token into `TELEGRAM_BOT_TOKEN`.
2. Add the bot to (or message it from) your staff chat, then get that chat's id (e.g. via `getUpdates` or a helper bot) and put it in `TELEGRAM_STAFF_CHAT_ID`.
3. `npm run telegram`. Deep links from service pages use `https://t.me/<bot_username>?start=service_<slug>` to preselect a service.

### WhatsApp

1. Create a Meta app with the WhatsApp product, grab a (temporary or permanent) access token and the test/production phone number id — `WHATSAPP_ACCESS_TOKEN` / `WHATSAPP_PHONE_NUMBER_ID`.
2. Pick any string for `WHATSAPP_VERIFY_TOKEN` and enter it as the "Verify token" when configuring the webhook in the Meta dashboard; the callback URL is `https://<your-host>/webhook`.
3. `npm run whatsapp` (needs a public HTTPS URL in front of it — e.g. via a tunnel in development).

## How it works

- `shared/types.ts` — `FlowState`/`Lead`/`Attachment` shapes.
- `shared/data.ts` — service/location/project-type option lists (kept in sync with `src/content/hubs/*.ts` and the proposal's commercial models), 4-language labels.
- `shared/i18n.ts` — bot copy in EN/RU/TH/HE.
- `shared/flow.ts` — the channel-agnostic state machine: `advance`/`skip`/`goBack`/`editStep`/`restart`/`addAttachment`/`buildLead`.
- `shared/notify.ts` — posts a formatted lead to the staff Telegram chat via the Bot API.
- `telegram/` — grammY adapter: inline keyboards, callback queries, photo/document uploads.
- `whatsapp/` — Cloud API adapter: interactive list/button messages, Express webhook (Express is required by the platform, not a framework choice made for its own sake).

Each adapter owns its own in-memory session store (`Map` keyed by chat id / WhatsApp id). That's sufficient for a single always-on process; swap in Redis or another shared store before running more than one instance, since in-memory state is lost on restart and isn't shared across replicas.

## Status

Built and type-checked, not yet deployed. No production bot token/WhatsApp app has been provisioned yet — that's an operational step for whoever owns those accounts, not a code change.
