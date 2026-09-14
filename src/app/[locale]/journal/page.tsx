import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Hero } from "@/components/blocks/Hero";
import { DirectAnswer } from "@/components/blocks/DirectAnswer";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/blocks/CtaBanner";
import { JOURNAL_PAGE } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLdGraph, webPageSchema } from "@/lib/schema";
import { SITE } from "@/content/site";
import { localePath, toLocale } from "@/content/i18n";

export async function generateMetadata(
  props: PageProps<"/[locale]/journal">
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  return buildMetadata({
    title: JOURNAL_PAGE.metaTitle,
    description: JOURNAL_PAGE.metaDescription,
    path: "/journal",
    locale,
  });
}

export default async function JournalPage(props: PageProps<"/[locale]/journal">) {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const url = `${SITE.url}${localePath(locale, "/journal")}`;
  const homeUrl = `${SITE.url}${localePath(locale, "/")}`;
  const graph = jsonLdGraph([
    webPageSchema({ name: JOURNAL_PAGE.metaTitle, description: JOURNAL_PAGE.metaDescription, url, inLanguage: locale }),
    breadcrumbSchema([{ name: "Home", url: homeUrl }, { name: "Journal", url }]),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }]} />
      <Hero
        h1={JOURNAL_PAGE.h1}
        support={JOURNAL_PAGE.heroSupport}
        image={JOURNAL_PAGE.heroImage}
        imageAlt={JOURNAL_PAGE.heroImageAlt}
        ctaLabel="Start a Project"
      />
      <DirectAnswer text={JOURNAL_PAGE.directAnswer} />
      <section className="bg-surface py-20 lg:py-28">
        <Container narrow className="text-center">
          <p className="font-display text-2xl font-light text-text">
            The first articles are on the way.
          </p>
          <p className="mt-4 text-text-secondary">
            No articles are published yet — this space fills in as real, researched
            pieces are written, not backdated to look established.
          </p>
        </Container>
      </section>
      <CtaBanner
        title="Have a topic you'd like us to cover?"
        description="Get in touch and we'll consider it for an upcoming article."
      />
    </>
  );
}
