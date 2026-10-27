import type { InventorySlotMachine } from "@/content/inventory";
import { slotBrandImageUrl, slotCasinoFloorFallback } from "@/content/slotBrandLogos";

/**
 * Image for a catalog row: a neutral local brand-name badge (no third-party logos).
 */
export function slotCatalogImageUrl(
  item: InventorySlotMachine,
  size: "thumb" | "modal",
): string {
  return slotBrandImageUrl(item.brand, size);
}

export { slotCasinoFloorFallback };
