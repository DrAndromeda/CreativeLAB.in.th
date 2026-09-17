# Improvements.md — CreativeLAB.in.th

> **ПРИОРИТЕТ №1: ДИЗАЙН.**
> Этот сайт — в первую очередь дизайн-продукт, а не текстовый блог.
> Визуальный язык: **петроглифы** (высеченные изображения на камне)
> + сакральная геометрия + люкс-палитра + анимация высекания.
> **НЕ** наскальная живопись, **НЕ** иероглифы, **НЕ** руны, **НЕ** клипарт,
> **НЕ** эзотерика. Каждая страница начинается с визуальной идеи (глиф,
> схема, анимация). Текст подстраивается под дизайн-сетку.
> **Дизайн ведёт, контент подтверждает.**

> **РЕЖИМ: PRODUCTION-READY.**
> Сайт должен быть 100% готовым с первого коммита. Не заглушки, а готовый
> продукт. Если данных нет — Claude Code генерирует их в премиум-качестве,
> близко к реальности, и продолжает сборку. Блокировка — только для внешних
> API-ключей (токен бота, платёжка).

> **Читать первым:** раздел 22 «Claude Code Instructions».

---

## 0. Статус: что сделано и что нет

Легенда: `[DONE]` / `[PARTIAL]` / `[TODO]` / `[IN PROGRESS]` / `[BLOCKED]`.

### 0.1. Документация
- [DONE] `proposal.md` — оригинальное ТЗ.
- [DONE] `Improvements.md` — этот файл.
- [DONE] Контакты с реального сайта: `+66 80 870 5704` (WhatsApp),
  `Koh Phangan, Surat Thani, Thailand`.
- [TODO] `README.md` — обзор репозитория.

### 0.2. Дизайн
- [TODO] Design tokens.
- [TODO] Логотип, favicon.
- [TODO] Design system.
- [TODO] Luxury blocks.
- [TODO] Petroglyph-глифы.
- [TODO] Анимации высекания.
- [TODO] Схема на каждую страницу.

### 0.3. Контент
- [TODO] Уникальный текст 10/10 на 4 языках.
- [TODO] Direct Answer на каждой странице.
- [TODO] 8 hubs + 50+ подуслуг.
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
- [TODO] Next.js App Router + TS strict.
- [TODO] i18n (next-intl).
- [TODO] JSON-LD.
- [TODO] `llms.txt` + `llms-full.txt`.
- [TODO] `robots.txt` + `sitemap.xml`.
- [TODO] OG / Twitter cards.
- [TODO] Аналитика (GA4 + Umami).
- [TODO] CI / CD.
- [TODO] Деплой на прод.

### 0.6. Локализация
- [TODO] en / ru / th / he.
- [TODO] RTL для `he`.
- [TODO] Вычитка носителями.
- [TODO] hreflang + x-default.

### 0.7. Производительность и качество
- [TODO] Core Web Vitals.
- [TODO] Lighthouse.
- [TODO] axe-core.
- [TODO] `prefers-reduced-motion`.

### 0.8. Соответствие Google 2026
- [TODO] Search Essentials.
- [TODO] Core Web Vitals (пороги 2026).
- [TODO] Структурированные данные.
- [TODO] E-E-A-T.
- [TODO] Helpful Content.
- [TODO] Mobile-first.
- [TODO] HTTPS + HSTS.
- [TODO] Доступность (accessibility tree).

---

## 1. Миссия, позиционирование, цели

- Премиум-сайт креативного / рекламного агентства с фотосъёмкой и production.
- Уровень: editorial creative agency класса Pentagram.
- Реклама — первый коммерческий столп. Остальные направления — вторичные,
  но полноценные.
- Цели: лиды, органический трафик, цитируемость в AI.
- Тон: премиальный, экспертный, спокойный.

### 1.1. Метрики
- Лиды: ≥ 20 в месяц.
- Органический трафик: рост +20% месяц к месяцу.
- Featured snippets: ≥ 30 запросов.
- Цитируемость в AI: ≥ 10 запросов/месяц.
- Core Web Vitals: зелёные.
- Lighthouse: Perf ≥ 90, SEO 100, A11y ≥ 95.

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
- `MUST` — текст подстраивается под дизайн-сетку.
- `MUST` — визуальный язык единый на всех страницах и языках.
- `MUST` — анимация — часть дизайна, а не украшение.
- `MUST NOT` — дизайн не жертвуется ради «побольше текста».
- `MUST NOT` — текст не жертвуется ради «побольше анимации».
- Баланс: **дизайн ведёт, контент подтверждает**.

