/**
 * Slot catalog visuals: neutral local text badges (SVG data URIs).
 * No third-party logos and no external requests. Keys match `item.brand`
 * in inventory data exactly.
 */
export const slotCasinoFloorFallback =
  "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=85";

const SLOT_BRAND_LABEL: Record<string, string> = {
  EGT: "EGT",
  NOVOMATIC: "Novomatic",
  IGT: "IGT",
  "G-TECH": "G-Tech",
  ARISTOCRAT: "Aristocrat",
  AINSWORTH: "Ainsworth",
  "ATRONIC / SPELO": "Atronic",
  AMATIC: "Amatic",
  MERKUR: "Merkur",
  BALLY: "Bally",
  KONAMI: "Konami",
  APEX: "Apex",
  SPINTEC: "Spintec",
};

function badge(label: string): string {
  const fontSize = label.length <= 4 ? 64 : label.length <= 7 ? 46 : 36;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">` +
    `<rect width="256" height="256" rx="28" fill="#0f1b2a"/>` +
    `<rect x="10" y="10" width="236" height="236" rx="22" fill="none" stroke="#e3bc7b" stroke-opacity=".35"/>` +
    `<text x="128" y="128" text-anchor="middle" dominant-baseline="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="${fontSize}" fill="#e3bc7b">${label}</text>` +
    `</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function slotBrandImageUrl(brand: string, _size: "thumb" | "modal"): string {
  const label = SLOT_BRAND_LABEL[brand];
  if (!label) return slotCasinoFloorFallback;
  return badge(label);
}
