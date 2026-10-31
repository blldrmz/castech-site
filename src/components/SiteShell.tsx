import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Locale } from "@/lib/i18n";

const SKIP: Record<string, string> = { en: "Skip to content", de: "Zum Inhalt springen", cs: "Přejít na obsah", ru: "Перейти к содержимому" };

type Props = {
  children: React.ReactNode;
  locale?: Locale;
};

export function SiteShell({ children, locale = "en" }: Props) {
  return (
    <div className="min-h-screen bg-ink text-white">
      <a href="#main" className="sr-only z-[100] rounded-md bg-gold px-4 py-3 text-sm font-bold text-gold-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        {SKIP[locale] ?? SKIP.en}
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