---

## 3. Реальные данные проекта

### 3.1. Контакты (реальные, с сайта)
| Ключ | Значение | Источник |
|---|---|---|
| `PHONE_MAIN` | `+66 80 870 5704` | Реальный с сайта |
| `WHATSAPP` | `https://wa.me/66808705704` | Реальный с сайта |
| `ADDRESS` | `Koh Phangan, Surat Thani, Thailand` | Реальный с сайта |
| `COUNTRY` | `Thailand` | Реальный |
| `TIMEZONE` | `Asia/Bangkok` | Реальный |
| `LANG_DEFAULT` | `en` | Реальный |

### 3.2. Контакты (генерировать в премиум-качестве)
Claude Code **генерирует** недостающие контакты по шаблону, близко к
реальности. Не оставлять пустых полей.

| Ключ | Сгенерированное значение |
|---|---|
| `EMAIL_GENERAL` | `hello@creativelab.in.th` |
| `EMAIL_LEADS` | `leads@creativelab.in.th` |
| `EMAIL_PRESS` | `press@creativelab.in.th` |
| `TELEGRAM` | `@creativelab` |
| `TELEGRAM_BOT` | `@creativelab_bot` |
| `INSTAGRAM` | `https://instagram.com/creativelab.in.th` |
| `FACEBOOK` | `https://facebook.com/creativelab.in.th` |
| `YOUTUBE` | `https://youtube.com/@creativelab` |
| `TIKTOK` | `https://tiktok.com/@creativelab` |
| `LINKEDIN` | `https://linkedin.com/company/creativelab` |
| `BEHANCE` | `https://behance.net/creativelab` |
| `VIMEO` | `https://vimeo.com/creativelab` |
| `GOOGLE_MAPS_URL` | `https://maps.google.com/?q=Koh+Phangan+Thailand` |
| `GEO_LAT` | `9.7319` |
| `GEO_LNG` | `100.0135` |
| `HOURS` | `Mon–Sat 09:00–19:00 ICT` |
| `LEGAL_NAME` | `CreativeLAB Co., Ltd.` |
| `JURISDICTION` | `Thailand` |
| `TAX_ID` | `0-0000-00000-00-0` |
| `GSC_VERIFICATION` | placeholder |
| `GA4_ID` | `G-XXXXXXXXXX` |
| `UMAMI_ID` | placeholder |

### 3.3. Боты (генерировать конфигурацию)
- Telegram: `@creativelab_bot`.
- WhatsApp: `+66 80 870 5704`.
- Токены — в `.env` / GitHub Secrets.
- Claude Code пишет рабочий код с чтением из `process.env`.
- При отсутствии токена — код готов, токен подставляет владелец.

### 3.4. Правила генерации
- `MUST` — если данных нет, **генерировать** по шаблону выше.
- `MUST` — генерировать красиво, дорого, близко к реальности.
- `MUST NOT` — оставлять `XXX`, `<...>`, `TODO` в UI.
- `MUST NOT` — блокировать задачу из-за отсутствия email / телефона.
- `MUST` — `[BLOCKED]` только для внешних API-ключей.
- `MUST` — помечать сгенерированное в коде комментарием `<!-- GEN -->`.

---

## 4. Дизайн-система

### 4.1. Палитра
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

### 4.2. Типографика
- Контент: современный гротеск + антиква с хорошей оптикой.
- Схемы, аннотации, цены: моноширинный / технический.
- Variable fonts для плавных анимаций веса.
- `font-display: swap`, subsetting, preload.
- Модульная шкала: 1.125 или 1.25.
- Интерлиньяж: 1.4–1.6 для текста, 1.05–1.15 для заголовков.
- Ширина строки: 60–75 символов.
- Шрифты по умолчанию: Inter / Fraunces / JetBrains Mono (или аналоги).

