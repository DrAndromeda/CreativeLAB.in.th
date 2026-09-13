import type { MetadataRoute } from "next";
import { HUBS } from "@/content/hubs";
import { SITE } from "@/content/site";

const STATIC_PATHS = [
  "",
  "/about",
  "/contact",
  "/portfolio",
  "/case-studies",
  "/journal",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));

  const hubEntries: MetadataRoute.Sitemap = HUBS.map((hub) => ({
    url: `${SITE.url}/${hub.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const serviceEntries: MetadataRoute.Sitemap = HUBS.flatMap((hub) =>
    hub.services.map((service) => ({
      url: `${SITE.url}/${hub.slug}/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [...staticEntries, ...hubEntries, ...serviceEntries];
}
