# CreativeLAB.in.th

Premium creative content & advertising agency website for Koh Phangan,
Thailand. Built with Next.js (App Router) + TypeScript + Tailwind CSS.

See `proposal.md` for the full brief, `PROGRESS.md` for what's built so
far, and `NOTES.md` for placeholder data / decisions flagged for client
follow-up before launch.

## Project docs & team workflow

Start at [`docs/Index.md`](./docs/Index.md). In short: proposals live in
[`docs/Proposals.md`](./docs/Proposals.md), work is broken into Epics and
Tasks as GitHub Issues tracked on the team's GitHub Project board, and
`docs/epics/` / `docs/tasks/` hold specs too long for an issue body.

- **Day-to-day sequence** (add a task, start it, ship it): [`docs/HowTo.md`](./docs/HowTo.md)
- **Why each rule exists** (branch naming, board design, automation): [`docs/WORKFLOW.md`](./docs/WORKFLOW.md)
- **Commands**: `make help` lists every shortcut (`make task-start TASK=42`,
  `make board-epics`, `make check`, etc.) — first-time repo setup is
  `make board-setup` (after `gh auth login`).

## Requirements

- Node.js 20.9+ (Next.js 16 minimum)
- npm 10+ (or another package manager — the project has no
  package-manager-specific config)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses
Turbopack and hot-reloads on file changes.

### Environment variables (optional for local dev)

Copy `.env.example` to `.env.local` and fill in values as they become
available. Nothing is required to run the site locally — features that
depend on these fall back gracefully (see `NOTES.md`):

| Variable | Purpose | Fallback when unset |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp intake link (`BotEntry`) | Shows a "Message Us" link to `/contact` instead |
| `NEXT_PUBLIC_TELEGRAM_BOT` | Telegram intake link (`BotEntry`) | Same as above |

## Build & run in production

```bash
npm run build
npm run start
```

`npm run build` produces an optimized, mostly statically-generated build
(hub and service pages are pre-rendered via `generateStaticParams`).
`npm run start` serves that build on port 3000 (override with `-p`, e.g.
`npm run start -- -p 4000`), or front it with your platform's Node.js
process manager / reverse proxy.

### Type-checking & linting

```bash
npx tsc --noEmit   # type check
npm run lint       # ESLint
```

### Deploying

The app is a standard Next.js App Router project — deploy it to any
**Node-capable** Next.js host (Vercel, a Node server behind Nginx, a
container platform, etc.). No database is required; content lives in
`src/content/**` as versioned TypeScript data files.

**Do not use `output: "export"` (static export) / GitHub Pages.** The
locale routing (`src/proxy.ts`) and the contact form
(`src/app/api/contact/route.ts`) both need middleware and API routes,
which static export disables entirely — this was tried on 2026-09-14 and
reverted after it broke `next dev` and would have shipped a build with no
working `/`, `/contact`, etc. See `docs/OpenQuestions.md` for the
still-open `.github/workflows/deploy.yml` cleanup. If you deploy behind a
platform that needs a `Dockerfile` or specific build adapter, that isn't
set up yet — ask before assuming a target platform.

Before a real launch, see the outstanding items in `NOTES.md` (contact
details, bot credentials, email/CRM delivery for the contact form) and
the phase checklist in `PROGRESS.md`.

## Project structure

```
src/
  proxy.ts             Locale routing: EN unprefixed, RU/TH/HE under /ru //th//he/
  app/
    [locale]/           Every page route lives here. [hub]/ and [hub]/[service]/
                         are shared dynamic templates driven by content data.
    api/contact/        Contact form submission endpoint
    sitemap.ts           Per-locale sitemap with reciprocal hreflang alternates
  components/
    ui/                Small presentational primitives (Button, Container,
                       LocalizedLink…)
    layout/             Header, Footer
    blocks/             Reusable page sections (Hero, FAQ, Pricing…)
  content/
    hubs/               One file per service hub — hub + all its sub-service copy
    homepage.ts, navigation.ts, site.ts, types.ts, i18n.ts
  lib/                  Metadata builder, JSON-LD schema builders, integrations
  assets/images/        Local reference/placeholder imagery
```
