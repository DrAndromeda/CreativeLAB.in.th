import { Container } from "@/components/ui/Container";

const FACTS = [
  "Based on Koh Phangan, Thailand",
  "One team: strategy, production, and delivery",
  "English, Russian, Thai and Hebrew",
  "Advertising, content and web under one roof",
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface py-8">
      <Container>
        <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-xs tracking-wide text-text-secondary uppercase">
          {FACTS.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
