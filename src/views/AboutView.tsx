import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import type { Locale } from "@/lib/i18n";

type TitleText = { readonly title: string; readonly text: string };

export type AboutContent = {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly paragraphs: readonly string[];
  readonly highlights: readonly TitleText[];
};

export type AboutBackground = {
  readonly eyebrow: string;
  readonly title: string;
  readonly yearsLabel: string;
  readonly yearsText: string;
  readonly paragraphs: readonly string[];
  readonly timelineTitle: string;
  readonly timeline: readonly { readonly year: string; readonly text: string }[];
  readonly salesTitle: string;
  readonly sales: readonly string[];
  readonly placesTitle: string;
  readonly places: readonly string[];
  readonly highlights: readonly string[];
};

export function AboutView({ c, b, cta, locale = "en" }: { c: AboutContent; b: AboutBackground; cta: { title: string; text: string }; locale?: Locale }) {
  return (
    <SiteShell locale={locale}>
      <PageHero
        id="top"
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        locale={locale}
      />
      <div className="bg-ink">
        <div className="castech-container castech-section-y">
          <div className="mx-auto max-w-3xl space-y-8">
            {c.paragraphs.map((p, i) => (
              <p key={i} className="castech-body text-zinc-200">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-3 sm:gap-6">
            {c.highlights.map((h) => (
              <div
                key={h.title}
                className="castech-card-product flex flex-col p-6 sm:p-7"
              >
                <h2 className="castech-card-title">{h.title}</h2>
                <p className="castech-body mt-3 text-sm text-zinc-200 sm:mt-4 sm:text-base">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#0a1522]">
        <div className="castech-container castech-section-y">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="castech-eyebrow">{b.eyebrow}</p>
              <h2 className="castech-h2 castech-h2-gap max-w-2xl">{b.title}</h2>
              <div className="mt-8 space-y-6">
                {b.paragraphs.map((t, i) => (
                  <p key={i} className="castech-body text-zinc-200">{t}</p>
                ))}
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {b.highlights.map((h) => (
                  <li key={h} className="castech-body flex gap-3 text-sm text-zinc-200">
                    <span aria-hidden="true" className="mt-0.5 text-gold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="self-start">
              <div className="flex items-end gap-4 border-b border-white/15 pb-6">
                <span className="font-heading text-7xl font-extralight leading-none tracking-[-.06em] text-white sm:text-8xl">
                  {b.yearsLabel}
                  <span className="text-gold">.</span>
                </span>
                <span className="pb-2 text-sm text-slate-300">{b.yearsText}</span>
              </div>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[.2em] text-gold">{b.timelineTitle}</p>
              <ol className="mt-5 space-y-0 border-l border-gold/30">
                {b.timeline.map((t) => (
                  <li key={t.year} className="relative pb-6 pl-6 last:pb-0">
                    <span aria-hidden="true" className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                    <span className="block font-heading text-sm font-bold text-white">{t.year}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-300">{t.text}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-10 text-[11px] font-bold uppercase tracking-[.2em] text-gold">{b.salesTitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {b.sales.map((c) => (
                  <li key={c} className="rounded-full border border-gold/35 bg-gold/[0.06] px-4 py-2 text-[13px] font-medium text-zinc-100">{c}</li>
                ))}
              </ul>
              <p className="mt-10 text-[11px] font-bold uppercase tracking-[.2em] text-gold">{b.placesTitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {b.places.map((c) => (
                  <li key={c} className="rounded-full border border-gold/35 bg-gold/[0.06] px-4 py-2 text-[13px] font-medium text-zinc-100">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SectionCta title={cta.title} text={cta.text} locale={locale} />
    </SiteShell>
  );
}
