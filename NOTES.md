# Build Notes — assumptions, placeholders, flagged decisions

Per proposal's Truth Rule and Missing Data Protocol: nothing below is
invented as fact on the live pages. Anything not verifiable is either
omitted, phrased qualitatively, or marked `[[VERIFY]]` in source.

## Contact details (not yet provided by client)

- Email placeholder: `hello@creativelab.in.th` (plausible but unconfirmed
  domain mailbox — confirm before launch).
- WhatsApp number and Telegram bot handle: unset. `src/lib/integrations.ts`
  reads `NEXT_PUBLIC_WHATSAPP_NUMBER` / `NEXT_PUBLIC_TELEGRAM_BOT`; until
  set, `BotEntry` falls back to a "Message Us" link to `/contact` instead
  of rendering a fake/broken chat link.
- Physical address, phone number, legal entity details: not provided.
  Footer and schema currently omit `PostalAddress`/`telephone` fields
  rather than invent them. Needed before EEAT phase (proposal §18) can be
  completed properly.

## No real proof content exists yet

- No real client projects, testimonials, awards, or case studies exist in
  this repo. `PortfolioPreview` renders honestly-captioned reference
  imagery ("the kind of work we make") instead of fabricated case studies.
  `/portfolio/` and `/case-studies/` will need the same treatment until
  real work is supplied — do not populate them with invented client names
  or results.
- `TrustStrip` only states qualitative, verifiable facts (location,
  languages, team structure) — no invented stats/numbers.

## Pricing tables

- Per-service pricing tables use the exact example figures given in
  `proposal.md`'s "ТАБЛИЦЫ ЦЕН" section, applied to the relevant service
  page, with the required disclaimer. Ranges for services not covered by
  that example table are original estimates written in the same style and
  order of magnitude — confirm actual rates with the client before launch.

## IA cannibalization inherited from the proposal

Proposal's own `02_SITE_ARCHITECTURE` / `04_IA` tables define both:
- `/food-restaurants/website/` and `/websites-digital/restaurant-website/`
- `/villas-real-estate/marketing/` overlaps conceptually with
  `/websites-digital/villa-website/`
- `/food-restaurants/menu-design/` and `/branding-creative/menu-design/`

These share primary keywords, which conflicts with the proposal's own
§13_SEMANTIC_RULES ("no two pages same primary intent"). Resolution used
here: each pair is written with a distinct angle —
- the `food-restaurants` / `villas-real-estate` version frames the service
  as part of that vertical's marketing bundle (menu, ordering, booking
  content),
- the `websites-digital` / `branding-creative` version frames it as the
  underlying technical/creative discipline itself.
Flagging so this can be revisited with the client rather than silently
merging pages the IA explicitly asked for.

## Simplifications vs. the proposal's literal spec

- Header is sticky + translucent/blurred at all times rather than fully
  transparent-on-hero and solid-on-scroll — avoids fragile per-template
  overlap coordination while keeping the same visual intent. Revisit if
  the client wants the literal transparent-hero behavior.
- Spacing scale uses Tailwind's default 4px-based scale plus a few custom
  tokens (18/30/40/50 → 72/120/160/200px) rather than reproducing every
  exact value in §5_DESIGN's list — functionally equivalent rhythm.
- Contact form posts to `/api/contact`, which validates and logs
  server-side but does **not** yet send email or hit a CRM — needs a real
  provider (Resend/SES/CRM webhook) before launch.
- No CMS/database is wired up (proposal explicitly allows "structured;
  editable; ready for future CMS" — the `src/content/**` data files are
  written to be a straightforward migration target).

## Images

- `assets/ref-images/drone.jpg` was corrupt (an HTML 404 page, not a real
  JPEG) — removed. Video/drone-related placeholder imagery currently
  reuses `video.jpg`/`team.jpg` instead. Replace with real or licensed
  aerial photography before launch.
- All current imagery is placeholder/reference (per proposal's own
  "temporary images" allowance) — swap for licensed or client photography
  before launch, per proposal's image sourcing priority order.

## Technical debt

- `robots.txt` / `llms.txt` are currently static files under `public/`
  rather than generated from `src/content/**` (a teammate's GitHub Pages
  experiment swapped the generated route handlers for one-time static
  files). Correct today, will drift as hubs/services are added. See
  `docs/OpenQuestions.md` #3.
- Hosting/deployment target: see `docs/OpenQuestions.md` #1–#2 —
  `.github/workflows/deploy.yml` (GitHub Pages static export) is
  incompatible with this site's locale routing and contact form, and
  still needs reconciling before launch.
