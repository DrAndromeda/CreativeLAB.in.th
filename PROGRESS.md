# CreativeLAB.in.th — Build Progress

Tracking document for implementing `proposal.md`. Updated as work proceeds.
See "Open Questions & Blockers" below for everything that needs a person —
a client answer, a teammate decision, or external credentials — rather
than more code.

## Stack

- Next.js 16 (App Router, Turbopack, TypeScript, `src/` dir)
- Tailwind CSS v4 (CSS-based theme in `src/app/globals.css`)
- Content is data-driven: `src/content/**` feeds shared page templates in
  `src/app/[locale]/[hub]/page.tsx` and
  `src/app/[locale]/[hub]/[service]/page.tsx`, so adding a service is a
  data change, not a new React file (CMS-ready per proposal
  §14_TECHNICAL_SITE_BUILD).
- Locale routing (`src/proxy.ts`) and the contact form
  (`src/app/api/contact/route.ts`) require a Node-capable host — see
  "Deployment target" below.

## Phase 1 — Brand shell + design system + reusable components — DONE

- [x] Next.js scaffold (App Router, TS, Tailwind v4, ESLint)
- [x] Design tokens in `globals.css` (colors, fonts, spacing extensions)
- [x] Fonts: Fraunces (display) + Inter (body) via `next/font/google`
- [x] Reusable blocks: AnnouncementBar, Hero, DirectAnswer, TrustStrip,
      SplitEditorial, ServiceGrid, FeatureList, Benefits, ProcessSteps,
      PortfolioPreview, PricingGuidance, UseCases, FaqAccordion,
      RelatedServices, LocationBlock, CtaBanner, Breadcrumbs, ContactForm,
      BotEntry
- [x] Header (mega-menu desktop, accordion drawer mobile, focus/Escape)
- [x] Footer (4-column)
- [x] `/api/contact` route (validated, honeypot; delivery integration
      pending — see "Open Questions & Blockers" below)

## Phase 2 — Homepage + 8 service hubs — DONE

- [x] Homepage
- [x] Advertising hub + 4 sub-services
- [x] Social Media hub + 5 sub-services
- [x] Villas & Real Estate hub + 9 sub-services
- [x] Food & Restaurants hub + 7 sub-services
- [x] Business & Local Presence hub + 6 sub-services
- [x] Websites & Digital hub + 9 sub-services
- [x] Video & Production hub + 4 sub-services
- [x] Branding & Creative hub + 4 sub-services

48 sub-service pages total, all sharing
`src/app/[locale]/[hub]/[service]/page.tsx`.

## Phase 3 — Portfolio / Case Studies / About / Contact / Journal — DONE

- [x] `/portfolio/` — honest reference-imagery state (no fabricated
      projects; see the Truth Rule in "Open Questions & Blockers" below)
- [x] `/case-studies/` — honest "first case studies in progress" state
- [x] `/about/` — story, approach, principles (no invented team bios)
- [x] `/contact/` — working form + email + BotEntry fallback
- [x] `/journal/` — honest "first articles on the way" state
- [x] `/privacy/`, `/terms/` — drafted, explicitly marked pending legal
      review, so footer links aren't dead ends

## Phase 4 — SEO/schema/hreflang/sitemap/llms.txt — DONE

- [x] `sitemap.ts` (per-locale entries, reciprocal hreflang alternates)
- [x] JSON-LD per page: Organization (global), WebPage + BreadcrumbList on
      every page, Service + FAQPage on hub/service pages
- [x] hreflang — `alternates.languages` on every page + reciprocal
      `<xhtml:link>` entries in `sitemap.ts` for all 4 locales + x-default,
      now that Phase 7's routing infrastructure is in
- ⚠️ `robots.txt` / `llms.txt` are currently **static files**
      (`public/robots.txt`, `public/llms.txt`, allowing
      GPTBot/ClaudeBot/PerplexityBot/Google-Extended/CCBot per the GEO
      requirement) rather than generated from `src/content/**` — a
      teammate's GitHub Pages experiment replaced the generated
      `src/app/robots.ts` / `src/app/llms.txt/route.ts` route handlers.
      Correct today, will drift as hubs/services are added. See
      "Open Questions & Blockers" → "Technical debt" below.

## Phase 5 — Bot integration (Telegram + WhatsApp) — BUILT, NOT DEPLOYED

- [x] `BotEntry` component + `src/lib/integrations.ts`: reads
      `NEXT_PUBLIC_WHATSAPP_NUMBER` / `NEXT_PUBLIC_TELEGRAM_BOT`; falls
      back to a "Message Us" → `/contact` link when unset, so nothing
      fake or broken ships
- [x] `bots/` package: full intake flow (language → service → location →
      project type → description → budget → timeline → files → contact →
      review → submit), channel-agnostic state machine shared by both
      adapters, EN/RU/TH/HE copy, staff notification via a shared
      Telegram chat. Telegram (grammY) and WhatsApp (Cloud API + Express
      webhook) adapters both implemented; `npm run typecheck` passes.
      See `bots/README.md`.
