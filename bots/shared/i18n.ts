import type { Locale } from './types.js';

export interface BotDictionary {
  askLanguage: string;
  askService: string;
  askLocation: string;
  askProjectType: string;
  askDescription: string;
  askBudget: string;
  askTimeline: string;
  askAttachments: string;
  askContactName: string;
  askContactDetail: string;
  reviewHeading: string;
  reviewService: string;
  reviewLocation: string;
  reviewProjectType: string;
  reviewDescription: string;
  reviewBudget: string;
  reviewTimeline: string;
  reviewAttachments: string;
  reviewName: string;
  reviewContact: string;
  none: string;
  confirmSubmit: string;
  editAnswer: string;
  restart: string;
  skip: string;
  submitted: string;
  invalidChoice: string;
  attachmentSaved: string;
  attachmentRejected: string;
  doneWithAttachments: string;
  startOver: string;
  welcomeBack: string;
}

const en: BotDictionary = {
  askLanguage: 'Hi — which language would you like to continue in?',
  askService: "Which of these best matches what you're looking for?",
  askLocation: 'Where on (or near) Koh Phangan is this for?',
  askProjectType: 'What kind of project is this?',
  askDescription: 'Tell us a bit about your project — what are you trying to achieve?',
  askBudget: "Do you have a rough budget in mind? (You can skip this.)",
  askTimeline: 'Any timeline in mind? (You can skip this.)',
  askAttachments: 'Feel free to send photos, plans or reference files now — or skip if you have none.',
  askContactName: "What's your name?",
  askContactDetail: 'Best phone number, email or WhatsApp to reach you on?',
  reviewHeading: "Here's what we've got — please check it over:",
  reviewService: 'Service',
  reviewLocation: 'Location',
  reviewProjectType: 'Project type',
  reviewDescription: 'Description',
  reviewBudget: 'Budget',
  reviewTimeline: 'Timeline',
  reviewAttachments: 'Attachments',
  reviewName: 'Name',
  reviewContact: 'Contact',
  none: 'None',
  confirmSubmit: 'Looks good — submit',
  editAnswer: 'Edit an answer',
  restart: 'Start over',
  skip: 'Skip',
  submitted:
    "Thank you — your project details have been sent to our team. We usually reply within one business day. If it's urgent, feel free to say so here.",
  invalidChoice: "Sorry, I didn't understand that — please choose one of the options above.",
  attachmentSaved: 'Got it — file saved. Send another, or continue.',
  attachmentRejected: "That file couldn't be saved — please try a smaller photo/document, or continue without it.",
  doneWithAttachments: "That's all my files",
  startOver: 'Restart',
  welcomeBack: 'Welcome back! Continuing where you left off.',
};

const ru: BotDictionary = {
  askLanguage: 'Здравствуйте! На каком языке вам удобнее продолжить?',
  askService: 'Что из этого больше всего подходит под ваш запрос?',
  askLocation: 'Где на Панган (или рядом) это находится?',
  askProjectType: 'Какой это тип проекта?',
  askDescription: 'Расскажите немного о проекте — чего вы хотите добиться?',
  askBudget: 'Есть примерный бюджет? (Можно пропустить.)',
  askTimeline: 'Есть предпочтения по срокам? (Можно пропустить.)',
  askAttachments: 'Можете прислать фото, планы или референсы сейчас — или пропустить, если их нет.',
  askContactName: 'Как вас зовут?',
  askContactDetail: 'Лучший номер телефона, email или WhatsApp для связи?',
  reviewHeading: 'Проверьте, пожалуйста, что мы записали:',
  reviewService: 'Услуга',
  reviewLocation: 'Локация',
  reviewProjectType: 'Тип проекта',
  reviewDescription: 'Описание',
  reviewBudget: 'Бюджет',
  reviewTimeline: 'Сроки',
  reviewAttachments: 'Вложения',
  reviewName: 'Имя',
  reviewContact: 'Контакт',
  none: 'Нет',
  confirmSubmit: 'Всё верно — отправить',
  editAnswer: 'Изменить ответ',
  restart: 'Начать заново',
  skip: 'Пропустить',
  submitted:
    'Спасибо — информация о проекте передана нашей команде. Обычно мы отвечаем в течение одного рабочего дня. Если это срочно, напишите об этом здесь.',
  invalidChoice: 'Извините, не поняла — выберите, пожалуйста, один из вариантов выше.',
  attachmentSaved: 'Файл сохранён. Пришлите ещё один или продолжайте.',
  attachmentRejected: 'Не удалось сохранить файл — попробуйте файл меньшего размера или продолжайте без него.',
  doneWithAttachments: 'Это все файлы',
  startOver: 'Начать заново',
  welcomeBack: 'С возвращением! Продолжаем с того места, где остановились.',
};

