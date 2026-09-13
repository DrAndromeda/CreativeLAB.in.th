# EPIC-004: SEO / Schema / Sitemap / llms.txt

- **Status:** Mostly done
- **Priority:** P0
- **Phase:** Phase 4 (`PROGRESS.md`)
- **Proposal:** [proposal.md](../../proposal.md) — §13 SEMANTIC_RULES, §11 GEO
- **GitHub Issue:** _link once created_

## Summary

Technical SEO and AI-search (GEO) foundations: sitemap, robots, JSON-LD
schema on every page, and a generated `llms.txt`.

## Tasks

- [x] `src/app/sitemap.ts`, `src/app/robots.ts`
- [x] JSON-LD: Organization (global), WebPage + BreadcrumbList everywhere,
      Service + FAQPage on hub/service pages
- [x] `src/app/llms.txt/route.ts` (generated from content, not static)
- [ ] hreflang tags — blocked on EPIC-007 (multilingual) actually shipping
      more than one locale

## Notes

Functionally complete for a single-locale (EN) site. Revisit once
EPIC-007 lands to add hreflang + per-locale sitemaps.
