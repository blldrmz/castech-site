import type { Metadata } from "next";
import { RootHtml } from "@/components/RootHtml";

export const metadata: Metadata = {
  title: {
    default: "Casino Equipment Supplier | Slot Machines, Gaming Tables, Chips & Jackpot Screens | CasTech EQ",
    template: "%s | CasTech EQ",
  },
  description:
    "Casino equipment supplier based in Prague and Batumi. New gaming tables, chairs, chips, layouts and accessories, plus used slot machines, refurbished shufflers and custom LED jackpot screens.",
  alternates: { canonical: "https://castecheq.com/" },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  metadataBase: new URL("https://castecheq.com"),
  verification: { google: "1B7taYlx8eBoHefmlFUcJVVW2aX4eAnSuZhalKTbRrc" },
  openGraph: {
    title: "CasTech EQ — Casino Equipment & LED Jackpot Screens",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CasTech EQ — casino equipment and LED jackpot screens" }],
    description:
      "Own-production LED jackpot screens, used slot machines, refurbished shufflers and casino equipment from CasTech EQ, a brand of Virexa AI Technologies s.r.o.",
    locale: "en_US",
    type: "website",
    url: "https://castecheq.com",
    siteName: "CasTech EQ",
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
