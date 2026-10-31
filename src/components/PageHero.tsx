import Link from "next/link";
import { HeroSlides, type HeroSlide } from "./HeroSlides";
import { href, localePath, ui, type Locale } from "@/lib/i18n";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  id?: string;
  slides?: HeroSlide[];
  locale?: Locale;
};

export function PageHero({ eyebrow, title, lead, id, slides, locale = "en" }: Props) {
  const t = ui[locale];
  return (
    <section id={id} className="relative overflow-hidden border-b border-white/10 bg-[#091421]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_70%_at_92%_48%,rgba(16,185,129,.10),transparent_90%),radial-gradient(ellipse_30%_75%_at_2%_3%,rgba(80,156,215,.08),transparent_90%)]"/>
      {slides && <HeroSlides slides={slides} />}
      <div className="relative castech-container py-20 sm:py-24 lg:py-28">
        <nav className="mb-9 flex items-center gap-3 text-[12px] font-semibold tracking-wide text-slate-300" aria-label="Breadcrumb">
          <Link href={href(locale, "/")} className="transition hover:text-gold">{t.breadcrumbHome}</Link>
          <span aria-hidden="true" className="text-slate-500">/</span>
          <Link href={locale === "en" ? "/catalog" : localePath(locale, "/")} className="transition hover:text-gold">{t.breadcrumbEquipment}</Link>
          <span aria-hidden="true" className="text-slate-500">/</span>
          <span className="text-gold">{eyebrow}</span>
        </nav>
        {slides ? (
          <div className="max-w-xl lg:max-w-[44%]">
            <p className="inline-flex items-center gap-3 font-heading text-xs font-bold uppercase tracking-[.16em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" /> {eyebrow}
            </p>
            <h1 className="mt-6 font-heading text-[clamp(2.4rem,4.2vw,4.4rem)] font-bold leading-[1.08] tracking-[-.06em] text-white">{title}</h1>
            <div className="mt-8 border-l-2 border-gold/55 pl-6">
              <p className="text-[15px] font-medium leading-[1.9] text-slate-100 [text-shadow:0_1px_12px_rgba(0,0,0,.85)] sm:text-[17px]">{lead}</p>
            </div>
          </div>
        ) : (
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-3 font-heading text-xs font-bold uppercase tracking-[.16em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" /> {eyebrow}
            </p>
            <h1 className="mt-7 max-w-4xl font-heading text-[clamp(2.6rem,4.6vw,4.9rem)] font-bold leading-[1.08] tracking-[-.06em] text-white">{title}</h1>
          </div>
          <div className="border-l-2 border-gold/55 pl-6">
            <p className="max-w-lg text-[15px] font-medium leading-[1.9] text-slate-100 [text-shadow:0_1px_12px_rgba(0,0,0,.85)] sm:text-[17px]">{lead}</p>
            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[.1em] text-slate-400">{t.heroTagline}</p>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
