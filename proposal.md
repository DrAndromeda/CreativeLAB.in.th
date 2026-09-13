# Техническое задание — CreativeLAB.in.th

## 🎯 МИССИЯ
Создать премиум сайт креативного / рекламного агентства с фотосъёмкой и production на Koh Phangan (Таиланд).  
Сайт = editorial creative agency уровня Pentagram, конвертирует в лиды, собирает органический трафик через SEO/GEO,  
работает на 4 языках (EN/RU/TH/HE) с Telegram и WhatsApp ботами для сбора заявок.

## 🏗 ЧТО ДЕЛАЕМ
- Полноценный многостраничный сайт (3000+ URL) с блочной landing-page структурой
- 8 основных направлений: Advertising, Social Media, Villas & Real Estate, Food, Local, Web, Video, Branding
- Telegram и WhatsApp боты как intake funnel (язык → услуга → локация → бюджет → файлы → контакт)
- SEO/GEO: каждая страница — уникальный intent, Direct Answer, FAQ, schema, hreflang
- 4 языка с отдельными URL, Hebrew RTL
- Premium дизайн: editorial aesthetic, cinematic imagery, слайдеры, крупная типографика

## 🔴 МАНДАТОРИЙ: 4 ЯЗЫКА ДЛЯ ВСЕХ СТРАНИЦ (CRITICAL)

> Это требование выше всех остальных.

### Правило
**Каждая страница сайта должна существовать на всех 4 языках:**
- 🇬🇧 EN — master language
- 🇷🇺 RU — полный перевод
- 🇹🇭 TH — тайский язык
- 🇮🇱 HE — Hebrew RTL

### Для каждой страницы на каждом языке:
- [ ] HTML-страница с полной вёрсткой
- [ ] Полный body-текст (не только заголовки)
- [ ] Уникальные title, description, H1
- [ ] Canonical + hreflang (все 5 вариантов)
- [ ] JSON-LD с переведёнными полями
- [ ] OG/Twitter карточки
- [ ] Меню, breadcrumbs, CTA — на языке
- [ ] Alt-тексты изображений
- [ ] Hebrew true RTL layout

### Объём
- 4 языка × все страницы = минимум 100+ страниц контента
- Запрещено: автоперевод, копирование EN заголовков, оставлять страницы только на EN


## 🛣 ROADMAP
1. Brand shell + design system + reusable components
2. Homepage + 8 service hubs
3. 50+ sub-service landing pages
4. Portfolio / Case Studies pages
5. Bot integration (Telegram + WhatsApp)
6. SEO/schema/hreflang/sitemap/llms.txt
7. 4 languages (EN/RU/TH/HE)
8. Performance optimization (CWV)
9. QA + тестирование
10. Launch checklist

## ✅ ТЕСТИРОВАНИЕ — ОБЯЗАТЕЛЬНО ДЛЯ ВСЕГО
- **Каждая страница**: title, H1, meta, canonicals, hreflang, schema, alt text
- **Все ссылки**: 0 broken, 0 orphan, передают вес
- **Core Web Vitals**: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1
- **Адаптивность**: mobile (320-430px), tablet (768px), desktop (1440-1920px)
- **4 языка**: контент полный, Hebrew true RTL, Thai ICU line-breaking
- **Боты**: все услуги × все локации × 4 языка — 0 dead ends
- **Формы**: валидация, успех/ошибка, spam protection
- **Доступность**: axe-core 0 critical/serious, keyboard nav, focus visible
- **Lighthouse**: Performance ≥ 90, SEO 100, A11y ≥ 95
- **Визуальные регрессии**: 6 breakpoints × 4 языка
- **Rich Results**: 0 errors всех типов schema

---

# Техническое задание — CreativeLAB.in.th
## Креативное агентство / рекламное агентство с фотосъёмкой и production, Koh Phangan

## 00_README

| Section | Content |
|---------|---------|
| Section | Instruction |
| Purpose | Operational TZ for Claude/Cloud Code to build the complete premium Creative Content & Advertising Agency website on Koh Phangan and generate the website copy. |
| Critical positioning | The site is a premium advertising/creative marketing agency, not merely a photography studio. |
| Priority | Advertising is the first commercial pillar; Social Media second; Villas & Real Estate third; Food & Restaurants fourth. |
| Workflow | Build architecture → reusable components → core pages → service pages → SEO metadata/schema → multilingual versions → QA. |
| Content workflow | English is the master copy. Then produce professional Russian, Thai and Hebrew; Hebrew must use true RTL. Never do literal machine translation. |
| SEO workflow | Use the separate semantic-core workbook as the keyword/page mapping source. One primary search intent per indexable page. |
| Truth rule | Never invent clients, awards, reviews, prices, results, team members, guarantees, locations or credentials. |
| 3000+ URL rule | 3000+ URLs is an architecture target, not permission to create thin doorway pages. Generate indexable pages only when there is genuine unique intent/content. |
| Final deliverable | Production-ready responsive site, complete core copy, SEO metadata/schema, internal linking, CMS-ready content, tests and launch checklist. |

## 01_MASTER_TZ

| Section | Content |
|---------|---------|
| Area | Requirement |
| Goal | Build a premium Creative Content & Advertising Agency website for Koh Phangan, Thailand. |
| Positioning | Creative advertising, marketing, content and production team for businesses on Koh Phangan. |
| Core promise | We create content that makes island businesses look better — and sell better. |
| Primary menu | ADVERTISING; SOCIAL MEDIA; VILLAS & REAL ESTATE; FOOD & RESTAURANTS; BUSINESS & LOCAL PRESENCE; WEBSITES & DIGITAL; VIDEO & PRODUCTION; BRANDING & CREATIVE; MORE. |
| Languages | EN master; RU; TH; HE. Hebrew true RTL. |
| Primary location | Koh Phangan, Thailand. |
| Tone | Premium, confident, modern, direct, visual, commercially useful, locally grounded. |
| Design direction | Premium editorial creative-agency aesthetic; cinematic imagery; strong typography; whitespace; restrained motion; no generic template feel. |
| Main CTAs | Start a Project; Request a Quote; Discuss Your Project; Book a Consultation. |
| Commercial model | One-off shoots; production packages; monthly content; advertising/marketing retainers. |
| Service ladder | Photo → Website → SEO → AI Search/GEO → Google Ads → Social Media → Monthly Marketing. |
| CRM flow | NEW LEAD → QUALIFIED → DISCOVERY → PROPOSAL → NEGOTIATION → BOOKED → SHOOTING → EDITING → DELIVERED → UPSELL → MONTHLY CLIENT. |

## 02_SITE_ARCHITECTURE

| Priority | URL | Page | Purpose | Primary Intent |
|---|---|---|---|---|
| P0 | / | Homepage | Present agency positioning and all major commercial pillars | advertising agency Koh Phangan |
| P0 | /advertising/ | Advertising | Main paid advertising hub | advertising services Koh Phangan |
| P0 | /social-media/ | Social Media | Social management/content hub | social media agency Koh Phangan |
| P0 | /villas-real-estate/ | Villas & Real Estate | Property visual/content/marketing hub | villa photography Koh Phangan |
| P0 | /food-restaurants/ | Food & Restaurants | Restaurant content/marketing hub | restaurant marketing Koh Phangan |
| P0 | /business-local-presence/ | Business & Local Presence | Maps, GBP, local SEO, reputation | local SEO Koh Phangan |
| P0 | /websites-digital/ | Websites & Digital | Websites, SEO and AI visibility | web design Koh Phangan |
| P1 | /video-production/ | Video & Production | Commercial/social/drone/FPV production | video production Koh Phangan |
| P1 | /branding-creative/ | Branding & Creative | Brand identity, design, creative direction | branding agency Koh Phangan |
| P1 | /portfolio/ | Portfolio | Visual proof and work archive | creative agency portfolio Koh Phangan |
| P1 | /case-studies/ | Case Studies | Detailed project proof | creative marketing case studies Koh Phangan |
| P1 | /about/ | About | Agency story, approach and local presence | creative agency Koh Phangan |
| P1 | /contact/ | Contact | Lead conversion | contact creative agency Koh Phangan |
| P2 | /journal/ | Journal | Editorial/supporting SEO content | Koh Phangan creative marketing |

## 03_PAGE_TEMPLATE

| Order | Block | Requirement |
|---|---|---|
| 1 | Local/announcement | Optional concise island/local positioning badge. |
| 2 | Hero | Strong promise + primary keyword naturally + support copy + CTA + premium visual. |
| 3 | Direct Answer | 40–80 words answering what the service is, who it is for, and why the agency is relevant locally. |
| 4 | Proof | Real work, projects, process evidence or concrete capabilities only. |
| 5 | Scope | Clear service list with deliverables and boundaries. |
| 6 | Benefits | 3–6 commercially meaningful outcomes; avoid empty adjectives. |
| 7 | Visual/editorial | Cinematic image, project story, split layout or visual proof. |
| 8 | Process | 4–7 clear steps from brief to delivery/optimization. |
| 9 | Packages | Useful package structure or pricing guidance where factual; never invent fixed prices. |
| 10 | Use cases | Relevant industries, customer situations and project types. |
| 11 | Related services | Contextual internal links to parent, siblings, projects and case studies. |
| 12 | FAQ | 6–10 unique useful questions; no filler. |
| 13 | Final CTA | Contextual CTA matched to the service. |
| 14 | Footer/breadcrumbs | Semantic navigation, breadcrumbs where useful, contact and legal links. |

## 04_COPY_RULES

