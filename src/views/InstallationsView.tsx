import { InstallationGallery } from "@/components/InstallationGallery";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import type { InstallationStory } from "@/content/installations";
import { href, type Locale } from "@/lib/i18n";
import Link from "next/link";

export type InstallationsContent = {
  hero: { eyebrow: string; title: string; lead: string };
  heroSlides: { src: string; position: string }[];
  stories: readonly InstallationStory[];
  labels: { navLabel: string; footnote: string; sizesLink: string; ctaTitle: string; ctaText: string };
};

export function InstallationsView({ c, locale = "en" }: { c: InstallationsContent; locale?: Locale }) {
  return (
    <SiteShell locale={locale}>
      <PageHero id="top" slides={c.heroSlides} eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} locale={locale} />

      <nav aria-label={c.labels.navLabel} className="border-b border-white/10 bg-ink">
        <div className="castech-container flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {c.stories.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-gold hover:bg-gold hover:text-gold-ink">
              {s.tag}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-ink">
        <div className="castech-container castech-section-y">
          {c.stories.map((s, i) => (
            <section key={s.id} id={s.id} className={`scroll-mt-28 ${i ? "mt-20 border-t border-white/10 pt-20 sm:mt-24 sm:pt-24" : ""}`}>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
                <div>
                  <p className="castech-eyebrow">
                    {String(i + 1).padStart(2, "0")} · {s.tag}
                  </p>
                  <h2 className="castech-h2 castech-h2-gap">{s.title}</h2>
                  <p className="castech-body mt-6 text-zinc-300">{s.lead}</p>
                  {s.cta && (
                    <Link href={href(locale, s.cta.href)} className="castech-btn-primary mt-8 inline-flex">
                      {s.cta.label} <span aria-hidden="true" className="ml-2">↗</span>
                    </Link>
                  )}
                </div>
                <dl className="grid content-start gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                  {s.points.map((p) => (
                    <div key={p.label} className="bg-[#0c1725] px-6 py-5">
                      <dt className="font-heading text-[11px] font-bold uppercase tracking-[.14em] text-gold">{p.label}</dt>
                      <dd className="mt-2 text-sm leading-7 text-slate-200">{p.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <InstallationGallery items={s.media} locale={locale} />
            </section>
          ))}

          <p className="mt-16 max-w-[72ch] text-[13px] leading-6 text-slate-400">{c.labels.footnote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={href(locale, "/jackpot-screens")} className="castech-btn-secondary">{c.labels.sizesLink}</Link>
          </div>
        </div>
      </div>

      <SectionCta title={c.labels.ctaTitle} text={c.labels.ctaText} locale={locale} />
    </SiteShell>
  );
}