const th: BotDictionary = {
  askLanguage: 'สวัสดีค่ะ อยากใช้ภาษาไหนในการสนทนา?',
  askService: 'ข้อไหนตรงกับสิ่งที่คุณกำลังมองหามากที่สุด?',
  askLocation: 'โครงการนี้อยู่ที่ไหนบนเกาะพะงัน (หรือใกล้เคียง)?',
  askProjectType: 'โครงการนี้เป็นแบบไหน?',
  askDescription: 'ช่วยเล่าเกี่ยวกับโครงการของคุณสักหน่อย — อยากได้ผลลัพธ์แบบไหน?',
  askBudget: 'มีงบประมาณคร่าวๆ ไหมคะ (ข้ามได้ถ้ายังไม่แน่ใจ)',
  askTimeline: 'มีกรอบเวลาที่ต้องการไหมคะ (ข้ามได้)',
  askAttachments: 'ส่งรูปภาพ แผนผัง หรือไฟล์อ้างอิงได้เลย — หรือข้ามได้ถ้าไม่มี',
  askContactName: 'ขอทราบชื่อได้ไหมคะ?',
  askContactDetail: 'เบอร์โทร อีเมล หรือ WhatsApp ที่ติดต่อได้สะดวกที่สุด?',
  reviewHeading: 'ช่วยตรวจสอบข้อมูลที่เราบันทึกไว้ค่ะ:',
  reviewService: 'บริการ',
  reviewLocation: 'สถานที่',
  reviewProjectType: 'ประเภทโครงการ',
  reviewDescription: 'รายละเอียด',
  reviewBudget: 'งบประมาณ',
  reviewTimeline: 'กรอบเวลา',
  reviewAttachments: 'ไฟล์แนบ',
  reviewName: 'ชื่อ',
  reviewContact: 'ช่องทางติดต่อ',
  none: 'ไม่มี',
  confirmSubmit: 'ข้อมูลถูกต้อง — ส่งเลย',
  editAnswer: 'แก้ไขคำตอบ',
  restart: 'เริ่มใหม่',
  skip: 'ข้าม',
  submitted: 'ขอบคุณค่ะ — รายละเอียดโครงการถูกส่งให้ทีมงานแล้ว โดยปกติเราจะตอบกลับภายในหนึ่งวันทำการ หากเร่งด่วนสามารถแจ้งได้ที่นี่เลยค่ะ',
  invalidChoice: 'ขออภัยค่ะ ไม่เข้าใจคำตอบ กรุณาเลือกจากตัวเลือกด้านบน',
  attachmentSaved: 'บันทึกไฟล์แล้วค่ะ ส่งเพิ่มได้อีก หรือดำเนินการต่อ',
  attachmentRejected: 'บันทึกไฟล์นี้ไม่ได้ — ลองไฟล์ที่เล็กลง หรือดำเนินการต่อโดยไม่แนบไฟล์',
  doneWithAttachments: 'ส่งไฟล์ครบแล้ว',
  startOver: 'เริ่มใหม่',
  welcomeBack: 'ยินดีต้อนรับกลับค่ะ ดำเนินการต่อจากที่ค้างไว้',
};

const he: BotDictionary = {
  askLanguage: 'שלום! באיזו שפה תרצו להמשיך?',
  askService: 'איזו מהאפשרויות הכי מתאימה למה שאתם מחפשים?',
  askLocation: 'איפה בקוה פנגן (או בסביבה) זה נמצא?',
  askProjectType: 'איזה סוג פרויקט זה?',
  askDescription: 'ספרו לנו קצת על הפרויקט שלכם — למה אתם שואפים?',
  askBudget: 'יש לכם תקציב משוער בראש? (אפשר לדלג.)',
  askTimeline: 'יש לוח זמנים בראש? (אפשר לדלג.)',
  askAttachments: 'אפשר לשלוח עכשיו תמונות, תוכניות או קבצי השראה — או לדלג אם אין.',
  askContactName: 'מה שמכם?',
  askContactDetail: 'מספר טלפון, אימייל או WhatsApp הכי נוח ליצירת קשר?',
  reviewHeading: 'הנה מה שיש לנו — נא לבדוק:',
  reviewService: 'שירות',
  reviewLocation: 'מיקום',
  reviewProjectType: 'סוג פרויקט',
  reviewDescription: 'תיאור',
  reviewBudget: 'תקציב',
  reviewTimeline: 'לוח זמנים',
  reviewAttachments: 'קבצים מצורפים',
  reviewName: 'שם',
  reviewContact: 'איש קשר',
  none: 'ללא',
  confirmSubmit: 'הכול נראה טוב — שליחה',
  editAnswer: 'עריכת תשובה',
  restart: 'התחלה מחדש',
  skip: 'דילוג',
  submitted: 'תודה — פרטי הפרויקט נשלחו לצוות שלנו. אנחנו בדרך כלל עונים תוך יום עסקים אחד. אם זה דחוף, אפשר לציין זאת כאן.',
  invalidChoice: 'סליחה, לא הבנו — נא לבחור אחת מהאפשרויות למעלה.',
  attachmentSaved: 'הקובץ נשמר. אפשר לשלוח עוד אחד, או להמשיך.',
  attachmentRejected: 'לא הצלחנו לשמור את הקובץ — נסו קובץ קטן יותר, או המשיכו בלעדיו.',
  doneWithAttachments: 'זה כל הקבצים',
  startOver: 'התחלה מחדש',
  welcomeBack: 'ברוכים השבים! ממשיכים מהנקודה שבה עצרתם.',
};

const DICTIONARIES: Record<Locale, BotDictionary> = { en, ru, th, he };

export function getBotDictionary(locale: Locale): BotDictionary {
  return DICTIONARIES[locale];
}
