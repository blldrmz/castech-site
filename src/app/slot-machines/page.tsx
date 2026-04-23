import { SlotMachinesPage } from "@/components/SlotMachinesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slot Machines",
  description:
    "Explore premium slot machines, multigame cabinets, upright machines, slant top units, and electronic roulette solutions from CasTech.",
  openGraph: {
    title: "Slot Machines | CasTech",
    description:
      "Explore premium slot machines, multigame cabinets, upright machines, slant top units, and electronic roulette solutions from CasTech.",
  },
};

export default function SlotMachinesRoute() {
  return <SlotMachinesPage />;
}
