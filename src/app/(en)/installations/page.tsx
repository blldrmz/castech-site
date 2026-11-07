import { installationStories, installationsHero, installationsHeroSlides } from "@/content/installations";
import { pageMeta } from "@/lib/seo";
import { InstallationsView } from "@/views/InstallationsView";

export const metadata = pageMeta(
  "Installations: jackpot screens on real casino floors",
  "Photographs and site videos of CasTech EQ jackpot displays, cube and wide bank screens, slim LED pillars and wireless table charging installed in casinos.",
  "/installations/",
);

export default function InstallationsPage() {
  return (
    <InstallationsView
      c={{
        hero: installationsHero,
        heroSlides: installationsHeroSlides,
        stories: installationStories,
        labels: {
          navLabel: "Installations on this page",
          footnote:
            "Photographs and videos were taken on site and in our workshop. Jackpot systems and slot machine brands visible on the screens belong to their manufacturers and are not affiliated with CasTech EQ; our screens connect to the venue's existing jackpot server.",
          sizesLink: "Jackpot screen sizes and formats",
          ctaTitle: "Planning screens for your floor?",
          ctaText: "Send us the bank sizes, mounting positions and your jackpot server details. We will come back with a configuration and offer.",
        },
      }}
    />
  );
}
