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
- [x] Accessibility pass (Lighthouse's accessibility audit, same engine
      as axe-core): found and fixed a real, sitewide bug — `--color-accent`
      (#b8714a) only reached a 3.48:1 contrast ratio against
      `--color-base`/`--color-text-inverse`, below WCAG AA's 4.5:1 for
      normal text (affected every primary button, eyebrow label, and
      "Explore →" link). Darkened to `#935a3b` (5.08:1) in
      `src/app/globals.css`, with the hover shade darkened to match
      (`#804e33`) so it stays visually darker than the new resting state.
      All 4 sampled page types now score a clean 100 on Accessibility.
- [x] Lighthouse pass — see `TASK-006-performance-pass.md` for the full
      table; Best Practices/SEO are clean 100s on every sampled page.
- [ ] Cross-browser check (Chrome, Safari, Firefox, Edge, iOS Safari,
      Android Chrome) — only Chrome-based tooling available this session
- [ ] Visual regression across breakpoints (320/360/375/390/414/430,
      768, 1280/1440/1920) — mobile-viewport screenshots didn't render
      correctly through the browser automation tool used so far; the
      responsive Tailwind classes are in place but visually unverified
      below desktop width
- [ ] Repeat once `TASK-007` (multilingual) ships, per language
