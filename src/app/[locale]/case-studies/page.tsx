import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Hero } from "@/components/blocks/Hero";
import { DirectAnswer } from "@/components/blocks/DirectAnswer";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/blocks/CtaBanner";
import { CASE_STUDIES_PAGE } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLdGraph, webPageSchema } from "@/lib/schema";
import { SITE } from "@/content/site";
import { localePath, toLocale } from "@/content/i18n";

export async function generateMetadata(
  props: PageProps<"/[locale]/case-studies">
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  return buildMetadata({
    title: CASE_STUDIES_PAGE.metaTitle,
    description: CASE_STUDIES_PAGE.metaDescription,
    path: "/case-studies",
    locale,
  });
}

export default async function CaseStudiesPage(props: PageProps<"/[locale]/case-studies">) {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const url = `${SITE.url}${localePath(locale, "/case-studies")}`;
  const homeUrl = `${SITE.url}${localePath(locale, "/")}`;
  const graph = jsonLdGraph([
    webPageSchema({ name: CASE_STUDIES_PAGE.metaTitle, description: CASE_STUDIES_PAGE.metaDescription, url, inLanguage: locale }),
    breadcrumbSchema([{ name: "Home", url: homeUrl }, { name: "Case Studies", url }]),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }]} />
      <Hero
        h1={CASE_STUDIES_PAGE.h1}
        support={CASE_STUDIES_PAGE.heroSupport}
        image={CASE_STUDIES_PAGE.heroImage}
        imageAlt={CASE_STUDIES_PAGE.heroImageAlt}
        ctaLabel="Start a Project"
      />
      <DirectAnswer text={CASE_STUDIES_PAGE.directAnswer} />
      <section className="bg-surface py-20 lg:py-28">
        <Container narrow className="text-center">
          <p className="font-display text-2xl font-light text-text">
            The first case studies are in progress.
          </p>
          <p className="mt-4 text-text-secondary">
            We publish case studies only for real, completed projects — check back soon,
            or get in touch if you&rsquo;d like your project to be one of the first.
          </p>
        </Container>
      </section>
      <CtaBanner
        title="Want to be one of our first published case studies?"
        description="Start a project with us and we'll document the process from brief to results."
      />
    </>
  );
}
