import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { aboutPageContent } from "@/content/aboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "CasTech supplies casino table equipment, slot cabinets, floor accessories, and professional surveillance. Based in Georgia.",
};

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
      <SectionCta
        title="Work with us on your next project"
        text="If you are expanding, refurbishing, or building from greenfield, we are ready to help with equipment selection and planning."
      />
    </SiteShell>
  );
}
