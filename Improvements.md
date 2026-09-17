# Improvements.md — CreativeLAB.in.th

> **Что это:** полное комплексное ТЗ на улучшение сайта
> `https://creativelab.in.th` — дизайн, функционал, блоки, текст, SEO, AI,
> боты, локализация, производительность. Читается Claude Code сверху вниз.
> **Как работать:** раздел 22 «Claude Code Instructions» — первым.
> Раздел 0 — текущий статус. Раздел 19 — чек-лист приёмки.
> **Секреты и реальные данные** — только в `.env` / GitHub Secrets.
> Плейсхолдеры `<...>` — заполняет владелец, Claude их не выдумывает.

---

## 0. Статус: что сделано и что нет

Легенда: `[DONE]` / `[PARTIAL]` / `[TODO]` / `[BLOCKED]` / `[QUESTION]`.

### 0.1. Документация
- [DONE] `proposal.md` — оригинальное ТЗ.
- [DONE] `Improvements.md` — этот файл.
- [TODO] `CONFIG.md` — данные владельца (телефоны, токены, адреса).
- [TODO] `.env.example` — плейсхолдеры секретов.
- [TODO] `README.md` — обзор репозитория.

### 0.2. Дизайн
- [TODO] Design tokens (палитра, типографика, spacing).
- [TODO] Логотип, favicon.
- [TODO] Design system (компоненты, состояния).
- [TODO] Библиотека luxury blocks.
- [TODO] Petroglyph-глифы.
- [TODO] Анимации высекания.
- [TODO] Схема на каждую страницу.

### 0.3. Контент
- [TODO] Уникальный текст 10/10 на 4 языках.
- [TODO] Direct Answer на каждой странице.
- [TODO] 50+ подуслуг.
- [TODO] Кейсы / портфолио.
- [TODO] Журнал.
- [TODO] FAQ.

### 0.4. Функционал
- [TODO] Header / footer / nav / lang switcher.
- [TODO] Внутренний поиск.
- [TODO] Формы.
- [TODO] Telegram bot.
- [TODO] WhatsApp bot.
- [TODO] Price tables.
- [TODO] Process schemas / Work plans.
- [TODO] Featured snippets blocks.

### 0.5. Технический слой
- [TODO] Фреймворк (Next.js App Router + TS).
- [TODO] i18n (next-intl).
- [TODO] JSON-LD.
- [TODO] `llms.txt` + `llms-full.txt`.
- [TODO] `robots.txt` + `sitemap.xml`.
- [TODO] OG / Twitter cards.
- [TODO] Аналитика (GA4 + Plausible/Umami).
- [TODO] CI / CD.
- [TODO] Staging.
- [TODO] Мониторинг.

### 0.6. Локализация
- [TODO] en / ru / th / he.
- [TODO] RTL для `he`.
- [TODO] Вычитка носителями.
- [TODO] hreflang + x-default.

### 0.7. Производительность и качество
- [TODO] Core Web Vitals (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1).
- [TODO] Lighthouse (Perf ≥ 90, SEO 100, A11y ≥ 95).
- [TODO] axe-core (0 critical / 0 serious).
- [TODO] `prefers-reduced-motion`.

### 0.8. Блокеры
- [BLOCKED] Реальные данные — в `CONFIG.md`.
- [BLOCKED] Логотип и favicon — у владельца.
- [BLOCKED] Список 50+ подуслуг — у владельца.
- [BLOCKED] Кейсы и фото — у владельца.
- [BLOCKED] Токены ботов — у владельца.

---

## 1. Миссия, позиционирование, цели

- Премиум-сайт креативного / рекламного агентства с фотосъёмкой и production.
- Уровень: editorial creative agency класса Pentagram.
- Реклама — первый коммерческий столп.
- Цели: лиды, органический трафик, цитируемость в AI.
- Тон: премиальный, экспертный, спокойный.

### 1.1. Метрики
- `KPI_MONTHLY_LEADS` = `<N>`
- `KPI_ORGANIC_GROWTH` = `<%>`
- `KPI_SNIPPETS` = `<N>`
- `KPI_AI_CITATIONS` = `<N>`

---

## 2. Манифест дизайна (читать до всего остального)