### 4.3. Сетка и пробелы
- Базовая сетка: 8px.
- Контейнеры: 1200 / 1440 / 1920px + fluid.
- Отступы: `--space-1..--space-24`.
- Радиусы: `--radius-sm/md/lg/full`.
- Тени: минимальные.

### 4.4. Текстуры
- Камень, штукатурка, бумага, зерно, высеченная линия.
- Film grain: 3–5% opacity.

### 4.5. Компоненты
- Кнопки (primary / secondary / ghost / link / icon).
- Инпуты (text / email / phone / textarea / select / file / checkbox / radio).
- Карточки, бейджи, breadcrumbs, пагинация, аккордеоны, табы, модалки,
  тултипы, уведомления.
- Header, footer, mobile menu, lang switcher, CTA.
- Все состояния: default / hover / focus-visible / active / disabled /
  error / success / loading / empty.

### 4.6. Доступность дизайна
- Контраст WCAG AA минимум.
- Видимый фокус, не удалять outline.
- Тач-зоны ≥ 44×44px.
- `prefers-reduced-motion`.
- `prefers-color-scheme` (опционально).

---

## 5. Библиотека блоков (luxury blocks)

`MUST` — каждая страница собирается из переиспользуемых блоков.
`MUST NOT` — ad-hoc вёрстка.

| Блок | Назначение |
|---|---|
| `HeroPetroglyph` | Герой с анимированным глифом |
| `DirectAnswer` | Ответ 50–80 слов |
| `PillarIntro` | Вводный блок pillar |
| `SpokeGrid` | Сетка подуслуг |
| `ServiceCard` | Карточка услуги |
| `CaseSpotlight` | Кейс с крупным изображением |
| `CaseGrid` | Сетка кейсов |
| `PriceTable` | Таблица цен |
| `ProcessSchema` | Анимированная схема процесса |
| `WorkPlan` | Анимированный план работ |
| `Blueprint` | Чертёж с проявлением линий |
| `StrataDiagram` | Слои |
| `Timeline` | Высеченная линия времени |
| `FAQBlock` | FAQ с JSON-LD |
| `FeaturedSnippetBlock` | Под snippet |
| `Comparison` | Сравнение пакетов |
| `Testimonial` | Отзыв |
| `LogoWall` | Логотипы клиентов |
| `Stats` | Числа / факты |
| `CTA` | Финальный призыв |
| `JournalTeaser` | Тизер журнала |
| `ContactRitual` | Блок связи с глифом |
| `LocationMap` | Карта с метками |
| `LegalSimple` | Юридический блок |
| `Newsletter` | Подписка |
| `Breadcrumbs` | Хлебные крошки |
| `LanguageSwitcher` | Переключатель языков |
| `SearchBar` | Внутренний поиск |

Требования к каждому блоку:
- Состояния (default / hover / focus / active / disabled / loading / error / empty).
- RTL-версия.
- Адаптив (mobile / tablet / desktop / wide).
- Работа без JS.
- Работа без анимации.
- Доступность (roles, aria, labels, keyboard).
- Документация.

---

## 6. Анимации

### 6.1. Обязательные приёмы
- Scroll-driven SVG line drawing (`stroke-dasharray` / `stroke-dashoffset`).
- Pecking / chipping reveal (эффект высекания).
- Mask reveals.
- Layered rock parallax.
- Morphing geometry.
- Variable font weight animation.
- Subtle grain.

### 6.2. Запрещено
- Мультяшность.
- Визуальный шум.
- Анимация, мешающая чтению.
- WebGL на всех страницах.
- Автоплей видео со звуком.
- Параллакс, ломающий CLS.

### 6.3. Где можно тяжёлое
- WebGL / canvas 2D — только на hero.
- Остальные страницы — inline SVG + CSS + GSAP + ScrollTrigger.

### 6.4. Обязательно
- `prefers-reduced-motion: reduce` отключает анимацию, оставляя
  статичную красоту.
- Контент доступен без анимации.
- Анимация не блокирует LCP, INP, CLS.
- Мобильные: упрощённые анимации.

### 6.5. Тайминги
- Микро: 150–250ms.
- Средние: 300–500ms.
- Scroll-driven: привязаны к позиции.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.

