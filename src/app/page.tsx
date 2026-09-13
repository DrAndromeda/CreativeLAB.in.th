import type { Metadata } from "next";
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
import {
  HOMEPAGE,
  HOMEPAGE_PILLARS,
  HOMEPAGE_PORTFOLIO,
} from "@/content/homepage";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdGraph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: HOMEPAGE.metaTitle,
  description: HOMEPAGE.metaDescription,
  path: "/",
});

export default function Home() {
  const graph = jsonLdGraph([
    webPageSchema({
      name: HOMEPAGE.metaTitle,
      description: HOMEPAGE.metaDescription,
      url: SITE.url,
    }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }]),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <AnnouncementBar text="CreativeLAB — creative advertising & production team on Koh Phangan." />
      <Hero
        eyebrow={HOMEPAGE.heroEyebrow}
        h1={HOMEPAGE.h1}
        support={HOMEPAGE.heroSupport}
        image={images.studio}
        imageAlt="Creative studio on Koh Phangan preparing a shoot"
      />
      <DirectAnswer text={HOMEPAGE.directAnswer} />
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
      <ServiceGrid
        eyebrow="What we do"
        title="Eight ways we grow island businesses"
        description="Every pillar below can stand alone as a single project, or combine into a full monthly marketing program."
        items={HOMEPAGE_PILLARS}
      />
      <PortfolioPreview items={HOMEPAGE_PORTFOLIO} />
      <ProcessSteps title={HOMEPAGE.processTitle} steps={HOMEPAGE.process} />
      <LocationBlock text={HOMEPAGE.locationText} />
      <CtaBanner
        title={HOMEPAGE.finalCtaTitle}
        description={HOMEPAGE.finalCtaDescription}
      />
    </>
  );
}