### 2.1. Приоритет
Этот проект — **в первую очередь дизайн-продукт**, а не текстовый блог.
Дизайн, визуальный язык, анимация и петроглифическая графика — **первичны**.
Контент — **вторичен по форме**, но обязателен по качеству (раздел 7).

### 2.2. Формула визуального языка
```
Петроглиф (высеченная линия на камне)
+ Сакральная геометрия (пропорции, символы)
+ Люкс-палитра (охра, уголь, кость, песок, медь)
+ Анимация высекания (scroll-driven SVG)
+ Лёгкое зерно (film grain)
= Дорогой editorial-дизайн
```

### 2.3. Терминология
- **Петроглифы** (petroglyphs) — выбитые / процарапанные / высеченные
  изображения на камне. **Основной визуальный язык проекта.**
- **НЕ** наскальная живопись (cave painting) — это краска в пещерах.
- **НЕ** иероглифы, **НЕ** руны, **НЕ** клипарт, **НЕ** эзотерика.
- **Сакральная геометрия** — golden ratio, Vesica Piscis, Flower of Life,
  Metatron’s Cube, платоновы тела — как система пропорций.
- **Чашечные углубления** (cupules), **спирали**, **лабиринты**, **сетки**,
  **отпечатки рук**, **звёздные карты** — допустимые мотивы.
- **Геоглифы** (Наска) — как вдохновение для крупных схем.

### 2.4. Что это значит на практике
- `MUST` — каждая страница начинается с визуальной идеи (глиф, схема,
  анимация), а не с текста.
- `MUST` — текст подстраивается под дизайн-сетку, а не наоборот.
- `MUST` — визуальный язык единый на всех страницах и языках.
- `MUST` — анимация — часть дизайна, а не украшение.
- `MUST NOT` — дизайн не жертвуется ради «побольше текста».
- `MUST NOT` — текст не жертвуется ради «побольше анимации».
- Баланс: **дизайн ведёт, контент подтверждает**.

---

## 3. Дизайн-система

### 3.1. Палитра (design tokens)
```
--color-ochre:        #B8860B;
--color-charcoal:     #1C1C1C;
--color-bone:         #F5F1E8;
--color-sand:         #D9C9A8;
--color-limestone:    #E8E1D0;
--color-graphite:     #3A3A3A;
--color-copper:       #A97142;
--color-copper-muted: #8C5E32;
--color-text:         #1C1C1C;
--color-text-invert:  #F5F1E8;
--color-bg:           #F5F1E8;
--color-bg-dark:      #1C1C1C;
--color-accent:       #A97142;
```
Акцент — приглушённая медь и тёплое золото на глубоком графите.

### 3.2. Типографика
- Контент: современный гротеск / антиква с хорошей оптикой.
- Схемы, аннотации, таблицы цен: моноширинный / технический шрифт.
- Variable fonts для плавных анимаций веса.
- `font-display: swap`, subsetting, preload.
- Модульная шкала: 1.125 или 1.25.
- Интерлиньяж: 1.4–1.6 / 1.05–1.15 для крупных заголовков.
- Ширина строки: 60–75 символов.
- Плейсхолдеры: `FONT_GROTESK`, `FONT_SERIF`, `FONT_MONO`.

### 3.3. Сетка и пробелы
- Базовая сетка: 8px.
- Контейнеры: 1200 / 1440 / 1920px + fluid.
- Отступы: `--space-1..--space-24`.
- Радиусы: `--radius-sm/md/lg/full`.
- Тени: минимальные.

### 3.4. Текстуры
- Камень, штукатурка, бумага, зерно, высеченная линия.
- Film grain — не более 3–5% opacity.

### 3.5. Компоненты
- Кнопки (primary / secondary / ghost / link / icon).
- Инпуты (text / email / phone / textarea / select / file / checkbox / radio).
- Состояния: default / hover / focus-visible / active / disabled / error / success / loading / empty.
- Карточки, бейджи, breadcrumbs, пагинация, аккордеоны, табы, модалки, тултипы, уведомления.
- Header, footer, mobile menu, lang switcher.
- CTA-блоки.

