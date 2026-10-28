import { pageMeta } from "@/lib/seo";
import { InventoryCatalog } from "@/components/inventory/InventoryCatalog";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { slotMachinesPageHero } from "@/content/inventory";

export const metadata = pageMeta(
  "Used slot machines & electronic gaming equipment",
  "Pre-owned slot machines: upright, slant top, multigame and electronic roulette cabinets from EGT, Novomatic, IGT, Aristocrat and more. Not an authorized dealer.",
  "/slot-machines/",
);

export default function SlotMachinesPage() {
  return (
    <SiteShell>
      <PageHero
        id="top"
        eyebrow={slotMachinesPageHero.eyebrow}
        title={slotMachinesPageHero.title}
        lead={slotMachinesPageHero.lead}
      />
      <InventoryCatalog />
      <SectionCta
        title="Found the right format?"
        text="We confirm condition, availability, power requirements and delivery windows for your market. Reach out with your shortlist."
      />
    </SiteShell>
  );
}
