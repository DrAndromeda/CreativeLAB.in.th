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
import { localePath, toLocale } from "@/content/i18n";

export async function generateMetadata(
  props: PageProps<"/[locale]/portfolio">
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  return buildMetadata({
    title: PORTFOLIO_PAGE.metaTitle,
    description: PORTFOLIO_PAGE.metaDescription,
    path: "/portfolio",
    locale,
  });
}

export default async function PortfolioPage(props: PageProps<"/[locale]/portfolio">) {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const url = `${SITE.url}${localePath(locale, "/portfolio")}`;
  const homeUrl = `${SITE.url}${localePath(locale, "/")}`;
  const graph = jsonLdGraph([
    webPageSchema({ name: PORTFOLIO_PAGE.metaTitle, description: PORTFOLIO_PAGE.metaDescription, url, inLanguage: locale }),
    breadcrumbSchema([{ name: "Home", url: homeUrl }, { name: "Portfolio", url }]),
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
