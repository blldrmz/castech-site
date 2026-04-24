/**
 * Slot catalog visuals: Wikimedia thumbnails where available; otherwise
 * ui-avatars initials. Keys match `item.brand` in inventory data exactly.
 */
export const slotCasinoFloorFallback =
  "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=85";

function uiAvatar(name: string, size: number): string {
  const q = new URLSearchParams({
    name,
    size: String(size),
    background: "065f46",
    color: "fef3c7",
    bold: "true",
    format: "png",
  });
  return `https://ui-avatars.com/api/?${q.toString()}`;
}

const wiki = {
  novomatic:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Novomatic_Logo.jpg/330px-Novomatic_Logo.jpg",
  igt: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/IGTlogo.png/330px-IGTlogo.png",
  konami:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Konami_4th_logo_2.svg/330px-Konami_4th_logo_2.svg.png",
  bally: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bally_logo.svg/330px-Bally_logo.svg.png",
} as const;

type BrandVisual =
  | { kind: "wiki"; url: string }
  | { kind: "ui"; label: string };

const SLOT_BRAND_VISUAL: Record<string, BrandVisual> = {
  EGT: { kind: "ui", label: "EGT" },
  NOVOMATIC: { kind: "wiki", url: wiki.novomatic },
  IGT: { kind: "wiki", url: wiki.igt },
  "G-TECH": { kind: "ui", label: "G-Tech" },
  ARISTOCRAT: { kind: "ui", label: "Aristocrat" },
  AINSWORTH: { kind: "ui", label: "Ainsworth" },
  "ATRONIC / SPELO": { kind: "ui", label: "Atronic" },
  AMATIC: { kind: "ui", label: "Amatic" },
  MERKUR: { kind: "ui", label: "Merkur" },
  BALLY: { kind: "wiki", url: wiki.bally },
  KONAMI: { kind: "wiki", url: wiki.konami },
  APEX: { kind: "ui", label: "Apex" },
  SPINTEC: { kind: "ui", label: "Spintec" },
};

export function slotBrandImageUrl(brand: string, size: "thumb" | "modal"): string {
  const v = SLOT_BRAND_VISUAL[brand];
  if (!v) return slotCasinoFloorFallback;
  if (v.kind === "wiki") return v.url;
  const px = size === "thumb" ? 128 : 256;
  return uiAvatar(v.label, px);
}