---

## 7. Уникальный текст 10/10

### 7.1. Запрещено
- AI-слоп.
- Канцелярит, вода, повторы.
- Общие фразы: «в современном мире», «не секрет, что», «динамично
  развивающаяся компания», «индивидуальный подход», «широкий спектр».
- Кликбейт.
- Ложные обещания.
- Плагиат.
- Автоперевод.

### 7.2. Обязательно
- Каждый абзац — новая информация.
- Конкретика: числа, сроки, примеры, кейсы, имена, локации.
- Один смысл — одно предложение.
- Ритм: короткие + длинные предложения.
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

### 7.5. Генерация контента Claude Code
- `MUST` — Claude Code генерирует уникальный текст для всех страниц.
- `MUST` — текст соответствует стилю: премиальный editorial, конкретный.
- `MUST` — не использовать шаблонные фразы из 7.1.
- `MUST` — каждая страница уникальна, без дублей.
- `MUST` — тексты на en / ru / th / he генерируются отдельно, не перевод.
- `MUST` — после генерации помечать `<!-- GEN: replace if needed -->`.

### 7.6. Проверка на уникальность
- Прогон через антиплагиат (Advego, Text.ru, Copyscape).
- Уникальность ≥ 90%.
- Читаемость: Flesch ≥ 60 (en), аналогично для других языков.
- Тон: премиальный.

---

## 8. AI-first / Organic / GEO / AEO / LLM

### 8.1. AI-citability
- Direct Answer 50–80 слов на каждой странице.
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

### 8.3. AI-краулеры
- `llms.txt`, `llms-full.txt`.
- `robots.txt`: разрешить GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, CCBot, Bingbot, Applebot-Extended, YouBot.
- `sitemap.xml` + index.
- RSS / Atom.

### 8.4. Pillar / Spoke
- Pillar 1500+, Spoke 800+.
- Осмысленные анкоры.
- Нет циклических и битых ссылок.

### 8.5. E-E-A-T
- Авторы с реальной биографией.
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

- Paragraph snippet 40–60 слов под H2.
- List snippet.
- Table snippet.
- Video snippet (`VideoObject`).
- HowTo snippet.

Правила:
- H2/H3 — формулировка вопроса пользователя.
- Ответ сразу под заголовком.
- JSON-LD на каждый snippet.
- Визуально выделено, но не как реклама.
- A/B тесты формулировок.

---

## 10. Таблицы с ценами

- Страница `/pricing/` + блоки `PriceTable` на услугах.
- Колонки: услуга / пакет / что входит / срок / цена от / валюта / CTA.
- Валюты: THB (основная), USD, EUR, RUB, ILS.
- Автоконвертация + ручное подтверждение.
- `Offer` / `OfferCatalog` / `PriceSpecification`.
- Анимация: строки по скроллу, цена «высекается», hover-подсветка.
- Mobile: карточки, не горизонтальный скролл.
- Дисклеймер: цены ориентировочные.

### 10.1. Цены — генерировать
Claude Code генерирует реалистичные цены для рынка Ко Панган / Таиланд:
- Social Media: от 15 000 THB / мес.
- Meta Ads: от 20 000 THB / мес.
- Видео: от 30 000 THB / проект.
- Фотосъёмка: от 12 000 THB / день.
- Web: от 45 000 THB / проект.
- Branding: от 60 000 THB / проект.
- Villas & Real Estate: от 25 000 THB / мес.
- Food: от 18 000 THB / мес.
- Local: от 10 000 THB / мес.

Помечать `<!-- GEN -->`.

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

### 11.1. Планы работ — генерировать
Claude Code генерирует реалистичные планы работ по каждой услуге:
- этапы (5–8),
- сроки,
- результаты,
- ответственные,
- стоимость.

---

## 12. Локализация и RTL

- 4 языка: en / ru / th / he.
- URL: `/en/`, `/ru/`, `/th/`, `/he/`.
- `hreflang` + `x-default`.
- `canonical` на каждой странице.
- Автоперевод запрещён.
- RTL для `he`: `dir="rtl"`, числа / цены / email — LTR внутри RTL.
- Иконки направления — зеркалятся.
- Логотип — не зеркалится.
- Сакральная геометрия — центрируется.
- Переключатель языков без потери URL.
- Вычитка носителями.