| Section | Content |
|---------|---------|
| Rule | Requirement |
| Master language | Write English first and treat it as canonical source copy. |
| Translation | RU/TH/HE must sound native and professional, not word-for-word. |
| H1 | Exactly one H1 per indexable page; natural phrasing. |
| First 150 words | Establish service + location + value proposition naturally. |
| Keywords | Use exact keywords only where natural; prioritize intent and readability. |
| H2/H3 | Cover secondary entities, services, buyer questions, deliverables, process and outcomes. |
| Tone | Premium, calm, confident, concise, specific and commercially useful. |
| Local relevance | Use Koh Phangan naturally; mention local knowledge, locations and island business context when relevant. |
| No clichés | Avoid generic phrases such as 'take your business to the next level', 'unparalleled', 'one-stop solution' unless genuinely justified. |
| Proof | Never fabricate reviews, clients, awards, metrics, revenue, rankings or guarantees. |
| Pricing | Explain factors and package logic; do not create unsupported prices. |
| CTA | Use varied contextual CTAs; avoid repeating 'Learn More' everywhere. |
| Entity clarity | Clearly communicate agency + advertising/marketing + content/production + Koh Phangan. |
| FAQ | Questions must add information, not repeat headings. |
| Commercial UX | Copy should help a visitor understand fit, scope, process and next action. |

## 05_HOMEPAGE_COPY_BRIEF

| Section | Content |
|---------|---------|
| Block | Required content |
| Hero H1 | Advertising & Creative Marketing Agency on Koh Phangan |
| Hero support | Creative advertising, social media, content, photography, video, websites and digital marketing for businesses on Koh Phangan. |
| Pillar 1 | Advertising — Google Ads, Meta Ads, campaign launch, performance marketing. |
| Pillar 2 | Social Media — Instagram management, content, Reels, strategy, community. |
| Pillar 3 | Villas & Real Estate — villa/property photography, drone, video, property marketing. |
| Pillar 4 | Food & Restaurants — food/menu photography, styling, design, content, advertising. |
| Pillar 5 | Business & Local Presence — Google Business Profile, Maps, Local SEO, reputation. |
| Pillar 6 | Websites & Digital — websites, landing pages, SEO, technical SEO, AI search/GEO. |
| Pillar 7 | Video & Production — commercial video, Reels, drone, FPV, brand films. |
| Pillar 8 | Branding & Creative — brand identity, graphic/menu design, creative/art direction. |
| Proof | Use real projects/case studies only. |
| Local advantage | On-island team understands local businesses, tourism, locations, visual context and customer behavior. |
| Process | Brief → strategy → production → delivery → optimization / ongoing marketing. |
| Final CTA | Start a Project / Discuss Your Business on Koh Phangan. |

## 06_ADVERTISING_COPY

| Page | Primary keyword | Secondary topics | Must cover |
|---|---|---|---|
| Advertising | advertising services Koh Phangan | advertising agency; marketing campaigns; local advertising; performance marketing | Google Ads; Meta Ads; social advertising; campaign launch; creative; tracking |
| Google Ads | Google Ads agency Koh Phangan | Google advertising; PPC; search ads; local PPC | strategy; setup; conversion tracking; optimization |
| Meta Ads | Meta Ads agency Koh Phangan | Facebook ads; Instagram ads; social advertising | creative; targeting; retargeting; optimization |
| Campaign Launch | advertising campaign Koh Phangan | campaign strategy; launch; tracking | brief; audience; creative; media setup; measurement |
| Performance | performance marketing Koh Phangan | conversion optimization; tracking; ROAS | measurement; testing; optimization; reporting |

## 07_SOCIAL_COPY

| Page | Primary keyword | Secondary topics | Must cover |
|---|---|---|---|
| Social Media | social media agency Koh Phangan | SMM; social marketing; content strategy | management; content; Reels; strategy |
| Instagram Management | Instagram management Koh Phangan | Instagram marketing; account management | planning; publishing; community; analytics |
| Content Creation | content creation Koh Phangan | social content; branded content | photo; video; creative direction; formats |
| Reels | Instagram Reels agency Koh Phangan | short-form video; social video | concepts; shooting; editing; hooks; formats |
| Influencer Marketing | influencer marketing Koh Phangan | creator marketing; collaborations | selection; campaign; content; tracking |
| Monthly Packages | social media management Koh Phangan | monthly content; social media packages | monthly planning; production; publishing; optimization |

## 08_VILLA_REAL_ESTATE

| Page | Primary keyword | Secondary topics | Must cover |
|---|---|---|---|
| Villa Photography | villa photography Koh Phangan | luxury villa photography; property photography | composition; interiors; exteriors; listing-ready images |
| Real Estate Photography | real estate photography Koh Phangan | property photography; listing photography | sales/rental presentation; interiors; exteriors |
| Land Photography | land photography Koh Phangan | land listing; aerial land photography | access; terrain; surroundings; drone where legal/appropriate |
| Architecture Photography | architecture photography Koh Phangan | architectural photography; building photography | lines; materials; context; interiors/exteriors |
| Drone | drone photography Koh Phangan | aerial photography; property drone | aerial context; property; surroundings; compliance |
| Property Video | real estate video Koh Phangan | villa video; property film | walkthrough; atmosphere; vertical/social cuts |
| FPV | FPV drone Koh Phangan | FPV property video | dynamic walkthroughs; safety; suitable properties |
| Virtual Tours | 360 virtual tour Koh Phangan | property virtual tour | remote viewing; navigation; listing integration |
| Real Estate Marketing | real estate marketing Koh Phangan | villa marketing; property promotion | visuals + listing + social + advertising + local visibility |

## 09_FOOD_RESTAURANTS

| Page | Primary keyword | Secondary topics | Must cover |
|---|---|---|---|
| Restaurant Marketing | restaurant marketing Koh Phangan | restaurant advertising; restaurant promotion | content; Maps; social; paid ads; customer journey |
| Food Photography | food photography Koh Phangan | commercial food photography | styling; lighting; menu/delivery/social formats |
| Menu Photography | menu photography Koh Phangan | dish photography; delivery menu | consistent set; platform-ready assets |
| Food Styling | food stylist Koh Phangan | food styling; commercial styling | composition; props; ingredients; shoot preparation |
| Menu Design | restaurant menu design Koh Phangan | menu graphic design; digital menu | print/digital; readability; brand consistency |
| Restaurant Social | restaurant social media Koh Phangan | Instagram; Reels; content | content calendar; production; community |
| Restaurant Advertising | restaurant advertising Koh Phangan | Meta Ads; Google Ads; local advertising | offers; targeting; creative; tracking |
| Restaurant Website | restaurant website Koh Phangan | menu website; booking; ordering | menu; location; booking/order journey; SEO |

## 10_LOCAL_PRESENCE

| Page | Primary keyword | Secondary topics | Must cover |
|---|---|---|---|
| Local SEO | local SEO Koh Phangan | local search visibility; local citations | local intent; technical basics; relevance; visibility |
| Google Business Profile | Google Business Profile Koh Phangan | GBP optimization; Google Business | profile completeness; categories; photos; posts; reviews |
| Google Maps | Google Maps optimization Koh Phangan | Maps marketing; local visibility | listing accuracy; categories; reviews; photos; directions |
| Reviews | Google reviews management Koh Phangan | customer reviews; review strategy | request process; response quality; monitoring |
| Reputation | online reputation management Koh Phangan | brand reputation; review management | monitoring; response; consistency; escalation |
| Listings | business listings Koh Phangan | local citations; directories | NAP consistency; relevant directories; cleanup |

## 11_WEBSITES_DIGITAL

| Page | Primary keyword | Secondary topics | Must cover |
|---|---|---|---|
| Web Design | web design Koh Phangan | website development; business websites | UX; responsive; SEO-ready architecture |
| Business Websites | business website Koh Phangan | company website; service website | information architecture; conversion; CMS |
| Landing Pages | landing page design Koh Phangan | campaign landing page; lead generation | message match; CTA; tracking |
| Restaurant Website | restaurant website Koh Phangan | menu website; online ordering; booking | menu; location; booking/order UX |
| Villa Website | villa website Koh Phangan | property website; booking | gallery; property information; inquiry/booking |
| E-commerce | ecommerce website Koh Phangan | online shop; product website | catalog; checkout; mobile UX |
| Website Redesign | website redesign Koh Phangan | UX redesign; website optimization | audit; structure; conversion; migration safety |
| Technical SEO | technical SEO Koh Phangan | crawlability; indexing; Core Web Vitals | canonical; sitemap; robots; structured data; performance |
| AI Search | AI search optimization Koh Phangan | GEO; AI visibility; entity optimization | machine-readable content; entity clarity; citations/authority where appropriate |

## 12_VIDEO_BRANDING

| Page | Primary keyword | Secondary topics | Must cover |
|---|---|---|---|
| Video Production | video production Koh Phangan | commercial video; social video | concept; production; editing; delivery |
| Commercial Video | commercial video Koh Phangan | brand film; advertising video | story; creative direction; distribution formats |
| Social Video | social media video Koh Phangan | short-form; Reels | vertical formats; hooks; editing |
| Drone Video | drone video Koh Phangan | aerial video; property video | establishing shots; property; landscape; compliance |
| FPV Video | FPV video Koh Phangan | FPV drone; dynamic video | motion; walkthroughs; safety |
| Branding | branding agency Koh Phangan | brand identity; visual identity | strategy; identity; applications |
| Graphic Design | graphic design Koh Phangan | print; digital design | brand systems; campaign assets; social; menus |
| Creative Direction | creative direction Koh Phangan | art direction; campaign creative | concept; visual language; production oversight |
| Menu Design | menu design Koh Phangan | restaurant design; food branding | print/digital; hierarchy; brand consistency |

## 13_SEMANTIC_RULES

