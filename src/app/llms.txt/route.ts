import { HUBS } from "@/content/hubs";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(
    `> ${SITE.name} is a creative content and advertising agency based on ${SITE.location}. We provide advertising, social media, photography, video production, web design and branding for villas, restaurants, hospitality brands and local businesses on the island.`
  );
  lines.push("");
  lines.push(`Website: ${SITE.url}`);
  lines.push(`Location: ${SITE.location}`);
  lines.push(`Contact: ${SITE.email}`);
  lines.push("");
  lines.push("## Services");
  lines.push("");

  for (const hub of HUBS) {
    lines.push(`### ${hub.navLabel}`);
    lines.push(`${SITE.url}/${hub.slug} — ${hub.metaDescription}`);
    for (const service of hub.services) {
      lines.push(`- ${service.navLabel}: ${SITE.url}/${hub.slug}/${service.slug}`);
    }
    lines.push("");
  }

  lines.push("## Key pages");
  lines.push(`- About: ${SITE.url}/about`);
  lines.push(`- Portfolio: ${SITE.url}/portfolio`);
  lines.push(`- Case Studies: ${SITE.url}/case-studies`);
  lines.push(`- Contact: ${SITE.url}/contact`);
  lines.push(`- Journal: ${SITE.url}/journal`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
