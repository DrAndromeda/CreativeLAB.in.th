import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProcessStep } from "@/content/types";

export function ProcessSteps({
  title = "How it works",
  steps,
}: {
  title?: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="bg-base py-16 lg:py-24">
      <Container>
        <SectionHeading title={title} />
        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-5">
              <span className="font-display text-3xl font-light text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
