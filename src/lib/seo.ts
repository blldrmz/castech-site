import type { Metadata } from "next";

export const SITE_URL = "https://castecheq.com";

/** Per-page metadata with its own canonical URL and Open Graph data. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | CasTech`,
      description,
      url,
      siteName: "CasTech EQ",
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary", title: `${title} | CasTech`, description },
  };
}
