import { pageMeta } from "@/lib/seo";
import { InventoryCatalog } from "@/components/inventory/InventoryCatalog";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { slotMachinesPageHero } from "@/content/inventory";

export const metadata = pageMeta(
  "Used slot machines & electronic gaming equipment",
  "Pre-owned slot machines from EGT, Novomatic, Aristocrat and Amatic, VIP lounge cabinets and electronic roulette. Not on the list? We will find the machine you need.",
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
        title="Looking for a machine that is not listed?"
        text="Contact us with the brand, model or cabinet type you need. We will find it for you and confirm condition, availability and delivery for your market."
      />
    </SiteShell>
  );
}
