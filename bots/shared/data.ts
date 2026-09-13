import type { Locale, Option } from './types.js';

/**
 * The 8 service hubs, matching src/content/hubs/*.ts on the website
 * exactly (see proposal.md §02 SITE_ARCHITECTURE) — kept as slugs so a
 * service-page deep link (`?start=service_<slug>`) lines up with the
 * site's own URL structure (`/<slug>/`).
 */
const SERVICE_SLUGS = [
  'advertising',
  'social-media',
  'villas-real-estate',
  'food-restaurants',
  'business-local-presence',
  'websites-digital',
  'video-production',
  'branding-creative',
] as const;

const SERVICE_LABELS: Record<Locale, Record<(typeof SERVICE_SLUGS)[number], string>> = {
  en: {
    advertising: 'Advertising',
    'social-media': 'Social Media',
    'villas-real-estate': 'Villas & Real Estate',
    'food-restaurants': 'Food & Restaurants',
    'business-local-presence': 'Business & Local Presence',
    'websites-digital': 'Websites & Digital',
    'video-production': 'Video & Production',
    'branding-creative': 'Branding & Creative',
  },
  ru: {
    advertising: 'Реклама',
    'social-media': 'Социальные сети',
    'villas-real-estate': 'Виллы и недвижимость',
    'food-restaurants': 'Еда и рестораны',
    'business-local-presence': 'Локальное присутствие бизнеса',
    'websites-digital': 'Сайты и digital',
    'video-production': 'Видео и продакшн',
    'branding-creative': 'Брендинг и креатив',
  },
  th: {
    advertising: 'โฆษณา',
    'social-media': 'โซเชียลมีเดีย',
    'villas-real-estate': 'วิลล่าและอสังหาริมทรัพย์',
    'food-restaurants': 'อาหารและร้านอาหาร',
    'business-local-presence': 'การมองเห็นธุรกิจในพื้นที่',
    'websites-digital': 'เว็บไซต์และดิจิทัล',
    'video-production': 'วิดีโอและโปรดักชัน',
    'branding-creative': 'แบรนด์และครีเอทีฟ',
  },
  he: {
    advertising: 'פרסום',
    'social-media': 'רשתות חברתיות',
    'villas-real-estate': 'וילות ונדל"ן',
    'food-restaurants': 'מזון ומסעדות',
    'business-local-presence': 'נוכחות עסקית מקומית',
    'websites-digital': 'אתרים ודיגיטל',
    'video-production': 'וידאו והפקה',
    'branding-creative': 'מיתוג וקריאייטיב',
  },
};

export function serviceOptions(locale: Locale): Option[] {
  return SERVICE_SLUGS.map((value) => ({ value, label: SERVICE_LABELS[locale][value] }));
}

export function serviceLabel(locale: Locale, slug: string): string {
  const labels = SERVICE_LABELS[locale] as Record<string, string>;
  return labels[slug] ?? slug;
}

export function isKnownService(slug: string): slug is (typeof SERVICE_SLUGS)[number] {
  return (SERVICE_SLUGS as readonly string[]).includes(slug);
}

/**
 * Island areas already referenced in the site's own copy (e.g. the Villas
 * & Real Estate hub, LocationBlock text) — not invented for the bot.
 * "Other" covers anywhere else on/off the island rather than forcing a
 * false choice.
 */
const LOCATION_KEYS = [
  'thong-sala',
  'srithanu',
  'haad-rin',
  'chaloklum',
  'baan-tai',
  'other-koh-phangan',
  'outside-koh-phangan',
] as const;

