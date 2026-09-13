# CreativeLAB.in.th — Build Progress

Tracking document for implementing `proposal.md`. Updated as work proceeds.
See `NOTES.md` for flagged assumptions, placeholders, and things that need
real client input before launch.

## Stack

- Next.js 16 (App Router, Turbopack, TypeScript, `src/` dir)
- Tailwind CSS v4 (CSS-based theme in `src/app/globals.css`)
- Content is data-driven: `src/content/**` feeds shared page templates in
  `src/app/[hub]/page.tsx` and `src/app/[hub]/[service]/page.tsx`, so adding
  a service is a data change, not a new React file (CMS-ready per proposal
  §14_TECHNICAL_SITE_BUILD).

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
      pending — see NOTES.md)

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

48 sub-service pages total, all sharing `src/app/[hub]/[service]/page.tsx`.

## Phase 3 — Portfolio / Case Studies / About / Contact / Journal — DONE

- [x] `/portfolio/` — honest reference-imagery state (no fabricated
      projects; see Truth Rule in NOTES.md)
- [x] `/case-studies/` — honest "first case studies in progress" state
- [x] `/about/` — story, approach, principles (no invented team bios)
- [x] `/contact/` — working form + email + BotEntry fallback
- [x] `/journal/` — honest "first articles on the way" state
- [x] `/privacy/`, `/terms/` — drafted, explicitly marked pending legal
      review, so footer links aren't dead ends

## Phase 4 — SEO/schema/hreflang/sitemap/llms.txt (EN pass) — MOSTLY DONE

- [x] `sitemap.ts`, `robots.ts` (allows GPTBot/ClaudeBot/PerplexityBot/
      Google-Extended/CCBot per the GEO requirement)
- [x] JSON-LD per page: Organization (global), WebPage + BreadcrumbList on
      every page, Service + FAQPage on hub/service pages
- [x] `/llms.txt` (generated from the same content data, not a stale
      static file)
- [ ] hreflang — not applicable yet; real tags land with Phase 7 i18n

## Phase 5 — Bot integration (Telegram + WhatsApp) — SCAFFOLDED, NOT LIVE

- [x] `BotEntry` component + `src/lib/integrations.ts`: reads
      `NEXT_PUBLIC_WHATSAPP_NUMBER` / `NEXT_PUBLIC_TELEGRAM_BOT`; falls
      back to a "Message Us" → `/contact` link when unset, so nothing
      fake or broken ships
- [ ] No actual Telegram Bot API / WhatsApp Business API backend exists —
      building the real intake flow (language → service → location →
      budget → files → contact → CRM handoff) needs real API
      credentials/accounts, which this session doesn't have. This is the
      next real blocker for this phase.

## Phase 6 — Performance pass — INITIAL CHECK DONE

- [x] Production build inspected: 71 pages, mostly static/SSG, minimal
      client JS (Header/mobile-nav, ContactForm, AnnouncementBar, and the
      `<details>`-based FAQ accordion are the only client components)
- [ ] No Lighthouse/CrUX run yet (needs a deployed or otherwise reachable
      URL, or local Lighthouse CLI, to measure LCP/INP/CLS meaningfully)
- [ ] Real photography/video will affect LCP more than anything else at
      this stage — current images are placeholder JPEGs

## Phase 7 — 4 languages (EN/RU/TH/HE) — NOT STARTED

Deliberately not auto-translated: the proposal explicitly requires native,
professionally-adapted copy per language ("never do literal machine
translation"). Machine-translating all 56 pages in this session would
violate that rule in spirit even if done by an LLM rather than Google
Translate. This needs either a native RU/TH/HE copywriter/reviewer in the
loop, or an explicit decision from the client to accept LLM-translated
copy as a starting draft pending human review.

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

Blocked on real content inputs — see NOTES.md for the full list (contact
details, real photography, bot credentials, legal review, translations).

## How to continue

- Real data needed before launch: see `NOTES.md`.
- To add a new sub-service: add an entry to the relevant
  `src/content/hubs/*.ts` file's `services` array — no new route file
  needed.
- To add a new hub: create `src/content/hubs/<slug>.ts` following the
  existing files' shape, then register it in `src/content/hubs/index.ts`.
