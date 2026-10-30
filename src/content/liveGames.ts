export type LiveEquipmentItem = {
  title: string;
  description: string;
};

export type LiveGameGroup = {
  id: string;
  title: string;
  intro: string;
  items: LiveEquipmentItem[];
};

export const liveGamesPageHero = {
  eyebrow: "Live table equipment",
  title: "Casino gaming tables and live game equipment.",
  lead:
    "Roulette, blackjack, poker and baccarat tables for every casino floor. We supply complete live game setups, including roulette wheels, layouts, chips, casino chairs and table hardware, matched to your floor design and specifications.",
} as const;

export const liveGameGroups: LiveGameGroup[] = [
  {
    id: "seating",
    title: "Seating: players, dealers & pit",
    intro:
      "From slot stools to high-limit player chairs—ergonomics, upholstery class, and sightlines for surveillance all matter on a busy floor.",
    items: [
      {
        title: "Slot & electronic-game stools",
        description:
          "Height-adjust, swivel bases, foot rings and finishes matched to your aisle spacing and cabinet family.",
      },
      {
        title: "Pit & table player chairs",
        description:
          "High-limit and standard pit seating with arm options, fire-rated fabrics and custom embroidery.",
      },
      {
        title: "Dealer & supervisor seating",
        description:
          "Low-profile dealer chairs, pit desk seating and durable upholstery for long shifts.",
      },
      {
        title: "Rails, footrests & comfort add-ons",
        description:
          "Foot rails, cushion upgrades and replacement parts to keep seating serviceable between refits.",
      },
    ],
  },
  {
    id: "cards",
    title: "Cards, cut cards & paper",
    intro:
      "Playing media, cut-card discipline and pit paperwork are small items that stop a game when they run out—plan them like any other critical supply.",
    items: [
      {
        title: "Playing cards (bulk & casino grade)",
        description:
          "Jumbo index, standard index, plastic and paper stocks sized to your shuffler and game policy.",
      },
      {
        title: "Cut cards, plugs & discard management",
        description:
          "Color-coded cut cards, discard shoes and hopper accessories aligned with internal controls.",
      },
      {
        title: "Limit pads, fill slips & pit forms",
        description:
          "Table limit displays, credit/fill stationery and cage-linked forms in your house format.",
      },
      {
        title: "Markers, pens & rail organizers",
        description:
          "Dealer markers, dry-erase rail clips and compact organizers that keep the rail legible on camera.",
      },
    ],
  },
  {
    id: "roulette",
    title: "Roulette",
    intro:
      "Wheels, displays and support hardware for both traditional and automated roulette areas.",
    items: [
      {
        title: "Roulette wheels & cones",
        description:
          "Turret assemblies, ball tracks, and precision-balanced wheels to casino operating standards; compatible with your layout and service regime.",
      },
      {
        title: "Automated & air-driven wheels",
        description:
          "Options for high-volume floors where a sealed, automated or air-cushioned result ring fits your program and local regulations.",
      },
      {
        title: "Result displays & reader systems",
        description:
          "Over-wheel readers, result towers and integration displays so pit and players see winning numbers with minimal delay.",
      },
      {
        title: "Layouts & table bases",
        description:
          "Wool or synthetic felt layouts, armrests, and chip rail configurations sized for your footprint.",
      },
    ],
  },
  {
    id: "blackjack",
    title: "Blackjack & card pits",
    intro:
      "Dealing efficiency, shuffling, and the physical table tools card pits rely on all day long.",
    items: [
      {
        title: "Blackjack tables (standard & premium)",
        description:
          "Custom lengths, rail heights, and finishes from utility pits to high-limit presentation.",
      },
      {
        title: "Continuous shufflers",
        description:
          "Refurbished multi-deck and specialty shuffler formats that match your game speed and back-of-house policy.",
      },
      {
        title: "Dealing shoes & cut-card procedures",
        description:
          "4-, 6- and 8-deck shoes, cut cards, discard hoppers, and add-ons to match your internal controls.",
      },
      {
        title: "Pit displays & sign panels",
        description:
          "Table limits, rules and promotional inserts integrated into the rail or on compact displays.",
      },
    ],
  },
  {
    id: "baccarat",
    title: "Baccarat & commission games",
    intro:
      "From squeeze presentations to no-commission spread formats, we cover the physical stack.",
    items: [
      {
        title: "Midi & full baccarat tables",
        description:
          "Bean-shaped and kidney layouts with the rail geometry and legroom you specify.",
      },
      {
        title: "Squeeze & reveal accessories",
        description:
          "Racks, plexi panels, and working surfaces tuned for squeeze baccarat performance.",
      },
      {
        title: "Commission & payout tools",
        description:
          "Payout calc aids, bet-marking options and table-side accessories to match your procedures.",
      },
    ],
  },
  {
    id: "poker",
    title: "Poker & tournament",
    intro:
      "Card rooms, tournament events and daily cash-game tables share the same core kit.",
    items: [
      {
        title: "Texas Hold’em & stud tables",
        description:
          "Oval and head-to-head tops with built-in shuffler wells, phone rails and cut-out cup holders on request.",
      },
      {
        title: "Tournament & cash-game felts",
        description:
          "Branded or tournament-standard layouts, padding and quick-swap top systems.",
      },
      {
        title: "Poker shufflers & spares",
        description:
          "Refurbished on-table shufflers, plus card decks in bulk and the consumables a busy room consumes.",
      },
    ],
  },
  {
    id: "craps",
    title: "Craps & dice",
    intro:
      "The layout, sticks, and accessories that make a craps pit safe and legible for crew and players.",
    items: [
      {
        title: "Craps tables & underlayment",
        description:
          "Regulation base sizes, hump geometry, and chip rail configurations for your pit row.",
      },
      {
        title: "Dice, sticks, on/off pucks & buttons",
        description:
          "Color-coded dice, dealer sticks, on/off pucks, buy and lay button sets ready for the rail.",
      },
      {
        title: "Marker & odds accessories",
        description:
          "Flat-to-edge chips, marker trays and odds-layout aids matched to your house rules.",
      },
    ],
  },
  {
    id: "specialty",
    title: "Specialty & carnival games",
    intro:
      "When you expand beyond the core titles, the same discipline applies to hardware and layout.",
    items: [
      {
        title: "Sic bo, pai gow & big-six style layouts",
        description:
          "Felt, dice cages, wheels and the small hardware unique to each game class.",
      },
      {
        title: "Carnival & side-bet add-ons",
        description:
          "Table-top modules and signage that work with your existing pit furniture.",
      },
    ],
  },
  {
    id: "chips",
    title: "Chips, plaques & table cash",
    intro:
      "Color sets, security features and the handling hardware that connect cage to table.",
    items: [
      {
        title: "Casino chips & plaques",
        description:
          "Deno stacks, inlay or RFID-ready styles where your compliance window allows.",
      },
      {
        title: "Chip trays, fills & toppers",
        description:
          "Rack system sizing for your rail, drop-slot integration, and cap covers.",
      },
      {
        title: "Drop boxes & count interfaces",
        description:
          "Locking boxes, under-table slides and accessories aligned with your count room.",
      },
    ],
  },
  {
    id: "hardware",
    title: "Table hardware & service",
    intro:
      "The invisible infrastructure that keeps tables live: power, data, and maintenance access.",
    items: [
      {
        title: "Dealer podiums & sign bases",
        description:
          "Pit-consistent dealer stands, rule boards and line-of-sight to surveillance.",
      },
      {
        title: "Power & data in-table",
        description:
          "Grommets, cable paths and cut-outs for reader arrays, shuffler feeds and service.",
      },
      {
        title: "Lighting, cup holders & comfort",
        description:
          "Sub-rail service lighting, cut-out options and add-ons to reduce dealer fatigue on long shifts.",
      },
    ],
  },
];
