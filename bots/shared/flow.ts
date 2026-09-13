/**
 * Channel-agnostic intake state machine. Neither Telegram nor WhatsApp
 * specifics live here — each channel adapter renders `getOptionsFor`/
 * `getPromptText` however fits its platform (inline keyboard, interactive
 * list, numbered text) and calls `advance`/`goBack`/`restart` in response
 * to user input. This file has no knowledge of grammY or the WhatsApp
 * Cloud API at all, so the same flow logic backs both bots.
 */
import { getBotDictionary } from './i18n.js';
import { locationOptions, locationLabel, projectTypeOptions, projectTypeLabel, serviceOptions, serviceLabel, LANGUAGE_OPTIONS, isKnownService } from './data.js';
import type { Attachment, FlowState, Lead, Locale, Option, StepId } from './types.js';
import { createInitialState } from './types.js';

export { createInitialState };

const STEP_ORDER: StepId[] = [
  'language',
  'service',
  'location',
  'projectType',
  'description',
  'budget',
  'timeline',
  'attachments',
  'contactName',
  'contactDetail',
  'review',
  'submitted',
];

const OPTIONAL_STEPS = new Set<StepId>(['budget', 'timeline', 'attachments']);
const CHOICE_STEPS = new Set<StepId>(['language', 'service', 'location', 'projectType']);
const TEXT_STEPS = new Set<StepId>(['description', 'budget', 'timeline', 'contactName', 'contactDetail']);

export function isOptional(step: StepId): boolean {
  return OPTIONAL_STEPS.has(step);
}

export function isChoiceStep(step: StepId): boolean {
  return CHOICE_STEPS.has(step);
}

export function isTextStep(step: StepId): boolean {
  return TEXT_STEPS.has(step);
}

export function isAttachmentsStep(step: StepId): boolean {
  return step === 'attachments';
}

/** Options to render for the current step, if it's a choice step. Empty array otherwise. */
export function getOptionsFor(state: FlowState): Option[] {
  const locale = state.language ?? 'en';
  switch (state.step) {
    case 'language':
      return LANGUAGE_OPTIONS;
    case 'service':
      return serviceOptions(locale);
    case 'location':
      return locationOptions(locale);
    case 'projectType':
      return projectTypeOptions(locale);
    default:
      return [];
  }
}

/** The dictionary key to prompt for the current step (language defaults to English until chosen). */
export function getPromptText(state: FlowState): string {
  const dict = getBotDictionary(state.language ?? 'en');
  switch (state.step) {
    case 'language':
      return dict.askLanguage;
    case 'service':
      return dict.askService;
    case 'location':
      return dict.askLocation;
    case 'projectType':
      return dict.askProjectType;
    case 'description':
      return dict.askDescription;
    case 'budget':
      return dict.askBudget;
    case 'timeline':
      return dict.askTimeline;
    case 'attachments':
      return dict.askAttachments;
    case 'contactName':
      return dict.askContactName;
    case 'contactDetail':
      return dict.askContactDetail;
    case 'review':
      return dict.reviewHeading;
    case 'submitted':
      return dict.submitted;
  }
}

function nextStep(step: StepId): StepId {
  const idx = STEP_ORDER.indexOf(step);
  return STEP_ORDER[Math.min(idx + 1, STEP_ORDER.length - 1)];
}

function prevStep(step: StepId): StepId {
  const idx = STEP_ORDER.indexOf(step);
  return STEP_ORDER[Math.max(idx - 1, 0)];
}

export interface AdvanceOptions {
  /** If set (e.g. editing from the review screen), go here instead of the natural next step. */
  returnTo?: StepId;
}

export interface AdvanceResult {
  state: FlowState;
  /** False when a choice step got input that didn't match any known option — re-prompt, don't advance. */
  accepted: boolean;
}

/** Applies free-text or a chosen option's value to the current step, then moves the state forward. */
export function advance(state: FlowState, rawValue: string, opts: AdvanceOptions = {}): AdvanceResult {
  const value = rawValue.trim();
  const step = state.step;

  if (isChoiceStep(step)) {
    const valid = getOptionsFor(state).some((o) => o.value === value);
    if (!valid) return { state, accepted: false };
  }

  const updated: FlowState = { ...state };

  switch (step) {
    case 'language':
      updated.language = value as Locale;
      break;
    case 'service':
      updated.service = value;
      break;
    case 'location':
      updated.location = value;
      break;
    case 'projectType':
      updated.projectType = value;
      break;
    case 'description':
      updated.description = value;
      break;
    case 'budget':
      updated.budget = value || undefined;
      break;
    case 'timeline':
      updated.timeline = value || undefined;
      break;
    case 'contactName':
      updated.contactName = value;
      break;
    case 'contactDetail':
      updated.contactDetail = value;
      break;
    case 'attachments':
    case 'review':
    case 'submitted':
      // Handled by dedicated helpers (addAttachment/skipAttachments/confirmSubmit), not free text.
      break;
  }

  updated.step = opts.returnTo ?? nextStep(step);
  return { state: updated, accepted: true };
}