### 3.6. Доступность дизайна
- Контраст: WCAG AA минимум, AAA где возможно.
- Видимый фокус, не удалять outline.
- Тач-зоны ≥ 44×44px.
- `prefers-reduced-motion`.
- `prefers-color-scheme` (опционально).

---

## 4. Библиотека блоков (luxury blocks)

`MUST` — каждая страница собирается из переиспользуемых блоков.
`MUST NOT` — ad-hoc вёрстка в обход design system.

| Блок | Назначение |
|---|---|
| `HeroPetroglyph` | Герой с анимированным глифом |
| `DirectAnswer` | Ответ 50–80 слов (AI + snippet) |
| `PillarIntro` | Вводный блок pillar-страницы |
| `SpokeGrid` | Сетка подуслуг |
| `ServiceCard` | Карточка услуги |
| `CaseSpotlight` | Кейс с крупным изображением |
| `CaseGrid` | Сетка кейсов |
| `PriceTable` | Таблица цен |
| `ProcessSchema` | Анимированная схема процесса |
| `WorkPlan` | Анимированный план работ |
| `Blueprint` | Чертёж с проявлением линий |
| `StrataDiagram` | Слои (для villas / real estate) |
| `Timeline` | Высеченная линия времени |
| `FAQBlock` | FAQ с JSON-LD |
| `FeaturedSnippetBlock` | Оптимизировано под snippet |
| `Comparison` | Сравнение тарифов / пакетов |
| `Testimonial` | Отзыв |
| `LogoWall` | Логотипы клиентов |
| `Stats` | Числа / факты |
| `CTA` | Финальный призыв |
| `JournalTeaser` | Тизер журнала |
| `ContactRitual` | Блок связи с глифом |
| `LocationMap` | Карта с петроглифическими метками |
| `LegalSimple` | Юридический блок |
| `Newsletter` | Подписка |
| `Breadcrumbs` | Хлебные крошки |
| `LanguageSwitcher` | Переключатель языков |
| `SearchBar` | Внутренний поиск |

Требования к каждому блоку:
- `MUST` — состояния (default / hover / focus / active / disabled / loading / error / empty).
- `MUST` — RTL-версия.
- `MUST` — адаптив (mobile / tablet / desktop / wide).
- `MUST` — работает без JS.
- `MUST` — работает без анимации (`prefers-reduced-motion`).
- `MUST` — доступность (roles, aria, labels, keyboard).
- `MUST` — документация: назначение, пропсы, примеры.

---

## 5. Анимации

### 5.1. Обязательные приёмы
- Scroll-driven SVG line drawing (`stroke-dasharray` / `stroke-dashoffset`).
- Pecking / chipping reveal (эффект высекания).
- Mask reveals.
- Layered rock parallax.
- Morphing geometry.
- Variable font weight animation для заголовков.
- Subtle grain.

### 5.2. Запрещено
- Мультяшность.
- Визуальный шум.
- Анимация, мешающая чтению.
- WebGL на всех страницах.
- Автоплей видео со звуком.
- Параллакс, ломающий CLS.

### 5.3. Где можно тяжёлое
- WebGL / canvas 2D — только на hero.
- Остальные страницы — inline SVG + CSS + GSAP + ScrollTrigger.

### 5.4. Обязательно
- `prefers-reduced-motion: reduce` отключает анимацию, оставляя статичную красоту.
- Контент доступен без анимации.
- Анимация не блокирует LCP, INP, CLS.
- `will-change` использовать аккуратно.
- Мобильные: упрощённые анимации.

### 5.5. Тайминги
- Микро: 150–250ms.
- Средние: 300–500ms.
- Scroll-driven: привязаны к позиции.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.

---

## 6. Схемы на каждую страницу

| Страница | Схема / глиф |
|---|---|
| Home | Master petroglyph hub: круг, спираль, рука, созвездие |
| Service hub | Уникальный глиф услуги + анимированный blueprint |
| Sub-service | Ответвление от глифа родителя |
| Case / Project | Site plan, sections, rock strata, timeline |
| Pricing | Анимированная таблица |
| Process | Анимированный план работ |
| About | Process circle / stratigraphy |
| Locations | Карта с петроглифическими метками |
| Journal | Engraved timeline |
| Contact | Meeting lines / connection glyph |
| FAQ | Глиф вопроса / ответа |
| Legal / Privacy | Минимальный статичный глиф |
| 404 | Разорванная линия / обрыв |

