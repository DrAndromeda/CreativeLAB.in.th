import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/content/site";
import { toLocale } from "@/content/i18n";

export async function generateMetadata(
  props: PageProps<"/[locale]/terms">
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale = toLocale(rawLocale);
  return buildMetadata({
    title: "Terms of Service",
    description: "Terms governing the use of CreativeLAB's website and services.",
    path: "/terms",
    locale,
  });
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms", href: "/terms" }]} />
      <Container narrow className="py-16 lg:py-24">
        <p className="mb-2 text-xs tracking-[0.15em] text-accent uppercase">Legal</p>
        <h1 className="font-display text-4xl font-light text-text">Terms of Service</h1>
        <p className="mt-4 text-sm text-text-secondary">
          Draft — pending review by qualified legal counsel before launch.
          This page describes our intended terms and should not be treated
          as final until reviewed.
        </p>

        <div className="prose-content mt-10 space-y-8 text-text-secondary">
          <section>
            <h2 className="mb-2 font-display text-xl text-text">Services</h2>
            <p>
              CreativeLAB provides creative, advertising, photography, video
              and web services on a project or retainer basis, as agreed in
              writing for each engagement. Pricing shown on this site is
              indicative only, as stated on each service page — final scope
              and pricing are confirmed in a written quote before work begins.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-xl text-text">Payments & IP</h2>
            <p>
              [[VERIFY: payment terms, deposit structure, and intellectual
              property handover conditions]] — final terms covering payment
              schedules, cancellations and the transfer of usage rights for
              delivered work will be set out in each project&rsquo;s written
              agreement.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-xl text-text">Liability</h2>
            <p>
              [[VERIFY: liability and indemnity clauses]] — to be finalized
              with legal counsel appropriate to Thai law and the nature of
              our services.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-xl text-text">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                <bdi>{SITE.email}</bdi>
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
