import type { Metadata } from "next";
import { SITE } from "@/content/site";
import {
  DEFAULT_LOCALE,
  localeAlternates,
  localePath,
  ogLocale,
  type Locale,
} from "@/content/i18n";

export function buildMetadata(params: {
  title: string;
  description: string;
  /** Canonical (EN-relative) path, e.g. "/contact" — never pre-prefixed. */
  path: string;
  /** Defaults to "en" for call sites that haven't gone locale-aware yet. */
  locale?: Locale;
}): Metadata {
  const locale = params.locale ?? DEFAULT_LOCALE;
  const url = `${SITE.url}${localePath(locale, params.path)}`;
  const alternates = localeAlternates(params.path);

  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          Object.entries(alternates).map(([loc, path]) => [
            loc,
            `${SITE.url}${path}`,
          ])
        ),
        "x-default": `${SITE.url}${alternates[DEFAULT_LOCALE]}`,
      },
    },
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      siteName: SITE.name,
      locale: ogLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
    },
  };
}
