import type { InventorySlotMachine } from "@/content/inventory";
import { slotBrandImageUrl, slotCasinoFloorFallback } from "@/content/slotBrandLogos";

/**
 * Image for a catalog row: always the manufacturer visual (logo or initials).
 * Same URL for thumb and lightbox unless ui-avatars size differs (handled in slotBrandImageUrl).
 */
export function slotCatalogImageUrl(
  item: InventorySlotMachine,
  size: "thumb" | "modal",
): string {
  return slotBrandImageUrl(item.brand, size);
}

export { slotCasinoFloorFallback };
