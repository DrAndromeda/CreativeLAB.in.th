# Performance Pass

**Priority:** P0
**Phase:** 6
**Status:** Lighthouse audit done (local); real photography still needed

Meet the Core Web Vitals and bundle-size budgets in `proposal.md` §12
(LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, Lighthouse ≥ 90 mobile).

## Scope

- [x] Run Lighthouse (mobile) against `npm run build && npm run start` on
      localhost, across home/hub/service/contact:

  | Page | Perf | A11y | BP | SEO | LCP | CLS |
  |---|---|---|---|---|---|---|
  | Home | 89 | 100 | 100 | 100 | 3.7s | 0.058 |
  | Hub (`/advertising`) | 93 | 100 | 100 | 100 | 3.3s | 0 |
  | Service (`/advertising/google-ads`) | 93 | 100 | 100 | 100 | 3.3s | 0 |
  | Contact | 94 | 100 | 100 | 100 | 3.1s | 0 |

  Not the same as a real deployed-environment/CrUX read (network
  conditions differ), but a real, reproducible local baseline. 3 of 4
  pages already clear the ≥90 mobile Performance target; Home is close
  (89) and LCP is over the 2.5s target on every page — both trace to the
  placeholder hero images (large JPEGs), not code.
- [ ] Replace placeholder JPEGs with real, properly-sized photography —
      will move LCP more than anything else at this stage; still the
      single biggest lever left
- [ ] Re-run once deployed to a reachable environment, for a real CrUX
      read
- [ ] Verify JS/CSS budgets from §12 PERF against the actual build output

## Outcome

Heavily static/SSG with minimal client JS (Header, ContactForm,
AnnouncementBar, the native `<details>`-based FAQ accordion). Lighthouse
confirms this is a strong starting position — Accessibility/Best
Practices/SEO are clean 100s already; the only real gap is LCP, and it's
squarely an image problem, not an architecture one.
