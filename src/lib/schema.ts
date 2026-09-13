import { SITE } from "@/content/site";
import type { FaqItem } from "@/content/types";

export function organizationSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description:
      "Creative content and advertising agency on Koh Phangan, Thailand — advertising, social media, photography, video production, web and branding for island businesses.",
    areaServed: {
      "@type": "Place",
      name: "Koh Phangan, Surat Thani, Thailand",
    },
    knowsAbout: [
      "Advertising",
      "Social media marketing",
      "Villa and real estate photography",
      "Restaurant marketing",
      "Local SEO",
      "Web design",
      "Video production",
      "Branding",
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: params.serviceType,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: {
      "@type": "Place",
      name: "Koh Phangan, Thailand",
    },
  };
}

export function webPageSchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "WebPage",
    name: params.name,
    description: params.description,
    url: params.url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function jsonLdGraph(nodes: (object | null)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