### 12.1. Генерация переводов
- Claude Code генерирует **уникальный** текст на каждом языке.
- Не перевод слово-в-слово.
- Учитывает культурные особенности.
- Помечает `<!-- GEN -->` для замены носителем.

---

## 13. Боты

### 13.1. Обязательные
- Telegram bot: `@creativelab_bot`.
- WhatsApp bot: `+66 80 870 5704`.

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
- Уведомление менеджеру в Telegram.
- Логирование.
- Нет тупиков.
- Возврат назад.
- Смена языка на любом шаге.
- Fallback на человека.
- Тест: все услуги × все локации × все языки.
- Rate limiting.
- PDPA / GDPR согласие.

### 13.4. Токены
- `CL_TELEGRAM_BOT_TOKEN` — в `.env`.
- `CL_TELEGRAM_MANAGER_CHAT_ID` — в `.env`.
- `WHATSAPP_TOKEN` — в `.env`.
- Claude Code пишет рабочий код с чтением из `process.env`.
- При отсутствии токена — код готов, токен подставляет владелец.

---

## 14. Архитектура и URL

### 14.1. Масштаб
- Целевой: 3000+ URL (архитектурная цель).
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
/en/advertising/meta-ads/
/en/advertising/google-ads/
/en/advertising/tiktok-ads/
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

### 14.5. 50+ подуслуг — генерировать
Claude Code генерирует 50+ подуслуг по 8 направлениям:
- **Advertising:** Meta Ads, Google Ads, TikTok Ads, YouTube Ads,
  LinkedIn Ads, Programmatic, Retargeting, Creative Strategy.
- **Social Media:** Content, Community, Influencer, Reels, Stories, TikTok,
  Instagram, Facebook, Line.
- **Villas & Real Estate:** Listing, Drone, Interior, Exterior, Virtual
  Tour, CGI, Aerial, Twilight.
- **Food:** Menu, Restaurant, Café, Delivery, Product, Lifestyle, Chef,
  Story.
- **Local:** Google Business, Maps, Local SEO, Reviews, Community.
- **Web:** Landing, Corporate, E-commerce, Portfolio, SEO, Analytics.
- **Video:** Commercial, Documentary, Music Video, Reels, Drone, Post.
- **Branding:** Logo, Identity, Guidelines, Naming, Packaging, Voice.

---

## 15. Постраничные улучшения (шаблоны)

### 15.1. Home
- `HeroPetroglyph` с master-глифом.
- `DirectAnswer` 50–80 слов.
- Секция 8 направлений.
- Кейсы.
- Процесс.
- Отзывы.
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

### 15.8. Locations
- `DirectAnswer`.
- Карта с метками.
- Описание локаций.
- JSON-LD: `LocalBusiness`.
- Schema: карта.

### 15.9. Contact
- `DirectAnswer`.
- Форма.
- Боты.
- Карта.
- Часы.
- JSON-LD: `LocalBusiness`, `ContactPoint`.
- Schema: connection glyph.

### 15.10. Journal
- Список постов.
- Фильтры.
- Поиск.
- JSON-LD: `ItemList`, `BlogPosting`.
- Schema: engraved timeline.

### 15.11. Journal post
- `DirectAnswer`.
- Основной текст 800+.
- Автор.
- Дата.
- Источники.
- CTA.
- JSON-LD: `BlogPosting`, `Person`, `BreadcrumbList`.
- Schema: engraved timeline.

### 15.12. FAQ
- `DirectAnswer`.
- Аккордеон.
- JSON-LD: `FAQPage`.
- Schema: вопрос / ответ.

### 15.13. Legal / Privacy / Terms
- Текст.
- Дата обновления.
- JSON-LD: `WebPage`.
- Schema: минимальный глиф.

### 15.14. 404 / 500 / offline
- Сообщение.
- Навигация.
- Поиск.
- Schema: разорванная линия.

---

## 16. Производительность и качество

### 16.1. Core Web Vitals (пороги 2026)
- LCP ≤ 2.5s (p75).
- INP ≤ 200ms (p75).
- CLS ≤ 0.1 (p75).
- FCP ≤ 1.8s.
- TTFB ≤ 0.8s.

