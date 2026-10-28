export type InventorySlotMachine = {
  brand: string;
  model: string;
  type: "Upright" | "VIP Lounge" | "Electronic Roulette";
  description: string;
  image: string;
};

/** Brand tabs: built from the machines actually listed. `brandKey` null = All. */
export const inventoryBrandTabs = [
  { id: "all", label: "All", brandKey: null as string | null },
  { id: "egt", label: "EGT", brandKey: "EGT" },
  { id: "novomatic", label: "Novomatic", brandKey: "Novomatic" },
  { id: "aristocrat", label: "Aristocrat", brandKey: "Aristocrat" },
  { id: "amatic", label: "Amatic", brandKey: "Amatic" },
  { id: "roulette", label: "Electronic roulette", brandKey: "Electronic roulette" },
] as const;

export type InventoryBrandTabId = (typeof inventoryBrandTabs)[number]["id"];

export const inventoryTypeFilters = ["All", "Upright", "VIP Lounge", "Electronic Roulette"] as const;

export type InventoryTypeFilterId = (typeof inventoryTypeFilters)[number];

export const slotMachinesPageHero = {
  eyebrow: "Used slot machines & electronic gaming",
  title: "Pre-owned slot machines and e-gaming",
  lead:
    "The machines we currently offer, from EGT, Novomatic, Aristocrat and Amatic, plus electronic roulette. All units are pre-owned; condition, year, game mix and delivery are confirmed per unit on request.",
} as const;

const note = "Pre-owned. Condition, year and game mix confirmed on request.";

export const inventorySlotMachines: InventorySlotMachine[] = [
  { brand: "EGT", model: "G 32-32 VIP", type: "VIP Lounge", description: `VIP lounge cabinet with integrated seat. ${note}`, image: "/images/catalog/machines/01-egt-g-32-32-vip.webp" },
  { brand: "EGT", model: "G 27-32 ST", type: "Upright", description: note, image: "/images/catalog/machines/02-egt-g-27-32-st.webp" },
  { brand: "EGT", model: "P 27-32H ST", type: "Upright", description: note, image: "/images/catalog/machines/03-egt-p-27-32h-st.webp" },
  { brand: "EGT", model: "P 27-27 ST", type: "Upright", description: note, image: "/images/catalog/machines/04-egt-p-27-27-st.webp" },
  { brand: "Novomatic", model: "FV834", type: "Upright", description: note, image: "/images/catalog/machines/05-novomatic-fv834.webp" },
  { brand: "Novomatic", model: "FV624", type: "Upright", description: note, image: "/images/catalog/machines/06-novomatic-fv624.webp" },
  { brand: "Novomatic", model: "VIP Lounge", type: "VIP Lounge", description: `VIP lounge cabinet with integrated seat. ${note}`, image: "/images/catalog/machines/07-novomatic-vip-lounge.webp" },
  { brand: "Novomatic", model: "Power Stars", type: "Upright", description: note, image: "/images/catalog/machines/12-novomatic-power-stars-slot-machine.webp" },
  { brand: "Aristocrat", model: "Helix Upright", type: "Upright", description: note, image: "/images/catalog/machines/09-aristocrat-helix-upright-slot-machine.webp" },
  { brand: "Aristocrat", model: "MegaPlay", type: "Upright", description: note, image: "/images/catalog/machines/10-aristocrat-megaplay-slot-machine.webp" },
  { brand: "Amatic", model: "Multi Game", type: "Upright", description: note, image: "/images/catalog/machines/08-amatic-multi-game-slot-machine.webp" },
  { brand: "Electronic roulette", model: "Hotspot Roulette gaming station", type: "Electronic Roulette", description: `Multi-player electronic roulette with central wheel. ${note}`, image: "/images/catalog/machines/11-hotspot-roulette-electronic-gaming-station.webp" },
];

export function matchesInventoryTypeFilter(item: InventorySlotMachine, filter: InventoryTypeFilterId): boolean {
  return filter === "All" || item.type === filter;
}
