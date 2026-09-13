import type { Metadata } from "next";
import { SITE } from "@/content/site";

export function buildMetadata(params: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE.url}${params.path}`;
  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
    },
  };
}
