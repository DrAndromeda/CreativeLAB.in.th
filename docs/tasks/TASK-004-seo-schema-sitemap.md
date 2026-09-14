# SEO / Schema / Sitemap / llms.txt

**Priority:** P0
**Phase:** 4
**Status:** Done

Technical SEO and AI-search (GEO) foundations: sitemap, robots, JSON-LD
schema on every page, and a generated `llms.txt`.

## Scope

- `src/app/sitemap.ts`, `src/app/robots.ts`
- JSON-LD: Organization (global), WebPage + BreadcrumbList everywhere,
  Service + FAQPage on hub/service pages
- `src/app/llms.txt/route.ts` (generated from content, not static)
- [x] hreflang tags — `TASK-007`'s locale routing landed; `buildMetadata()`
      emits `alternates.languages` (4 locales + x-default) on every page,
      and `sitemap.ts` emits one entry per locale per canonical path with
      reciprocal `<xhtml:link rel="alternate">` tags.

## Outcome

Complete. Per-locale canonical URLs, hreflang alternates and sitemap
entries are live for all 4 locales (RU/TH/HE currently serve the same EN
copy pending real translations — see `TASK-007`).
