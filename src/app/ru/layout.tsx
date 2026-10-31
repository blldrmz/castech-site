import type { Metadata } from "next";
import { RootHtml } from "@/components/RootHtml";

export const metadata: Metadata = {
  title: {
    default: "Оборудование для казино | CasTech EQ",
    template: "%s | CasTech EQ",
  },
  description:
    "Поставщик оборудования для казино с офисами в Батуми и Праге: игровые столы, фишки, сукно, игровые автоматы б/у и LED-табло джекпота под заказ.",
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  metadataBase: new URL("https://castecheq.com"),
  verification: { google: "1B7taYlx8eBoHefmlFUcJVVW2aX4eAnSuZhalKTbRrc" },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CasTech EQ — оборудование для казино и LED-табло джекпота" }],
    locale: "ru_RU",
    type: "website",
    siteName: "CasTech EQ",
  },
};

export default function RussianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootHtml lang="ru">{children}</RootHtml>;
}
