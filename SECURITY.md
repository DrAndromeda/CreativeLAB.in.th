# Безопасность токенов — CreativeLAB

## ❗ Железное правило

**В коде не должно быть ни токенов, ни паролей.**

Всё — через переменные окружения (`.env`):

- `BOT_TOKEN` — в `.env`
- `BOT_TOKEN` — не в `src/` и не в клиентском JS
- `.env` — в `.gitignore`, на каждом сервере свой
- Client → Server API route → Telegram (токен только на сервере)

## Текущие токены

| Бот | Токен | Статус |
|-----|-------|--------|
| @creativelab1_bot | `852928…7MBI` | ✅ Новый, в `.env` |
| @formaisland_bot (FORMA) | `869528…8VeY` | 🔴 Ещё не вставлен |

## История

- Старый токен @creativelab1_bot был зашит в `ContactForm.tsx` → отозван
- Новый токен — только в `.env`
- `api/contact/route.ts` читает `process.env.BOT_TOKEN`