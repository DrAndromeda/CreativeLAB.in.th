import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Hero } from "@/components/blocks/Hero";
import { DirectAnswer } from "@/components/blocks/DirectAnswer";
import { PortfolioPreview } from "@/components/blocks/PortfolioPreview";
import { CtaBanner } from "@/components/blocks/CtaBanner";
import { PORTFOLIO_PAGE } from "@/content/pages";
import { HOMEPAGE_PORTFOLIO } from "@/content/homepage";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLdGraph, webPageSchema } from "@/lib/schema";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: PORTFOLIO_PAGE.metaTitle,
  description: PORTFOLIO_PAGE.metaDescription,
  path: "/portfolio",
});

export default function PortfolioPage() {
  const url = `${SITE.url}/portfolio`;
  const graph = jsonLdGraph([
    webPageSchema({ name: PORTFOLIO_PAGE.metaTitle, description: PORTFOLIO_PAGE.metaDescription, url }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Portfolio", url }]),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }]} />
      <Hero
        h1={PORTFOLIO_PAGE.h1}
        support={PORTFOLIO_PAGE.heroSupport}
        image={PORTFOLIO_PAGE.heroImage}
        imageAlt={PORTFOLIO_PAGE.heroImageAlt}
        ctaLabel="Start a Project"
      />
      <DirectAnswer text={PORTFOLIO_PAGE.directAnswer} />
      <PortfolioPreview items={HOMEPAGE_PORTFOLIO} />
      <CtaBanner
        title="Have a project you'd like to see here?"
        description="Start with us now, and your work could be the next thing featured on this page."
      />
    </>
  );
}
