import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { EquipmentGroupList } from "@/components/EquipmentGroupList";
import { LiveGameSpotlight } from "@/components/live-games/LiveGameSpotlight";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { liveGroupCoverById } from "@/content/sectionCovers";
import { liveGameGroups, liveGamesPageHero } from "@/content/liveGames";

export const metadata = pageMeta(
  "Casino Gaming Tables | Roulette, Blackjack, Poker & Baccarat",
  "Casino gaming tables for roulette, blackjack, poker and baccarat, plus roulette wheels, layouts, chips, casino chairs, table hardware and refurbished shufflers.",
  "/live-games/",
);

export default function LiveGamesPage() {
  return (
    <SiteShell>
      <PageHero
        id="top"
        eyebrow={liveGamesPageHero.eyebrow}
        title={liveGamesPageHero.title}
        lead={liveGamesPageHero.lead}
      />
      <LiveGameSpotlight />
      <div className="bg-[#070d15]">
        <div className="castech-container castech-section-y pt-16 sm:pt-20">
          <EquipmentGroupList
            groups={liveGameGroups}
            coverById={liveGroupCoverById}
          />
        </div>
      </div>
      <div className="bg-[#070d15]">
        <div className="castech-container pb-16">
          <p className="castech-body max-w-3xl text-zinc-300">
            Need limit and result displays for your tables? See our{" "}
            <Link href="/table-signs" className="text-[#e3bc7b] underline-offset-4 hover:underline">table signs and roulette displays</Link>.
          </p>
        </div>
      </div>
      <SectionCta
        title="Specifying a new pit or refit?"
        text="We can align brands, spares, and lead times with your opening date—get in touch with your floor plan and game mix."
      />
    </SiteShell>
  );
}
