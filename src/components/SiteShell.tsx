import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Locale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  locale?: Locale;
};

export function SiteShell({ children, locale = "en" }: Props) {
  return (
    <div className="min-h-screen bg-[#070d15] text-white">
      <Header />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
