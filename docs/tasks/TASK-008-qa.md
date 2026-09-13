# QA

**Priority:** P0
**Phase:** 8
**Status:** Partial

Full QA pass per `proposal.md`'s definition of done — accessibility,
cross-browser, visual regression, and functional testing across every
page, breakpoint and (eventually) language.

## Scope

- [x] `npm run build`, `npx tsc --noEmit`, `npm run lint` all clean
- [x] Every internal link crawled and verified (0 broken links)
- [x] Contact form manually tested end-to-end (a real bug was found and
      fixed: `e.currentTarget` goes `null` after an `await` inside an
      async React event handler, which was breaking the post-submit
      success state)
- [x] Homepage + several hub/service pages visually checked in Chrome
      (desktop viewport)
- [ ] axe-core accessibility pass (0 critical/serious target)
- [ ] Lighthouse pass (see `TASK-006-performance-pass.md`)
- [ ] Cross-browser check (Chrome, Safari, Firefox, Edge, iOS Safari,
      Android Chrome)
- [ ] Visual regression across breakpoints (320/360/375/390/414/430,
      768, 1280/1440/1920) — mobile-viewport screenshots didn't render
      correctly through the browser automation tool used so far; the
      responsive Tailwind classes are in place but visually unverified
      below desktop width
- [ ] Repeat once `TASK-007` (multilingual) ships, per language
