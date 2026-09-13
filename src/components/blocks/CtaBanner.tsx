import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MAIN_CTAS } from "@/content/site";

export function CtaBanner({
  title,
  description,
  ctaLabel = MAIN_CTAS.startProject,
  ctaHref = "/contact",
}: {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-inverse py-16 text-text-inverse lg:py-24">
      <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-balance font-display text-3xl leading-tight font-light sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-text-inverse-secondary">
              {description}
            </p>
          )}
        </div>
        <Button href={ctaHref} variant="primary" className="shrink-0">
          {ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
