export type MachineType = "Upright" | "Slant Top" | "Dual Screen" | "VIP Lounge" | "Electronic Roulette";

export type InventorySlotMachine = {
  brand: string;
  model: string;
  type: MachineType;
  /** null = photo on request */
  image: string | null;
  gamePack?: string;
  billValidator?: string;
  year?: string;
  printer?: string;
  condition: "Pre-owned" | "New";
  note?: string;
};

const S = "/images/catalog/machines/stock/";
const C = "/images/catalog/machines/";

export const inventoryBrandTabs = [
  { id: "all", label: "All", brandKey: null as string | null },
  { id: "egt", label: "EGT", brandKey: "EGT" },
  { id: "novomatic", label: "Novomatic", brandKey: "Novomatic" },
  { id: "igt", label: "IGT", brandKey: "IGT" },
  { id: "aristocrat", label: "Aristocrat", brandKey: "Aristocrat" },
  { id: "ainsworth", label: "Ainsworth", brandKey: "Ainsworth" },
  { id: "merkur", label: "Merkur", brandKey: "Merkur" },
  { id: "atronic-spelo", label: "Atronic / Spelo", brandKey: "Atronic / Spelo" },
  { id: "amatic", label: "Amatic", brandKey: "Amatic" },
  { id: "g-tech", label: "G-Tech", brandKey: "G-Tech" },
  { id: "bally", label: "Bally", brandKey: "Bally" },
  { id: "konami", label: "Konami", brandKey: "Konami" },
  { id: "apex", label: "Apex", brandKey: "Apex" },
  { id: "spintec", label: "Spintec", brandKey: "Spintec" },
] as const;

export type InventoryBrandTabId = (typeof inventoryBrandTabs)[number]["id"];

export const inventoryTypeFilters = ["All", "Upright", "Slant Top", "Dual Screen", "VIP Lounge", "Electronic Roulette"] as const;
export type InventoryTypeFilterId = (typeof inventoryTypeFilters)[number];

export const slotMachinesPageHero = {
  eyebrow: "Used slot machines & electronic gaming",
  title: "Pre-owned slot machines and e-gaming",
  lead:
    "Slot machines and electronic roulette from EGT, Novomatic, IGT, Aristocrat, Ainsworth, Merkur and more. Game packs, bill validators and years are listed per model; condition, availability and price are confirmed on request.",
} as const;

const OR = "On request";

