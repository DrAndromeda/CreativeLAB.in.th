import type { MetadataRoute } from "next";
import { HUBS } from "@/content/hubs";
import { SITE } from "@/content/site";
import { DEFAULT_LOCALE, LOCALES, localeAlternates, localePath } from "@/content/i18n";

const STATIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/portfolio",
  "/case-studies",
  "/journal",
  "/privacy",
  "/terms",
];

const CANONICAL_PATHS = [
  ...STATIC_PATHS,
  ...HUBS.map((hub) => `/${hub.slug}`),
  ...HUBS.flatMap((hub) => hub.services.map((service) => `/${hub.slug}/${service.slug}`)),
];

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (HUBS.some((hub) => path === `/${hub.slug}`)) return 0.9;
  if (HUBS.some((hub) => hub.services.some((s) => path === `/${hub.slug}/${s.slug}`))) return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Every canonical path gets one sitemap entry per locale, each carrying
  // the full set of hreflang alternates (+ x-default) — see proposal.md
  // §09 LANGUAGE "reciprocal + x-default". Content is currently identical
  // EN copy behind every locale URL (see TASK-007), but the URLs and
  // reciprocal alternates are real and crawlable today.
  return CANONICAL_PATHS.flatMap((path) => {
    const alternates = localeAlternates(path);
    const languages = Object.fromEntries(
      LOCALES.map((locale) => [locale, `${SITE.url}${alternates[locale]}`])
    );
    languages["x-default"] = `${SITE.url}${alternates[DEFAULT_LOCALE]}`;

    return LOCALES.map((locale) => ({
      url: `${SITE.url}${localePath(locale, path)}`,
      lastModified: now,
      changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: priorityFor(path),
      alternates: { languages },
    }));
  });
}
