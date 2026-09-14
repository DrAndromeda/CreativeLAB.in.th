import { Container } from "@/components/ui/Container";

export function LocationBlock({ text }: { text: string }) {
  return (
    <section className="bg-base py-12 lg:py-16">
      <Container>
        <div className="border-s-2 border-olive ps-6">
          <p className="max-w-[65ch] text-sm leading-relaxed text-text-secondary">
            {text}
          </p>
        </div>
      </Container>
    </section>
  );
}
