import { InventoryPage } from "@/components/InventoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slot Machine Inventory",
  description:
    "Browse CasTech’s full slot machine inventory: EGT, Novomatic, IGT, Aristocrat, electronic roulette, and more. Premium casino equipment from internationally recognized brands.",
  openGraph: {
    title: "Slot Machine Inventory | CasTech",
    description:
      "Browse premium slot machines and electronic gaming solutions from CasTech. Filter by brand and cabinet format.",
  },
};

export default function InventoryRoute() {
  return <InventoryPage />;
}
