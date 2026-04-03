export type InventoryBadge = "Available" | "On Request" | "Custom" | "AI System";

export type InventoryEquipmentItem = {
  id: string;
  title: string;
  badge: InventoryBadge;
  /** Short supporting line for sales context */
  blurb: string;
};

export type InventorySection = {
  id: string;
  eyebrow: string;
  title: string;
  items: InventoryEquipmentItem[];
};

export const inventoryPageHero = {
  eyebrow: "Inventory",
  title: "Casino Equipment Inventory",
  description:
    "Explore available casino systems including slot machines, live tables and accessories.",
};

export const inventorySections: InventorySection[] = [
  {
    id: "slot-machines",
    eyebrow: "Section 1",
    title: "Slot Machines",
    items: [
      {
        id: "novomatic",
        title: "Novomatic Slot Machine",
        badge: "Available",
        blurb: "Proven multi-game cabinets and linked jackpots for high-traffic floors.",
      },
      {
        id: "igt",
        title: "IGT Multi Game Slot",
        badge: "Available",
        blurb: "Multi-game packs with operator-configurable themes and remote management.",
      },
      {
        id: "aristocrat",
        title: "Aristocrat Gaming Machine",
        badge: "On Request",
        blurb: "Premium video slots with certified RNG and regional compliance packs.",
      },
    ],
  },
  {
    id: "live-tables",
    eyebrow: "Section 2",
    title: "Live Tables",
    items: [
      {
        id: "roulette-table",
        title: "Roulette Table",
        badge: "Available",
        blurb: "Professional-grade wheels and layouts for pit-standard operations.",
      },
      {
        id: "blackjack-table",
        title: "Blackjack Table",
        badge: "Available",
        blurb: "Durable felts, chip rails and dealer stations built for 24/7 use.",
      },
      {
        id: "poker-table",
        title: "Poker Table",
        badge: "Custom",
        blurb: "Custom layouts and finishes matched to your room and tournament format.",
      },
      {
        id: "ai-blackjack",
        title: "AI Blackjack System (CasTech)",
        badge: "AI System",
        blurb: "CasTech AI vision: seat & bet detection, alerts and dealer-assist signals.",
      },
      {
        id: "smart-roulette",
        title: "Smart Roulette Layout (CasTech)",
        badge: "AI System",
        blurb: "Multi-camera verification, chip analytics and smart table lighting.",
      },
    ],
  },
  {
    id: "accessories",
    eyebrow: "Section 3",
    title: "Accessories",
    items: [
      {
        id: "chairs",
        title: "Casino Chairs",
        badge: "Available",
        blurb: "Pit and slot seating with finishes matched to your brand.",
      },
      {
        id: "chips",
        title: "Chip Sets",
        badge: "Custom",
        blurb: "Ceramic and composite programs with denominations and vault-ready logistics.",
      },
      {
        id: "layouts",
        title: "Table Layouts",
        badge: "Custom",
        blurb: "Printed and digital layouts for blackjack, roulette, poker and specialty games.",
      },
      {
        id: "led",
        title: "LED Systems",
        badge: "On Request",
        blurb: "Jackpot towers, marquees and table-edge LED for promotions and timers.",
      },
      {
        id: "surveillance",
        title: "Surveillance / Camera Systems",
        badge: "On Request",
        blurb: "Pit and ceiling coverage with archive-friendly encoding.",
      },
    ],
  },
];
