import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Hero } from "@/components/blocks/Hero";
import { DirectAnswer } from "@/components/blocks/DirectAnswer";
import { SplitEditorial } from "@/components/blocks/SplitEditorial";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { PortfolioPreview } from "@/components/blocks/PortfolioPreview";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { FaqAccordion } from "@/components/blocks/FaqAccordion";
import { CtaBanner } from "@/components/blocks/CtaBanner";
import { allHubParams, getHub } from "@/content/hubs";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
  webPageSchema,
} from "@/lib/schema";
import { SITE } from "@/content/site";
import { localePath, toLocale } from "@/content/i18n";

export function generateStaticParams() {
  return allHubParams();
}

export async function generateMetadata(
  props: PageProps<"/[locale]/[hub]">
): Promise<Metadata> {
  const { hub: hubSlug, locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const hub = getHub(hubSlug);
  if (!hub) return {};
  return buildMetadata({
    title: hub.metaTitle,
    description: hub.metaDescription,
    path: `/${hub.slug}`,
    locale,
  });
}

export default async function HubPage(props: PageProps<"/[locale]/[hub]">) {
  const { hub: hubSlug, locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const hub = getHub(hubSlug);
  if (!hub) notFound();

  const url = `${SITE.url}${localePath(locale, `/${hub.slug}`)}`;
  const homeUrl = `${SITE.url}${localePath(locale, "/")}`;
  const graph = jsonLdGraph([
    webPageSchema({
      name: hub.metaTitle,
      description: hub.metaDescription,
      url,
      inLanguage: locale,
    }),
    breadcrumbSchema([
      { name: "Home", url: homeUrl },
      { name: hub.navLabel, url },
    ]),
    faqSchema(hub.faqs),
  ]);

  const portfolioItems = Array.from(
    new Map(
      hub.services.map((service) => [
        service.heroImage,
        {
          image: service.heroImage,
          alt: service.heroImageAlt,
          caption: service.navLabel,
        },
      ])
    ).values()
  ).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: hub.navLabel, href: `/${hub.slug}` }]} />
      <Hero
        eyebrow={SITE.location}
        h1={hub.h1}
        support={hub.heroSupport}
        image={hub.heroImage}
        imageAlt={hub.heroImageAlt}
      />
      <DirectAnswer text={hub.directAnswer} />
      <SplitEditorial
        eyebrow="Approach"
        title={hub.editorialTitle}
        image={hub.heroImage}
        imageAlt={hub.heroImageAlt}
      >
        {hub.editorialBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </SplitEditorial>
      <ServiceGrid
        eyebrow="Services"
        title={`${hub.navLabel} services`}
        items={hub.services.map((service) => ({
          title: service.navLabel,
          description: service.heroSupport,
          href: `/${hub.slug}/${service.slug}`,
        }))}
      />
      <PortfolioPreview items={portfolioItems} />
      <ProcessSteps
        title="How a project comes together"
        steps={[
          { title: "Brief", description: "Tell us what you need and your timeline." },
          { title: "Plan", description: "We scope the right services and a realistic budget." },
          { title: "Produce", description: "Our team delivers the work on Koh Phangan." },
          { title: "Deliver & support", description: "You get final assets, with ongoing support if needed." },
        ]}
      />
      <LocationBlock text={`${hub.navLabel} services from CreativeLAB are delivered on-site across Koh Phangan, Thailand, with remote coordination available for owners and managers based elsewhere.`} />
      <FaqAccordion faqs={hub.faqs} />
      <CtaBanner
        title={`Ready to talk about ${hub.navLabel.toLowerCase()}?`}
        description="Tell us about your business and we'll suggest a realistic next step."
        ctaLabel={hub.finalCtaLabel}
      />
    </>
  );
}