- [ ] Not deployed — needs a real Telegram bot token + WhatsApp Cloud API
      account (`bots/.env.example`) and a host with a stable public URL
      for the WhatsApp webhook. CRM handoff is currently "notify staff
      chat", not a CRM record — see `docs/tasks/TASK-005-bot-integration.md`.

## Phase 6 — Performance pass — INITIAL CHECK DONE

- [x] Production build inspected: 263 pages (71 canonical routes × 4
      locales), mostly static/SSG, minimal client JS (Header/mobile-nav,
      ContactForm, AnnouncementBar, and the `<details>`-based FAQ
      accordion are the only client components)
- [ ] No Lighthouse/CrUX run yet (needs a deployed or otherwise reachable
      URL, or local Lighthouse CLI, to measure LCP/INP/CLS meaningfully)
- [ ] Real photography/video will affect LCP more than anything else at
      this stage — current images are placeholder JPEGs

## Phase 7 — 4 languages (EN/RU/TH/HE) — ROUTING INFRASTRUCTURE DONE, CONTENT NOT STARTED

- [x] Routing: EN canonical/unprefixed, RU/TH/HE prefixed (`/ru/`, `/th/`,
      `/he/`) per `proposal.md` §09. Every route moved under
      `src/app/[locale]/`; `src/proxy.ts` handles the unprefixed-EN
      rewrite + `/en/*` redirect-away; all 263 pages (4 locales × every
      route) prerender at build time.
- [x] Internal links auto-localize via `src/components/ui/LocalizedLink.tsx`
      (detects locale from the real request URL) — no content file needed
      to change.
- [x] RTL: `dir`/`lang` set server-side per locale; hardcoded physical
      Tailwind utilities swapped for logical ones across shared
      components; directional arrow mirrors via `rtl:`; emails wrapped in
      `<bdi>`. Structurally verified (`curl` + `dir="rtl"` on a live page);
      not yet eyeballed against real Hebrew copy.
- [x] Thai font stack (`Noto_Sans_Thai` via `next/font/google`, applied
      for `locale==="th"`); ICU line-breaking unverified (no Thai copy to
      test against yet).
- [ ] Translated content — deliberately not auto-translated: the proposal
      explicitly requires native, professionally-adapted copy per
      language ("never do literal machine translation"). Every locale
      currently serves the same English copy through the new routing.
      This needs either a native RU/TH/HE copywriter/reviewer in the
      loop, or an explicit decision from the client to accept
      LLM-translated copy as a starting draft pending human review.

### Deployment target (resolved for local dev, still open for CI)

On 2026-09-14 a teammate configured the repo for GitHub Pages static
export (`output: "export"`, `.github/workflows/deploy.yml`) the same day
this locale routing landed. Static export disables Next.js
middleware/API routes entirely — it broke `next dev` outright and would
have shipped a build with no working unprefixed-EN routes and a
non-functional contact form (verified by inspecting the exported `out/`
directly). Confirmed with the team: production is Vercel/Node, not
GitHub Pages — `next.config.ts` is back to plain, unblocking local dev.
`deploy.yml` itself and the stale-but-currently-working live Pages site
are still unresolved — see "Open Questions & Blockers" → "Needs a
team/teammate decision" below.

## Phase 8 — QA — PARTIAL

- [x] `npm run build`, `npx tsc --noEmit`, `npm run lint` all clean
- [x] All internal links crawled and verified (0 broken links across every
      hub/service cross-link, nav, and footer link)
- [x] Contact form manually tested end-to-end in-browser (found and fixed
      a real bug: `e.currentTarget` goes null after an `await` in an async
      React event handler, which was breaking the post-submit success
      state — fixed by not touching `currentTarget` after the fetch)
- [x] Homepage and several hub/service pages visually checked in Chrome
      (desktop viewport)
- [ ] No formal a11y (axe-core), Lighthouse, or cross-browser pass yet
- [ ] No multi-breakpoint visual regression pass yet (mobile viewport
      screenshots didn't render correctly through the automation tool used
      this session — the responsive Tailwind classes are in place but
      untested visually below desktop width)

## Phase 9 — Launch checklist — NOT STARTED

Blocked on real content inputs — see "Open Questions & Blockers" above
for the full list (contact details, real photography, bot credentials,
legal review, translations, hosting/deployment decision).

## Open Questions & Blockers

Everything here needs a person — a client answer, a teammate decision, or
external credentials — not more code. Remove an entry once it's resolved
(fold the answer into the relevant task/phase above instead of leaving a
stale note here).

Per `proposal.md`'s Truth Rule and Missing Data Protocol: nothing on the
live pages is invented as fact. Anything not verifiable is either
omitted, phrased qualitatively, or marked `[[VERIFY]]` in source.

### Needs real client input

