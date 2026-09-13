import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { DirectAnswer } from "@/components/blocks/DirectAnswer";
import { ContactForm } from "@/components/blocks/ContactForm";
import { BotEntry } from "@/components/blocks/BotEntry";
import { Container } from "@/components/ui/Container";
import { CONTACT_PAGE } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLdGraph, webPageSchema } from "@/lib/schema";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: CONTACT_PAGE.metaTitle,
  description: CONTACT_PAGE.metaDescription,
  path: "/contact",
});

export default function ContactPage() {
  const url = `${SITE.url}/contact`;
  const graph = jsonLdGraph([
    webPageSchema({ name: CONTACT_PAGE.metaTitle, description: CONTACT_PAGE.metaDescription, url }),
    breadcrumbSchema([{ name: "Home", url: SITE.url }, { name: "Contact", url }]),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <section className="bg-inverse py-20 text-text-inverse lg:py-28">
        <Container>
          <p className="mb-4 text-xs tracking-[0.2em] text-accent-soft uppercase">
            {CONTACT_PAGE.location}
          </p>
          <h1 className="font-display max-w-2xl text-4xl leading-[1.1] font-light tracking-tight sm:text-6xl">
            {CONTACT_PAGE.h1}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-inverse-secondary">
            {CONTACT_PAGE.heroSupport}
          </p>
        </Container>
      </section>
      <DirectAnswer text={CONTACT_PAGE.directAnswer} />
      <section className="bg-base py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-display mb-8 text-2xl font-light text-text">
                Tell us about your project
              </h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="font-display mb-8 text-2xl font-light text-text">
                {CONTACT_PAGE.optionsTitle}
              </h2>
              <dl className="space-y-6 text-sm">
                <div>
                  <dt className="text-text-secondary">Email</dt>
                  <dd className="mt-1 text-base text-text">
                    <a href={`mailto:${CONTACT_PAGE.email}`} className="hover:text-accent">
                      {CONTACT_PAGE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Based in</dt>
                  <dd className="mt-1 text-base text-text">{CONTACT_PAGE.location}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <BotEntry />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