| Section | Content |
|---------|---------|
| Rule | Implementation |
| Primary intent | One primary search intent/keyword cluster per indexable page. |
| Title | Put primary keyword naturally near the front; add brand/location context without stuffing. |
| H1 | Natural human-readable H1 aligned with page intent. |
| Meta description | Topic + differentiator + local relevance + useful action; no keyword stuffing. |
| URL | Short, stable, lowercase, readable, hyphenated. |
| Body semantics | Include services, entities, audience, deliverables, process, outcomes and location naturally. |
| Alt text | Describe the actual image; do not stuff keywords. |
| Schema | Use appropriate Organization/LocalBusiness/ProfessionalService, Service, WebPage and BreadcrumbList; FAQPage only when appropriate. |
| Internal linking | Parent ↔ child services ↔ related services ↔ industries ↔ projects/case studies ↔ journal. |
| Cannibalization | Do not create multiple indexable pages targeting the same intent. |
| Programmatic pages | Create only when each page has genuine unique intent and useful unique content. |
| No fake volume | Do not fabricate search volume, traffic or ranking data. |

## 14_TECHNICAL_SITE_BUILD

| Section | Content |
|---------|---------|
| Area | Requirement |
| Framework | Use modern SSR/SSG-capable framework such as Next.js or equivalent; choose maintainable production architecture. |
| Rendering | Prefer server-rendered/static content for SEO-critical pages; hydrate only where interaction requires it. |
| Images | AVIF/WebP where appropriate; responsive srcset/sizes; lazy-load below fold; preload only true LCP asset. |
| Fonts | Optimize loading; avoid unnecessary font weights and layout shifts. |
| Performance | Code splitting; minimize JS; pause offscreen sliders/video; avoid heavy libraries without reason. |
| SEO | Canonical; XML sitemap; robots.txt; hreflang; Open Graph; semantic HTML; index/noindex controls. |
| Schema | Implement page-appropriate JSON-LD with valid structured data. |
| Accessibility | Keyboard navigation; visible focus; labels; semantic headings; alt text; contrast; reduced motion. |
| Responsive | QA at 320/360/375/390/414/430 px, tablet, 1280/1440/1920 px. |
| Browsers | Chrome; Safari; Firefox; Edge; iOS Safari; Android Chrome. |
| Navigation | Sticky header; mobile menu; working dropdowns/mega-menu; Escape closes menus; keyboard usable; no dead links. |
| Forms | Validation; loading/success/error states; spam protection; privacy/legal consent where required. |
| CMS | Editable services, projects, case studies, journal, FAQs, testimonials/proof, SEO fields and navigation. |
| Analytics | Set up privacy-conscious analytics and conversion tracking architecture without hard-coding unsupported IDs. |
| Security | Validate/sanitize inputs; protect forms; avoid exposing secrets client-side. |
| Content separation | Keep content structured and editable; do not bury core SEO copy inside images or inaccessible UI. |

## 15_QA_DEFINITION_DONE

| Section | Content |
|---------|---------|
| Category | Definition of Done |
| Design | Premium editorial visual system; consistent typography/spacing; varied layouts; no generic-template feel. |
| Content | All required core pages have complete copy, CTA, FAQs and internal links; no filler or fabricated claims. |
| SEO | Titles, H1s, meta descriptions, canonicals, sitemap, robots, hreflang, schema and semantic hierarchy verified. |
| Responsive | No horizontal overflow, clipping, broken grids or unreadable typography at all target widths. |
| Functional | Menus, forms, links, sliders, language switcher and CTAs work; no dead ends. |
| Performance | Optimize LCP/INP/CLS; compressed responsive media; minimal client JS; test with Lighthouse/PageSpeed. |
| Accessibility | Keyboard, focus, labels, semantic headings, alt text and reduced-motion behavior verified. |
| Multilingual | EN/RU/TH/HE content is complete and natural; Hebrew layout is true RTL; no untranslated fragments. |
| Regression | Re-test shared header/footer/components after changes to any template. |
| Release | No P0/P1 defects; production build passes; sitemap/robots/canonicals validated; launch checklist completed. |


---
## Дополнительная таблица требований (DeepSeek)

