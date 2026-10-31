import { liveGameGroups, liveGamesPageHero } from "@/content/liveGames";
import { pageMeta } from "@/lib/seo";
import { LiveGamesView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Casino Gaming Tables | Roulette, Blackjack, Poker & Baccarat",
  "Casino gaming tables for roulette, blackjack, poker and baccarat, plus roulette wheels, layouts, chips, casino chairs, table hardware and refurbished shufflers.",
  "/live-games/",
);

export default function LiveGamesPage() {
  return (
    <LiveGamesView
      hero={liveGamesPageHero}
      groups={liveGameGroups}
      signsPre="Need limit and result displays for your tables? See our"
      signsLink="table signs and roulette displays"
      cta={{
        title: "Specifying a new pit or refit?",
        text: "We can align brands, spares, and lead times with your opening date—get in touch with your floor plan and game mix.",
      }}
    />
  );
}
