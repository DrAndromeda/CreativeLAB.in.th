import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
import { MAIN_CTAS } from "@/content/site";

export function Hero({
  eyebrow,
  h1,
  support,
  image,
  imageAlt,
  ctaHref = "/contact",
  ctaLabel = MAIN_CTAS.startProject,
}: {
  eyebrow?: string;
  h1: string;
  support: string;
  image: StaticImageData;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-inverse text-text-inverse">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse via-inverse/70 to-inverse/20" />
      </div>
      <div className="relative mx-auto flex max-w-[1440px] flex-col px-5 pt-28 pb-20 sm:px-8 lg:px-12 lg:pt-40 lg:pb-28">
        {eyebrow && (
          <p className="mb-6 text-xs tracking-[0.2em] text-accent-soft uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="text-balance max-w-4xl font-display text-4xl leading-[1.05] font-light tracking-tight sm:text-6xl lg:text-[80px]">
          {h1}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-inverse-secondary">
          {support}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
          <Button href="/portfolio" variant="ghost">
            See Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
