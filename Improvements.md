# IMPROVEMENTS — CreativeLAB.in.th

> Обновлено: 20 Sep 2026
> Форк-анализ: https://github.com/stoianov46/CreativeLab.git

---

## 🔴 КРИТИЧЕСКИЕ — безопасность

### 1. Токен бота в клиентском коде (ContactForm.tsx)

**Проблема:** Токен `@creativelab1_bot` зашит прямо в клиентский JS бандл в `/src/components/blocks/ContactForm.tsx`. Любой посетитель сайта видит его в F12 → Sources.

**Что произошло:** Бот был взломан — злоумышленник получил токен из браузера, мог читать все входящие сообщения и писать от имени бота.

**✅ Статус:** Токен отозван через BotFather. Новый токен получен, но ещё не вставлен.

**Задача:** Переделать ContactForm — отправлять через серверный API route (`/api/contact/route.ts`), токен хранить в `.env`, не в браузере.

```typescript
// В api/contact/route.ts:
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN_CREATIVELAB1;
// POST → fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`)
```

---

### 2. Токен FORMA (@formaisland_bot)

**✅ Статус:** Токен `869528…8VeY` получен от BotFather. В `.env` ещё не вставлен.

**Задача:** Вставить в `parvati-weed-thailand-bot/.env` как `BOT_TOKEN`.

---

## 🟡 ВАЖНЫЕ — интеграция из форка stoianov46

### 3. llms.txt — динамический route (из форка)

Форк добавил `src/app/llms.txt/route.ts` вместо статического `public/llms.txt`. Нужно взять, адаптировать под нашу структуру.

**Файл:** `src/app/llms.txt/route.ts` (from stoianov46)

### 4. robots.txt — динамический route (из форка)

Форк добавил `src/app/robots.ts` вместо статического `public/robots.txt`. Полезно для SEO.

**Файл:** `src/app/robots.ts` (from stoianov46)

### 5. Контакты — обновление site.ts

Форк обновил телефон, WhatsApp, Telegram в `/src/content/site.ts`:

- Телефон: `+66 80 870 5704`
- WhatsApp: `+66 80 870 5704`
- Telegram: `@creativelab1_bot`
- Email: `karma8chakra@gmail.com`

**Задача:** Сверить с актуальными контактами клиента.

---

## 🟢 ПЛАНОВЫЕ — контент + SEO

### 6. TextSection.tsx — удалён в форке

Форк удалил `TextSection.tsx`. Нужно понять, чем заменены H2-секции на страницах хабов, или оставить.

### 7. Homepage — изменения (page.tsx + homepage.ts)

Форк изменил главную страницу и её контент. Нужно сравнить на предмет улучшений.

### 8. Improvements.md — форк переписал полностью

Форк сократил Improvements.md с 1698 до 466 строк. Возможно, часть задач уже решена — нужно сверить.

### 9. proposal.md — форк переструктурировал

Полная переработка. Вероятно, содержит актуальные требования клиента — стоит изучить.

---

## 🔧 ТЕХНИЧЕСКИЕ

### 10. next.config.ts — форк изменил

Проверить изменения — статический экспорт, basePath, кросс-оригин.

### 11. Мобильное меню — проверить

Не открывается на телефоне — зафиксировано в ТЗ.

### 12. Linktree — не сделан

Kim Andromeda + CreativeLAB — нужен отдельный landing.

---

## 📋 ПОРЯДОК РАБОТ

Когда включишь режим работы:

1. **🔴 ContactForm** — токен на сервер, `.env`, протестировать
2. **🔴 FORMA .env** — вставить токен бота
3. **🟡 llms.txt + robots.txt** — взять динамические route из форка
4. **🟡 site.ts** — сверить контакты
5. **🟢 proposal.md** — изучить переработку из форка
6. **🟢 TextSection + homepage** — сравнить изменения
7. **🟢 Мобильное меню** — пофиксить