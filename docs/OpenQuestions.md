# Open Questions

Decisions that need a person (client, teammate, or you) to resolve —
not something to guess at in code. Each one links to the task/file where
it matters most. Remove an entry once it's answered (fold the answer
into the relevant doc instead of leaving a stale question here).

## Hosting & deployment

### 1. Is GitHub Pages a real deployment target, or should `deploy.yml` be removed?

On 2026-09-14 a teammate configured the repo for GitHub Pages static
export (`output: "export"` in `next.config.ts`,
`.github/workflows/deploy.yml`) at the same time this session built the
locale routing (`TASK-007`) and confirmed the contact form's
`/api/contact` route. The two are incompatible: static export disables
Next.js middleware and API routes entirely, which broke `next dev`
outright and would have shipped a build with **no working root URL, no
`/contact`, `/about`, etc. (only `/en/...`-prefixed pages survive), and a
non-functional contact form** — confirmed by building and inspecting the
static `out/` output directly.

Checked with the team: the real production target is Vercel/Node, not
GitHub Pages. `next.config.ts` has been reverted to plain (no
`output`/`basePath`/`assetPrefix`) to unblock local dev and match that
target.

**Still open:**
- `.github/workflows/deploy.yml` still triggers on every push to `main`
  and will now fail at the "Upload Pages artifact" step (no `out/` is
  produced without `output: "export"`) rather than silently publish a
  broken site — better than before, but the workflow itself hasn't been
  removed or reconciled.
- The **currently live** Pages site (`https://drandromeda.github.io/CreativeLAB.in.th/`)
  still works, but only because it's stale (built before the locale
  routing existed). It will need to be taken down or the workflow fixed
  before someone finds and shares that URL as if it were current.
- If GitHub Pages should stay as a secondary preview target, static
  export needs a different approach to locale routing (real per-locale
  static files instead of a middleware rewrite) and a static-hosted
  contact-form alternative (e.g. Formspree, a hosted form endpoint) —
  neither has been attempted, since the team confirmed it isn't the real
  target.

### 2. Does `creativelab.in.th` need a `public/CNAME` file, or is `SITE.url` wrong?

`src/content/site.ts`'s `SITE.url` is `https://creativelab.in.th` — used
for every canonical tag, hreflang alternate, JSON-LD `url`, and sitemap
entry site-wide. The GitHub Pages deployment has no `public/CNAME` and
reports `cname: null` via the GitHub API, so it actually serves from
`https://drandromeda.github.io/CreativeLAB.in.th/`. If GitHub Pages is
ever used for anything (even a preview), these two need to agree — either
add a `CNAME` file pointing the real domain at Pages, or stop claiming
`creativelab.in.th` in metadata for a build that isn't served there.
Moot if question 1 resolves to "GitHub Pages isn't used at all."

## Content

### 3. `robots.txt` / `llms.txt`: restore the generated versions?

The same GitHub Pages change replaced `src/app/robots.ts` and
`src/app/llms.txt/route.ts` (generated from `src/content/**`, always in
sync with real hubs/services) with static files at `public/robots.txt`
and `public/llms.txt`. They're correct today but will silently drift as
content changes. Restoring the two route handlers is small and unblocked
by question 1 — just hasn't been done yet to stay in scope of this pass.
See `docs/tasks/TASK-004-seo-schema-sitemap.md`.

### 4. RU/TH/HE translated content — native reviewer or LLM-draft-pending-review?

`TASK-007`'s routing/RTL/font infrastructure is done; no translated copy
exists yet. Per `proposal.md`, machine translation (even LLM-drafted) is
explicitly not acceptable as final copy. Needs either a native RU/TH/HE
copywriter/reviewer in the loop, or an explicit client decision to accept
LLM-drafted copy as a reviewed-before-ship starting point. See
`docs/tasks/TASK-007-multilingual-i18n.md`.
