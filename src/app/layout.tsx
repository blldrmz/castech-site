import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CasTech EQ — Casino Equipment & LED Jackpot Screens",
    template: "%s | CasTech EQ",
  },
  description:
    "Casino equipment and hardware: LED jackpot screens, used slot machines, live tables and floor accessories. A brand of Virexa AI Technologies s.r.o., Prague.",
  alternates: { canonical: "https://castecheq.com/" },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  metadataBase: new URL("https://castecheq.com"),
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CasTech EQ",
  legalName: "Virexa AI Technologies s.r.o.",
  url: "https://castecheq.com",
  email: "info@castecheq.com",
  identifier: "IČO 29716055",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cihlářská 782/10a, Prosek",
    postalCode: "190 00",
    addressLocality: "Praha 9",
    addressCountry: "CZ",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+420605784248", areaServed: "CZ", contactType: "sales" },
    { "@type": "ContactPoint", telephone: "+995555481975", areaServed: "GE", contactType: "sales" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
