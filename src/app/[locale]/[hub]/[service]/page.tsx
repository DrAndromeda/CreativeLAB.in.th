import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Hero } from "@/components/blocks/Hero";
import { DirectAnswer } from "@/components/blocks/DirectAnswer";
import { FeatureList } from "@/components/blocks/FeatureList";
import { Benefits } from "@/components/blocks/Benefits";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { PricingGuidance } from "@/components/blocks/PricingGuidance";
import { UseCases } from "@/components/blocks/UseCases";
import { FaqAccordion } from "@/components/blocks/FaqAccordion";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { BotEntry } from "@/components/blocks/BotEntry";
import { CtaBanner } from "@/components/blocks/CtaBanner";
import { allServiceParams, getService } from "@/content/hubs";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { SITE } from "@/content/site";
import { localePath, toLocale } from "@/content/i18n";

export function generateStaticParams() {
  return allServiceParams();
}

export async function generateMetadata(
  props: PageProps<"/[locale]/[hub]/[service]">
): Promise<Metadata> {
  const { hub: hubSlug, service: serviceSlug, locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const match = getService(hubSlug, serviceSlug);
  if (!match) return {};
  return buildMetadata({
    title: match.service.metaTitle,
    description: match.service.metaDescription,
    path: `/${hubSlug}/${serviceSlug}`,
    locale,
  });
}

export default async function ServicePageRoute(
  props: PageProps<"/[locale]/[hub]/[service]">
) {
  const { hub: hubSlug, service: serviceSlug, locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const match = getService(hubSlug, serviceSlug);
  if (!match) notFound();
  const { hub, service } = match;

  const url = `${SITE.url}${localePath(locale, `/${hub.slug}/${service.slug}`)}`;
  const homeUrl = `${SITE.url}${localePath(locale, "/")}`;
  const hubUrl = `${SITE.url}${localePath(locale, `/${hub.slug}`)}`;
  const graph = jsonLdGraph([
    webPageSchema({
      name: service.metaTitle,
      description: service.metaDescription,
      url,
      inLanguage: locale,
    }),
    serviceSchema({
      name: service.h1,
      description: service.metaDescription,
      url,
      serviceType: service.primaryKeyword,
    }),
    breadcrumbSchema([
      { name: "Home", url: homeUrl },
      { name: hub.navLabel, url: hubUrl },
      { name: service.navLabel, url },
    ]),
    faqSchema(service.faqs),
  ]);

  const otherServices = hub.services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: hub.navLabel, href: `/${hub.slug}` },
          { label: service.navLabel, href: `/${hub.slug}/${service.slug}` },
        ]}
      />
      <Hero
        eyebrow={hub.navLabel}
        h1={service.h1}
        support={service.heroSupport}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        ctaLabel={service.finalCtaLabel}
      />
      <DirectAnswer text={service.directAnswer} />
      <FeatureList title="What's included" items={service.scope} />
      <Benefits items={service.benefits} />
      <ProcessSteps steps={service.process} />
      <PricingGuidance rows={service.pricing} />
      <UseCases items={service.useCases} />
      <FaqAccordion faqs={service.faqs} />
      <RelatedServices
        items={
          service.related.length
            ? service.related
            : otherServices.slice(0, 3).map((s) => ({
                label: s.navLabel,
                href: `/${hub.slug}/${s.slug}`,
                description: s.heroSupport,
              }))
        }
      />
      <div className="border-t border-line bg-surface py-12">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <BotEntry serviceContext={service.navLabel} />
        </div>
      </div>
      <CtaBanner
        title={`Ready to start your ${service.navLabel.toLowerCase()} project?`}
        ctaLabel={service.finalCtaLabel}
      />
    </>
  );
}
