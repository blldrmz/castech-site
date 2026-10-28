import type { Metadata } from "next";

export const SITE_URL = "https://castecheq.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Per-page metadata with its own canonical URL and Open Graph data. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: { absolute: `${title} | CasTech EQ` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | CasTech EQ`,
      description,
      url,
      siteName: "CasTech EQ",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "CasTech EQ — casino equipment and LED jackpot screens" }],
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: `${title} | CasTech EQ`, description, images: [OG_IMAGE] },
  };
}