export const inventorySlotMachines: InventorySlotMachine[] = [
  // EGT
  { brand: "EGT", model: "G 32-32 VIP", type: "VIP Lounge", image: C + "01-egt-g-32-32-vip.webp", condition: "Pre-owned", note: "VIP lounge cabinet with integrated seat." },
  { brand: "EGT", model: "G 27-32 ST", type: "Upright", image: C + "02-egt-g-27-32-st.webp", condition: "Pre-owned" },
  { brand: "EGT", model: "P 27-32H ST", type: "Upright", image: C + "03-egt-p-27-32h-st.webp", condition: "Pre-owned" },
  { brand: "EGT", model: "P 27-27 ST", type: "Upright", image: C + "04-egt-p-27-27-st.webp", condition: "Pre-owned" },
  { brand: "EGT", model: "Vega Vision Premier Slant Top", type: "Slant Top", image: S + "egt-vega-vision-premier-slant-top.webp", gamePack: "Premier", billValidator: "JCM UBA", year: "2015–2017", printer: OR, condition: "Pre-owned" },
  { brand: "EGT", model: "VegaVision+ 22\" Slant Top", type: "Slant Top", image: null, gamePack: "Multigame", billValidator: "JCM UBA", year: "2012–2014", printer: OR, condition: "Pre-owned" },
  { brand: "EGT", model: "VegaVision+ 22\" Upright", type: "Upright", image: S + "egt-vegavision-22-upright.webp", gamePack: "Multigame", billValidator: "JCM UBA", year: "2012–2014", printer: OR, condition: "Pre-owned" },
  { brand: "EGT", model: "P24/24", type: "Dual Screen", image: S + "egt-p24-24.webp", gamePack: "Choice of games", billValidator: "JCM UBA", year: "2015", printer: OR, condition: "Pre-owned" },
  // Novomatic
  { brand: "Novomatic", model: "FV 880 SL", type: "Slant Top", image: S + "novomatic-fv880-sl.webp", gamePack: "Premium S games", billValidator: "JCM UBA", year: "2015–2017", printer: OR, condition: "Pre-owned" },
  { brand: "Novomatic", model: "FV 624A (Novostar)", type: "Upright", image: C + "06-novomatic-fv624.webp", gamePack: "Choice of multigames", billValidator: "JCM UBA", year: "2016–2017", printer: OR, condition: "Pre-owned" },
  { brand: "Novomatic", model: "FV 834", type: "Upright", image: C + "05-novomatic-fv834.webp", gamePack: "Impera 6 & 7", billValidator: "JCM UBA", year: "2018–2020", printer: OR, condition: "Pre-owned" },
  { brand: "Novomatic", model: "FV 640", type: "Upright", image: S + "novomatic-fv640.webp", gamePack: "Impera 6 & 7", billValidator: "JCM UBA", year: "2018–2019", printer: OR, condition: "Pre-owned" },
  { brand: "Novomatic", model: "FV 610", type: "Upright", image: S + "novomatic-fv610.webp", gamePack: "Premium games", billValidator: "JCM UBA", year: "2015–2016", printer: OR, condition: "Pre-owned" },
  { brand: "Novomatic", model: "Panthera 2 27 (FV640B) Curve", type: "Upright", image: S + "novomatic-panthera-2-fv640b.webp", gamePack: "Superia Cash Connection 2, linked multigame mix", billValidator: "JCM UBA", printer: "Included", condition: "New" },
  { brand: "Novomatic", model: "VIP Lounge", type: "VIP Lounge", image: C + "07-novomatic-vip-lounge.webp", condition: "Pre-owned", note: "VIP lounge cabinet with integrated seat." },
  { brand: "Novomatic", model: "Power Stars", type: "Upright", image: C + "12-novomatic-power-stars-slot-machine.webp", condition: "Pre-owned" },
  // IGT
  { brand: "IGT", model: "Trimline Dual", type: "Dual Screen", image: S + "igt-trimline-dual.webp", gamePack: "Choice of games", billValidator: "JCM UBA", year: "2006–2008", printer: OR, condition: "Pre-owned" },
  { brand: "IGT", model: "G-23 Slant", type: "Slant Top", image: S + "igt-g23-slant.webp", gamePack: "Multigame and single game", billValidator: "JCM UBA", year: "2013–2014", printer: OR, condition: "Pre-owned" },
  { brand: "IGT", model: "G-23", type: "Upright", image: S + "igt-g23.webp", gamePack: "Choice of game", billValidator: "MEI", year: "2011–2014", printer: OR, condition: "Pre-owned" },
  { brand: "IGT", model: "Axxis 23/23", type: "Dual Screen", image: S + "igt-axxis-23-23.webp", gamePack: "New U-Switch multigame", billValidator: "MEI", year: "2017", printer: OR, condition: "Pre-owned" },
  { brand: "IGT", model: "Crystal Dual LCD", type: "Dual Screen", image: null, gamePack: "New U-Switch multigame", billValidator: "MEI", year: "2017", printer: OR, condition: "Pre-owned" },
  { brand: "IGT", model: "Crystal Dual MLD", type: "Dual Screen", image: S + "igt-crystal-dual-mld.webp", gamePack: "New U-Switch multigame", billValidator: "MEI", year: "2017", printer: OR, condition: "Pre-owned" },
  // Aristocrat
  { brand: "Aristocrat", model: "Viridian Wide Screen", type: "Upright", image: S + "aristocrat-viridian-ws.webp", gamePack: "Choice of games", billValidator: "MEI", year: "2011–2015", printer: OR, condition: "Pre-owned" },
  { brand: "Aristocrat", model: "Helix Upright", type: "Upright", image: C + "09-aristocrat-helix-upright-slot-machine.webp", gamePack: "Choice of games", billValidator: "JCM UBA", year: "2016–2019", printer: OR, condition: "Pre-owned" },
  { brand: "Aristocrat", model: "MegaPlay", type: "Upright", image: C + "10-aristocrat-megaplay-slot-machine.webp", gamePack: "Choice of games", billValidator: "MEI", year: "2020", printer: OR, condition: "Pre-owned" },
  // Ainsworth
  { brand: "Ainsworth", model: "A560 Slant", type: "Slant Top", image: S + "ainsworth-a560-slant.webp", gamePack: "Multi Win games", billValidator: "JCM UBA", year: "2014", printer: OR, condition: "Pre-owned" },
  { brand: "Ainsworth", model: "A560 Upright", type: "Upright", image: S + "ainsworth-a560-upright.webp", gamePack: "Multi Win games", billValidator: "JCM UBA", year: "2015", printer: OR, condition: "Pre-owned" },
  { brand: "Ainsworth", model: "A600", type: "Upright", image: S + "ainsworth-a600.webp", gamePack: "Any game choice, including jackpot", billValidator: "JCM UBA", year: "2019–2020", printer: OR, condition: "Pre-owned" },
  // Atronic / Spelo
  { brand: "Atronic / Spelo", model: "Oxygen – Hot & Wild", type: "Upright", image: S + "spelo-oxygen.webp", gamePack: "Hot & Wild progressive, incl. sign and controller", billValidator: "JCM UBA", year: "2011–2014", printer: OR, condition: "Pre-owned" },
  { brand: "Atronic / Spelo", model: "Oxygen – Diversity Gambling Green", type: "Upright", image: S + "spelo-oxygen.webp", gamePack: "Diversity Gambling Green", billValidator: "JCM UBA", year: "2011–2014", printer: OR, condition: "Pre-owned" },
  // Amatic
  { brand: "Amatic", model: "Grand Arc", type: "Upright", image: C + "08-amatic-multi-game-slot-machine.webp", gamePack: "Multigame", billValidator: "JCM UBA", year: "2014–2017", printer: OR, condition: "Pre-owned" },
  // Merkur
  { brand: "Merkur", model: "Avantgard Trio", type: "Upright", image: S + "merkur-avantgard-trio.webp", gamePack: "Choice of games, jackpot option", billValidator: "JCM iVIZION", year: "2018–2020", printer: OR, condition: "Pre-owned" },
  { brand: "Merkur", model: "Merkurstar", type: "Upright", image: S + "merkur-merkurstar.webp", gamePack: "130-game multigame", billValidator: "JCM UBA", year: "2017–2019", printer: OR, condition: "Pre-owned" },
  // Others
  { brand: "G-Tech", model: "Axxis 3D", type: "Upright", image: null, gamePack: "Spynx 3D", billValidator: "JCM UBA", year: "2015", printer: OR, condition: "Pre-owned" },
  { brand: "Bally", model: "V22/22 Curve", type: "Dual Screen", image: S + "bally-v22-22-curve.webp", gamePack: "130-game multigame", billValidator: "JCM UBA", year: "2011–2014", printer: OR, condition: "Pre-owned" },
  { brand: "Konami", model: "Podium", type: "Upright", image: S + "konami-podium.webp", gamePack: "Selexion multigame", billValidator: "MEI", year: "2011–2014", printer: OR, condition: "Pre-owned" },
  { brand: "Apex", model: "Evo 3 Slant Top", type: "Slant Top", image: S + "apex-evo-3-slant-top.webp", gamePack: "Choice of game", billValidator: "UBA", year: "2011–2014", printer: OR, condition: "Pre-owned" },
  { brand: "Spintec", model: "Karma 1, 8 players", type: "Electronic Roulette", image: null, gamePack: "Electronic roulette", billValidator: "JCM", year: "2015", printer: OR, condition: "Pre-owned" },
  { brand: "Spintec", model: "Karma 2, 8 players with topper", type: "Electronic Roulette", image: C + "11-hotspot-roulette-electronic-gaming-station.webp", gamePack: "Electronic roulette", billValidator: "JCM", year: "2020", printer: OR, condition: "Pre-owned" },
];

export function matchesInventoryTypeFilter(item: InventorySlotMachine, filter: InventoryTypeFilterId): boolean {
  return filter === "All" || item.type === filter;
}
