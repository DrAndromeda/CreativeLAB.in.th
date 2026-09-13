# EPIC-006: Performance Pass

- **Status:** Initial check done, no formal audit yet
- **Priority:** P0
- **Phase:** Phase 6 (`PROGRESS.md`)
- **Proposal:** [proposal.md](../../proposal.md) — §12 PERF
- **GitHub Issue:** _link once created_

## Summary

Meet the Core Web Vitals and bundle-size budgets in `proposal.md` §12
(LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, Lighthouse ≥ 90 mobile).

## Tasks

- [ ] Deploy to a reachable environment (staging or preview) — Lighthouse/
      CrUX numbers aren't meaningful against `localhost`
- [ ] Run Lighthouse across representative page types (home, hub,
      service, contact)
- [ ] Replace placeholder JPEGs with real, properly-sized photography —
      this will move LCP more than any code change at this stage
- [ ] Verify JS/CSS budgets from §12 PERF against the actual build output

## Notes

Current build is heavily static/SSG with minimal client JS (Header,
ContactForm, AnnouncementBar, and the native `<details>`-based FAQ
accordion are the only client components) — a good starting position, but
unverified against real targets until deployed somewhere reachable.
