import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Inter, Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/content/site";
import { jsonLdGraph, organizationSchema } from "@/lib/schema";
import { LOCALES, isLocale, isRtl } from "@/content/i18n";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Thai needs its own script subset — proposal.md §09 LANGUAGE (Thai fonts).
// Loaded unconditionally (next/font requires a static import) but only
// applied via the `font-thai` utility on `<html>` when locale === "th".
const notoSansThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Creative advertising, social media, content, photography, video and web for businesses on Koh Phangan, Thailand.",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// Every valid value is enumerated above — anything else 404s rather than
// rendering on demand with an unknown locale.
export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const graph = jsonLdGraph([organizationSchema()]);
  const rtl = isRtl(locale);

  return (
    <html
      lang={locale}
      dir={rtl ? "rtl" : "ltr"}
      className={`${fraunces.variable} ${inter.variable} ${notoSansThai.variable} h-full${
        locale === "th" ? " font-thai" : ""
      }`}
    >
      <body className="flex min-h-full flex-col bg-base text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-text-inverse"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
