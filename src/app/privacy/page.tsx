import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How CreativeLAB collects, uses and protects personal data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy" }]} />
      <Container narrow className="py-16 lg:py-24">
        <p className="mb-2 text-xs tracking-[0.15em] text-accent uppercase">Legal</p>
        <h1 className="font-display text-4xl font-light text-text">Privacy Policy</h1>
        <p className="mt-4 text-sm text-text-secondary">
          Draft — pending review by qualified legal counsel before launch. This
          page describes our intended practice and should not be treated as
          final legal terms until reviewed.
        </p>

        <div className="prose-content mt-10 space-y-8 text-text-secondary">
          <section>
            <h2 className="mb-2 font-display text-xl text-text">What we collect</h2>
            <p>
              When you contact us through this website — via the contact form,
              email, WhatsApp or Telegram — we collect the information you
              provide: your name, contact details, and the content of your
              message, including any files you choose to share about your
              project.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-xl text-text">How we use it</h2>
            <p>
              We use this information solely to respond to your inquiry and,
              if you engage us, to deliver the agreed project. We do not sell
              personal data to third parties.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-xl text-text">Retention</h2>
            <p>
              [[VERIFY: retention period]] — we intend to retain inquiry data
              only as long as needed to respond to you or fulfil a project,
              and to delete uploaded files after a defined period. The exact
              retention schedule will be confirmed here once set.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-xl text-text">Your rights</h2>
            <p>
              You can request access to, correction of, or deletion of your
              personal data at any time by emailing{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-xl text-text">Third-party services</h2>
            <p>
              Messages sent via WhatsApp or Telegram are subject to those
              platforms&rsquo; own privacy terms in addition to this policy.
              Analytics, where enabled, is configured to be privacy-conscious
              and does not track you across unrelated sites.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
