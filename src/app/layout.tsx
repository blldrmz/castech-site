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
    default: "CasTech — Casino equipment",
    template: "%s | CasTech",
  },
  description:
    "Browse CasTech’s inventory of slot machines and electronic gaming equipment from EGT, Novomatic, IGT, and other leading brands.",
  metadataBase: new URL("https://castech.ge"),
  openGraph: {
    title: "CasTech — Casino equipment",
    description:
      "Premium slot machines and electronic gaming equipment for casino operators. Filter by brand and cabinet format.",
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
