import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRICING_DISCLAIMER } from "@/content/site";
import type { PricingRow } from "@/content/types";

export function PricingGuidance({ rows }: { rows: PricingRow[] }) {
  return (
    <section className="border-t border-line bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Investment"
          title="Indicative pricing"
          description="A starting reference so you can plan your budget before we scope your project."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-start text-sm">
            <thead>
              <tr className="border-b border-line text-xs tracking-wide text-text-secondary uppercase">
                <th className="py-3 pe-4 font-medium">Service</th>
                <th className="py-3 pe-4 font-medium">Price range (THB)</th>
                <th className="py-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.service} className="border-b border-line">
                  <td className="py-4 pe-4 font-medium text-text">
                    {row.service}
                  </td>
                  <td className="py-4 pe-4 whitespace-nowrap text-text">
                    {row.range}
                  </td>
                  <td className="py-4 text-text-secondary">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-[70ch] text-sm text-text-secondary">
          {PRICING_DISCLAIMER}
        </p>
      </Container>
    </section>
  );
}
