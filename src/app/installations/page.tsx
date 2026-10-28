import { InstallationGallery } from "@/components/InstallationGallery";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { installationStories, installationsHero, installationsHeroSlides } from "@/content/installations";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta(
  "Installations: jackpot screens on real casino floors",
  "Photographs and site videos of CasTech EQ jackpot displays, cube and wide bank screens, slim LED pillars and wireless table charging installed in casinos.",
  "/installations/",
);

export default function InstallationsPage() {
  return (
    <SiteShell>
      <PageHero id="top" slides={installationsHeroSlides} eyebrow={installationsHero.eyebrow} title={installationsHero.title} lead={installationsHero.lead} />

      <nav aria-label="Installations on this page" className="border-b border-white/10 bg-[#070d15]">
        <div className="castech-container flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {installationStories.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-[#e3bc7b] hover:bg-[#e3bc7b] hover:text-[#1a1305]">
              {s.tag}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-[#070d15]">
        <div className="castech-container castech-section-y">
          {installationStories.map((s, i) => (
            <section key={s.id} id={s.id} className={`scroll-mt-28 ${i ? "mt-20 border-t border-white/10 pt-20 sm:mt-24 sm:pt-24" : ""}`}>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
                <div>
                  <p className="castech-eyebrow">
                    {String(i + 1).padStart(2, "0")} · {s.tag}
                  </p>
                  <h2 className="castech-h2 castech-h2-gap">{s.title}</h2>
                  <p className="castech-body mt-6 text-zinc-300">{s.lead}</p>
                  {s.cta && (
                    <Link href={s.cta.href} className="castech-btn-primary mt-8 inline-flex">
                      {s.cta.label} <span aria-hidden="true" className="ml-2">↗</span>
                    </Link>
                  )}
                </div>
                <dl className="grid content-start gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                  {s.points.map((p) => (
                    <div key={p.label} className="bg-[#0c1725] px-6 py-5">
                      <dt className="font-heading text-[11px] font-bold uppercase tracking-[.14em] text-[#e3bc7b]">{p.label}</dt>
                      <dd className="mt-2 text-sm leading-7 text-slate-200">{p.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <InstallationGallery items={s.media} />
            </section>
          ))}

          <p className="mt-16 max-w-3xl text-xs leading-6 text-slate-400">
            Photographs and videos were taken on site and in our workshop. Jackpot systems and slot machine brands visible on the screens belong to their manufacturers and are not affiliated with CasTech EQ; our screens connect to the venue&apos;s existing jackpot server.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/jackpot-screens" className="castech-btn-secondary">Jackpot screen sizes and formats</Link>
          </div>
        </div>
      </div>

      <SectionCta
        title="Planning screens for your floor?"
        text="Send us the bank sizes, mounting positions and your jackpot server details. We will come back with a configuration and offer."
      />
    </SiteShell>
  );
}
