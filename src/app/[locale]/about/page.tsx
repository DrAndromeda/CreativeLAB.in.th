import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Hero } from "@/components/blocks/Hero";
import { DirectAnswer } from "@/components/blocks/DirectAnswer";
import { SplitEditorial } from "@/components/blocks/SplitEditorial";
import { Benefits } from "@/components/blocks/Benefits";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { CtaBanner } from "@/components/blocks/CtaBanner";
import { ABOUT_PAGE } from "@/content/pages";
import { images } from "@/assets/images";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLdGraph, webPageSchema } from "@/lib/schema";
import { SITE } from "@/content/site";
import { localePath, toLocale } from "@/content/i18n";

export async function generateMetadata(
  props: PageProps<"/[locale]/about">
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  return buildMetadata({
    title: ABOUT_PAGE.metaTitle,
    description: ABOUT_PAGE.metaDescription,
    path: "/about",
    locale,
  });
}

export default async function AboutPage(props: PageProps<"/[locale]/about">) {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const url = `${SITE.url}${localePath(locale, "/about")}`;
  const homeUrl = `${SITE.url}${localePath(locale, "/")}`;
  const graph = jsonLdGraph([
    webPageSchema({ name: ABOUT_PAGE.metaTitle, description: ABOUT_PAGE.metaDescription, url, inLanguage: locale }),
    breadcrumbSchema([{ name: "Home", url: homeUrl }, { name: "About", url }]),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <Hero
        h1={ABOUT_PAGE.h1}
        support={ABOUT_PAGE.heroSupport}
        image={ABOUT_PAGE.heroImage}
        imageAlt={ABOUT_PAGE.heroImageAlt}
        ctaLabel="Start a Project"
      />
      <DirectAnswer text={ABOUT_PAGE.directAnswer} />
      <SplitEditorial
        eyebrow="Our story"
        title={ABOUT_PAGE.storyTitle}
        image={images.team}
        imageAlt="CreativeLAB team working together"
      >
        {ABOUT_PAGE.storyBody.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </SplitEditorial>
      <SplitEditorial
        eyebrow="Our approach"
        title={ABOUT_PAGE.approachTitle}
        image={images.studio}
        imageAlt="CreativeLAB studio workspace"
        reverse
      >
        {ABOUT_PAGE.approachBody.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </SplitEditorial>
      <Benefits items={[...ABOUT_PAGE.principles]} />
      <LocationBlock text={`CreativeLAB is based on ${SITE.location} and works across the island, from Thong Sala and Srithanu to Haad Rin and the north coast.`} />
      <CtaBanner
        title="Discuss Your Business on Koh Phangan"
        description="Tell us what you're working on and we'll suggest a realistic next step."
      />
    </>
  );
}
