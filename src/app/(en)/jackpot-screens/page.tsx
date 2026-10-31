import { jackpotBrief, jackpotFormats, jackpotGallery, jackpotHero, jackpotHighlights, jackpotLabels, jackpotSizes } from "@/content/jackpotScreens";
import { pageMeta } from "@/lib/seo";
import { JackpotView } from "@/views/JackpotView";

export const metadata = pageMeta(
  "Jackpot Screens for Casinos | Custom LED Jackpot Screen",
  "Custom LED jackpot screens for casinos, in any size. Compatible with EGT, Apex, Novomatic and other jackpot servers. Designed and delivered by CasTech EQ by Virexa.",
  "/jackpot-screens/",
);

export default function JackpotScreensPage() {
  return (
    <JackpotView
      c={{ hero: jackpotHero, highlights: jackpotHighlights, sizes: jackpotSizes, formats: jackpotFormats, brief: jackpotBrief, gallery: jackpotGallery, labels: jackpotLabels }}
    />
  );
}
