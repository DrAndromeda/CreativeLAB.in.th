import type { StaticImageData } from "next/image";

export type FaqItem = {
  q: string;
  a: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type PricingRow = {
  service: string;
  range: string;
  note: string;
};

export type ScopeItem = {
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type UseCase = {
  title: string;
  description: string;
};

export type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

export type ServicePage = {
  slug: string;
  hubSlug: string;
  navLabel: string;
  h1: string;
  primaryKeyword: string;
  secondaryTopics: string[];
  metaTitle: string;
  metaDescription: string;
  directAnswer: string;
  heroSupport: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  scope: ScopeItem[];
  benefits: Benefit[];
  process: ProcessStep[];
  pricing: PricingRow[];
  useCases: UseCase[];
  faqs: FaqItem[];
  related: RelatedLink[];
  finalCtaLabel: string;
};

export type HubPage = {
  slug: string;
  navLabel: string;
  order: number;
  priority: "P0" | "P1" | "P2";
  h1: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  directAnswer: string;
  heroSupport: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  editorialTitle: string;
  editorialBody: string[];
  faqs: FaqItem[];
  finalCtaLabel: string;
  services: ServicePage[];
};
