export const SITE = {
  name: "CreativeLAB",
  legalName: "CreativeLAB Koh Phangan",
  domain: "creativelab.in.th",
  url: "https://creativelab.in.th",
  tagline: "Advertising & Creative Marketing Agency on Koh Phangan",
  corePromise:
    "We create content that makes island businesses look better — and sell better.",
  location: "Koh Phangan, Thailand",
  // Email/phone/WhatsApp were provided by the team on 2026-09-15,
  // replacing an earlier [[VERIFY]]/all-zeros placeholder — treat as real
  // unless told otherwise. `telegram` was set in that SAME commit as the
  // fake "+66-00-000-0000" placeholder and never revisited afterward the
  // way phone/whatsapp were — unverified, do not wire bot integrations to
  // it without confirming it's a real, live bot first. See PROGRESS.md's
  // "Open Questions & Blockers".
  email: "karma8chakra@gmail.com",
  whatsapp: "+66 80 870 5704",
  telegram: "https://t.me/creativelab1_bot",
  phone: "+66 80 870 5704",
  defaultLocale: "en",
  locales: ["en", "ru", "th", "he"] as const,
} as const;

export const MAIN_CTAS = {
  startProject: "Start a Project",
  requestQuote: "Request a Quote",
  discussProject: "Discuss Your Project",
  bookConsultation: "Book a Consultation",
} as const;

export const PRICING_DISCLAIMER =
  "Prices are indicative, based on typical Koh Phangan market rates. Every project is unique — contact us for a detailed quote.";

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};