Требования:
- `MUST` — inline SVG.
- `MUST` — текстовое описание для скринридеров.
- `MUST` — адаптив.
- `MUST` — работает без анимации.
- `MUST` — не содержит читаемого текста внутри SVG.
- `MUST` — оптимизирована (SVGO).

---

## 7. Уникальный текст 10/10

### 7.1. Запрещено
- AI-слоп.
- Канцелярит.
- Вода, повторы.
- Общие фразы: «в современном мире», «не секрет, что», «динамично развивающаяся компания», «индивидуальный подход», «широкий спектр».
- Кликбейт.
- Ложные обещания.
- Плагиат.
- Автоперевод.

### 7.2. Обязательно
- Каждый абзац — новая информация.
- Конкретика: числа, сроки, примеры, кейсы, имена, локации.
- Один смысл — одно предложение.
- Ритм: чередование коротких и длинных предложений.
- Информативные заголовки.
- Уверенный, экспертный тон.
- Каждая языковая версия — уникальный текст.
- Вычитка носителем.

### 7.3. Объёмы
| Тип | Минимум |
|---|---|
| Pillar | 1500+ слов |
| Spoke | 800+ слов |
| Service hub | 1200+ слов |
| Sub-service | 800+ слов |
| Case | 600+ слов |
| Journal post | 800+ слов |
| FAQ (страница) | 300+ слов |
| About | 600+ слов |
| Pricing | 500+ слов |
| Direct Answer | 50–80 слов |
| Meta title | 50–60 символов |
| Meta description | 140–160 символов |

### 7.4. Структура страницы
1. H1 (один).
2. Direct Answer 50–80 слов.
3. H2-секции.
4. Списки / таблицы.
5. FAQ.
6. CTA.
7. Внутренние ссылки.

---

## 8. AI-first / Organic / GEO / AEO / LLM

### 8.1. AI-citability
- Direct Answer 50–80 слов в начале каждой страницы.
- Фактические блоки с числами и единицами.
- Единая терминология.
- Консистентность сущностей.
- Явные определения.
- Списки и таблицы.

### 8.2. JSON-LD
`Organization`, `LocalBusiness`, `WebSite` + `SearchAction`, `Service`,
`Offer` / `OfferCatalog` / `PriceSpecification`, `Article` / `BlogPosting`,
`BreadcrumbList`, `FAQPage`, `HowTo`, `ItemList`, `ImageObject`,
`VideoObject`, `Person`, `Review` / `AggregateRating`.

### 8.3. Файлы для AI-краулеров
- `llms.txt`, `llms-full.txt`.
- `robots.txt` — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bingbot, Applebot-Extended, YouBot.
- `sitemap.xml` + sitemap index.
- RSS / Atom.

### 8.4. Pillar / Spoke
- Pillar 1500+, Spoke 800+.
- Осмысленные анкоры.
- Нет циклических ссылок.
- Нет битых ссылок.

### 8.5. E-E-A-T
- Авторы с биографией.
- Даты публикации и обновления.
- Источники и ссылки.
- Контакты, адрес, юр. информация.
- Отзывы и кейсы.
- Прозрачные цены.

### 8.6. Проверка
- Ручная проверка в ChatGPT, Gemini, Perplexity, Claude.
- Фиксация результатов в разделе 20.

---

## 9. Featured Snippets

### 9.1. Форматы
- Paragraph snippet — 40–60 слов под H2.
- List snippet.
- Table snippet.
- Video snippet (`VideoObject`).
- HowTo snippet.

### 9.2. Правила
- H2/H3 — формулировка вопроса пользователя.
- Ответ сразу под заголовком.
- JSON-LD для каждого snippet-блока.
- Визуально выделено, но не как реклама.
- A/B тесты формулировок.

---

## 10. Таблицы с ценами