| Section | Item | Requirement | Specification | Criteria | Priority |
|---------|------|-------------|---------------|---------|----------|
| **0. MISSION** | Lead product designer | Act as lead product designer | Editorial, cinematic, restrained luxury aesthetic; no template feel; premium agency level | Design reads as premium within 5 seconds; no generic patterns | P0 |
| **0. MISSION** | Senior frontend engineer | Act as senior frontend engineer | Static-first; SEO-safe; performant; minimal JS; componentized | No critical content depends on client JS; bundle within budget | P0 |
| **0. MISSION** | Technical SEO / GEO architect | Act as SEO/GEO architect | Google + Yandex + AI search; schema; hreflang; internal linking | All P0 SEO checks pass; schema validates; AI-readable | P0 |
| **0. MISSION** | Premium copywriter | Act as premium copywriter | EN master; native RU/TH/HE; no machine translation; no filler | Every page passes human editorial review | P0 |
| **0. MISSION** | Conversion strategist | Act as conversion strategist | CTA hierarchy; lead bots; CRM flow; measurement | Every commercial page has clear next action | P0 |
| **0. MISSION** | Truth rule | Never invent facts | No clients; no awards; no prices; no reviews; no results; no team; no guarantees; no locat... | All facts traceable to user source or marked [[VERIFY]] | P0 |
| **0. MISSION** | Missing data protocol | Handle missing facts gracefully | Explain factors, not numbers; use [[VERIFY: ...]] placeholders in source | No section reads as a gap; placeholder visible only in source | P0 |
| **0. MISSION** | Autonomous progress | Do not block on missing details | Choose most premium technically-sound SEO-safe option; flag in NOTES.md | Build completes; assumptions documented | P0 |
| **1. POSITIONING** | Business type | Creative Content & Advertising Agency | Not a photography studio; full advertising/marketing/production agency | Positioning visible in hero, About, footer | P0 |
| **1. POSITIONING** | Primary location | Koh Phangan, Thailand | Island-grounded; local knowledge; local business context | Location mentioned naturally; not stuffed | P0 |
| **1. POSITIONING** | Priority order | 1) Advertising 2) Social 3) Villas & Real Estate 4) Food & Restaurants 5) Business & Local... | Reflected in nav order; homepage service grid; internal link priority | Priority order consistent across site | P0 |
| **1. POSITIONING** | Core promise | We create content that makes island businesses look better — and sell better. | Used in hero support or direct answer | Phrase or paraphrase present on Home | P0 |
| **1. POSITIONING** | Brand voice | Premium, confident, modern, direct, visual, commercially useful, locally grounded | No hype; no cheap sales language; no clichés | Copy passes editorial review | P0 |
| **1. POSITIONING** | What we are not | Not a hobby photographer; not a cheap freelancer; not a template shop | Positioning above commodity competition | Differentiation visible on Home and hubs | P1 |
| **2. AUDIENCE** | Villa owner / manager | Sell/rent villa faster with better visuals | Entry via /villas-real-estate/ | Persona addressed in copy and CTA | P0 |
| **2. AUDIENCE** | Restaurant owner | Fill tables; launch menu; run ads | Entry via /food-restaurants/ | Persona addressed in copy and CTA | P0 |
| **2. AUDIENCE** | Hospitality operator | Year-round bookings; brand consistency | Entry via /advertising/ /social-media/ | Persona addressed in copy and CTA | P0 |
| **2. AUDIENCE** | Local service business | Be found on Google Maps | Entry via /business-local-presence/ | Persona addressed in copy and CTA | P0 |
| **2. AUDIENCE** | Expat founder | Full marketing stack; one team | Entry via / | Persona addressed on Home | P0 |
| **2. AUDIENCE** | Developer / investor | Property marketing system | Entry via /villas-real-estate/ | Persona addressed in copy and CTA | P1 |
| **3. COMMERCIAL** | One-off shoot | Single shoot; single deliverable | Photo or video; defined scope | Pricing factors explained; no invented prices | P0 |
| **3. COMMERCIAL** | Production package | Multi-day; multi-asset | Defined deliverables; timeline; usage rights | Package structure clear | P0 |
| **3. COMMERCIAL** | Monthly content | Recurring production retainer | Content calendar; production; delivery | Monthly scope clear | P0 |
| **3. COMMERCIAL** | Advertising retainer | Google Ads / Meta Ads / campaigns | Strategy; setup; creative; optimization; reporting | Retainer scope clear | P0 |
| **3. COMMERCIAL** | Full marketing retainer | Content + ads + social + SEO + web | Integrated; coordinated; monthly cadence | Full-stack value clear | P0 |
| **3. COMMERCIAL** | Ascension path | Photo → Website → SEO → AI Search/GEO → Google Ads → Social → Monthly Marketing | Reflected in internal linking and upsell CTAs | Ladder visible in related services | P1 |
| **3. COMMERCIAL** | Pipeline stages | NEW LEAD → QUALIFIED → DISCOVERY → PROPOSAL → NEGOTIATION → BOOKED → SHOOTING → EDITING → ... | Reflected in bot payload and internal process | Payload fields support pipeline | P1 |
| **4. IA** | Root homepage | / = homepage | Positioning + pillars overview | Primary intent: advertising agency Koh Phangan | P0 |
| **4. IA** | Advertising hub | /advertising/ | Paid advertising hub | Primary intent: advertising services Koh Phangan | P0 |
| **4. IA** | Google Ads | /advertising/google-ads/ | Google Ads service | Primary intent: google ads agency koh phangan | P0 |
| **4. IA** | Meta Ads | /advertising/meta-ads/ | Meta Ads service | Primary intent: meta ads agency koh phangan | P0 |
| **4. IA** | Campaign Launch | /advertising/campaign-launch/ | Campaign strategy and launch | Primary intent: advertising campaign koh phangan | P0 |
| **4. IA** | Performance | /advertising/performance/ | Performance marketing | Primary intent: performance marketing koh phangan | P0 |
| **4. IA** | Social Media hub | /social-media/ | Social management hub | Primary intent: social media agency koh phangan | P0 |
| **4. IA** | Instagram Management | /social-media/instagram-management/ | IG account management | Primary intent: instagram management koh phangan | P0 |
| **4. IA** | Content Creation | /social-media/content-creation/ | Social content production | Primary intent: content creation koh phangan | P0 |
| **4. IA** | Reels | /social-media/reels/ | Short-form video | Primary intent: instagram reels agency koh phangan | P0 |
| **4. IA** | Influencer | /social-media/influencer-marketing/ | Creator collaborations | Primary intent: influencer marketing koh phangan | P0 |
| **4. IA** | Monthly Packages | /social-media/monthly-packages/ | Monthly social retainers | Primary intent: social media management koh phangan | P0 |
| **4. IA** | Villas & Real Estate hub | /villas-real-estate/ | Property content hub | Primary intent: villa photography koh phangan | P0 |
| **4. IA** | Villa Photography | /villas-real-estate/villa-photography/ | Villa photo | Primary intent: villa photography koh phangan | P0 |
| **4. IA** | Real Estate Photography | /villas-real-estate/real-estate-photography/ | RE photo | Primary intent: real estate photography koh phangan | P0 |
| **4. IA** | Land Photography | /villas-real-estate/land-photography/ | Land listings | Primary intent: land photography koh phangan | P0 |
| **4. IA** | Architecture Photography | /villas-real-estate/architecture-photography/ | Architecture | Primary intent: architecture photography koh phangan | P0 |
| **4. IA** | Drone | /villas-real-estate/drone/ | Aerial photo | Primary intent: drone photography koh phangan | P0 |
| **4. IA** | Property Video | /villas-real-estate/property-video/ | Property film | Primary intent: real estate video koh phangan | P0 |
| **4. IA** | FPV | /villas-real-estate/fpv/ | FPV drone | Primary intent: fpv drone koh phangan | P0 |
| **4. IA** | Virtual Tours | /villas-real-estate/virtual-tours/ | 360 tours | Primary intent: 360 virtual tour koh phangan | P0 |
| **4. IA** | RE Marketing | /villas-real-estate/marketing/ | Full property marketing | Primary intent: real estate marketing koh phangan | P0 |
| **4. IA** | Food hub | /food-restaurants/ | Restaurant hub | Primary intent: restaurant marketing koh phangan | P0 |
| **4. IA** | Food Photo | /food-restaurants/food-photography/ | Food photo | Primary intent: food photography koh phangan | P0 |
| **4. IA** | Menu Photo | /food-restaurants/menu-photography/ | Menu photo | Primary intent: menu photography koh phangan | P0 |
| **4. IA** | Food Styling | /food-restaurants/food-styling/ | Styling | Primary intent: food stylist koh phangan | P0 |
| **4. IA** | Menu Design | /food-restaurants/menu-design/ | Menu graphic design | Primary intent: restaurant menu design koh phangan | P0 |
| **4. IA** | Restaurant Social | /food-restaurants/social/ | Restaurant social | Primary intent: restaurant social media koh phangan | P0 |
| **4. IA** | Restaurant Advertising | /food-restaurants/advertising/ | Restaurant ads | Primary intent: restaurant advertising koh phangan | P0 |
| **4. IA** | Restaurant Website | /food-restaurants/website/ | Restaurant site | Primary intent: restaurant website koh phangan | P0 |
| **4. IA** | Local hub | /business-local-presence/ | Local presence hub | Primary intent: local seo koh phangan | P0 |
| **4. IA** | Local SEO | /business-local-presence/local-seo/ | Local SEO | Primary intent: local seo koh phangan | P0 |
| **4. IA** | GBP | /business-local-presence/google-business-profile/ | GBP optimization | Primary intent: google business profile koh phangan | P0 |
| **4. IA** | Google Maps | /business-local-presence/google-maps/ | Maps | Primary intent: google maps optimization koh phangan | P0 |
| **4. IA** | Reviews | /business-local-presence/reviews/ | Review management | Primary intent: google reviews management koh phangan | P0 |
| **4. IA** | Reputation | /business-local-presence/reputation/ | ORM | Primary intent: online reputation management koh phangan | P0 |
| **4. IA** | Listings | /business-local-presence/listings/ | Citations | Primary intent: business listings koh phangan | P0 |
| **4. IA** | Websites hub | /websites-digital/ | Web hub | Primary intent: web design koh phangan | P0 |
| **4. IA** | Web Design | /websites-digital/web-design/ | Web design | Primary intent: web design koh phangan | P0 |
| **4. IA** | Business Websites | /websites-digital/business-websites/ | Business site | Primary intent: business website koh phangan | P0 |
| **4. IA** | Landing Pages | /websites-digital/landing-pages/ | Landing | Primary intent: landing page design koh phangan | P0 |
| **4. IA** | Restaurant Website | /websites-digital/restaurant-website/ | Restaurant web | Primary intent: restaurant website koh phangan | P0 |
| **4. IA** | Villa Website | /websites-digital/villa-website/ | Villa web | Primary intent: villa website koh phangan | P0 |
| **4. IA** | E-commerce | /websites-digital/ecommerce/ | Shop | Primary intent: ecommerce website koh phangan | P0 |
| **4. IA** | Redesign | /websites-digital/redesign/ | Redesign | Primary intent: website redesign koh phangan | P0 |
| **4. IA** | Technical SEO | /websites-digital/technical-seo/ | Tech SEO | Primary intent: technical seo koh phangan | P0 |
| **4. IA** | AI Search | /websites-digital/ai-search/ | GEO | Primary intent: ai search optimization koh phangan | P0 |
| **4. IA** | Video hub | /video-production/ | Video hub | Primary intent: video production koh phangan | P1 |
| **4. IA** | Commercial Video | /video-production/commercial/ | Commercial | Primary intent: commercial video koh phangan | P1 |
| **4. IA** | Social Video | /video-production/social-video/ | Social video | Primary intent: social media video koh phangan | P1 |
| **4. IA** | Drone Video | /video-production/drone-video/ | Drone video | Primary intent: drone video koh phangan | P1 |
| **4. IA** | FPV Video | /video-production/fpv-video/ | FPV video | Primary intent: fpv video koh phangan | P1 |
| **4. IA** | Branding hub | /branding-creative/ | Branding hub | Primary intent: branding agency koh phangan | P1 |
| **4. IA** | Branding | /branding-creative/branding/ | Brand identity | Primary intent: branding agency koh phangan | P1 |
| **4. IA** | Graphic Design | /branding-creative/graphic-design/ | Graphic | Primary intent: graphic design koh phangan | P1 |
| **4. IA** | Creative Direction | /branding-creative/creative-direction/ | Creative dir | Primary intent: creative direction koh phangan | P1 |
| **4. IA** | Menu Design (Brand) | /branding-creative/menu-design/ | Menu design | Primary intent: menu design koh phangan | P1 |
| **4. IA** | Portfolio | /portfolio/ | Portfolio | Primary intent: creative agency portfolio koh phangan | P1 |
| **4. IA** | Case Studies | /case-studies/ | Case studies | Primary intent: creative marketing case studies koh phangan | P1 |
| **4. IA** | About | /about/ | About | Primary intent: creative agency koh phangan | P1 |
| **4. IA** | Contact | /contact/ | Contact | Primary intent: contact creative agency koh phangan | P1 |
| **4. IA** | Journal | /journal/ | Journal | Primary intent: koh phangan creative marketing | P2 |
| **4. IA** | Desktop primary | ADVERTISING · SOCIAL MEDIA · VILLAS & REAL ESTATE · FOOD & RESTAURANTS · BUSINESS & LOCAL ... | Sticky; transparent on hero; solid on scroll | All top-level visible; active state clear | P0 |
| **4. IA** | Mobile | Full-screen drawer; accordion groups; language switcher; primary CTA | Focus trap; Escape closes; predictable | Keyboard and touch accessible; no layout shift | P0 |
| **4. IA** | Header CTA | Start a Project | Always visible desktop; sticky mobile | Reachable within 1 interaction | P0 |
| **4. IA** | Language switcher | EN / RU / TH / HE | Preserves current page path | URL structure stable; hreflang correct | P0 |
| **5. DESIGN** | Aesthetic | Editorial creative-agency; cinematic imagery; strong typography; whitespace; restrained mo... | Independent creative studio reference; Pentagram-adjacent | Premium within 5 seconds | P0 |
| **5. DESIGN** | Anti-patterns | No template feel; no rocket icons; no neon gradients; no floating 3D blobs; no stock offic... | Original composition | No visual clichés visible | P0 |
| **5. DESIGN** | Base background | #F7F4EF warm off-white | Never pure white page bg | Warm neutral tones dominant | P0 |
| **5. DESIGN** | Elevated surface | #FFFFFF cards | Subtle contrast against base | Cards distinguishable | P0 |
| **5. DESIGN** | Inverse | #0F0E0C near-black | Footer, editorial dark sections | Never pure #000 | P0 |
| **5. DESIGN** | Text primary | #141210 | Body and headings on light | Contrast ratio >= 4.5:1 | P0 |
| **5. DESIGN** | Text secondary | #5C5650 | Supporting copy | Contrast >= 4.5:1 | P0 |
| **5. DESIGN** | Accent | #B8714A terracotta | CTAs; links; accents | Used sparingly; max 1 accent per viewport | P0 |
| **5. DESIGN** | Accent soft | #E8D5C4 | Hover tints; dividers | Subtle only | P1 |
| **5. DESIGN** | Olive | #5A5F45 | Editorial accent | Second accent; used rarely | P1 |
| **5. DESIGN** | Line | #E5DED4 | Dividers; borders | Subtle; never heavy | P0 |
| **5. DESIGN** | Display typeface | Fraunces or GT Sectra (fallback Playfair Display) | Weights 300 and 400; self-hosted | Licensed; loads without CLS | P0 |
| **5. DESIGN** | Body typeface | Inter or Söhne | Weights 400 500 600 | Cyrillic and Latin support | P0 |
| **5. DESIGN** | Thai fallback | IBM Plex Sans Thai or Noto Sans Thai | Weights 400 500 | Thai reads naturally | P0 |
| **5. DESIGN** | Hebrew fallback | Heebo or Assistant | Weights 400 500 600 | Hebrew reads naturally; RTL compatible | P0 |
| **5. DESIGN** | H1 desktop | 72-96px; line-height 1.02; tracking -0.02em | Editorial presence | Readable; not cramped | P0 |
| **5. DESIGN** | H2 desktop | 48-56px; line-height 1.1 | Section hierarchy |  | P0 |
| **5. DESIGN** | H3 | 32px; line-height 1.2 | Subsection |  | P0 |
| **5. DESIGN** | Body L | 20px; line-height 1.65 | Editorial paragraphs | Max line length 68-72 chars | P0 |
| **5. DESIGN** | Body M | 17px; line-height 1.65 | Default body |  | P0 |
| **5. DESIGN** | Caption | 14px; line-height 1.5; tracking 0.02em | Meta; captions |  | P1 |
| **5. DESIGN** | Scale | 4 8 12 16 24 32 48 64 96 128 160 200 | Only these values | No arbitrary spacing | P0 |
| **5. DESIGN** | Section vertical desktop | 120-160px | Generous rhythm | Consistent across pages | P0 |
| **5. DESIGN** | Section vertical mobile | 64-80px | Tighter but airy |  | P0 |
| **5. DESIGN** | Breakpoints | Mobile 320-479 4col; Mobile L 480-767 6col; Tablet 768-1023 8col; Desktop 1024-1439 12col;... | Consistent gutters and margins | No overflow at any width | P0 |
| **5. DESIGN** | Max content width | 1440px | Text-heavy blocks 720px | Architectural alignment | P0 |
| **5. DESIGN** | Button | Primary / Secondary / Ghost / Text-link | Radius 0 (sharp editorial) | Clear hover and focus states | P0 |
| **5. DESIGN** | Card | Service / Project / Article / Stat | No shadows; subtle hover movement | Image-led; minimal borders | P0 |
| **5. DESIGN** | Header | Transparent-on-hero / Solid-on-scroll | Sticky; 80px -> 64px on scroll | No layout shift | P0 |
| **5. DESIGN** | Footer | 4-col desktop; accordion mobile | Max 30 links; no keyword dump | Consistent across languages | P0 |
| **5. DESIGN** | FAQ | Accordion | Height animation; ARIA; large tap target | Keyboard accessible | P0 |
| **5. DESIGN** | Slider | Hero / Project / Logo | Swipe + keyboard + arrows + pagination | No CLS; no autoplay jank | P0 |
| **5. DESIGN** | Form | Inline / Stacked | Focus ring visible; labels persistent | Accessible; validation clear | P0 |
| **5. DESIGN** | Breadcrumbs | Inline / With schema | Inner pages only | BreadcrumbList schema | P1 |
| **5. DESIGN** | Mega-menu | Advertising / Villas / Food / Web | Columns + featured image | No overflow; Escape closes | P0 |
| **5. DESIGN** | Pull Quote | Left-rule / Centered | Editorial emphasis |  | P1 |
| **5. DESIGN** | Stat Block | Number + label | Verified data only | No invented metrics | P0 |
| **5. DESIGN** | Process Steps | Numbered / Timeline | 4-7 steps | Mobile vertical | P0 |
| **5. DESIGN** | CTA Banner | Full-bleed / Split | Contextual per page | High contrast but elegant | P0 |
| **5. DESIGN** | Hover color | 150ms ease-out | Subtle |  | P1 |
| **5. DESIGN** | Reveal on scroll | 400-600ms cubic-bezier(0.16 1 0.3 1) | Subtle; not blocking |  | P1 |
| **5. DESIGN** | Page transition | 300ms ease-in-out |  | P1 |  |
| **5. DESIGN** | Image zoom hover | 500ms ease-out |  | P1 |  |
| **5. DESIGN** | Reduced motion | Respect prefers-reduced-motion | Disable reveals and zooms | Verified | P0 |
| **5. DESIGN** | Limits | No scroll-jacking; no mobile parallax; max 2 animated elements per viewport |  | P0 |  |
| **5. DESIGN** | Style | Cinematic; natural light; editorial crop; warm neutral grading | Human presence when relevant | Consistent visual language | P0 |
| **5. DESIGN** | Sources priority | 1) Client photography 2) Licensed stock 3) Commissioned 4) AI-generated (last resort) | Never scrape competitor images | All assets licensed/owned | P0 |
| **5. DESIGN** | Aspect ratios | 16:9 hero; 3:2 editorial; 1:1 grid; 4:5 portrait; 21:9 cinematic | Consistent usage per block |  | P0 |
| **5. DESIGN** | Optimization | AVIF primary; WebP fallback; srcset 5 widths (480 768 1024 1440 1920); sizes per breakpoin... |  | Images not bottleneck | P0 |
| **6. BLOCKS** | Announcement Bar | Local positioning badge; dismissible | Global; subtle | Non-intrusive; not blocking | P1 |
| **6. BLOCKS** | Hero | Promise + H1 + support + CTA + premium visual | First image LCP-optimized | LCP <= 2.5s mobile | P0 |
| **6. BLOCKS** | Direct Answer | 40-80 words answering primary intent | Immediately after hero | Self-contained; factual | P0 |
| **6. BLOCKS** | Trust Strip | Logos / stats / credentials (real only) | Home and About | 0 fabricated | P0 |
| **6. BLOCKS** | Split Editorial | Image + text asymmetric | Service; About | Varying alignment | P0 |
| **6. BLOCKS** | Service Grid | 6-8 service cards | Home; hubs | Scannable; linked | P0 |
| **6. BLOCKS** | Feature List | Deliverables; what's included | Service pages | Clear scope | P0 |
| **6. BLOCKS** | Process Steps | 4-7 numbered stages | Service; About | Visual timeline | P0 |
| **6. BLOCKS** | Portfolio Preview | 3-6 project cards | Home; service | Each links to project page | P0 |
| **6. BLOCKS** | Case Study Teaser | Full-width proof block | Home; service | Real project only | P1 |
| **6. BLOCKS** | Before / After | Slider or side-by-side | Photo; renovation | Accessible controls | P1 |
| **6. BLOCKS** | Pricing Guidance | Factors affecting cost + CTA | Service pages | No fixed prices | P0 |
| **6. BLOCKS** | Comparison Table | Package tiers / features | Service; hub | Responsive; becomes vertical | P1 |
| **6. BLOCKS** | Testimonial | Real only with source | Home; service | Never invented | P0 |
| **6. BLOCKS** | FAQ Accordion | 6-10 unique Q per page | Commercial pages | Unique across site | P0 |
| **6. BLOCKS** | Related Services | 3-4 contextual cards | Service pages | Contextual internal links | P0 |
| **6. BLOCKS** | Journal Cards | 3 latest / relevant | Home; service | Unique titles and excerpts | P1 |
| **6. BLOCKS** | Location Block | Service area + local context | Home; service | No doorway content | P0 |
| **6. BLOCKS** | CTA Banner | Contextual final CTA | All pages | Varied copy | P0 |
| **6. BLOCKS** | Contact Form | Inline lead capture | Contact; service | Accessible; spam-protected | P0 |
| **6. BLOCKS** | Footer | Nav + services + contact + legal | Global | Consistent all languages | P0 |
| **6. BLOCKS** | Breadcrumbs | Semantic trail | Inner pages | With BreadcrumbList schema | P1 |
| **6. BLOCKS** | Bot Entry | Launch chat Telegram/WhatsApp | All pages | Context-aware preselection | P0 |
| **7. TEMPLATES** | Order | B01 B02 B03 B05 B06 B09 B08 B12 B18 B17 B19 | H1: Advertising & Creative Marketing Agency on Koh Phangan | All blocks present | P0 |
| **7. TEMPLATES** | Order | B22 B02 B03 B05 B07 B08 B09 B12 B14 B15 B16 B19 | H1: [Service] in Koh Phangan | 40-60 word direct answer | P0 |
| **7. TEMPLATES** | Order | B22 B02 B03 B05 B06 B09 B08 B18 B15 B19 | Sub-services grid |  | P0 |
| **7. TEMPLATES** | Order | B22 B02 B03 Filter Grid B19 | Category filters; location; service | Fast visual | P1 |
| **7. TEMPLATES** | Order | B22 B02 Facts Challenge Approach Execution Results B09 B19 | Real data only | No invented metrics | P1 |
| **7. TEMPLATES** | Order | B22 B02 Story Philosophy Approach Team(real) B04 B18 B19 | Human; credible | P0 |  |
| **7. TEMPLATES** | Order | B22 B02 B03 Options Form Map B15 B19 | Form + WhatsApp + Telegram + email + phone | Fast conversion | P0 |
| **8. COPY** | English first | EN canonical | RU/TH/HE adapted natively | No literal translation | P0 |
| **8. COPY** | One per page | Natural phrasing | No keyword stuffing | P0 |  |
| **8. COPY** | Service + location + value | Natural | P0 |  |  |
| **8. COPY** | Exact only where natural | Intent first | Readable | P0 |  |
| **8. COPY** | Cover entities; buyer questions; deliverables; process |  | P0 |  |  |
| **8. COPY** | Premium calm confident concise specific commercially useful |  | P0 |  |  |
| **8. COPY** | Koh Phangan naturally; local knowledge; island business context |  | P0 |  |  |
| **8. COPY** | take your business to the next level; unparalleled; one-stop solution; we turn dreams into reality; state-of-the-art; cutting-edge; synergy; game-changer; disruptive; world-class (unless verified); best in (unless verified); #1 (unless verified) | Enforced in CI | 0 matches | P0 |  |
| **8. COPY** | Explain factors; never invent fixed prices |  | P0 |  |  |
| **8. COPY** | Varied contextual; no repeated Learn More |  | P0 |  |  |
| **8. COPY** | Agency + advertising + content/production + Koh Phangan |  | P0 |  |  |
| **8. COPY** | Must add info; not repeat headings | Unique per page | P0 |  |  |
| **8. COPY** | Home 800-1400; Service 1000-1800; Hub 1200-2000; Portfolio 300-600; Case 800-1400; About 900-1500; Contact 500-900 | Never pad for length | P0 |  |  |
| **8. COPY** | 40-60 words near top | Self-contained | P0 |  |  |
| **8. COPY** | All facts traceable or [[VERIFY]] | Logged in NOTES.md | P0 |  |  |
| **9. LANGUAGE** | Canonical base | x-default |  | P0 |  |
| **9. LANGUAGE** | /ru/ | Native; Yandex-aware |  | P0 |  |
| **9. LANGUAGE** | /th/ | ICU line-breaking; Thai fonts |  | P0 |  |
| **9. LANGUAGE** | /he/ | dir=rtl; lang=he; true RTL layout |  | P0 |  |
| **9. LANGUAGE** | Rules | text-align start; margin-inline; mirror icons where directional; bdi for numbers/URLs/emai... |  | P0 |  |
| **9. LANGUAGE** | Reciprocal + x-default |  | P0 |  |  |
| **10. SEO** | One primary keyword cluster per indexable page |  | P0 |  |  |
| **10. SEO** | Primary near front; brand/location natural; unique |  | P0 |  |  |
| **10. SEO** | Topic + differentiator + local + action; unique |  | P0 |  |  |
| **10. SEO** | Natural human-readable; aligned with intent |  | P0 |  |  |
| **10. SEO** | Short stable lowercase hyphenated |  | P0 |  |  |
| **10. SEO** | Self-referencing |  | P0 |  |  |
| **10. SEO** | Canonical indexable only |  | P0 |  |  |
| **10. SEO** | Minimal; sitemap referenced |  | P0 |  |  |
| **10. SEO** | Organization WebSite WebPage BreadcrumbList Service FAQPage(where valid) ImageObject |  | P0 |  |  |
| **10. SEO** | Parent-child-sibling-project-journal |  | P0 |  |  |
| **10. SEO** | No two pages same primary intent |  | P0 |  |  |
| **10. SEO** | Only genuine unique intent | No doorway pages | P0 |  |  |
| **10. SEO** | Describe image; no keyword stuffing |  | P0 |  |  |
| **10. SEO** | Register in Webmaster; region Thailand; Metrica with goals |  | P0 |  |  |
| **10. SEO** | <= 70 chars; key at start |  | P0 |  |  |
| **10. SEO** | 150-200 chars; key + value |  | P0 |  |  |
| **10. SEO** | Create business card |  | P1 |  |  |
| **11. GEO** | Publish /llms.txt with site description services locations key URLs |  | P0 |  |  |
| **11. GEO** | Allow GPTBot ClaudeBot PerplexityBot Google-Extended CCBot in robots.txt |  | P0 |  |  |
| **11. GEO** | One page per entity (brand service location) with full definition |  | P0 |  |  |
| **11. GEO** | Question + short answer + detail in HTML | Not hidden in accordion | P0 |  |  |
| **11. GEO** | Tables: service timeline included excluded |  | P0 |  |  |
| **11. GEO** | X is ... in top section 40-80 words |  | P0 |  |  |
| **11. GEO** | Organization sameAs knowsAbout areaServed serviceType |  | P0 |  |  |
| **11. GEO** | Facts identical across 4 languages |  | P0 |  |  |
| **12. PERF** | <= 2.5s p75 |  | P0 |  |  |
| **12. PERF** | <= 200ms |  | P0 |  |  |
| **12. PERF** | <= 0.1 |  | P0 |  |  |
| **12. PERF** | <= 800ms |  | P1 |  |  |
| **12. PERF** | <= 50 KB gzip |  | P0 |  |  |
| **12. PERF** | <= 40 KB gzip |  | P0 |  |  |
| **12. PERF** | <= 120 KB gzip first load |  | P0 |  |  |
| **12. PERF** | <= 250 KB AVIF/WebP |  | P0 |  |  |
| **12. PERF** | <= 150 KB each |  | P0 |  |  |
| **12. PERF** | <= 2 families <= 4 weights subset |  | P0 |  |  |
| **12. PERF** | <= 1.5 MB mobile |  | P0 |  |  |
| **12. PERF** | <= 50 |  | P1 |  |  |
| **12. PERF** | <= 3 (GA consent bot) |  | P0 |  |  |
| **12. PERF** | >= 90 mobile >= 95 desktop |  | P0 |  |  |
| **12. PERF** | 100 |  | P0 |  |  |
| **12. PERF** | >= 95 |  | P0 |  |  |
| **12. PERF** | >= 95 |  | P0 |  |  |
| **13. A11Y** | Proper landmarks and heading order |  | P0 |  |  |
| **13. A11Y** | All interactive reachable |  | P0 |  |  |
| **13. A11Y** | Visible focus ring |  | P0 |  |  |
| **13. A11Y** | All form fields labeled |  | P0 |  |  |
| **13. A11Y** | Descriptive alt on all images |  | P0 |  |  |
| **13. A11Y** | WCAG AA |  | P0 |  |  |
| **13. A11Y** | Respected |  | P0 |  |  |
| **13. A11Y** | 0 critical/serious |  | P0 |  |  |
| **14. TECH** | Static-capable (Next.js SSG Astro Vite or justified alt) |  | P0 |  |  |
| **14. TECH** | SSG/SSR for SEO-critical |  | P0 |  |  |
| **14. TECH** | No admin panel no database |  | P0 |  |  |
| **14. TECH** | Minimal; documented |  | P0 |  |  |
| **14. TECH** | Static hosting CDN clean routes redirects headers caching |  | P0 |  |  |
| **14. TECH** | Structured; editable; ready for future CMS |  | P1 |  |  |
| **14. TECH** | Validate sanitize inputs; protect forms; no secrets client-side |  | P0 |  |  |
| **15. BOT** | Structured project intake; not generic AI chat |  | P0 |  |  |
| **15. BOT** | Language -> Service -> Location -> Project type -> Description -> Budget(opt) -> Timeline(opt) -> Files -> Contact -> Review/Edit -> Submit -> Handoff |  | P0 |  |  |
| **15. BOT** | Official Telegram Bot API |  | P0 |  |  |
| **15. BOT** | Official WhatsApp Business/Cloud API or approved provider |  | P0 |  |  |
| **15. BOT** | Multiple photos/plans/docs; validate type/size; fallback if upload fails |  | P0 |  |  |
| **15. BOT** | service location project_type description budget timeline name contact channel language attachments source URL/campaign timestamp |  | P0 |  |  |
| **15. BOT** | Service page preselects service; location page may preselect location; preserve UTM |  | P0 |  |  |
| **15. BOT** | Protect secrets; validate webhooks; rate-limit; sanitize; validate uploads; avoid sensitive logging |  | P0 |  |  |
| **15. BOT** | EN/RU/TH/HE localized; Hebrew RTL-safe |  | P0 |  |  |
| **15. BOT** | Available at every stage |  | P0 |  |  |
| **15. BOT** | 13 services x 5 locations x 4 languages + edits/back/restart/attachments/submit/handoff |  | P0 |  |  |
| **16. ANALYTICS** | page_view scroll_75 cta_click form_start form_submit form_error bot_start bot_step bot_attachment bot_submit bot_handoff whatsapp_click telegram_click phone_click email_click language_switch article_read_75 project_view |  | P0 |  |  |
| **16. ANALYTICS** | Goals for form bot_start bot_submit call whatsapp |  | P0 |  |  |
| **16. ANALYTICS** | Verify domain; inspect representative URLs; submit sitemap |  | P0 |  |  |
| **16. ANALYTICS** | Rank tracking 30 keywords before launch |  | P1 |  |  |
| **16. ANALYTICS** | Weekly automated report (Looker Studio) |  | P1 |  |  |
| **17. COMPLIANCE** | Accept/Reject/Settings; blocks GA and Meta Pixel until consent |  | P0 |  |  |
| **17. COMPLIANCE** | PDPA + GDPR aware |  | P0 |  |  |
| **17. COMPLIANCE** | Consent for marketing; legitimate interest for analytics with opt-out |  | P0 |  |  |
| **17. COMPLIANCE** | Defined for leads and uploaded files |  | P0 |  |  |
| **17. COMPLIANCE** | Signed with Telegram WhatsApp/Meta hosting analytics |  | P0 |  |  |
| **17. COMPLIANCE** | Access/deletion request form |  | P0 |  |  |
| **17. COMPLIANCE** | Auto-delete after N days; no public URLs |  | P0 |  |  |
| **17. COMPLIANCE** | Services payment IP responsibility |  | P0 |  |  |
| **17. COMPLIANCE** | Separate page with contact |  | P1 |  |  |
| **18. EEAT** | /about/authors/[slug]/ with photo experience sameAs Person schema |  | P0 |  |  |
| **18. EEAT** | /editorial-policy/ |  | P0 |  |  |
| **18. EEAT** | Team experience location licenses (real only) |  | P0 |  |  |
| **18. EEAT** | Physical address phone email map legal entity |  | P0 |  |  |
| **18. EEAT** | Verified sources only |  | P0 |  |  |
| **18. EEAT** | Real projects with photos dates client (where allowed) |  | P1 |  |  |
| **18. EEAT** | Authoritative sources in Journal >= 2 per article |  | P1 |  |  |
| **18. EEAT** | dateModified in schema and UI |  | P0 |  |  |
| **18. EEAT** | Privacy Terms Cookies PDPA Accessibility |  | P0 |  |  |
| **19. LINKING** | Programmatic build: all URLs + types + topics |  | P0 |  |  |
| **19. LINKING** | Parent hub 2-3 siblings 2-3 projects 1 location 1-2 journal contact |  | P0 |  |  |
| **19. LINKING** | 2-3 services 1 location 2 siblings contact |  | P0 |  |  |
| **19. LINKING** | 3-5 services 2-3 projects contact |  | P0 |  |  |
| **19. LINKING** | 2-3 services 1-2 projects 1 location related journal |  | P0 |  |  |
| **19. LINKING** | 0 orphan commercial pages |  | P0 |  |  |
| **19. LINKING** | Important pages <= 3 clicks from root |  | P0 |  |  |
| **19. LINKING** | Varied; descriptive; not exact-match every time |  | P0 |  |  |
| **19. LINKING** | Max 30 links; no keyword dump |  | P0 |  |  |
| **20. TESTS** | Production build passes |  | P0 |  |  |
| **20. TESTS** | tsc --noEmit clean |  | P0 |  |  |
| **20. TESTS** | JS <= 120 KB gzip/page; CSS <= 40 KB |  | P0 |  |  |
| **20. TESTS** | 0 errors |  | P0 |  |  |
| **20. TESTS** | Exactly 1 per page |  | P0 |  |  |
| **20. TESTS** | No H1->H3 skips |  | P0 |  |  |
| **20. TESTS** | 0 matches |  | P0 |  |  |
| **20. TESTS** | 0 matches |  | P0 |  |  |
| **20. TESTS** | Within +/-20% of norm per page type |  | P0 |  |  |
| **20. TESTS** | Title H1 meta first paragraph |  | P0 |  |  |
| **20. TESTS** | 40-60 words in top block |  | P0 |  |  |
| **20. TESTS** | 6+ unique per commercial page |  | P0 |  |  |
| **20. TESTS** | 0 dups |  | P0 |  |  |
| **20. TESTS** | Present non-empty non-stuffed |  | P0 |  |  |
| **20. TESTS** | Self-reference |  | P0 |  |  |
| **20. TESTS** | Reciprocal valid |  | P0 |  |  |
| **20. TESTS** | Canonical indexable only |  | P0 |  |  |
| **20. TESTS** | Valid; 0 errors |  | P0 |  |  |
| **20. TESTS** | 0 |  | P0 |  |  |
| **20. TESTS** | 0 broken 0 orphan |  | P0 |  |  |
| **20. TESTS** | <= 3 for important |  | P0 |  |  |
| **20. TESTS** | 0 missing all 4 languages |  | P0 |  |  |
| **20. TESTS** | dir=rtl lang=he |  | P0 |  |  |
| **20. TESTS** | No broken headings |  | P0 |  |  |
| **20. TESTS** | 0 blocks |  | P0 |  |  |
| **20. TESTS** | 0 critical/serious |  | P0 |  |  |
| **20. TESTS** | All interactive |  | P0 |  |  |
| **20. TESTS** | All interactive |  | P0 |  |  |
| **20. TESTS** | LCP <= 2.5s INP <= 200ms CLS <= 0.1 Perf >= 90 |  | P0 |  |  |
| **20. TESTS** | Hero <= 250 KB others <= 150 KB |  | P0 |  |  |
| **20. TESTS** | 0 dead links |  | P0 |  |  |
| **20. TESTS** | Validation success error |  | P0 |  |  |
| **20. TESTS** | Open close Escape focus trap |  | P0 |  |  |
| **20. TESTS** | Preserves current page |  | P0 |  |  |
| **20. TESTS** | 13 services x 5 locations x 4 languages |  | P0 |  |  |
| **20. TESTS** | Type/size/error |  | P0 |  |  |
| **20. TESTS** | 6 breakpoints x 4 languages |  | P1 |  |  |
| **20. TESTS** | 0 errors all templates |  | P0 |  |  |
| **20. TESTS** | Representative URLs indexed |  | P0 |  |  |
| **20. TESTS** | Footer/contact/schema |  | P0 |  |  |
| **21. CONTENT OPS** | 2 articles/month per site; topics from keyword map |  | P1 |  |  |
| **21. CONTENT OPS** | Review every article 6 months; update dateModified |  | P1 |  |  |
| **21. CONTENT OPS** | Monthly report on pages dropping > 5 positions |  | P1 |  |  |
| **21. CONTENT OPS** | URL intent keyword word count schema last updated owner |  | P1 |  |  |
| **21. CONTENT OPS** | Quarterly; no two pages same intent |  | P1 |  |  |
| **21. CONTENT OPS** | No traffic + no links 12 months -> merge/noindex/delete |  | P1 |  |  |
| **21. CONTENT OPS** | Draft -> Fact-check -> Edit -> SEO review -> Publish |  | P1 |  |  |
| **22. QA DOD** | Premium editorial visual system; consistent typography spacing; varied layouts; no template feel |  | P0 |  |  |
| **22. QA DOD** | Complete copy CTA FAQs internal links; no filler; no fabricated claims |  | P0 |  |  |
| **22. QA DOD** | Titles H1 meta canonicals sitemap robots hreflang schema hierarchy verified |  | P0 |  |  |
| **22. QA DOD** | No overflow clipping broken grids unreadable type at target widths |  | P0 |  |  |
| **22. QA DOD** | Menus forms links sliders language switcher CTAs work; no dead ends |  | P0 |  |  |
| **22. QA DOD** | LCP INP CLS optimized; media compressed; minimal JS; Lighthouse passed |  | P0 |  |  |
| **22. QA DOD** | Keyboard focus labels headings alt reduced motion verified |  | P0 |  |  |
| **22. QA DOD** | EN/RU/TH/HE complete and natural; Hebrew true RTL; no untranslated fragments |  | P0 |  |  |
| **22. QA DOD** | Re-test shared components after template change |  | P0 |  |  |
| **22. QA DOD** | No P0/P1 defects; production build passes; sitemap/robots/canonicals validated; launch checklist done |  | P0 |  |  |
| **23. DELIVERABLES** | Production-ready responsive site |  | P0 |  |  |
| **23. DELIVERABLES** | Complete core copy all pages all languages |  | P0 |  |  |
| **23. DELIVERABLES** | Metadata schema internal linking sitemap robots |  | P0 |  |  |
| **23. DELIVERABLES** | README NOTES.md content inventory launch checklist |  | P0 |  |  |
| **23. DELIVERABLES** | Telegram + WhatsApp integrated; documented |  | P0 |  |  |
| **23. DELIVERABLES** | Automated test suite + CI config |  | P0 |  |  |
| **- Сайт — editorial creative agency уровня Pentagram** |  |  |  |  |  |
| **- Крупная editorial типографика** | generous whitespace |  |  |  |  |
| **- Reusable: Announcement Bar** | Direct Answer | Trust Strip | Service Grid | Portfolio | Case Study |
| **- Mobile-first (320-430px база** |  |  |  |  |  |
| **- Core Web Vitals: LCP ≤ 2.5s** | CLS ≤ 0.1 |  |  |  |  |
| **- Images: AVIF/WebP** | lazy-load | preload только hero |  |  |  |
| **- Минимум JS** |  |  |  |  |  |
| **- Semantic HTML + JSON-LD schema (Organization** | BreadcrumbList | FAQPage | Article) |  |  |
| **- Internal link graph — все страницы связаны** |  |  |  |  |  |
| **- Content clusters для каждой ниши (advertising** | villas | food | web) |  |  |
| **- Sub-services с уникальными landing** |  |  |  |  |  |
| **- Contextual CTA: service page preselects service** |  |  |  |  |  |
| **- Security: sanitize input** | validate uploads | protect webhooks |  |  |  |
| **- EN (канонический / x-default): /** | /social-media/... |  |  |  |  |
| **- RU: /ru/** | /ru/social-media/... |  |  |  |  |
| **- TH: /th/** | /th/social-media/... |  |  |  |  |
| **- HE (RTL): /he/** | /he/social-media/... |  |  |  |  |
| **- Каждый язык — полноценная копия контента** |  |  |  |  |  |
| **- Единая структура URL** |  |  |  |  |  |
| **- **Временные изображения**: тематические placeholders (реклама** | еда | виллы) из лицензированных источников или web.archive |  |  |  |
| **- **Hero слайдер**: 3-5 изображений** | CTA overlay |  |  |  |  |
| **- **Portfolio слайдер**: swipe + keyboard + arrows + pagination** |  |  |  |  |  |
| **- **Все изображения**: AVIF/WebP** | explicit w/h | lazy-load | preload только hero |  |  |

---



---

## 💰 ТАБЛИЦЫ ЦЕН НА КАЖДОЙ СТРАНИЦЕ УСЛУГИ

### Обязательное требование

На каждой странице услуги/продукта — блок с примерными ценами на популярные услуги в виде таблицы.

### Формат

| Услуга | Ценовой диапазон | Примечания |
|--------|-----------------|-----------|
| Professional photo shoot (catalogue, 10 items) | THB 5,000 – 15,000 | Per session, includes processing |
| Social media content pack (15 photos) | THB 8,000 – 20,000 | Edited, ready to post |
| Video production (60s commercial) | THB 25,000 – 60,000 | Filming + editing + music |
| Food photography (per dish) | THB 1,500 – 4,000 | Styling included |
| Brand identity (logo + guidelines) | THB 30,000 – 80,000 | Per project |
| Website design (5-page landing) | THB 40,000 – 100,000 | Responsive + SEO-ready |
| SMM management (per month) | THB 15,000 – 40,000 | Content + posting + analytics |

> ⚠️ Цены — оценочные, на основе среднерыночных по Koh Phangan. Дисклеймер: "Prices are indicative. Each project is unique — contact us for a detailed quote."

### Где размещать
- После описания услуги, до FAQ
- С дисклеймером
- JSON-LD Schema markup с `estimatedPrice` для Rich Results

---


## 🧪 ФИНАЛЬНОЕ ТЕСТИРОВАНИЕ — ОБЯЗАТЕЛЬНО

После того как любой элемент сайта готов (страница, блок, компонент, бот, форма) — **он должен быть протестирован**, прежде чем считаться завершённым.

### Что тестировать:

| Что проверяем | Как проверяем |
|---|---|
| **Тексты** | Орфография, грамматика, осмысленность, отсутствие lorem ipsum |
| **Вёрстка** | Ничего не наезжает, нет переполнений, отступы одинаковые |
| **Дизайн** | Соответствует визуальному стилю, цвета/шрифты/иконки согласованы |
| **Мобильная версия** | Все breakpoints (320-430px, 768px, 1440-1920px), нет горизонтального скролла |
| **Ссылки** | 0 битых, все ведут куда надо |
| **Формы** | Валидация, успешная отправка, обработка ошибок |
| **Боты (TG/WhatsApp)** | Все сценарии: выбор услуги → локация → бюджет → контакт = успешная заявка |
| **SEO** | title, H1, meta, canonical, hreflang, schema, alt — всё на месте |
| **Скорость** | LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms |
| **Доступность** | axe-core: 0 critical/serious, клавиатурная навигация |

**Правило:** ни одна страница не считается готовой, пока не прошла все проверки выше.

---

## 💰 ТАБЛИЦЫ ЦЕН НА КАЖДОЙ СТРАНИЦЕ УСЛУГИ

### Обязательное требование

На каждой странице услуги/продукта — блок с примерными ценами на популярные услуги в виде таблицы.

### Пример таблицы

| Услуга | Ценовой диапазон | Примечания |
|--------|-----------------|-----------|
| Professional photo shoot (catalogue, 10 items) | THB 5,000 – 15,000 | Per session, includes processing |
| Social media content pack (15 photos) | THB 8,000 – 20,000 | Edited, ready to post |
| Video production (60s commercial) | THB 25,000 – 60,000 | Filming + editing + music |
| Food photography (per dish) | THB 1,500 – 4,000 | Styling included |
| Brand identity (logo + guidelines) | THB 30,000 – 80,000 | Per project |
| Website design (5-page landing) | THB 40,000 – 100,000 | Responsive + SEO-ready |
| SMM management (per month) | THB 15,000 – 40,000 | Content + posting + analytics |

> ⚠️ Цены оценочные. Дисклеймер: "Prices are indicative. Each project is unique — contact us for a detailed quote."

### Куда вставить
- После описания услуги, до FAQ
- JSON-LD Schema markup с `estimatedPrice` для Rich Results

---



---

## 🎨 ДИЗАЙН-КОД — УНИКАЛЬНЫЙ ВИЗУАЛЬНЫЙ ИДЕНТИТЕТ

### Принцип
Сайт не должен выглядеть как шаблон. Уникальный дизайн с отсылками к:
- **Примитивным формам** — петроглифы, линии, точки, спирали (как текстура фона, opacity 3-5%)
- **Сакральной геометрии** — Flower of Life, Golden Ratio, Фибоначчи (как разделители секций)
- **Пещерным/наскальным мотивам** — стилизованные линии, руны, древние символы (как декоративные элементы)
- **Творческому хаосу** — брызги, мазки, текстуры краски/холста (offset для креативного агентства)

Всё в премиум-сегменте. Минимализм. Монохром (white + ink + terracotta). Никакой этники/бoho.

### Шрифты
- Display: Fraunces (антиква с характером)
- Body: Inter (чистый, современный)  
- Акценты: рукописный / кастомный логотип

### Цвета
- Ink #141210
- Stone #f7f4ef
- Terracotta #b8714a
- Olive #5a5f45

---

## 🏷️ ЛОГОТИП

Создать графический SVG-логотип для CreativeLAB:
- Минималистичный символ
- Отсылка к творчеству/созданию (абстрактная форма)
- Монохромный
- Эффекты: hover glow, slow float pulse на hero, ink stamp fade-in
- Размещение: хедер, favicon, футер, hero overlay

---

## 📢 ТЕКСТ НА БАННЕРЕ (HERO)

Усилить читаемость текста на hero-слайдере:
- Более тёмный градиентный overlay
- backdrop-blur на текст (glassmorphism)
- text-shadow
- Уменьшить яркость фоновых изображений

---

## 🗿 AdFoto.com.ua — РЕФЕРЕНС ДЛЯ CREATIVELAB

Для CreativeLAB.in.th **AdFoto.com.ua** — референс.
Нужно использовать историческую версию AdFoto именно через Web Archive / Wayback Machine и найти максимально полную сохранённую версию сайта.
Нас интересует не только структура сайта, а буквально весь полезный материал, который можно использовать при создании и расширении CreativeLAB.

### Источник
https://web.archive.org/web/20220408023113/https://adfoto.com.ua/

### Что изучить в AdFoto

Из AdFoto нужно изучить и при возможности сохранить:

- структуру сайта;
- структуру каждой страницы;
- размер и объём текстов;
- заголовки H1/H2/H3;
- Title и Description;
- структуру блоков;
- порядок блоков;
- услуги и их группировку;
- отдельные страницы услуг;
- коммерческие формулировки;
- преимущества;
- описания процессов;
- FAQ;
- CTA;
- формы;
- портфолио и кейсы;
- фотографии;
- подписи к фотографиям;
- alt;
- внутренние ссылки;
- меню;
- SEO-структуру;
- любые другие элементы, которые могут быть полезны CreativeLAB.

Особенно важно посмотреть **объём текстов на страницах**. Нам нужен реальный ориентир: насколько подробно AdFoto раскрывал каждую услугу, сколько было блоков и какой объём контента использовался для коммерческой SEO-страницы.

### Контент

Если текст AdFoto релевантен CreativeLAB, его можно использовать как исходный материал.
Не обязательно переписывать всё с нуля.
Можно:

- взять релевантную часть текста;
- адаптировать под CreativeLAB;
- изменить географию и контекст на Koh Phangan;
- объединить с нашим ТЗ;
- дополнить современными SEO-требованиями;
- затем профессионально перевести на русский, тайский и другие необходимые языки.

То есть **AdFoto может быть источником исходного контента**, если конкретный материал действительно подходит CreativeLAB.

### Фотографии

Фотографии AdFoto также исследовать максимально полно.
Если изображения доступны из Web Archive, зафиксировать:

- оригинальный архивный URL;
- страницу, где изображение использовалось;
- назначение изображения;
- размер/формат, если доступен;
- к какому разделу или услуге оно относится.

Если технически возможно и допустимо сохранить изображения из архива — сохранить их отдельно.
Не нужно автоматически отбрасывать фотографии только потому, что это старый сайт. Нам важно понять, какие визуальные материалы использовались для продажи конкретных услуг и какие из них потенциально можно использовать как референс или исходный материал.

### Главный принцип

Не делать простое:
**«Посмотрели AdFoto → написали похожий сайт».**

Нужно сделать:
**AdFoto Web Archive → полностью разобрали → сохранили структуру, контент, услуги, тексты, объём, блоки и визуальные материалы → сравнили с нашим ТЗ → адаптировали лучшее под CreativeLAB.**

CreativeLAB уже существует, поэтому ничего хорошего из текущей версии не удалять.

Нужно определить:

- Что из AdFoto стоит добавить в CreativeLAB.
- Что из AdFoto стоит расширить в уже существующих страницах.
- Какие страницы CreativeLAB стоит создать.
- Какие тексты можно адаптировать.
- Какие фотографии можно использовать или взять за референс.
- Какой объём текста нужен для каждой страницы.
- Какие SEO-элементы можно улучшить на основе AdFoto.
- Какие решения AdFoto устарели и использовать их не нужно.

В финале подготовить **подробную карту AdFoto → CreativeLAB** с конкретными рекомендациями по каждой странице.

**Главное:** не потерять ни структуру, ни тексты, ни фотографии, ни услуги, ни объём контента оригинального AdFoto. Сначала максимально полно собрать материал, потом принимать решения, что именно переносить и адаптировать.

---

## 🔄 5 ВАРИАНТОВ ГЛАВНОЙ СТРАНИЦЫ

> Отдельные маршруты: /v1/, /v2/, /v3/, /v4/, /v5/

### V1 — Editorial / Креативный журнал
- Hero: full-screen творческая съёмка + H1
- Меню: Advertising | Photography | Video | Social Media | Branding | Contact
- Стиль: editorial fashion, белое пространство, крупная типографика

### V2 — Premium Agency / Премиум агентство
- Hero: dark video + параллакс + анимации
- Меню: Work (mega menu с портфолио) | Services | Process | Contact
- Стиль: тёмный, брутальный, петроглифы как текстура

### V3 — Studio / Фотостудия
- Hero: одно крупное портфолио-изображение
- Меню: Portfolio | Services | About | Contact
- Стиль: светлый, gallery aesthetic, minmal

### V4 — Digital Agency / Цифровое
- Hero: интерактивный / 3D / сетка
- Меню: Strategy | Creative | Production | Digital | Contact
- Стиль: футуристичный, чистая геометрия, микровзаимодействия

### V5 — Tropical Creative / Тропический креатив
- Hero: тёплое фото KP + H1
- Меню: Photography on KP | Branding | Social Media | Video | Our Work | Contact
- Стиль: тёплый, locally grounded, но премиум

---

## 🔐 АУТЕНТИЧНОСТЬ

- Уникальные фото (не сток) — заменить real images
- Асимметричная сетка (не 12-col)
- Full-bleed / broken grid секции
- Кастомные микро-анимации
- Пустота как элемент дизайна
- Никаких шаблонных решений

