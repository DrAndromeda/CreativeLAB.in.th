# IMPROVEMENTS — CreativeLAB.in.th

> Креативное агентство, реклама + production на Koh Phangan
> База: proposal.md | Репозиторий: DrAndromeda/CreativeLAB.in.th
> Дата: 22 Sep 2026 | Статус: Ранняя стадия (~15% proposal)

---

## 🎯 МИССИЯ

Создать **премиум сайт креативного агентства**:
- Editorial aesthetic уровня Pentagram
- 8 направлений услуг с 50+ подстраницами
- 4 языка (EN/RU/TH/HE) с Hebrew RTL
- Telegram + WhatsApp боты как intake funnel
- SEO/GEO: Direct Answer, FAQ, schema, hreflang на каждой странице
- **3000+ URL** в финальной версии

---

## ⚠️ КРИТИЧЕСКИЕ ПРАВИЛА

1. **4 языка — мандаторий.** Каждая страница на всех 4 языках. Не машинный перевод.
2. **Контент depth:** pillar 1500+, spoke 800+, portfolio 500+.
3. **Hebrew — true RTL:** dir=rtl, числа/email LTR внутри RTL, иконки зеркалятся.
4. **Static export:** без серверных функций, всё статика для GitHub Pages.
5. **SEO:** Direct Answer (50-80 слов) + JSON-LD на каждой странице.
6. **Визуал:** крупная типографика, editorial aesthetic, cinematic imagery.

---

## 📊 ПРИОРИТЕТЫ

| P0 | P1 | P2 |
|---|---|---|
| Языковой переключатель | ~35 подстраниц услуг | Анимации |
| Контент RU/TH/HE (1500+ слов) | Portfolio / Case Studies | Беклинки |
| TextSection (H2-секции) | SEO: sitemap/robots/llms.txt | Twitter карточки |
| H1-заголовки | Мобильное меню | Блог/журнал |
| | JSON-LD (LocalBusiness, FAQPage, Article) | |

---

## 🔴 P0 — КРИТИЧЕСКИЕ (не выполнены)

### 1. Языковой переключатель

**Текущее:** В Header.tsx нет переключателя языка. Пользователь не может сменить язык.

**ТЗ требует:** EN/RU/TH/HE с выбором в интерфейсе.

- [ ] Добавить `<LanguageSwitcher>` компонент в Header
- [ ] Показывать текущий язык, список всех 4
- [ ] Переключение без потери URL (сохранять путь)
- [ ] hreflang на каждую языковую версию
- [ ] Адаптив: mobile (в burger), desktop (в хедере)

### 2. Контент на RU, TH, HE — полный перевод

**Текущее:** Весь контент ТОЛЬКО на EN. 4 локали рендерят одинаковый EN контент.

**ТЗ требует:** "Минимум 1500 слов на каждой странице на каждом языке."

- [ ] Создать структуру переводов: `src/content/{locale}/`
- [ ] RU: полный перевод всех страниц (главная, 8 hubs, portfolio, about, contact, FAQ)
- [ ] TH: полный перевод (уникальный текст, не копия EN)
- [ ] HE: полный перевод + true RTL layout
- [ ] Каждая страница: уникальные title/description/H1 на каждом языке
- [ ] FAQ на каждом языке
- [ ] Alt-тексты изображений на каждом языке
- [ ] Меню, breadcrumbs, CTA — на языке

**Приёмка:**
- [ ] Нет ни одной страницы только на EN
- [ ] hreflang рабочий для всех 5 вариантов
- [ ] Hebrew RTL визуально проверен

### 3. H1-заголовки — с SEO-расширениями

**Текущее:** H1 = голое название страницы без SEO.

**ТЗ требует:** H1 с ключами.

- [ ] Главная: `"Advertising & Creative Marketing Agency on Koh Phangan | CreativeLAB"`
- [ ] Каждая hub-страница: `"{Service} – {Location} | CreativeLAB"`
- [ ] Каждая sub-service: `"{Sub-service} for {audience} on Koh Phangan"`
- [ ] Проверить: один H1 на страницу

### 4. TextSection (H2-секции) — структура контента

**Текущее:** 8 hub-страниц = пустые, нет боди-текста, нет H2-секций.

