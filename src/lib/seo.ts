import type { Metadata } from "next";
import { hasRu, type Locale } from "@/lib/i18n";

export const SITE_URL = "https://castecheq.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Per-page metadata with its own canonical URL, Open Graph data and, when the page exists in
 * both languages, hreflang alternates. `path` is always the English path (e.g. "/about/").
 */
export function pageMeta(title: string, description: string, path: string, locale: Locale = "en"): Metadata {
  const enUrl = `${SITE_URL}${path}`;
  const ruUrl = `${SITE_URL}${path === "/" ? "/ru/" : `/ru${path}`}`;
  const url = locale === "ru" ? ruUrl : enUrl;
  const fullTitle = `${title} | CasTech EQ`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: url,
      ...(hasRu(path) ? { languages: { en: enUrl, ru: ruUrl, "x-default": enUrl } } : {}),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "CasTech EQ",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "CasTech EQ — casino equipment and LED jackpot screens" }],
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE] },
  };
}
