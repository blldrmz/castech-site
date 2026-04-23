import { EquipmentGroupList } from "@/components/EquipmentGroupList";
import { LiveGameSpotlight } from "@/components/live-games/LiveGameSpotlight";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { liveGroupCoverById } from "@/content/sectionCovers";
import { liveGameGroups, liveGamesPageHero } from "@/content/liveGames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live games & table equipment",
  description:
    "Roulette, blackjack, baccarat, poker, dice and full pit hardware—wheels, shufflers, felts, chips and more. CasTech casino equipment.",
};

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
      <div className="bg-[#050507]">
        <div className="castech-container castech-section-y pt-16 sm:pt-20">
          <EquipmentGroupList
            groups={liveGameGroups}
            coverById={liveGroupCoverById}
          />
        </div>
      </div>
      <SectionCta
        title="Specifying a new pit or refit?"
        text="We can align brands, spares, and lead times with your opening date—get in touch with your floor plan and game mix."
      />
    </SiteShell>
  );
}
