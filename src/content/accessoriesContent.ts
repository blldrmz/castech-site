import type { LiveGameGroup } from "./liveGames";

export const accessoriesPageHero = {
  eyebrow: "Floor & pit accessories",
  title: "Casino accessories and floor supplies.",
  lead:
    "Everything your gaming floor needs day to day: casino chips, playing cards, dealer accessories, layouts, chip trays and floor supplies, delivered to your casino.",
} as const;

export const accessoryGroups: LiveGameGroup[] = [
  {
    id: "tito-operations",
    title: "TITO, printers & media",
    intro: "End-to-end ticket and voucher workflows that match your slot system and cage.",
    items: [
      {
        title: "TITO tickets & custom stock",
        description:
          "Branded and generic ticket stock sized for your printer and redemption policy.",
      },
      {
        title: "Kiosk and slot-ticket printers",
        description:
          "Compact, high-uptime print heads and spares to reduce swap downtime between shifts.",
      },
      {
        title: "Barcode & validation add-ons",
        description:
          "Reader upgrades and test gear so cage and floor stay aligned on ticket acceptance.",
      },
    ],
  },
  {
    id: "seating-service",
    title: "Seating & player comfort",
    intro: "From slot stools to high-limit player chairs—ergonomics and finish matter.",
    items: [
      {
        title: "Slot and electronic-table stools",
        description:
          "Height-adjust, swivel and base styles that line up with your machine spacing.",
      },
      {
        title: "Table-side player chairs (pit & high limit)",
        description:
          "Upholstery grades, fire codes and custom embroidery where your brand requires it.",
      },
      {
        title: "Dealer and supervisor seating",
        description:
          "Durable, lower-profile options that fit under pit desks and service rails.",
      },
    ],
  },
  {
    id: "service-pit",
    title: "Service carts, mats & storage",
    intro: "Move chips, fill slips and tools without slowing the floor.",
    items: [
      {
        title: "Pit and cage service carts",
        description:
          "Lockable, carpet-friendly wheels and tray layouts for fills, credits and key runs.",
      },
      {
        title: "Anti-fatigue and cable mats",
        description:
          "Service lanes and data paths protected from wear under heavy foot traffic.",
      },
      {
        title: "Under-counter & mobile storage",
        description:
          "Compact cabinets for spares, forms and emergency supplies along the pit line.",
      },
    ],
  },
  {
    id: "table-smallware",
    title: "Table smallwares",
    intro: "The consumable layer every pit manager keeps on a par list.",
    items: [
      {
        title: "Dealer and chip brushes, scrapers, covers",
        description:
          "Color-coded and labeled tools so surveillance and training stay consistent.",
      },
      {
        title: "Card decks, cut cards, discard shoes",
        description:
          "Volume packs and back-stock rotation plans for your game mix.",
      },
      {
        title: "Layout staples & rail clips",
        description:
          "Fasteners and field kits for fast overnight felt repair without pulling the table.",
      },
    ],
  },
  {
    id: "keys-security",
    title: "Keys, seals & key control",
    intro: "Physical security items that work with your SOP, not against it.",
    items: [
      {
        title: "Drop keys, key blanks & cores",
        description:
          "Master-key policies supported with serialized duplicates and spares in cage custody.",
      },
      {
        title: "Seals, tags, tamper-evident",
        description:
          "For carts, toppers, and ad-hoc transport between cage and count.",
      },
    ],
  },
  {
    id: "signage-branding",
    title: "Signage, jackpots & floor graphics",
    intro: "Regulatory, wayfinding, and brand moments across the open floor.",
    items: [
      {
        title: "Slot toppers, belly glass inserts",
        description:
          "Themed and regulatory artwork sized to each cabinet family in your lot.",
      },
      {
        title: "Wayfinding, limits & RSP posters",
        description:
          "Durable, swap-friendly sign systems for reconfiguration weekends.",
      },
    ],
  },
];
