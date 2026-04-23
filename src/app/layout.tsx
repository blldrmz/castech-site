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
    default: "CasTech — Casino equipment supplier",
    template: "%s | CasTech",
  },
  description:
    "Casino equipment: live table games, slot machines, floor accessories, and CCTV. Georgia-based. Pelco, Dallmeier, Hikvision, and major slot brands.",
  metadataBase: new URL("https://castech.ge"),
  openGraph: {
    title: "CasTech — Casino equipment supplier",
    description:
      "Table hardware, slot cabinets, accessories and professional surveillance for casino operators. Browse by category and contact our team.",
    locale: "en_US",
    type: "website",
    url: "https://castech.ge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
