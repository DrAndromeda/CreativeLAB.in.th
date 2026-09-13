# EPIC-008: QA

- **Status:** Partial
- **Priority:** P0
- **Phase:** Phase 8 (`PROGRESS.md`)
- **Proposal:** [proposal.md](../../proposal.md) — §15_QA_DEFINITION_DONE, §20 TESTS

## Summary

Full QA pass per `proposal.md`'s definition of done — accessibility,
cross-browser, visual regression, and functional testing across every
page, breakpoint and (eventually) language.

## Tasks

- [x] `npm run build`, `npx tsc --noEmit`, `npm run lint` all clean
- [x] Every internal link crawled and verified (0 broken links)
- [x] Contact form manually tested end-to-end (a real bug was found and
      fixed: `e.currentTarget` goes `null` after an `await` inside an
      async React event handler, which was breaking the post-submit
      success state)
- [x] Homepage + several hub/service pages visually checked in Chrome
      (desktop viewport)
- [ ] axe-core accessibility pass (0 critical/serious target)
- [ ] Lighthouse pass (see EPIC-006)
- [ ] Cross-browser check (Chrome, Safari, Firefox, Edge, iOS Safari,
      Android Chrome)
- [ ] Visual regression across breakpoints (320/360/375/390/414/430,
      768, 1280/1440/1920) — mobile-viewport screenshots didn't render
      correctly through the browser automation tool used so far; the
      responsive Tailwind classes are in place but visually unverified
      below desktop width
- [ ] Repeat once EPIC-007 (multilingual) ships, per language
