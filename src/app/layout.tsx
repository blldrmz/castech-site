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
    default: "CasTech — Casino Technology Systems",
    template: "%s | CasTech",
  },
  description:
    "CasTech develops AI-powered table technologies for blackjack, roulette and next-generation casino operations—computer vision, real-time analytics, smart lighting and custom digital interfaces in one integrated system.",
  metadataBase: new URL("https://castech.ge"),
  openGraph: {
    title: "CasTech — Casino Technology Systems",
    description:
      "Intelligent casino systems engineered for accuracy, control and premium table experience.",
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
