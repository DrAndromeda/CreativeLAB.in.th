# SEO / Schema / Sitemap / llms.txt

**Priority:** P0
**Phase:** 4
**Status:** Mostly done

Technical SEO and AI-search (GEO) foundations: sitemap, robots, JSON-LD
schema on every page, and a generated `llms.txt`.

## Scope

- `src/app/sitemap.ts`, `src/app/robots.ts`
- JSON-LD: Organization (global), WebPage + BreadcrumbList everywhere,
  Service + FAQPage on hub/service pages
- `src/app/llms.txt/route.ts` (generated from content, not static)
- [ ] hreflang tags — blocked on `TASK-007-multilingual-i18n.md` actually
      shipping more than one locale

## Outcome

Functionally complete for a single-locale (EN) site. Revisit once
`TASK-007` lands to add hreflang + per-locale sitemaps.
