# Homepage + 8 Service Hubs

**Priority:** P0
**Phase:** 2
**Status:** Done

Homepage plus all 8 top-level service hubs (Advertising, Social Media,
Villas & Real Estate, Food & Restaurants, Business & Local Presence,
Websites & Digital, Video & Production, Branding & Creative) and their 48
sub-service pages, all driven by `src/content/hubs/*.ts` through the
shared `src/app/[locale]/[hub]/page.tsx` and
`src/app/[locale]/[hub]/[service]/page.tsx` templates (moved under
`[locale]/` in `TASK-007`; same templates, same content).

## Scope

- Homepage
- Advertising hub + 4 sub-services
- Social Media hub + 5 sub-services
- Villas & Real Estate hub + 9 sub-services
- Food & Restaurants hub + 7 sub-services
- Business & Local Presence hub + 6 sub-services
- Websites & Digital hub + 9 sub-services
- Video & Production hub + 4 sub-services
- Branding & Creative hub + 4 sub-services

## Outcome

Done — 71 canonical pages build cleanly (`npm run build`); now prerendered
once per locale (see `TASK-007`) for 263 total static pages. To add a new sub-service
later, that's a new ad-hoc task, not a new epic — edit the relevant
`src/content/hubs/<slug>.ts` file, no new route file is needed.
