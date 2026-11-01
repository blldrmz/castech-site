import { Inter } from "next/font/google";
import "@/app/globals.css";
import type { Locale } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    { "@type": "ContactPoint", telephone: "+420777481975", areaServed: "CZ", contactType: "sales" },
    { "@type": "ContactPoint", telephone: "+995555481975", areaServed: "GE", contactType: "sales", availableLanguage: ["English", "Russian"] },
  ],
};

export function RootHtml({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
