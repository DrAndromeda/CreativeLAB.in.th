# Performance Pass

**Priority:** P0
**Phase:** 6
**Status:** Initial check done, no formal audit yet

Meet the Core Web Vitals and bundle-size budgets in `proposal.md` §12
(LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, Lighthouse ≥ 90 mobile).

## Scope

- [ ] Deploy to a reachable environment (staging or preview) — Lighthouse/
      CrUX numbers aren't meaningful against `localhost`
- [ ] Run Lighthouse across representative page types (home, hub,
      service, contact)
- [ ] Replace placeholder JPEGs with real, properly-sized photography —
      this will move LCP more than any code change at this stage
- [ ] Verify JS/CSS budgets from §12 PERF against the actual build output

## Outcome

Current build is heavily static/SSG with minimal client JS (Header,
ContactForm, AnnouncementBar, and the native `<details>`-based FAQ
accordion are the only client components) — a good starting position, but
unverified against real targets until deployed somewhere reachable.
