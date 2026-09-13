import 'dotenv/config';
import { createWhatsAppApp } from './webhook.js';

const requiredEnv = ['WHATSAPP_ACCESS_TOKEN', 'WHATSAPP_PHONE_NUMBER_ID', 'WHATSAPP_VERIFY_TOKEN'];
const missing = requiredEnv.filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error(`[whatsapp] Missing required env vars: ${missing.join(', ')} — see bots/.env.example.`);
  process.exit(1);
}

const port = Number(process.env.PORT ?? 3001);
const app = createWhatsAppApp();

app.listen(port, () => {
  console.log(`[whatsapp] Webhook listening on port ${port} (POST/GET /webhook).`);
});
