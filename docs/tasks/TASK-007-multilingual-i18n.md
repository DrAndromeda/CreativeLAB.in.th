# Multilingual (EN/RU/TH/HE)

**Priority:** P0
**Phase:** 7
**Status:** Not started

EN is the master copy; RU, TH and HE need **native, professionally
adapted** translations per page — the proposal explicitly rules out
literal machine translation. Hebrew needs true RTL (`dir="rtl"`, mirrored
icons, `margin-inline`/`text-align: start` throughout, `bdi` around
numbers/URLs/emails), Thai needs correct ICU line-breaking.

## Deliberately not auto-generated

Machine-translating all 56 pages in one pass — even via an LLM rather
than Google Translate — would violate `proposal.md`'s own translation
rule in spirit. This needs either:
- a native RU/TH/HE copywriter/reviewer in the loop per page, or
- an explicit client decision to accept LLM-drafted copy as a starting
  point pending human review (documented as such, not shipped as final).

## Scope

- [ ] Decide the routing strategy (`/ru/...`, `/th/...`, `/he/...` per
      `proposal.md` §09) and implement the routing/locale infrastructure
      (this part *can* be built now, ahead of translated content)
- [ ] RTL layout support (CSS logical properties, icon mirroring, `bdi`)
      — infrastructure work, doesn't need translated content to build
- [ ] Thai font stack + ICU line-breaking verification
- [ ] Translate/adapt Homepage (RU, TH, HE) — pilot page to validate the
      process before scaling to all 56
- [ ] Translate/adapt remaining hub + service pages
- [ ] hreflang tags once more than one locale exists (depends on
      `TASK-004-seo-schema-sitemap.md`)
