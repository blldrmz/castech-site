import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { aboutBackground, aboutPageContent } from "@/content/aboutPage";

export const metadata = pageMeta(
  "About",
  "CasTech EQ by Virexa AI Technologies s.r.o.: casino industry experience in Africa, Europe, Asia and on cruise ships, own-production LED jackpot screens, used slot machines and refurbished shufflers.",
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
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutBackground.highlights.map((h) => (
                  <li key={h} className="castech-body flex gap-3 text-sm text-zinc-200">
                    <span aria-hidden="true" className="mt-0.5 text-[#e3bc7b]">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 self-start sm:grid-cols-2">
              {aboutBackground.regions.map((r) => (
                <div key={r.title} className="castech-card-product p-6">
                  <h3 className="castech-card-title">{r.title}</h3>
                  <p className="castech-body mt-3 text-sm text-zinc-300">{r.text}</p>
                </div>
              ))}
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
