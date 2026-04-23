export type InventorySlotMachine = {
  brand: string;
  model: string;
  type: string;
  category: string[];
  description: string;
  image: string;
};

/** Primary brand tabs: `brandKey` matches `item.brand` in data; `null` = All */
export const inventoryBrandTabs = [
  { id: "all", label: "All", brandKey: null as string | null },
  { id: "egt", label: "EGT", brandKey: "EGT" },
  { id: "novomatic", label: "Novomatic", brandKey: "NOVOMATIC" },
  { id: "igt", label: "IGT", brandKey: "IGT" },
  { id: "g-tech", label: "G-Tech", brandKey: "G-TECH" },
  { id: "aristocrat", label: "Aristocrat", brandKey: "ARISTOCRAT" },
  { id: "ainsworth", label: "Ainsworth", brandKey: "AINSWORTH" },
  { id: "atronic-spelo", label: "Atronic / Spelo", brandKey: "ATRONIC / SPELO" },
  { id: "amatic", label: "Amatic", brandKey: "AMATIC" },
  { id: "merkur", label: "Merkur", brandKey: "MERKUR" },
  { id: "bally", label: "Bally", brandKey: "BALLY" },
  { id: "konami", label: "Konami", brandKey: "KONAMI" },
  { id: "apex", label: "Apex", brandKey: "APEX" },
  { id: "spintec", label: "Spintec", brandKey: "SPINTEC" },
] as const;

export type InventoryBrandTabId = (typeof inventoryBrandTabs)[number]["id"];

export const inventoryTypeFilters = [
  "All",
  "Upright",
  "Slant Top",
  "Dual Screen",
  "Multigame",
  "Electronic Roulette",
] as const;

export type InventoryTypeFilterId = (typeof inventoryTypeFilters)[number];

export const inventoryPageHero = {
  title: "Casino equipment inventory",
  intro:
    "CasTech supplies premium slot machines and electronic gaming equipment from internationally recognized brands. Our range includes upright cabinets, slant top units, dual-screen machines, multigame systems, and electronic roulette for modern casino operations.",
} as const;

export const inventoryPageCta = {
  title: "Need the right equipment for your floor?",
  text: "Contact CasTech for availability, specifications, and tailored options for your venue.",
  contactLabel: "Contact us",
  quoteLabel: "Request a quote",
} as const;