**ТЗ требует:**
- [ ] Pillar intro (H2 + 200-400 слов)
- [ ] Direct Answer (H2 + 50-80 слов)
- [ ] Service details (H2 + 500+ слов)
- [ ] FAQ (H2 + аккордеон)
- [ ] CTA (H2 + кнопка)

**Для каждой hub-страницы:**
- `/advertising` → Google Ads, Meta Ads, campaign strategy, budget, FAQ
- `/social-media` → Instagram, TikTok, content strategy, Reels, FAQ
- `/villas-real-estate` → property photography, drone, virtual tours, FAQ
- `/food-restaurants` → food photography, menu design, styling, FAQ
- `/business-local-presence` → GBP, Maps, local SEO, reputation, FAQ
- `/websites-digital` → web design, SEO, AI search, FAQ
- `/video-production` → commercial video, Reels, drone, FPV, brand films, FAQ
- `/branding-creative` → brand identity, graphic design, creative direction, FAQ

---

## 🟡 P1 — SEO, ДИЗАЙН, НОВЫЕ БЛОКИ

### 5. ~35 подстраниц услуг

**ТЗ:** 8 hubs + ~4-5 sub-pages per hub = ~35-40 страниц.

- [ ] Advertising: Google Ads, Meta Ads, Campaign Launch, Performance Marketing
- [ ] Social Media: Instagram, TikTok, Facebook, Content Strategy, Community
- [ ] Villas & Real Estate: Photography, Drone, Video, Property Marketing
- [ ] Food & Restaurants: Food Photo, Menu Design, Styling, Content
- [ ] Business & Local: GBP, Maps, Local SEO, Reputation
- [ ] Websites & Digital: Web Design, SEO, Landing Pages, AI Search
- [ ] Video & Production: Commercial, Reels, Drone, FPV, Brand Films
- [ ] Branding & Creative: Identity, Graphic Design, Creative Direction

**Каждая sub-page:**
- [ ] H1 + Direct Answer (50-80 слов)
- [ ] H2-секции: 800+ слов контента
- [ ] FAQ (3-5 вопросов + JSON-LD)
- [ ] Portfolio примеры (3-5 работ)
- [ ] CTA
- [ ] На всех 4 языках

### 6. Portfolio / Case Studies

**Текущее:** Reference imagery (сток/Unsplash).

**ТЗ требует:** Реальные кейсы.

- [ ] Страница `/portfolio/` с masonry-сеткой
- [ ] `/case-studies/` с детальными кейсами
- [ ] Фильтры по категориям работ
- [ ] Lightbox для галерей
- [ ] JSON-LD: `ImageGallery`, `CreativeWork`

### 7. SEO-фундамент

- [ ] `sitemap.xml` — все страницы всех языков
- [ ] `robots.txt` — разрешить AI-ботов
- [ ] `llms.txt` + `llms-full.txt`
- [ ] JSON-LD:
  - `LocalBusiness` (адрес, часы, телефон)
  - `FAQPage` на каждой странице
  - `Service` для каждого направления
  - `ImageGallery` для портфолио
  - `Article` / `BlogPosting` для журнала
- [ ] Canonical на каждой странице
- [ ] hreflang (5 вариантов: en/ru/th/he + x-default)
- [ ] OG / Twitter карточки
- [ ] Semantic HTML5
- [ ] BreadcrumbList JSON-LD

### 8. Мобильное меню

**Текущее:** Navigation buttons в хедере, нет mobile-адаптации.

- [ ] Бургер-меню на mobile
- [ ] 8 hubs + More dropdown
- [ ] Language switcher в меню
- [ ] CTA (Start a Project) в меню
- [ ] Плавное открытие/закрытие
- [ ] Адаптив: все breakpoints

### 9. Дизайн — editorial premium

**ТЗ:** "Editorial creative agency уровня Pentagram."

- [ ] **Крупная типографика** (80px+ заголовки на hero)
- [ ] **Cinematic imagery** — не сток, а стилизованные фото
- [ ] **Единая цветовая палитра** — акцент + нейтральные
- [ ] **Анимации** — сдержанные, при скролле (reveal, fade)
- [ ] **Сетка** — строгая, editorial
- [ ] **Hero-секция** — fullscreen с изображением + крупный заголовок
- [ ] **Блоки услуг** — masonry или grid с иконками
- [ ] **CTA** — контрастная кнопка, заметная