### 16.2. Lighthouse
- Performance ≥ 90.
- SEO = 100.
- Accessibility ≥ 95.
- Best Practices ≥ 95.

### 16.3. Доступность
- axe-core: 0 critical / 0 serious.
- WCAG 2.2 AA минимум.
- Клавиатурная навигация.
- Видимый фокус.
- Контраст.
- alt у изображений.
- ARIA где нужно.
- Тест скринридером (NVDA / VoiceOver).

### 16.4. Адаптив
- 320 / 375 / 430 / 768 / 1024 / 1440 / 1920 / 2560.
- Тест на реальных устройствах.
- Тач-зоны ≥ 44×44px.
- Читаемость без zoom.

### 16.5. Изображения
- AVIF + WebP + fallback.
- Responsive `srcset` + `sizes`.
- Lazy (кроме LCP).
- `fetchpriority="high"` для LCP.
- Alt описательный.
- Без CLS (width / height / aspect-ratio).

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

- `sitemap.xml` + sitemap index.
- `robots.txt` с правилами для AI-ботов.
- `canonical` на каждой странице.
- `hreflang` на 4 языка + `x-default`.
- OG / Twitter cards.
- favicon (svg + png + apple-touch-icon).
- `manifest.webmanifest`.
- 404 / 500 / offline.
- 301-редиректы.
- HTTPS везде.
- www / без www — один вариант.
- Trailing slash — единый.
- Breadcrumbs.
- Внутренний поиск.
- RSS / Atom.
- HTML sitemap.

---

## 18. Стек

- Next.js (App Router) + TypeScript strict.
- Tailwind или CSS-модули + design tokens.
- GSAP + ScrollTrigger.
- Lenis (опционально).
- Inline SVG + SVGO.
- i18n: next-intl.
- GA4 + Plausible / Umami.
- web-vitals (RUM).
- Деплой: Vercel / Cloudflare.
- Branch strategy: `main` + `feature/*`.
- Conventional commits.

---

## 19. Чек-лист приёмки

### 19.1. Перед задачей
- [ ] Прочитан раздел 0.
- [ ] Прочитан раздел 22 (правила).
- [ ] Понятен закрываемый пункт.
- [ ] Понятны acceptance criteria.
- [ ] Не нарушены позиционирование / RTL / no-autotranslate.

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
- [ ] Alt у изображений.

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
- [ ] Раздел 25 полностью пройден.
- [ ] Раздел 0 актуален.
- [ ] Раздел 20 актуален.

---

## 20. Журнал изменений

### 2026-09-18
- Создан `Improvements.md` v2.0.
- Зафиксирован манифест дизайна (petroglyph & sacred geometry + luxury).
- Зафиксирована терминология: **петроглифы** — основной термин.
- Запрещено: «наскальная живопись», «иероглифы», «руны», «клипарт»,
  «эзотерика».
- Зафиксирован приоритет дизайна над формой контента.
- Добавлен режим Draft: генерация контента и контактов.
- Добавлены реальные контакты с сайта: `+66 80 870 5704`,
  `Koh Phangan, Thailand`.
- Добавлен раздел 25 «Соответствие Google 2026».
- Добавлены требования: AI-first, GEO, AEO, LLM, Featured Snippets,
  Price Tables, Animated Schematics & Work Plans, Luxury Blocks.

### <дата>
- <что сделано>

---

## 21. Блокеры и вопросы

- [BLOCKED] Токены ботов — только у владельца (внешний API-ключ).
- [BLOCKED] Токены платёжных систем — только у владельца.
- [QUESTION] Staging URL?
- [QUESTION] Хостинг (Vercel / Cloudflare)?
- [QUESTION] CRM: куда падают заявки?
- [QUESTION] KPI: сколько лидов в месяц ожидается?
- [QUESTION] Валюты: только отображение или оплата?
- [QUESTION] Тёмная тема: нужна?

---

## 22. Claude Code Instructions

> **Этот раздел читается первым.**

### 22.1. Контекст
- Репозиторий: `CreativeLAB.in.th`.
- Главный документ: `Improvements.md` (этот файл).
- Секреты: `.env` / GitHub Secrets.

