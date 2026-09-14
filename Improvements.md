# Improvements — CreativeLAB.in.th

Список правок/улучшений, которые нужно реализовать. На основе PROGRESS.md.

## 🔴 Обязательно перед запуском

### 1. Контактные данные
- [ ] **Email** — `hello@creativelab.in.th` — подтвердить или заменить
- [ ] **Телефон** — установить WhatsApp/телефон
- [ ] **Telegram bot handle** — установить `NEXT_PUBLIC_TELEGRAM_BOT`
- [ ] **WhatsApp number** — установить `NEXT_PUBLIC_WHATSAPP_NUMBER`
- [ ] **Физический адрес** — установить (сейчас отсутствует в schema)
- [ ] **Юридическое лицо** — указать полное название, реквизиты

### 2. Реальный контент
- [ ] Настоящие проекты / кейсы для портфолио
- [ ] Настоящие отзывы клиентов (testimonials)
- [ ] Настоящие фото/видео работ
- [ ] Настоящие кейс-стадис (сейчас "first case studies in progress")
- [ ] Статьи в Journal (сейчас "first articles on the way")
- [ ] **Цены** — подтвердить с клиентом, заменить примерные оценки

### 3. Юридические данные (нужен юрист!)
- [ ] Privacy Policy — заменить `[[VERIFY]]` на реальный текст (Thai law)
- [ ] Terms — заменить `[[VERIFY]]` на реальный текст

### 4. Боты (Telegram + WhatsApp)
- [ ] Telegram bot token (получить у @BotFather)
- [ ] WhatsApp Cloud API аккаунт + webhook
- [ ] Развернуть ботов на сервере с публичным URL для webhook
- [ ] CRM-интеграция (сейчас только "notify staff chat")

### 5. Переводы (RU/TH/HE)
- [ ] Routing/RTL/шрифты готовы — контента нет
- [ ] Решить: носитель языка или LLM-перевод с вычиткой
- [ ] Thai шрифт (`Noto_Sans_Thai`) — проверить рендер с реальным текстом

### 6. Аналитика
- [ ] Подключить GA4 / Yandex Metrica / Meta Pixel
- [ ] Настроить отслеживание лидов

### 7. Хостинг
- [ ] **Vercel / Node** — продакшн, НЕ GitHub Pages
- [ ] GitHub Pages (`deploy.yml`) — отключить или переделать (сейчас будет падать)
- [ ] `creativelab.in.th` домен — привязать к хостингу
- [ ] Запустить Lighthouse против live URL

## 🟡 Улучшения

### 8. Performance
- [ ] LCP > 2.5s — оптимизировать hero-изображения (реальные фото, а не placeholders)
- [ ] Core Web Vitals — перемерить после деплоя

### 9. QA
- [ ] axe-core accessibility pass
- [ ] Кросс-браузерное тестирование
- [ ] Mobile viewport визуальная проверка
- [ ] Hebrew RTL — проверить визуально с реальным контентом

### 10. Technical debt
- [ ] `robots.txt` / `llms.txt` — переделать с static файлов на генерацию из контента
- [ ] Contact form — подключить реальный email (Resend/SES/CRM)
- [ ] Header sticky — решить с заказчиком translucent vs transparent-on-hero

### 11. IA cannibalization
- [ ] Согласовать с клиентом дублирующиеся страницы (напр. `/food-restaurants/website/` vs `/websites-digital/restaurant-website/`)

### 12. Прочее
- [ ] Меню V2 — проверить что реализовано
- [ ] Star Project button — перенести из header в footer