- **Contact details**: email (`karma8chakra@gmail.com`), phone, and
  WhatsApp (`+66 80 870 5704`, same number for both) were provided by the
  team on 2026-09-15, replacing an earlier `[[VERIFY]]`/all-zeros
  placeholder — treat these three as real. **`telegram` (`@creativelab1_bot`)
  is still unverified**: it was set in that same commit as the fake
  `+66-00-000-0000` placeholder and never revisited the way phone/WhatsApp
  were, so there's no evidence it's a real, live bot — confirm before
  relying on it. Physical address and legal entity details remain unset.
  `BotEntry` still correctly falls back to a "Message Us" link (its env
  vars, `NEXT_PUBLIC_WHATSAPP_NUMBER`/`NEXT_PUBLIC_TELEGRAM_BOT`, are
  unset) rather than wiring to `SITE.whatsapp`/`SITE.telegram` directly —
  intentionally not changed here given the Telegram handle's unverified
  status; Footer/schema still omit `PostalAddress`/`telephone` rather than
  invent them.
- **No real proof content yet**: no real client projects, testimonials,
  awards, or case studies exist. `/portfolio/` and `/case-studies/`
  intentionally show an honest "in progress" state instead of fabricated
  results — needs real work supplied before populating.
- **Pricing**: current tables use `proposal.md`'s own example figures
  where given; everything else is an original estimate in the same
  style/order of magnitude. Needs confirming with the client before
  launch.
- **Real photography/video**: all current imagery is placeholder/
  reference. This is also the single biggest lever left on Core Web
  Vitals — every sampled page's LCP is over the 2.5s target, tracing
  directly to the placeholder hero JPEGs (see `docs/tasks/TASK-006-performance-pass.md`).
- **Legal review**: Privacy Policy / Terms are drafted but marked
  `[[VERIFY]]` pending qualified legal counsel (Thai law).
- **Launch checklist** (`docs/tasks/TASK-009-launch-checklist.md`) is
  blocked end-to-end on the items above, plus analytics/tracking IDs and
  the hosting decision below.

### Needs a team/teammate decision

- **Hosting & deployment target**: on 2026-09-14 a teammate configured
  the repo for GitHub Pages static export (`output: "export"`,
  `.github/workflows/deploy.yml`) the same day this session built the
  locale routing. Static export disables Next.js middleware and API
  routes entirely — it broke `next dev` outright and would have shipped
  a build with no working `/`, `/contact`, etc. and a non-functional
  contact form (verified by inspecting the exported `out/` directly).
  Confirmed with the team: production is Vercel/Node, not GitHub Pages —
  `next.config.ts` is back to plain. **Still open**: `deploy.yml` still
  triggers on every push to `main` and will now fail at its "Upload Pages
  artifact" step rather than silently publish a broken site — the
  workflow itself hasn't been removed or reconciled, and the **currently
  live** Pages site (`https://drandromeda.github.io/CreativeLAB.in.th/`)
  still works only because it's stale (built before locale routing
  existed).
- **`creativelab.in.th` domain**: `SITE.url` (used for every canonical/
  hreflang/JSON-LD/sitemap URL) is `https://creativelab.in.th`, but the
  GitHub Pages deployment has no `public/CNAME` and actually serves from
  `https://drandromeda.github.io/CreativeLAB.in.th/`. Needs reconciling
  if Pages is ever used for anything — moot if the hosting question above
  resolves to "GitHub Pages isn't used at all."
- **RU/TH/HE translated content**: routing/RTL/font infrastructure is
  done (`docs/tasks/TASK-007-multilingual-i18n.md`); no translated copy
  exists. Proposal explicitly rules out machine translation as final
  copy. Needs either a native RU/TH/HE copywriter/reviewer in the loop,
  or an explicit decision to accept LLM-drafted copy as a
  reviewed-before-ship starting point.
- **Telegram/WhatsApp bot credentials**: `bots/` is built and
  type-checked but not deployed — needs a real Telegram bot token,
  WhatsApp Business/Cloud API account, and a host with a stable public
  URL for the WhatsApp webhook (`bots/.env.example`).
- **IA cannibalization inherited from the proposal**: the proposal's own
  architecture tables define near-duplicate pages (e.g.
  `/food-restaurants/website/` vs. `/websites-digital/restaurant-website/`),
  which conflicts with its own "no two pages same primary intent" rule.
  Resolved here by giving each pair a distinct angle (vertical-bundle
  framing vs. underlying-discipline framing) — flagging so it can be
  revisited with the client rather than silently merged.

### Technical debt (known, not urgent)

- `robots.txt` / `llms.txt` are currently static files under `public/`
  (from the GitHub Pages experiment above) rather than generated from
  `src/content/**` — correct today, will drift as hubs/services are
  added. Restoring the two route handlers is small and unblocked.
- Contact form posts to `/api/contact`, which validates and logs
  server-side but doesn't yet send email or hit a CRM — needs a real
  provider (Resend/SES/CRM webhook).
- Header is sticky + translucent at all times rather than
  transparent-on-hero/solid-on-scroll — avoids fragile per-template
  coordination, same visual intent. Revisit only if the client wants the
  literal proposal behavior.

## How to continue

- Real data needed before launch: see "Open Questions & Blockers" above.
- To add a new sub-service: add an entry to the relevant
  `src/content/hubs/*.ts` file's `services` array — no new route file
  needed.
- To add a new hub: create `src/content/hubs/<slug>.ts` following the
  existing files' shape, then register it in `src/content/hubs/index.ts`.