- Страница `/pricing/` + блоки `PriceTable` на услугах.
- Колонки: услуга / пакет / что входит / срок / цена от / валюта / CTA.
- Валюты: THB (основная), USD, EUR, RUB, ILS.
- Автоконвертация + ручное подтверждение.
- Разметка `Offer` / `OfferCatalog` / `PriceSpecification`.
- Анимация: строки по скроллу, цена «высекается», hover-подсветка.
- Mobile: карточки, не горизонтальный скролл.
- Дисклеймер: цены ориентировочные.
- Никаких скрытых платежей.

---

## 11. Анимированные схемы и планы работ

- `ProcessSchema` — блок-схема (SVG + GSAP).
- `WorkPlan` — этапы, сроки, результаты, ответственные.
- `Blueprint` — чертёж с проявлением линий.
- `StrataDiagram` — слои.
- `Timeline` — высеченная линия времени.

Требования:
- Доступна без анимации.
- Текстовое описание для скринридеров.
- `HowTo` / `ItemList` разметка.
- Адаптив.
- `prefers-reduced-motion`.
- Единый визуальный язык.
- Не содержит критичного текста внутри SVG.

---

## 12. Локализация и RTL

- 4 языка: en / ru / th / he.
- Отдельные URL: `/en/`, `/ru/`, `/th/`, `/he/`.
- `hreflang` + `x-default`.
- `canonical` на каждой странице.
- Автоперевод запрещён.
- RTL для `he`: `dir="rtl"`, числа / цены / email — LTR внутри RTL.
- Иконки направления — зеркалятся.
- Логотип — не зеркалится.
- Сакральная геометрия — центрируется.
- Переключатель языков без потери URL.
- Вычитка носителями.

---

## 13. Боты

### 13.1. Обязательные
- Telegram bot.
- WhatsApp bot.

### 13.2. Воронка
1. Приветствие + выбор языка.
2. Выбор услуги.
3. Выбор локации.
4. Бюджет.
5. Загрузка файлов (опционально).
6. Контакт.
7. Подтверждение.
8. Отправка менеджеру.

### 13.3. Требования
- 4 языка.
- Валидация на каждом шаге.
- Уведомление менеджеру.
- Логирование.
- Нет тупиковых состояний.
- Возврат на шаг назад.
- Смена языка на любом шаге.
- Fallback на человека.
- Тест: все услуги × все локации × все языки.
- Rate limiting.
- PDPA / GDPR согласие.

---

## 14. Архитектура и URL

### 14.1. Масштаб
- Целевой: **3000+ URL** (архитектурная цель).
- `MUST NOT` — thin pages.
- `MUST` — уникальный контент на каждой.

### 14.2. Основные направления (8)
1. Advertising
2. Social Media
3. Villas & Real Estate
4. Food
5. Local
6. Web
7. Video
8. Branding

### 14.3. Структура URL
```
/en/
/en/advertising/
/en/advertising/{sub-service}/
/en/social-media/
/en/villas-real-estate/
/en/food/
/en/local/
/en/web/
/en/video/
/en/branding/
/en/cases/
/en/cases/{case-slug}/
/en/journal/
/en/journal/{post-slug}/
/en/pricing/
/en/process/
/en/locations/
/en/locations/{location-slug}/
/en/about/
/en/contact/
/en/faq/
/en/legal/
/en/privacy/
/en/terms/
```

### 14.4. Обязательные страницы
Home, 8 hubs, 50+ sub-services, cases, journal, pricing, process, locations,
about, contact, FAQ, legal, privacy, terms, 404, 500, offline, search results,
HTML sitemap.

---

## 15. Постраничные улучшения (шаблоны)

### 15.1. Home
- `HeroPetroglyph` с master-глифом.
- `DirectAnswer` 50–80 слов.
- Секция 8 направлений.
- Секция кейсов.
- Секция процесса.
- Секция отзывов.
- Журнал teaser.
- CTA.
- JSON-LD: `Organization`, `WebSite` + `SearchAction`.
- Schema: master petroglyph hub.

