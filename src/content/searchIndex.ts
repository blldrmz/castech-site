import { accessoryGroups } from "./accessoriesContent";
import { catalogueCategories } from "./catalogueData";
import { inventorySlotMachines } from "./inventory";
import { liveGameGroups } from "./liveGames";

export type SearchEntry = {
  title: string;
  detail: string;
  type: string;
  href: string;
};

const pages: SearchEntry[] = [
  {
    title: "LED jackpot screens",
    detail: "Own production, made to your size, compatible with jackpot servers of any brand and model, overhead, entrance, column",
    type: "Page",
    href: "/jackpot-screens/",
  },
  {
    title: "Installations",
    detail: "Jackpot cube displays, wide bank screens, wall and entrance screens, slim LED pillars, wireless charging for gaming tables, site videos",
    type: "Page",
    href: "/installations/",
  },
  { title: "Wireless table charger", detail: "Wireless phone charging built into poker, card and roulette table rails", type: "Page", href: "/installations/#wireless-charging" },
  { title: "Used slot machines", detail: "Pre-owned slot machines, upright, slant top, multigame, electronic roulette", type: "Page", href: "/slot-machines/" },
  { title: "Live table equipment", detail: "Roulette, blackjack, baccarat, poker, craps, shufflers, chips, seating", type: "Page", href: "/live-games/" },
  { title: "Casino floor accessories", detail: "TITO, service carts, key control, signage, operations accessories", type: "Page", href: "/accessories/" },
  { title: "Equipment catalogue", detail: "All product categories", type: "Page", href: "/catalog/" },
  { title: "About CasTech EQ", detail: "Virexa AI Technologies, used and refurbished equipment, direct manufacturer sourcing", type: "Page", href: "/about/" },
  { title: "Contact and request a quote", detail: "Prague, Batumi, inquiry form, phone, email", type: "Page", href: "/contact/" },
  { title: "Privacy Policy", detail: "Personal data, GDPR", type: "Page", href: "/privacy/" },
];

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...inventorySlotMachines.map((m) => ({
    title: `${m.brand} ${m.model}`,
    detail: `${m.type} ${m.gamePack ?? ""} ${m.billValidator ?? ""} ${m.note ?? ""}`,
    type: m.condition === "New" ? "Slot machine (new)" : "Slot machine (used)",
    href: `/slot-machines/`,
  })),
  ...liveGameGroups.flatMap((g) =>
    g.items.map((it) => ({
      title: it.title,
      detail: `${g.title} ${it.description}`,
      type: "Live table equipment",
      href: `/live-games/#${g.id}`,
    })),
  ),
  ...accessoryGroups.flatMap((g) =>
    g.items.map((it) => ({
      title: it.title,
      detail: `${g.title} ${it.description}`,
      type: "Accessories",
      href: `/accessories/#${g.id}`,
    })),
  ),
  ...catalogueCategories.flatMap((c) =>
    c.items.map(({ title: name }) => ({
      title: name,
      detail: c.title,
      type: `Catalogue · ${c.title}`,
      href: `/catalog/?category=${c.slug}&q=${encodeURIComponent(name)}`,
    })),
  ),
];

export function searchSite(query: string, limit = 60): SearchEntry[] {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  const scored: { e: SearchEntry; score: number }[] = [];
  const seen = new Set<string>();
  for (const e of searchIndex) {
    const title = e.title.toLowerCase();
    const hay = `${title} ${e.detail.toLowerCase()} ${e.type.toLowerCase()}`;
    if (!tokens.every((t) => hay.includes(t))) continue;
    const key = `${e.title}|${e.href}`;
    if (seen.has(key)) continue;
    seen.add(key);
    let score = 0;
    for (const t of tokens) score += title.includes(t) ? 3 : 1;
    if (e.type === "Page") score += 2;
    scored.push({ e, score });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((x) => x.e);
}
