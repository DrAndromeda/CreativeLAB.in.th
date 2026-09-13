import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type PortfolioPreviewItem = {
  image: StaticImageData;
  alt: string;
  caption: string;
};

/**
 * No client projects have been delivered/approved for publication yet
 * (Truth Rule — never invent clients or results). This renders honestly
 * captioned reference imagery instead of fabricated case studies; swap
 * `items` for real project photography as work is delivered.
 */
export function PortfolioPreview({
  title = "The kind of work we make",
  description = "Reference imagery showing the visual style and craft our team works in — real client projects will replace this section as they are delivered and approved for publication.",
  items,
}: {
  title?: string;
  description?: string;
  items: PortfolioPreviewItem[];
}) {
  if (!items.length) return null;
  return (
    <section className="border-t border-line bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Proof" title={title} description={description} />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure key={item.caption} className="group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-sm text-text-secondary">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