### 15.2. Service hub
- `HeroPetroglyph` с глифом услуги.
- `DirectAnswer`.
- `PillarIntro`.
- `SpokeGrid` подуслуг.
- `CaseGrid` релевантных кейсов.
- `ProcessSchema`.
- `PriceTable`.
- `FAQBlock`.
- CTA.
- JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`.
- Schema: глиф услуги + blueprint.

### 15.3. Sub-service
- `HeroPetroglyph` с ответвлением глифа.
- `DirectAnswer`.
- Основной текст 800+ слов.
- `WorkPlan`.
- `PriceTable`.
- `FAQBlock`.
- CTA.
- JSON-LD: `Service`, `HowTo`, `FAQPage`.
- Schema: ответвление.

### 15.4. Case
- `HeroPetroglyph`.
- `DirectAnswer`.
- Клиент, задача, решение, результат.
- Галерея.
- Метрики.
- `Testimonial`.
- CTA.
- JSON-LD: `Article` / `CreativeWork`.
- Schema: site plan / timeline.

### 15.5. Pricing
- `DirectAnswer`.
- `PriceTable` по услугам.
- `Comparison` пакетов.
- FAQ.
- CTA.
- JSON-LD: `OfferCatalog`, `FAQPage`.
- Schema: анимированная таблица.

### 15.6. Process
- `DirectAnswer`.
- `ProcessSchema`.
- `WorkPlan`.
- FAQ.
- CTA.
- JSON-LD: `HowTo`.
- Schema: анимированный план работ.

### 15.7. About
- `DirectAnswer`.
- Команда.
- Ценности.
- История.
- CTA.
- JSON-LD: `Organization`, `Person`.
- Schema: process circle.

### 15.8. Contact
- `DirectAnswer`.
- Форма.
- Боты.
- Карта.
- Часы.
- JSON-LD: `LocalBusiness`, `ContactPoint`.
- Schema: connection glyph.

### 15.9. Journal
- Список постов.
- Фильтры.
- Поиск.
- JSON-LD: `ItemList`, `BlogPosting`.
- Schema: engraved timeline.

### 15.10. Journal post
- `DirectAnswer`.
- Основной текст 800+.
- Автор.
- Дата.
- Источники.
- CTA.
- JSON-LD: `BlogPosting`, `Person`, `BreadcrumbList`.
- Schema: engraved timeline.

### 15.11. FAQ
- `DirectAnswer`.
- Аккордеон.
- JSON-LD: `FAQPage`.
- Schema: вопрос / ответ.

### 15.12. Legal / Privacy / Terms
- Текст.
- Дата обновления.
- JSON-LD: `WebPage`.
- Schema: минимальный глиф.

### 15.13. 404 / 500 / offline
- Сообщение.
- Навигация.
- Поиск.
- Schema: разорванная линия.

---

## 16. Производительность и качество

### 16.1. Core Web Vitals
- LCP ≤ 2.5s.
- INP ≤ 200ms.
- CLS ≤ 0.1.

### 16.2. Lighthouse
- Performance ≥ 90.
- SEO = 100.
- Accessibility ≥ 95.
- Best Practices ≥ 95.

### 16.3. Доступность
- axe-core: 0 critical / 0 serious.
- WCAG 2.2 AA минимум.
- Клавиатура.
- Видимый фокус.
- Контраст.
- alt у изображений.
- ARIA где нужно.
- Тест скринридером.

### 16.4. Адаптив
- 320 / 375 / 430 / 768 / 1024 / 1440 / 1920 / 2560.
- Тест на реальных устройствах.
- Тач-зоны ≥ 44×44px.

### 16.5. Изображения
- AVIF + WebP + fallback.
- responsive `srcset` + `sizes`.
- lazy (кроме LCP).
- `fetchpriority="high"` для LCP.
- alt.
- Без CLS.

### 16.6. Шрифты
- `font-display: swap`.
- Subsetting.
- Preload критических.
- Variable fonts.

### 16.7. JS / CSS
- Минификация.
- Code splitting.
- Tree shaking.
- Без блокирующего JS.
- Критический CSS inline.

---

## 17. SEO-технический слой

- `sitemap.xml` + index.
- `robots.txt` с правилами для AI-ботов.
- `canonical` на каждой странице.
- `hreflang` на 4 языка + `x-default`.
- OG / Twitter cards.
- favicon (svg + png + apple-touch-icon).
- `manifest.webmanifest`.
- 404 / 500 / offline.
- 301-редиректы.
- HTTPS.
- www / без www — один вариант.
- Trailing slash — единый.
- Breadcrumbs.
- Внутренний поиск.
- RSS / Atom.

---

## 18. Стек

- Next.js (App Router) + TypeScript strict.
- Tailwind или CSS-модули + design tokens.
- GSAP + ScrollTrigger.
- Lenis (опционально).
- Inline SVG.
- next-intl.
- GA4 + Plausible / Umami.
- web-vitals (RUM).
- Деплой: Vercel / Cloudflare.
- Branch strategy: `main` + `feature/*`.
- Conventional commits.

---

## 19. Чек-лист приёмки

### 19.1. Перед задачей
- [ ] Прочитан раздел 0 (статус).
- [ ] Прочитан раздел 22 (правила).
- [ ] Понятен закрываемый пункт.
- [ ] Понятны acceptance criteria.
- [ ] Не нарушены позиционирование / RTL / no-autotranslate.
- [ ] Известны нужные ключи из `CONFIG.md`.

### 19.2. После задачи (per page)
- [ ] H1 один.
- [ ] Direct Answer 50–80 слов.
- [ ] Объём по разделу 7.3.
- [ ] Уникальный текст 10/10.
- [ ] Snippet-блок + JSON-LD.
- [ ] PriceTable + `Offer` (если цены).
- [ ] ProcessSchema / WorkPlan + `HowTo` (если процесс).
- [ ] Petroglyph-глиф + анимация.
- [ ] 4 языка + hreflang + RTL.
- [ ] Canonical, OG, Twitter.
- [ ] Sitemap обновлён.
- [ ] `llms.txt` актуален.
- [ ] LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.
- [ ] Lighthouse: Perf ≥ 90, SEO 100, A11y ≥ 95.
- [ ] axe-core: 0 critical / 0 serious.
- [ ] `prefers-reduced-motion` работает.
- [ ] Мобильный 320–430px.
- [ ] Tablet, desktop, wide.
- [ ] Клавиатура.
- [ ] Контраст.
- [ ] alt у изображений.

### 19.3. Перед релизом
- [ ] Все страницы раздела 14.4.
- [ ] Боты протестированы (4 языка × все услуги × все локации).
- [ ] `sitemap.xml` + index.
- [ ] `robots.txt`.
- [ ] `llms.txt` + `llms-full.txt`.
- [ ] JSON-LD валиден.
- [ ] hreflang корректен.
- [ ] RTL проверен на реальных устройствах.
- [ ] Core Web Vitals зелёные.
- [ ] Lighthouse на ключевых страницах.
- [ ] axe-core на ключевых страницах.
- [ ] Ручная проверка AI-цитируемости.
- [ ] Раздел 0 актуален.
- [ ] Раздел 20 актуален.

---

## 20. Журнал изменений

### 2026-09-18
- Создан `Improvements.md` v1.0.
- Зафиксирован манифест дизайна (petroglyph & sacred geometry + luxury).
- Зафиксирована терминология: **петроглифы** — основной термин.
- Запрещено: «наскальная живопись», «иероглифы», «руны», «клипарт», «эзотерика».
- Зафиксирован приоритет дизайна над формой контента.
- Добавлены требования: AI-first, GEO, AEO, LLM, Featured Snippets,
  Price Tables, Animated Schematics & Work Plans, Luxury Blocks.

### <дата>
- <что сделано>

---

## 21. Блокеры и вопросы

- [BLOCKED] Реальные данные — в `CONFIG.md`.
- [BLOCKED] Логотип и favicon.
- [BLOCKED] Список 50+ подуслуг.
- [BLOCKED] Кейсы и фото.
- [BLOCKED] Токены ботов.
- [BLOCKED] Тексты на `th` и `he`.
- [QUESTION] Staging URL?
- [QUESTION] Хостинг?
- [QUESTION] CRM?
- [QUESTION] KPI?
- [QUESTION] AI-краулеры разрешать?
- [QUESTION] Валюты — только отображение или оплата?
- [QUESTION] Тёмная тема?

---

## 22. Claude Code Instructions

> **Этот раздел читается первым.**

### 22.1. Контекст
- Репозиторий: `CreativeLAB.in.th`.
- Главный документ: `Improvements.md` (этот файл).
- Данные: `CONFIG.md`.
- Секреты: `.env` / GitHub Secrets.

### 22.2. Правила
1. `MUST` — не менять позиционирование (раздел 1).
2. `MUST NOT` — добавлять автоперевод.
3. `MUST` — сохранять RTL для `he`.
4. `MUST NOT` — использовать стоковые изображения.
5. `MUST NOT` — создавать thin pages.
6. `MUST` — каждая страница: Direct Answer + JSON-LD + OG + canonical + hreflang.
7. `MUST` — каждая страница: свой petroglyph-глиф + анимация (раздел 6).
8. `MUST` — каждая страница: минимум один snippet-блок (раздел 9).
9. `MUST` — цены → PriceTable + `Offer` (раздел 10).
10. `MUST` — процесс → ProcessSchema / WorkPlan + `HowTo` (раздел 11).
11. `MUST` — текст уникальный, 10/10, без AI-слопа (раздел 7).
12. `MUST` — компоненты — только из luxury blocks (раздел 4).
13. `MUST` — уважать `prefers-reduced-motion` (раздел 5).
14. `MUST` — после задачи обновить раздел 0 и раздел 20.
15. `MUST` — не коммитить секреты.
16. `MUST` — использовать плейсхолдеры из `CONFIG.md`, если данных нет.
17. `MUST` — при блокировке помечать `[BLOCKED]` в разделе 21.
18. `MUST` — дизайн первичен (раздел 2).

### 22.3. Порядок работы
1. Прочитать раздел 0.
2. Прочитать раздел 22 (этот).
3. Прочитать раздел 21 (блокеры).
4. Прочитать соответствующий раздел задачи.
5. Прочитать раздел 19 (чек-лист).
6. Реализовать.
7. Прогнать чек-лист.
8. Обновить статус и журнал.
9. Приложить доказательства.

### 22.4. Запрещено
- Менять палитру / типографику без согласования.
- WebGL на всех страницах.
- Ломать LCP / CLS ради анимации.
- Оставлять TODO без записи в раздел 20.
- Коммитить секреты и реальные данные.
- Использовать стоковые изображения.
- Писать AI-слоп.
- Игнорировать RTL.
- Игнорировать `prefers-reduced-motion`.
- Игнорировать раздел 21.

---

## 23. Стоп-условия

Задача **не принимается**, если:
- Нарушено позиционирование.
- Появился автоперевод.
- Сломан RTL.
- Появились thin pages.
- Использованы стоковые изображения.
- Написан AI-слоп.
- LCP > 2.5s / INP > 200ms / CLS > 0.1.
- Lighthouse ниже порога.
- axe-core critical / serious.
- Нет Direct Answer.
- Нет snippet-блока.
- Нет JSON-LD.
- Нет petroglyph-глифа / анимации.
- Не работает `prefers-reduced-motion`.
- Секреты закоммичены.
- Не обновлён раздел 0.
- Не обновлён раздел 20.

---

## 24. Acceptance Criteria (общий релиз)

- [ ] 4 языка, RTL для `he`.
- [ ] 8 hubs + 50+ sub-services + cases + journal + pricing + process.
- [ ] Уникальный текст 10/10 на всех языках.
- [ ] Direct Answer + Featured Snippet на каждой странице.
- [ ] Таблицы цен с `Offer` JSON-LD.
- [ ] Анимированные ProcessSchema / WorkPlan с `HowTo`.
- [ ] Petroglyph-глиф и анимация на каждой странице.
- [ ] Luxury blocks внедрены.
- [ ] Telegram + WhatsApp боты на 4 языках.
- [ ] Lighthouse: Perf ≥ 90, SEO 100, A11y ≥ 95.
- [ ] axe-core: 0 critical / 0 serious.
- [ ] LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.
- [ ] `llms.txt`, `llms-full.txt`, sitemap, robots, JSON-LD, hreflang — на месте.
- [ ] `prefers-reduced-motion` работает.
- [ ] Нет thin pages / автоперевода / стока / AI-слопа.
- [ ] Раздел 0 актуален.
- [ ] Раздел 20 актуален.

---

**Конец файла.**
