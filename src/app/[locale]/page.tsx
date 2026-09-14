import type { Metadata } from "next";
import { localePath, toLocale } from "@/content/i18n";
import { images } from "@/assets/images";
import { AnnouncementBar } from "@/components/blocks/AnnouncementBar";
import { Hero } from "@/components/blocks/Hero";
import { DirectAnswer } from "@/components/blocks/DirectAnswer";
import { SplitEditorial } from "@/components/blocks/SplitEditorial";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { PortfolioPreview } from "@/components/blocks/PortfolioPreview";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { CtaBanner } from "@/components/blocks/CtaBanner";
import { TextSection } from "@/components/blocks/TextSection";
import {
  HOMEPAGE,
  HOMEPAGE_PILLARS,
  HOMEPAGE_PORTFOLIO,
} from "@/content/homepage";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdGraph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/content/site";

export async function generateMetadata(
  props: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  return buildMetadata({
    title: "Creative Marketing Agency Koh Phangan | CreativeLAB",
    description:
      "Advertising, social media, photography, video and web design for businesses on Koh Phangan — one local team, full marketing stack.",
    path: "/",
    locale,
  });
}

export default async function Home(props: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const url = `${SITE.url}${localePath(locale, "/")}`;
  const graph = jsonLdGraph([
    webPageSchema({
      name: HOMEPAGE.metaTitle,
      description: HOMEPAGE.metaDescription,
      url,
      inLanguage: locale,
    }),
    breadcrumbSchema([{ name: "Home", url }]),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <AnnouncementBar text="CreativeLAB — creative advertising & production team on Koh Phangan." />

      {/* Hero — unchanged */}
      <Hero
        eyebrow={HOMEPAGE.heroEyebrow}
        h1={HOMEPAGE.h1}
        support={HOMEPAGE.heroSupport}
        image={images.studio}
        imageAlt="Creative studio on Koh Phangan preparing a shoot"
      />

      {/* Direct Answer — unchanged */}
      <DirectAnswer text={HOMEPAGE.directAnswer} />

      {/* Editorial / Why CreativeLAB — unchanged */}
      <SplitEditorial
        eyebrow="Why CreativeLAB"
        title={HOMEPAGE.editorialTitle}
        image={images.team}
        imageAlt="CreativeLAB team working on Koh Phangan"
      >
        {HOMEPAGE.editorialBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </SplitEditorial>

      {/* H2: Creative Marketing for Businesses on Koh Phangan */}
      <TextSection h2={HOMEPAGE.afterEditorialH2!}>
        <p>{HOMEPAGE.afterEditorialBody}</p>
      </TextSection>

      {/* H2: Our Creative & Marketing Services — intro before grid */}
      <TextSection h2={HOMEPAGE.serviceGridIntroH2}>
        <p>{HOMEPAGE.serviceGridIntro}</p>
      </TextSection>

      {/* Service Grid — unchanged */}
      <ServiceGrid
        eyebrow="What we do"
        title="Eight ways we grow island businesses"
        description="Every pillar below can stand alone as a single project, or combine into a full monthly marketing program."
        items={HOMEPAGE_PILLARS}
      />

      {/* H2: Photography, Video & Content Production */}
      <TextSection h2={HOMEPAGE.productionH2!}>
        <p>{HOMEPAGE.productionBody}</p>
      </TextSection>

      {/* H2: Advertising & Digital Marketing */}
      <TextSection h2={HOMEPAGE.advertisingH2!}>
        <p>{HOMEPAGE.advertisingBody}</p>
      </TextSection>

      {/* H2: Web Design, SEO & Local Presence */}
      <TextSection h2={HOMEPAGE.webH2!}>
        <p>{HOMEPAGE.webBody}</p>
      </TextSection>

      {/* H2: Creative Marketing for Villas, Restaurants & Hospitality */}
      <TextSection h2={HOMEPAGE.hospitalityH2!}>
        <p>{HOMEPAGE.hospitalityBody}</p>
      </TextSection>

      {/* H2: Creative Agency for Koh Phangan, Koh Samui & Koh Tao */}
      <TextSection h2={HOMEPAGE.islandsH2!}>
        <p>{HOMEPAGE.islandsBody}</p>
      </TextSection>

      {/* Portfolio Preview — unchanged */}
      <PortfolioPreview items={HOMEPAGE_PORTFOLIO} />

      {/* Process — unchanged */}
      <ProcessSteps title={HOMEPAGE.processTitle} steps={HOMEPAGE.process} />

      {/* H2: Why Work With a Local Creative Agency */}
      <TextSection h2={HOMEPAGE.localH2!}>
        <p>{HOMEPAGE.localBody}</p>
      </TextSection>

      {/* Location — unchanged */}
      <LocationBlock text={HOMEPAGE.locationText} />

      {/* H2: Start Your Project With CreativeLAB — CTA wrapper */}
      <TextSection h2={HOMEPAGE.ctaWrapperH2!}>
        <p>{HOMEPAGE.finalCtaDescription}</p>
      </TextSection>

      {/* CTA Banner — unchanged */}
      <CtaBanner
        title={HOMEPAGE.finalCtaTitle}
        description={HOMEPAGE.finalCtaDescription}
      />
    </>
  );
}