import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ScopeItem } from "@/content/types";

export function FeatureList({
  title = "What's included",
  items,
}: {
  title?: string;
  items: ScopeItem[];
}) {
  return (
    <section className="border-t border-line bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeading title={title} />
        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="border-s-2 border-accent-soft ps-5">
              <h3 className="text-base font-medium text-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
