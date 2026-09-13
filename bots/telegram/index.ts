import 'dotenv/config';
import { createTelegramBot } from './bot.js';

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.error('[telegram] TELEGRAM_BOT_TOKEN is not set — see bots/.env.example.');
  process.exit(1);
}

const bot = createTelegramBot(token);

bot.catch((err) => {
  console.error('[telegram] Unhandled bot error', err);
});

bot.start({
  onStart: (info) => console.log(`[telegram] Bot @${info.username} started (long polling).`),
});