/** Skips an optional step without recording an answer. */
export function skip(state: FlowState, opts: AdvanceOptions = {}): FlowState {
  return { ...state, step: opts.returnTo ?? nextStep(state.step) };
}

export function goBack(state: FlowState): FlowState {
  return { ...state, step: prevStep(state.step) };
}

export function restart(state: FlowState): FlowState {
  return createInitialState(state.source);
}

/** For the "edit an answer" flow off the review screen — jump directly to any earlier step. */
export function editStep(state: FlowState, step: StepId): FlowState {
  return { ...state, step };
}

const MAX_ATTACHMENTS = 6;
const MAX_ATTACHMENT_BYTES = 20 * 1024 * 1024; // 20MB — generous but bounded

export interface AttachmentCandidate {
  id: string;
  kind: Attachment['kind'];
  channel: Attachment['channel'];
  sizeBytes?: number;
}

export function addAttachment(state: FlowState, candidate: AttachmentCandidate): { state: FlowState; ok: boolean } {
  if (state.attachments.length >= MAX_ATTACHMENTS) return { state, ok: false };
  if (candidate.sizeBytes != null && candidate.sizeBytes > MAX_ATTACHMENT_BYTES) return { state, ok: false };
  const attachments = [...state.attachments, { id: candidate.id, kind: candidate.kind, channel: candidate.channel }];
  return { state: { ...state, attachments }, ok: true };
}

export function finishAttachments(state: FlowState, opts: AdvanceOptions = {}): FlowState {
  return { ...state, step: opts.returnTo ?? nextStep('attachments') };
}

/** Pre-selects a service from a deep link (e.g. Telegram `?start=service_<slug>`) before the flow reaches that step. */
export function preselectService(state: FlowState, slug: string): FlowState {
  if (!isKnownService(slug)) return state;
  return { ...state, service: slug, source: state.source ?? slug };
}

function fieldLine(label: string, value: string): string {
  return `${label}: ${value}`;
}

/** Human-readable summary shown on the review screen and forwarded alongside the submitted Lead. */
export function formatSummary(state: FlowState): string {
  const locale = state.language ?? 'en';
  const dict = getBotDictionary(locale);
  const lines = [
    fieldLine(dict.reviewService, state.service ? serviceLabel(locale, state.service) : dict.none),
    fieldLine(dict.reviewLocation, state.location ? locationLabel(locale, state.location) : dict.none),
    fieldLine(dict.reviewProjectType, state.projectType ? projectTypeLabel(locale, state.projectType) : dict.none),
    fieldLine(dict.reviewDescription, state.description ?? dict.none),
    fieldLine(dict.reviewBudget, state.budget ?? dict.none),
    fieldLine(dict.reviewTimeline, state.timeline ?? dict.none),
    fieldLine(dict.reviewAttachments, state.attachments.length ? String(state.attachments.length) : dict.none),
    fieldLine(dict.reviewName, state.contactName ?? dict.none),
    fieldLine(dict.reviewContact, state.contactDetail ?? dict.none),
  ];
  return lines.join('\n');
}

export function isReadyToSubmit(state: FlowState): boolean {
  return Boolean(
    state.language && state.service && state.location && state.projectType && state.description && state.contactName && state.contactDetail
  );
}

/** Builds the final payload once the user confirms on the review screen. Throws if required fields are missing. */
export function buildLead(state: FlowState, channel: Lead['channel']): Lead {
  if (!isReadyToSubmit(state)) {
    throw new Error('buildLead called before all required fields were collected');
  }
  return {
    service: state.service!,
    location: state.location!,
    projectType: state.projectType!,
    description: state.description!,
    budget: state.budget ?? null,
    timeline: state.timeline ?? null,
    name: state.contactName!,
    contact: state.contactDetail!,
    channel,
    language: state.language!,
    attachments: state.attachments,
    source: state.source ?? null,
    timestamp: new Date().toISOString(),
    stage: 'NEW LEAD',
  };
}
