import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { aboutBackground, aboutPageContent } from "@/content/aboutPage";

export const metadata = pageMeta(
  "About",
  "CasTech EQ by Virexa AI Technologies s.r.o.: 22 years of casino industry experience across Europe, Africa, Asia and cruise ships, own-production LED jackpot screens, used slot machines and refurbished shufflers.",
  "/about/",
);

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        id="top"
        eyebrow={aboutPageContent.eyebrow}
        title={aboutPageContent.title}
        lead={aboutPageContent.lead}
      />
      <div className="bg-[#050507]">
        <div className="castech-container castech-section-y">
          <div className="mx-auto max-w-3xl space-y-8">
            {aboutPageContent.paragraphs.map((p, i) => (
              <p key={i} className="castech-body text-zinc-200">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-3 sm:gap-6">
            {aboutPageContent.highlights.map((h) => (
              <div
                key={h.title}
                className="castech-card-product flex flex-col p-6 sm:p-7"
              >
                <h3 className="castech-card-title">{h.title}</h3>
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
              <p className="castech-eyebrow">{aboutBackground.eyebrow}</p>
              <h2 className="castech-h2 castech-h2-gap max-w-2xl">{aboutBackground.title}</h2>
              <div className="mt-8 space-y-6">
                {aboutBackground.paragraphs.map((t, i) => (
                  <p key={i} className="castech-body text-zinc-200">{t}</p>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#e3bc7b]">{aboutBackground.rolesTitle}</p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {aboutBackground.roles.map((r) => (
                    <li key={r} className="rounded-full border border-[#e3bc7b]/35 bg-[#e3bc7b]/[0.06] px-4 py-2 text-[13px] font-medium text-zinc-100">{r}</li>
                  ))}
                </ul>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutBackground.highlights.map((h) => (
                  <li key={h} className="castech-body flex gap-3 text-sm text-zinc-200">
                    <span aria-hidden="true" className="mt-0.5 text-[#e3bc7b]">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="self-start">
              <div className="flex items-end gap-4 border-b border-white/15 pb-6">
                <span className="font-heading text-7xl font-extralight leading-none tracking-[-.06em] text-white sm:text-8xl">
                  {aboutBackground.yearsLabel}
                  <span className="text-[#e3bc7b]">.</span>
                </span>
                <span className="pb-2 text-sm tracking-[.06em] text-slate-300">{aboutBackground.yearsText}</span>
              </div>
              <ol className="mt-8 space-y-5 border-l border-[#e3bc7b]/30 pl-6">
                {aboutBackground.timeline.map((t, i) => (
                  <li key={i} className="relative">
                    <span aria-hidden="true" className="absolute -left-[30px] top-2 h-2 w-2 rounded-full bg-[#e3bc7b]" />
                    <p className="font-heading text-base font-semibold text-white">{t.place}</p>
                    <p className="castech-body mt-1 text-sm text-zinc-300">{t.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <SectionCta
        title="Work with us on your next project"
        text="If you are expanding, refurbishing, or building from greenfield, we are ready to help with equipment selection and planning."
      />
    </SiteShell>
  );
}