const LOCATION_LABELS: Record<Locale, Record<(typeof LOCATION_KEYS)[number], string>> = {
  en: {
    'thong-sala': 'Thong Sala',
    srithanu: 'Srithanu',
    'haad-rin': 'Haad Rin',
    chaloklum: 'Chaloklum',
    'baan-tai': 'Baan Tai',
    'other-koh-phangan': 'Other area, Koh Phangan',
    'outside-koh-phangan': 'Outside Koh Phangan',
  },
  ru: {
    'thong-sala': 'Тонг Сала',
    srithanu: 'Сритану',
    'haad-rin': 'Хаад Рин',
    chaloklum: 'Чалокрам',
    'baan-tai': 'Баан Тай',
    'other-koh-phangan': 'Другой район Панган',
    'outside-koh-phangan': 'За пределами Панган',
  },
  th: {
    'thong-sala': 'ท้องศาลา',
    srithanu: 'ศรีธนู',
    'haad-rin': 'หาดริ้น',
    chaloklum: 'ฉลอกลำ',
    'baan-tai': 'บ้านใต้',
    'other-koh-phangan': 'พื้นที่อื่นบนเกาะพะงัน',
    'outside-koh-phangan': 'นอกเกาะพะงัน',
  },
  he: {
    'thong-sala': 'תונג סלה',
    srithanu: 'סריתנו',
    'haad-rin': 'האד רין',
    chaloklum: 'צ׳לוקלום',
    'baan-tai': 'באן טאי',
    'other-koh-phangan': 'אזור אחר בקוה פנגן',
    'outside-koh-phangan': 'מחוץ לקוה פנגן',
  },
};

export function locationOptions(locale: Locale): Option[] {
  return LOCATION_KEYS.map((value) => ({ value, label: LOCATION_LABELS[locale][value] }));
}

export function locationLabel(locale: Locale, key: string): string {
  const labels = LOCATION_LABELS[locale] as Record<string, string>;
  return labels[key] ?? key;
}

/**
 * The 5 commercial models from proposal.md §3 COMMERCIAL — the real
 * options the agency actually sells, not invented ones.
 */
const PROJECT_TYPE_KEYS = [
  'one-off-shoot',
  'production-package',
  'monthly-content',
  'advertising-retainer',
  'full-marketing-retainer',
  'not-sure-yet',
] as const;

const PROJECT_TYPE_LABELS: Record<Locale, Record<(typeof PROJECT_TYPE_KEYS)[number], string>> = {
  en: {
    'one-off-shoot': 'One-off shoot (photo or video)',
    'production-package': 'Production package (multi-day / multi-asset)',
    'monthly-content': 'Monthly content (recurring)',
    'advertising-retainer': 'Advertising retainer (Google/Meta Ads)',
    'full-marketing-retainer': 'Full marketing retainer',
    'not-sure-yet': "Not sure yet — let's discuss",
  },
  ru: {
    'one-off-shoot': 'Разовая съёмка (фото или видео)',
    'production-package': 'Пакет продакшна (несколько дней / активов)',
    'monthly-content': 'Ежемесячный контент (регулярно)',
    'advertising-retainer': 'Рекламное сопровождение (Google/Meta Ads)',
    'full-marketing-retainer': 'Полное маркетинговое сопровождение',
    'not-sure-yet': 'Пока не уверен(а) — обсудим',
  },
  th: {
    'one-off-shoot': 'ถ่ายครั้งเดียว (ภาพหรือวิดีโอ)',
    'production-package': 'แพ็กเกจโปรดักชัน (หลายวัน/หลายชิ้นงาน)',
    'monthly-content': 'คอนเทนต์รายเดือน (ต่อเนื่อง)',
    'advertising-retainer': 'ดูแลโฆษณา (Google/Meta Ads)',
    'full-marketing-retainer': 'ดูแลการตลาดแบบครบวงจร',
    'not-sure-yet': 'ยังไม่แน่ใจ — ขอคุยก่อน',
  },
  he: {
    'one-off-shoot': 'צילום חד פעמי (תמונה או וידאו)',
    'production-package': 'חבילת הפקה (רב-יומית / ריבוי נכסים)',
    'monthly-content': 'תוכן חודשי (מתמשך)',
    'advertising-retainer': 'ליווי פרסום (Google/Meta Ads)',
    'full-marketing-retainer': 'ליווי שיווקי מלא',
    'not-sure-yet': 'עדיין לא בטוח/ה — בואו נדבר',
  },
};

export function projectTypeOptions(locale: Locale): Option[] {
  return PROJECT_TYPE_KEYS.map((value) => ({ value, label: PROJECT_TYPE_LABELS[locale][value] }));
}

export function projectTypeLabel(locale: Locale, key: string): string {
  const labels = PROJECT_TYPE_LABELS[locale] as Record<string, string>;
  return labels[key] ?? key;
}

export const LANGUAGE_OPTIONS: Option[] = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Русский' },
  { value: 'th', label: 'ไทย' },
  { value: 'he', label: 'עברית' },
];
