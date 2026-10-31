import type { Metadata } from "next";
import { RootHtml } from "@/components/RootHtml";
import { OG_LOCALE } from "@/lib/i18n";
import { generateStaticParams, resolve, type LocaleParams } from "./params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, pack } = await resolve(params);
  return {
    title: { default: pack.htmlTitle, template: "%s | CasTech EQ" },
    description: pack.htmlDescription,
    twitter: { card: "summary_large_image", images: ["/og-image.png"] },
    metadataBase: new URL("https://castecheq.com"),
    verification: { google: "1B7taYlx8eBoHefmlFUcJVVW2aX4eAnSuZhalKTbRrc" },
    openGraph: {
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CasTech EQ" }],
      locale: OG_LOCALE[locale],
      type: "website",
      siteName: "CasTech EQ",
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleParams & { children: React.ReactNode }) {
  const { locale } = await resolve(params);
  return <RootHtml lang={locale}>{children}</RootHtml>;
}
