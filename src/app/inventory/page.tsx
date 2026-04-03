import { InventoryPage } from "@/components/InventoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casino Equipment Inventory",
  description:
    "Explore available casino systems including slot machines, live tables and accessories. CasTech global equipment supply.",
};

export default function InventoryRoute() {
  return <InventoryPage />;
}
