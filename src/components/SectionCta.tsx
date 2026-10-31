import { href, ui, type Locale } from "@/lib/i18n";
import Link from "next/link";

type Props = {
  title?: string;
  text?: string;
  locale?: Locale;
};

export function SectionCta({ title, text, locale = "en" }: Props) {
  const t = ui[locale].cta;
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0a1522] py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_110%_at_50%_130%,rgba(16,185,129,.15),transparent)]"/>
      <div className="relative castech-container">
        <div className="flex flex-col gap-9 rounded-2xl border border-slate-600/40 bg-[#101e2f] px-7 py-10 shadow-2xl shadow-black/20 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div>
            <p className="castech-eyebrow">{t.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-[-.045em] text-white sm:text-4xl">{title ?? t.title}</h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-slate-300">{text ?? t.text}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link href={href(locale, "/contact")} className="castech-btn-primary whitespace-nowrap">{t.quote} <span aria-hidden="true" className="ml-2">↗</span></Link>
            <a href="mailto:info@castecheq.com" className="castech-btn-secondary whitespace-nowrap">{t.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
