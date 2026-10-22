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
    default: "CasTech — Professional Casino Equipment",
    template: "%s | CasTech",
  },
  description:
    "Casino equipment and hardware: live tables, slot machines, floor accessories and CCTV. A Virexa AI Technologies division.",
  metadataBase: new URL("https://castecheq.com"),
  openGraph: {
    title: "CasTech — Professional Casino Equipment",
    description:
      "Explore casino tables, slot cabinets, accessories and surveillance equipment with CasTech, a Virexa AI Technologies division.",
    locale: "en_US",
    type: "website",
    url: "https://castecheq.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
