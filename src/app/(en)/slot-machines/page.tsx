import { slotMachinesPageHero } from "@/content/inventory";
import { pageMeta } from "@/lib/seo";
import { SlotMachinesView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Used Slot Machines for Sale | EGT, Novomatic, Apex & More",
  "Used slot machines for sale from EGT, Novomatic, Apex and other leading manufacturers. Condition, configuration and availability confirmed before sale, with shipping and setup support.",
  "/slot-machines/",
);

export default function SlotMachinesPage() {
  return (
    <SlotMachinesView
      hero={slotMachinesPageHero}
      cta={{
        title: "Looking for a machine that is not listed?",
        text: "Contact us with the brand, model or cabinet type you need. We will find it for you and confirm condition, availability and delivery for your market.",
      }}
    />
  );
}
