export type Locale = 'en' | 'ru' | 'th' | 'he';

export const LOCALES: Locale[] = ['en', 'ru', 'th', 'he'];

export type StepId =
  | 'language'
  | 'service'
  | 'location'
  | 'projectType'
  | 'description'
  | 'budget'
  | 'timeline'
  | 'attachments'
  | 'contactName'
  | 'contactDetail'
  | 'review'
  | 'submitted';

export interface Option {
  value: string;
  label: string;
}

export interface Attachment {
  /** Provider-native file id (Telegram file_id, WhatsApp media id) — never the raw bytes. */
  id: string;
  kind: 'photo' | 'document';
  channel: 'telegram' | 'whatsapp';
}

/**
 * Everything collected so far for one in-progress conversation. One
 * FlowState per user per channel; channel adapters are responsible for
 * persisting/loading it (see each adapter's session store).
 */
export interface FlowState {
  step: StepId;
  language?: Locale;
  service?: string; // hub slug, see data.ts SERVICES
  location?: string;
  projectType?: string;
  description?: string;
  budget?: string;
  timeline?: string;
  attachments: Attachment[];
  contactName?: string;
  contactDetail?: string;
  /** Where this conversation started — a service slug from a deep link, if any. */
  source?: string;
  startedAt: string; // ISO timestamp
}

/**
 * The submitted payload, matching proposal.md §15 BOT's field list exactly:
 * service, location, project_type, description, budget, timeline, name,
 * contact, channel, language, attachments, source, timestamp — plus the
 * CRM pipeline's entry stage (proposal.md §01 MASTER_TZ "CRM flow").
 */
export interface Lead {
  service: string;
  location: string;
  projectType: string;
  description: string;
  budget: string | null;
  timeline: string | null;
  name: string;
  contact: string;
  channel: 'telegram' | 'whatsapp';
  language: Locale;
  attachments: Attachment[];
  source: string | null;
  timestamp: string;
  stage: 'NEW LEAD';
}

export function createInitialState(source?: string): FlowState {
  return {
    step: 'language',
    attachments: [],
    source,
    startedAt: new Date().toISOString(),
  };
}
