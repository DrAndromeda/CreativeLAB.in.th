import { advertisingHub } from "./advertising";
import { socialMediaHub } from "./social-media";
import { villasRealEstateHub } from "./villas-real-estate";
import { foodRestaurantsHub } from "./food-restaurants";
import { businessLocalPresenceHub } from "./business-local-presence";
import { websitesDigitalHub } from "./websites-digital";
import { videoProductionHub } from "./video-production";
import { brandingCreativeHub } from "./branding-creative";
import type { HubPage, ServicePage } from "@/content/types";

export const HUBS: HubPage[] = [
  advertisingHub,
  socialMediaHub,
  villasRealEstateHub,
  foodRestaurantsHub,
  businessLocalPresenceHub,
  websitesDigitalHub,
  videoProductionHub,
  brandingCreativeHub,
].sort((a, b) => a.order - b.order);

export function getHub(slug: string): HubPage | undefined {
  return HUBS.find((hub) => hub.slug === slug);
}

export function getService(
  hubSlug: string,
  serviceSlug: string
): { hub: HubPage; service: ServicePage } | undefined {
  const hub = getHub(hubSlug);
  if (!hub) return undefined;
  const service = hub.services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return { hub, service };
}

export function allHubParams() {
  return HUBS.map((hub) => ({ hub: hub.slug }));
}

export function allServiceParams() {
  return HUBS.flatMap((hub) =>
    hub.services.map((service) => ({ hub: hub.slug, service: service.slug }))
  );
}
