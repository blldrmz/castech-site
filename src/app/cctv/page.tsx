import { pageMeta } from "@/lib/seo";
import { CctvShowcase } from "@/components/CctvShowcase";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { cctvOtherNotes, cctvPageHero, cctvShowcaseBrands } from "@/content/cctvContent";

export const metadata = pageMeta(
  "CCTV & surveillance",
  "Casino surveillance with Pelco, Dallmeier, Hikvision, Panasonic and more. Cameras, VMS, retention. Brand names are references, not authorized-dealer claims.",
  "/cctv/",
);

export default function CctvPage() {
  return (
    <SiteShell>
      <PageHero
        id="top"
        eyebrow={cctvPageHero.eyebrow}
        title={cctvPageHero.title}
        lead={cctvPageHero.lead}
      />
      <div className="bg-[#050507]">
        <div className="castech-container castech-section-y">
          <CctvShowcase brands={cctvShowcaseBrands} />
          <div className="mx-auto mt-16 max-w-3xl rounded-[24px] border border-white/[0.08] bg-zinc-900/40 p-8 sm:mt-20 sm:p-10">
            <h2 className="castech-h2 text-2xl sm:text-3xl">
              {cctvOtherNotes.title}
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm font-medium leading-8 text-zinc-200 sm:text-base sm:leading-8">
              {cctvOtherNotes.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SectionCta
        title="Book a site or drawing review"
        text="Send floor plans, camera counts, and retention needs—we can suggest line-ups that match your VMS and IT constraints."
      />
    </SiteShell>
  );
}
