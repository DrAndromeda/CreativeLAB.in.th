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
import { localePath, toLocale } from "@/content/i18n";

export async function generateMetadata(
  props: PageProps<"/[locale]/contact">
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  return buildMetadata({
    title: CONTACT_PAGE.metaTitle,
    description: CONTACT_PAGE.metaDescription,
    path: "/contact",
    locale,
  });
}

export default async function ContactPage(props: PageProps<"/[locale]/contact">) {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  const url = `${SITE.url}${localePath(locale, "/contact")}`;
  const homeUrl = `${SITE.url}${localePath(locale, "/")}`;
  const graph = jsonLdGraph([
    webPageSchema({ name: CONTACT_PAGE.metaTitle, description: CONTACT_PAGE.metaDescription, url, inLanguage: locale }),
    breadcrumbSchema([{ name: "Home", url: homeUrl }, { name: "Contact", url }]),
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
                      <bdi>{CONTACT_PAGE.email}</bdi>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Phone</dt>
                  <dd className="mt-1 text-base text-text">
                    <a href={`tel:${CONTACT_PAGE.phone}`} className="hover:text-accent">
                      {CONTACT_PAGE.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-text-secondary">WhatsApp</dt>
                  <dd className="mt-1 text-base text-text">
                    <a href={`https://wa.me/${CONTACT_PAGE.whatsapp.replace(/[^0-9]/g, "")}`} className="hover:text-accent">
                      {CONTACT_PAGE.whatsapp}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Telegram</dt>
                  <dd className="mt-1 text-base text-text">
                    <a href={CONTACT_PAGE.telegram} className="hover:text-accent">
                      @creativelab1_bot
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
