import { InventoryCatalog } from "@/components/inventory/InventoryCatalog";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { slotMachinesPageHero } from "@/content/inventory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slot machines & electronic gaming",
  description:
    "Browse slot cabinets from EGT, Novomatic, IGT, and more. Upright, slant top, multigame and electronic roulette. CasTech.",
};

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
        text="We confirm availability, power requirements, and delivery windows for your market—reach out with your shortlist."
      />
    </SiteShell>
  );
}
