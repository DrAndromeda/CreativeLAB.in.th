import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { UseCase } from "@/content/types";

export function UseCases({ items }: { items: UseCase[] }) {
  return (
    <section className="border-t border-line bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Who it's for" title="Where this fits" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border border-line p-6">
              <h3 className="font-display text-lg font-medium text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
