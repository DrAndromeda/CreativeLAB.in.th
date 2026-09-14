# Build Notes — blockers, assumptions, open questions

Everything here needs a person — a client answer, a teammate decision, or
external credentials — not more code (per `proposal.md`'s Truth Rule:
"flag in NOTES.md" / "logged in NOTES.md"). Remove an entry once it's
resolved (fold the answer into the relevant task/doc instead of leaving a
stale note here) — keep this as the one file for this, don't split it
back into two.

Per proposal's Truth Rule and Missing Data Protocol: nothing below is
invented as fact on the live pages. Anything not verifiable is either
omitted, phrased qualitatively, or marked `[[VERIFY]]` in source.

## Needs real client input

- **Contact details**: email is a plausible-but-unconfirmed placeholder
  (`hello@creativelab.in.th`); WhatsApp number, Telegram bot handle,
  physical address, phone, and legal entity details are all unset.
  `BotEntry` falls back to a "Message Us" link rather than a
  fake/broken chat link; Footer/schema omit `PostalAddress`/`telephone`
  rather than invent them.
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

## Needs a team/teammate decision

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

## Technical debt (known, not urgent)

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
