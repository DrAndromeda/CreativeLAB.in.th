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

export const metadata: Metadata = buildMetadata({
  title: JOURNAL_PAGE.metaTitle,
  description: JOURNAL_PAGE.metaDescription,
  path: "/journal",
});

export default function JournalPage() {
  const url = `${SITE.url}/journal`;
  const graph = jsonLdGraph([
    webPageSchema({ name: JOURNAL_PAGE.metaTitle, description: JOURNAL_PAGE.metaDescription, url }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Journal", url }]),
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
