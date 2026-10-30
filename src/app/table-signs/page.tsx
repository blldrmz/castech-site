import { JackpotGallery } from "@/components/JackpotGallery";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { catalogueCategories } from "@/content/catalogueData";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta(
  "Casino Table Signs | Table Limit Displays & Roulette Result Displays",
  "Own-production casino table signs: table limit displays and roulette result displays for live gaming tables, built to your table layout by CasTech EQ.",
  "/table-signs/",
);

const tableSigns = catalogueCategories.find((c) => c.slug === "table-signs")!;
const gallery = tableSigns.items.map((i) => ({
  src: i.image,
  alt: `${i.title.replace(/—/g, "-")}: casino table limit sign for live gaming tables`,
  caption: i.title,
}));

const brief = [
  "Which games: roulette, blackjack, poker, baccarat or others",
  "Number of tables and how each sign will be mounted",
  "What to show: table limits, roulette results, statistics or promotions",
  "Delivery country and target date",
];

export default function TableSignsPage() {
  return (
    <SiteShell>
      <PageHero
        id="top"
        eyebrow="Table signs"
        title="Table signs for every live gaming table."
        lead="Our own-production table limit signs and roulette result displays for live gaming tables. Each table sign is built to your table layout and shows limits, results and statistics clearly to players."
      />
      <div className="bg-[#070d15]">
        <div className="castech-container castech-section-y">
          <p className="castech-eyebrow">Our table signs</p>
          <h2 className="castech-h2 castech-h2-gap">Table limit displays and roulette result displays.</h2>
          <JackpotGallery items={gallery} />

          <div className="mt-20 max-w-3xl">
            <p className="castech-eyebrow">To quote quickly</p>
            <h2 className="castech-h2 castech-h2-gap">What to send us.</h2>
            <ul className="mt-8 space-y-3">
              {brief.map((b) => (
                <li key={b} className="castech-body flex gap-3 text-zinc-200">
                  <span aria-hidden="true" className="mt-1 text-[#e3bc7b]">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact?item=Table%20signs" className="castech-btn-primary mt-9 inline-flex">
              Request a table sign quote <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
            <p className="castech-body mt-10 text-zinc-300">
              Equipping a full pit? See our{" "}
              <Link href="/live-games" className="text-[#e3bc7b] underline-offset-4 hover:underline">casino gaming tables and live game equipment</Link>.
            </p>
          </div>
        </div>
      </div>
      <SectionCta
        title="Need table signs for your casino?"
        text="Send us your games, number of tables and what each sign should show. We will come back with a configuration and offer."
      />
    </SiteShell>
  );
}