---

## 🔵 P2 — УЛУЧШЕНИЯ

### 10. Производительность

- [ ] Lighthouse: Perf ≥ 85, SEO 100, A11y ≥ 90
- [ ] Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1
- [ ] Изображения: AVIF/WebP, lazy, responsive
- [ ] Критический CSS inline

### 11. Социальные интеграции

- [ ] Instagram feed на сайте
- [ ] Telegram bot preview
- [ ] WhatsApp direct link
- [ ] Facebook / LinkedIn ссылки

### 12. Беклинки (3 месяца)

- [ ] Behance / Dribbble для портфолио
- [ ] Creative directories (DesignRush, Sortfolio)
- [ ] Koh Phangan business listings
- [ ] Гостевые статьи на travel/real estate блогах

### 13. BRO-SERVICE: Доставка цветов Copang на KP

**Концепция:** Одна страница-визитка для сервиса доставки цветов на Koh Phangan.
Не в главном меню, ссылка в футере + sitemap. Индексируется, но не продвигается.

**Где:** `/{lang}/flower-delivery-copang/`

**Что сделать:**
- [ ] Создать страницу `/flower-delivery-copang/`
- [ ] H1: «Flower Delivery on Koh Phangan — Copang»
- [ ] SEO title + description (50-60 / 140-160 chars)
- [ ] Direct Answer 50-80 слов
- [ ] H2-секции: ассортимент, зоны доставки, цены, FAQ
- [ ] FAQ 5 вопросов (сроки, зоны, оплата, минимальный заказ)
- [ ] JSON-LD: `LocalBusiness` + `FAQPage`
- [ ] Кнопки: WhatsApp + Telegram для заказа
- [ ] Ссылка в футере: `Flower Delivery — Copang`
- [ ] `sitemap.xml` — добавить
- [ ] Все 4 языка (EN/RU/TH/HE)
- [ ] hreflang + canonical

**Дизайн:**
- Hero: крупное фото букета / цветов KP
- Минималистичный, editorial стиль (как весь сайт)
- Акцент: яркие фото цветов, CTA
- Не добавлять в главную навигацию (только футер)

---

## ✅ ЧТО УЖЕ СДЕЛАНО

- ✅ Next.js 16, static export на GitHub Pages
- ✅ 8 hub-страниц (структура)
- ✅ Hero-секция + Why + What We Do + How We Work
- ✅ JSON-LD (Organization, WebPage, BreadcrumbList)
- ✅ Canonical + hreflang в head
- ✅ Contact form (server-side Telegram)
- ✅ SECURITY.md — токены не в клиенте
- ✅ Static export: basePath fix, locale routing

---

## 🧭 СТРУКТУРА САЙТА (~3000 URL в финале)

```
/{lang}/                          → Главная
/{lang}/advertising/              → Advertising hub
/{lang}/advertising/google-ads/   → Sub-service
/{lang}/advertising/meta-ads/     → Sub-service
/{lang}/social-media/             → Social Media hub
/{lang}/social-media/instagram/   → Sub-service
/{lang}/villas-real-estate/       → Villas hub
/{lang}/villas-real-estate/photo/ → Sub-service
/{lang}/food-restaurants/         → Food hub
/{lang}/food-restaurants/photo/   → Sub-service
/{lang}/business-local-presence/  → Local hub
/{lang}/websites-digital/         → Web hub
/{lang}/websites-digital/seo/     → Sub-service
/{lang}/video-production/         → Video hub
/{lang}/branding-creative/        → Branding hub
/{lang}/portfolio/                → Портфолио
/{lang}/portfolio/{project}/      → Проект
/{lang}/about/                    → О компании
/{lang}/contact/                  → Контакты
/{lang}/faq/                      → FAQ
/{lang}/journal/                  → Журнал
/{lang}/journal/{post}/           → Статья
```

---

## 📐 ТЕХНИЧЕСКИЙ СТЕК

- Next.js 16 (static export)
- React 19 + Tailwind CSS 4
- 4 языка: EN/RU/TH/HE (i18n routing)
- Hebrew RTL: dir="rtl", mirror icons
- GitHub Pages (gh-pages branch)
- JSON-LD Schema.org
- Semantic HTML5
- AVIF/WebP изображения
- Static-first: без серверных функций