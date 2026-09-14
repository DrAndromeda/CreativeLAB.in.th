import type { ReactNode } from "react";

interface TextSectionProps {
  h2: string;
  children: ReactNode;
  className?: string;
}

export function TextSection({ h2, children, className = "" }: TextSectionProps) {
  return (
    <section className={`px-4 py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-stone-800 md:text-4xl">
          {h2}
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-stone-600">
          {children}
        </div>
      </div>
    </section>
  );
}