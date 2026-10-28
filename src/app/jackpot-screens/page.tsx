import { JackpotGallery } from "@/components/JackpotGallery";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import {
  jackpotBrief,
  jackpotFormats,
  jackpotGallery,
  jackpotHero,
  jackpotHighlights,
  jackpotSizes,
} from "@/content/jackpotScreens";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta(
  "LED jackpot screens, made to your size",
  "Own-production LED jackpot screens for casino floors: built to your dimensions, compatible with jackpot servers of any brand and model, delivered by CasTech EQ.",
  "/jackpot-screens/",
);

const heroSlides = [
  { src: "/images/hero/six-bank.webp", position: "center" },
  { src: "/images/hero/egt-three-machines.webp", position: "center" },
  { src: "/images/hero/overhead-grand.webp", position: "center" },
  { src: "/images/hero/wall-screen.webp", position: "center" },
  { src: "/images/hero/four-sided-purple.webp", position: "center" },
  { src: "/images/hero/entrance-led.webp", position: "center" },
  { src: "/images/hero/tv-wall.webp", position: "center" },
  { src: "/images/hero/egt-cube.webp", position: "center" },
  { src: "/images/hero/three-level-fireworks.webp", position: "center" },
  { src: "/images/hero/dark-room.webp", position: "center" },
  { src: "/images/hero/boost-closeup.webp", position: "center" },
  { src: "/images/hero/apex-clover-wave.webp", position: "center" },
  { src: "/images/hero/apex-clover-twist.webp", position: "center" },
  { src: "/images/hero/slim-column.webp", position: "center" },
];

export default function JackpotScreensPage() {
  return (
    <SiteShell>
      <PageHero id="top" slides={heroSlides} eyebrow={jackpotHero.eyebrow} title={jackpotHero.title} lead={jackpotHero.lead} />

      <div className="bg-[#070d15]">
        <div className="castech-container castech-section-y">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {jackpotHighlights.map((h) => (
              <div key={h.title} className="castech-card-product flex flex-col p-6 sm:p-7">
                <h2 className="castech-card-title">{h.title}</h2>
                <p className="castech-body mt-3 text-sm text-zinc-200 sm:mt-4 sm:text-base">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="castech-eyebrow">Sizes</p>
              <h2 className="castech-h2 castech-h2-gap">{jackpotSizes.title}</h2>
              {jackpotSizes.paragraphs.map((p, i) => (
                <p key={i} className="castech-body mt-6 text-zinc-300">{p}</p>
              ))}
              <Link href="/contact?item=LED%20jackpot%20screen" className="castech-btn-primary mt-9 inline-flex">
                Request a jackpot screen quote <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {jackpotFormats.map((f) => (
                <div key={f.title} className="castech-card-product p-6">
                  <h3 className="castech-card-title">{f.title}</h3>
                  <p className="castech-body mt-3 text-sm text-zinc-300">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <p className="castech-eyebrow">Installations</p>
            <h2 className="castech-h2 castech-h2-gap">On real casino floors.</h2>
            <JackpotGallery items={jackpotGallery} />
            <p className="mt-6 max-w-3xl text-xs leading-6 text-slate-400">
              Photographs show installed jackpot displays. The same screens can show jackpot values from your server or any other content you choose, such as a live sports broadcast. Slot machine brands visible in the photographs belong to their
              manufacturers and are not affiliated with CasTech EQ.
            </p>
          </div>

          <div className="mt-20 max-w-3xl">
            <p className="castech-eyebrow">To quote quickly</p>
            <h2 className="castech-h2 castech-h2-gap">What to send us.</h2>
            <ul className="mt-8 space-y-3">
              {jackpotBrief.map((b) => (
                <li key={b} className="castech-body flex gap-3 text-zinc-200">
                  <span aria-hidden="true" className="mt-1 text-[#e3bc7b]">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <SectionCta
        title="Need a jackpot screen for your floor?"
        text="Send us your size, mounting position and jackpot server details. We will come back with a configuration and offer."
      />
    </SiteShell>
  );
}
