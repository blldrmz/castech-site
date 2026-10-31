import type { Metadata } from "next";
import { LOCALES, OG_LOCALE, isLocalized, localePath, type Locale } from "@/lib/i18n";

export const SITE_URL = "https://castecheq.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Per-page metadata with its own canonical URL, Open Graph data and, when the page exists in
 * every language, hreflang alternates. `path` is always the English path (e.g. "/about/").
 */
export function pageMeta(title: string, description: string, path: string, locale: Locale = "en"): Metadata {
  const url = `${SITE_URL}${locale === "en" ? path : localePath(locale, path)}`;
  const fullTitle = `${title} | CasTech EQ`;
  const languages = isLocalized(path)
    ? Object.fromEntries([
        ...LOCALES.map((l) => [l, `${SITE_URL}${localePath(l, path)}`]),
        ["x-default", `${SITE_URL}${localePath("en", path)}`],
      ])
    : undefined;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "CasTech EQ",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "CasTech EQ — casino equipment and LED jackpot screens" }],
      locale: OG_LOCALE[locale],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE] },
  };
}