/** Full catalog */
export const inventorySlotMachines: InventorySlotMachine[] = [
  {
    brand: "EGT",
    model: "Vega Vision Premier Slant Top",
    type: "Slant Top",
    category: ["Slot Machines", "Slant Top"],
    description: "Premium slant top cabinet for casino floor operations.",
    image: "/images/slots/egt-vega-vision-premier-slant-top.jpg",
  },
  {
    brand: "EGT",
    model: "VegaVision+ 22 Slant Top",
    type: "Slant Top",
    category: ["Slot Machines", "Slant Top", "Multigame"],
    description: "Compact slant top multigame solution from EGT.",
    image: "/images/slots/egt-vegavision-22-slant-top.jpg",
  },
  {
    brand: "EGT",
    model: "VegaVision+ 22 Upright",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Upright multigame cabinet for modern casino environments.",
    image: "/images/slots/egt-vegavision-22-upright.jpg",
  },
  {
    brand: "EGT",
    model: "P24/24",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Modern upright cabinet with a strong casino floor presence.",
    image: "/images/slots/egt-p2424.jpg",
  },
  {
    brand: "NOVOMATIC",
    model: "FV 880 SL",
    type: "Slant Top",
    category: ["Slot Machines", "Slant Top"],
    description: "Premium Novomatic cabinet designed for high-traffic casino floors.",
    image: "/images/slots/novomatic-fv-880-sl.jpg",
  },
  {
    brand: "NOVOMATIC",
    model: "FV 624A (Novostar)",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Recognizable Novostar upright cabinet for multigame operation.",
    image: "/images/slots/novomatic-fv-624a-novostar.jpg",
  },
  {
    brand: "NOVOMATIC",
    model: "FV 834",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Premium upright gaming machine with a modern Novomatic profile.",
    image: "/images/slots/novomatic-fv-834.jpg",
  },
  {
    brand: "NOVOMATIC",
    model: "FV 640",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Elegant upright cabinet suitable for premium casino layouts.",
    image: "/images/slots/novomatic-fv-640.jpg",
  },
  {
    brand: "NOVOMATIC",
    model: "FV 610",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Reliable upright cabinet with a classic casino machine format.",
    image: "/images/slots/novomatic-fv-610.jpg",
  },
  {
    brand: "NOVOMATIC",
    model: "Panthera 2 27 FV640B Curve",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Premium curved display cabinet for high-end casino presentation.",
    image: "/images/slots/novomatic-panthera-2-27-fv640b-curve.jpg",
  },
  {
    brand: "IGT",
    model: "Trimline Dual",
    type: "Dual Screen",
    category: ["Slot Machines", "Dual Screen"],
    description: "Dual-screen cabinet with a classic IGT gaming format.",
    image: "/images/slots/igt-trimline-dual.jpg",
  },
  {
    brand: "IGT",
    model: "G-23 Slant",
    type: "Slant Top",
    category: ["Slot Machines", "Slant Top"],
    description: "Compact slant top machine for flexible casino floor placement.",
    image: "/images/slots/igt-g23-slant.jpg",
  },
  {
    brand: "IGT",
    model: "G-23",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Classic upright IGT cabinet for gaming operations.",
    image: "/images/slots/igt-g23.jpg",
  },
  {
    brand: "IGT",
    model: "Axxis 23/23",
    type: "Dual Screen",
    category: ["Slot Machines", "Dual Screen", "Multigame"],
    description: "Dual-screen multigame machine with a strong modern profile.",
    image: "/images/slots/igt-axxis-2323.jpg",
  },
  {
    brand: "G-TECH",
    model: "Axxis 3D",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Distinctive cabinet designed for immersive gaming presentation.",
    image: "/images/slots/gtech-axxis-3d.jpg",
  },
  {
    brand: "IGT",
    model: "Crystal Dual LCD",
    type: "Dual Screen",
    category: ["Slot Machines", "Dual Screen", "Multigame"],
    description: "Dual LCD multigame cabinet for modern casino setups.",
    image: "/images/slots/igt-crystal-dual-lcd.jpg",
  },
  {
    brand: "IGT",
    model: "Crystal Dual MLD",
    type: "Dual Screen",
    category: ["Slot Machines", "Dual Screen", "Multigame"],
    description: "Modern dual-screen machine with premium display presence.",
    image: "/images/slots/igt-crystal-dual-mld.jpg",
  },
  {
    brand: "ARISTOCRAT",
    model: "Viridian Wide Screen",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Wide-screen upright cabinet for stylish casino presentation.",
    image: "/images/slots/aristocrat-viridian-wide-screen.jpg",
  },
  {
    brand: "ARISTOCRAT",
    model: "Helix",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Premium Aristocrat cabinet for advanced casino gaming floors.",
    image: "/images/slots/aristocrat-helix.jpg",
  },
  {
    brand: "ARISTOCRAT",
    model: "Megaplay",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Modern upright machine suitable for large-scale casino operation.",
    image: "/images/slots/aristocrat-megaplay.jpg",
  },
  {
    brand: "AINSWORTH",
    model: "A560 Slant",
    type: "Slant Top",
    category: ["Slot Machines", "Slant Top"],
    description: "Ainsworth slant top cabinet with a strong casino visual profile.",
    image: "/images/slots/ainsworth-a560-slant.jpg",
  },
  {
    brand: "AINSWORTH",
    model: "A560 Upright",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Reliable upright gaming cabinet for casino floor deployment.",
    image: "/images/slots/ainsworth-a560-upright.jpg",
  },
  {
    brand: "AINSWORTH",
    model: "A600",
    type: "Upright",
    category: ["Slot Machines", "Upright"],
    description: "Premium upright cabinet for contemporary gaming environments.",
    image: "/images/slots/ainsworth-a600.jpg",
  },
  {
    brand: "ATRONIC / SPELO",
    model: "Spelo Oxygen – Hot & Wild",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Classic casino cabinet with branded multigame presentation.",
    image: "/images/slots/atronic-spelo-oxygen-hot-wild.jpg",
  },
  {
    brand: "ATRONIC / SPELO",
    model: "Spelo Oxygen – Diversity Green",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Upright multigame cabinet with classic casino styling.",
    image: "/images/slots/atronic-spelo-oxygen-diversity-green.jpg",
  },
  {
    brand: "AMATIC",
    model: "Grand Arc",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Elegant Amatic cabinet designed for multigame casino use.",
    image: "/images/slots/amatic-grand-arc.jpg",
  },
  {
    brand: "MERKUR",
    model: "Avantgard Trio",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Premium Merkur cabinet with modern casino machine styling.",
    image: "/images/slots/merkur-avantgard-trio.jpg",
  },
  {
    brand: "MERKUR",
    model: "Merkurstar",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Recognizable Merkur cabinet for multigame operation.",
    image: "/images/slots/merkur-merkurstar.jpg",
  },
  {
    brand: "BALLY",
    model: "V22/22 Curve",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Curved Bally cabinet for premium casino floor display.",
    image: "/images/slots/bally-v2222-curve.jpg",
  },
  {
    brand: "KONAMI",
    model: "Podium",
    type: "Upright",
    category: ["Slot Machines", "Upright", "Multigame"],
    description: "Konami multigame cabinet with strong floor presence.",
    image: "/images/slots/konami-podium.jpg",
  },
  {
    brand: "APEX",
    model: "Evo 3 Slant Top",
    type: "Slant Top",
    category: ["Slot Machines", "Slant Top"],
    description: "Compact slant top gaming machine for flexible installation.",
    image: "/images/slots/apex-evo-3-slant-top.jpg",
  },
  {
    brand: "SPINTEC",
    model: "Karma 1 / 8 Player",
    type: "Electronic Roulette",
    category: ["Electronic Roulette"],
    description: "Electronic roulette solution for compact multi-player operation.",
    image: "/images/slots/spintec-karma-1-8-player.jpg",
  },
  {
    brand: "SPINTEC",
    model: "Karma 2 / 8 Player Including Topper",
    type: "Electronic Roulette",
    category: ["Electronic Roulette"],
    description: "Premium multi-player electronic roulette with topper display.",
    image: "/images/slots/spintec-karma-2-8-player-topper.jpg",
  },
];

export function matchesInventoryTypeFilter(
  item: InventorySlotMachine,
  filter: InventoryTypeFilterId,
): boolean {
  if (filter === "All") return true;
  if (filter === "Multigame") return item.category.includes("Multigame");
  if (filter === "Electronic Roulette") {
    return (
      item.type === "Electronic Roulette" ||
      item.category.includes("Electronic Roulette")
    );
  }
  return item.type === filter;
}