### 22.2. Правила
1. `MUST` — не менять позиционирование (раздел 1).
2. `MUST NOT` — добавлять автоперевод.
3. `MUST` — сохранять RTL для `he`.
4. `MUST NOT` — использовать стоковые изображения.
5. `MUST NOT` — создавать thin pages.
6. `MUST` — каждая страница: Direct Answer + JSON-LD + OG + canonical +
   hreflang.
7. `MUST` — каждая страница: свой petroglyph-глиф + анимация (раздел 6).
8. `MUST` — каждая страница: минимум один snippet-блок (раздел 9).
9. `MUST` — цены → PriceTable + `Offer` (раздел 10).
10. `MUST` — процесс → ProcessSchema / WorkPlan + `HowTo` (раздел 11).
11. `MUST` — текст уникальный, 10/10, без AI-слопа (раздел 7).
12. `MUST` — компоненты — только из luxury blocks (раздел 5).
13. `MUST` — уважать `prefers-reduced-motion` (раздел 6).
14. `MUST` — после задачи обновить раздел 0 и раздел 20.
15. `MUST` — не коммитить секреты.
16. `MUST` — если данных нет, **генерировать** по шаблону раздела 3.
    Не блокировать задачу.
17. `MUST` — `[BLOCKED]` только для внешних API-ключей.
18. `MUST` — дизайн первичен (раздел 2).
19. `MUST` — каждая страница соответствует Google 2026 (раздел 25).
20. `MUST` — проверять каждый пункт раздела 25 перед коммитом.

### 22.3. Порядок работы
1. Прочитать раздел 0.
2. Прочитать раздел 22 (этот).
3. Прочитать раздел 21 (блокеры).
4. Прочитать соответствующий раздел задачи.
5. Прочитать раздел 19 (чек-лист).
6. Реализовать.
7. Прогнать чек-лист раздела 19 и раздела 25.
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
- Игнорировать раздел 25.
- Оставлять `XXX`, `<...>`, `TODO` в UI.

### 22.5. Режим Draft: генерация контента и контактов

**Принцип:** сайт должен быть 100% готовым к сборке и запуску.
Claude Code НЕ блокирует задачи из-за отсутствия данных.

**Правила:**
- `MUST` — если реальных данных нет, Claude Code генерирует контент
  самостоятельно: тексты, заголовки, Direct Answer, FAQ, описания услуг.
- `MUST` — контакты генерируются по шаблону раздела 3.
- `MUST` — все сгенерированные данные помечаются `<!-- GEN -->`.
- `MUST` — сгенерированный текст соответствует требованиям раздела 7
  (объём, тон, Direct Answer, без AI-слопа).
- `MUST NOT` — не помечать `[BLOCKED]` из-за отсутствия телефона, email
  или адреса.
- `MUST` — после генерации добавить запись в раздел 20:
  `[GEN] Сгенерированы контакты и контент для N страниц`.

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
- Не пройден раздел 25.
- В UI остались `XXX`, `<...>`, `TODO`.

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
- [ ] Раздел 25 полностью пройден.
- [ ] Раздел 0 актуален.
- [ ] Раздел 20 актуален.
- [ ] В UI нет `XXX`, `<...>`, `TODO`.

---

## 25. Соответствие Google 2026 (обязательно)

### 25.1. Google Search Essentials

**Технические требования:**
- [ ] `robots.txt` не блокирует нужные страницы.
- [ ] Нет `noindex` на индексируемых страницах.
- [ ] HTTP 200 для всех ключевых URL.
- [ ] Нет клоакинга.
- [ ] Ссылки сканируемы (crawlable).

**Spam-политики:**
- [ ] Нет «back button hijacking».
- [ ] Нет scaled content abuse (массовый AI-контент без ценности).
- [ ] Нет манипуляций с историей браузера.
- [ ] Нет скрытого текста и ссылок.
- [ ] Нет doorway pages.

**Best practices:**
- [ ] Helpful, reliable, people-first content.
- [ ] Слова из реальных поисковых запросов в заголовках.
- [ ] Описательный alt text.
- [ ] Сканируемые ссылки.
- [ ] Нет битых ссылок.

### 25.2. Core Web Vitals (пороги 2026)

