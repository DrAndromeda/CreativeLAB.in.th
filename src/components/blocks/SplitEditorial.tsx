import Image, { type StaticImageData } from "next/image";
import { ReactNode } from "react";

export function SplitEditorial({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  image: StaticImageData;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="bg-base py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-[3/2]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          {eyebrow && (
            <p className="mb-4 text-xs tracking-[0.15em] text-accent uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl leading-[1.15] font-light tracking-tight text-text sm:text-4xl">
            {title}
          </h2>
          <div className="mt-5 max-w-[62ch] space-y-4 text-base leading-relaxed text-text-secondary">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
