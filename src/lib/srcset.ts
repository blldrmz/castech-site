import variants from "@/content/imageVariants.json";

const table = variants as Record<string, number[]>;

/** Returns a srcSet for a photo in /public when smaller copies exist (see scripts/make-image-variants.mjs). */
export function srcSetFor(src?: string | null): string | undefined {
  if (!src) return undefined;
  const widths = table[src];
  if (!widths) return undefined;
  const full = widths[widths.length - 1];
  return widths
    .slice(0, -1)
    .map((w) => `${src.replace(/\.webp$/i, `.w${w}.webp`)} ${w}w`)
    .concat(`${src} ${full}w`)
    .join(", ");
}