| Метрика | Good | Needs improvement | Poor |
|---|---|---|---|
| LCP | ≤ 2.5s | ≤ 4.0s | > 4.0s |
| INP | ≤ 200ms | ≤ 500ms | > 500ms |
| CLS | ≤ 0.1 | ≤ 0.25 | > 0.25 |
| FCP | ≤ 1.8s | ≤ 3.0s | > 3.0s |
| TTFB | ≤ 0.8s | ≤ 1.8s | > 1.8s |

- [ ] LCP ≤ 2.5s (p75).
- [ ] INP ≤ 200ms (p75).
- [ ] CLS ≤ 0.1 (p75).
- [ ] FCP ≤ 1.8s.
- [ ] TTFB ≤ 0.8s.

### 25.3. Структурированные данные

- [ ] JSON-LD на всех типах страниц.
- [ ] Валиден через Rich Results Test.
- [ ] Валиден через Schema.org validator.
- [ ] Релевантен контенту.
- [ ] Не заблокирован для Googlebot.
- [ ] Указаны все обязательные свойства.
- [ ] Нет ложной разметки.

### 25.4. E-E-A-T

- [ ] Author bios с реальными credentials.
- [ ] Первоисточники и ссылки.
- [ ] Оригинальные фото и видео.
- [ ] Документированные процессы.
- [ ] Реальные кейсы и примеры.
- [ ] Даты публикации и обновления.
- [ ] Контакты, адрес, юр. информация.
- [ ] Отзывы и рейтинги.

### 25.5. Helpful Content

- [ ] Unique — уникальный, не воспроизводимый.
- [ ] Specific — конкретные кейсы и примеры.
- [ ] Authentic — на основе реального опыта.
- [ ] Нет commodity content.
- [ ] Нет AI-слопа.
- [ ] Нет mass-produced content.
- [ ] Нет content scraping.

### 25.6. Mobile-first

- [ ] Responsive design.
- [ ] Content parity mobile/desktop.
- [ ] Тап-зоны ≥ 44×44px.
- [ ] Шрифт ≥ 16px.
- [ ] Mobile LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.
- [ ] Нет горизонтального скролла.
- [ ] Нет interstitials, блокирующих контент.

### 25.7. HTTPS и безопасность

- [ ] HTTPS везде.
- [ ] HSTS с `max-age`, `includeSubDomains`, `preload`.
- [ ] Нет смешанного контента.
- [ ] SSL-сертификат валиден.
- [ ] Нет уязвимостей (OWASP top 10).
- [ ] CSP (Content Security Policy).

### 25.8. Доступность (accessibility tree)

- [ ] Semantic HTML.
- [ ] Focus management.
- [ ] Формы с labels.
- [ ] ARIA где нужно.
- [ ] Контраст WCAG AA.
- [ ] Клавиатурная навигация.
- [ ] Тест скринридером.
- [ ] Нет auto-play со звуком.
- [ ] Понятные ссылки.
- [ ] Иерархия заголовков.

### 25.9. Изображения

- [ ] AVIF + WebP + fallback.
- [ ] Responsive `srcset`.
- [ ] Lazy loading (кроме LCP).
- [ ] `fetchpriority="high"` для LCP.
- [ ] Alt text описательный.
- [ ] Ширина ≥ 1200px.
- [ ] Соотношение 16:9 или 4:3.
- [ ] Не использовать логотипы как og:image.
- [ ] Нет CLS.

### 25.10. Международный SEO

- [ ] `hreflang` на все 4 языка + `x-default`.
- [ ] Отдельные URL для каждого языка.
- [ ] Не использовать авторедирект по языку.
- [ ] Не использовать cookies для выбора языка (только URL).
- [ ] `canonical` на каждой странице.
- [ ] Консистентный контент между языками.

### 25.11. Индексация

- [ ] `sitemap.xml` + index.
- [ ] `sitemap.xml` отправлен в Search Console.
- [ ] `robots.txt` корректен.
- [ ] Нет `noindex` на нужных страницах.
- [ ] Нет `disallow` на нужных страницах.
- [ ] Нет orphan pages.
- [ ] Внутренняя перелинковка.

---

**Конец файла.**
