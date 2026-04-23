import {
  inventorySlotMachines,
  type InventorySlotMachine,
} from "./inventory";

export type SlotMachine = InventorySlotMachine;

export const slotMachines: SlotMachine[] = inventorySlotMachines;

/** Update with CasTech sales WhatsApp (country code + number, no +). */
export const slotMachinesWhatsappUrl = "https://wa.me/995555000000";

export const slotMachineFilters = [
  "All",
  "Slot Machines",
  "Multigame",
  "Upright",
  "Slant Top",
  "Dual Screen",
  "Electronic Roulette",
] as const;

export type SlotMachineFilterId = (typeof slotMachineFilters)[number];

export const slotMachinesPageCopy = {
  heroSubtitle:
    "Premium casino slot machines and electronic gaming solutions from trusted international brands.",
  intro:
    "CasTech provides a selected range of slot machines and electronic gaming equipment for casino operations. Our portfolio includes upright, slant top, dual-screen, multigame, premium cabinets, and electronic roulette solutions from globally recognized manufacturers.",
  ctaTitle: "Looking for the right machine for your casino?",
  ctaText:
    "Contact CasTech for model availability, consultation, and tailored casino equipment solutions.",
  contactLabel: "Contact Us",
  whatsappLabel: "WhatsApp",
} as const;
