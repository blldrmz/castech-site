import type { InventorySlotMachine } from "@/content/inventory";

/** Deterministic seed from brand + model for stable Picsum images. */
function catalogSeed(brand: string, model: string): string {
  const key = `${brand}::${model}`;
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return `ct${Math.abs(h).toString(16)}`;
}

/** Small catalog thumb and modal use same seed so the image matches. */
export function slotCatalogImageUrl(
  item: InventorySlotMachine,
  size: "thumb" | "modal",
): string {
  const seed = catalogSeed(item.brand, item.model);
  const [w, h] = size === "thumb" ? [200, 130] : [256, 256];
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
