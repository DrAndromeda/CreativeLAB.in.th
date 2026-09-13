# EPIC-002: Homepage + 8 Service Hubs

- **Status:** Done
- **Priority:** P0
- **Phase:** Phase 2 (`PROGRESS.md`)
- **Proposal:** [proposal.md](../../proposal.md) — §02 SITE_ARCHITECTURE, §07 TEMPLATES
- **GitHub Issue:** _link once created_

## Summary

Homepage plus all 8 top-level service hubs (Advertising, Social Media,
Villas & Real Estate, Food & Restaurants, Business & Local Presence,
Websites & Digital, Video & Production, Branding & Creative) and their 48
sub-service pages, all driven by `src/content/hubs/*.ts` through the
shared `src/app/[hub]/page.tsx` and `src/app/[hub]/[service]/page.tsx`
templates.

## Tasks

- [x] Homepage
- [x] Advertising hub + 4 sub-services
- [x] Social Media hub + 5 sub-services
- [x] Villas & Real Estate hub + 9 sub-services
- [x] Food & Restaurants hub + 7 sub-services
- [x] Business & Local Presence hub + 6 sub-services
- [x] Websites & Digital hub + 9 sub-services
- [x] Video & Production hub + 4 sub-services
- [x] Branding & Creative hub + 4 sub-services

## Notes

Done — 71 pages build cleanly (`npm run build`). To add a new sub-service
later, add a task under this epic and edit the relevant
`src/content/hubs/<slug>.ts` file — no new route file is needed.
