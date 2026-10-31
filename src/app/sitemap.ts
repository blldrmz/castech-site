import type { MetadataRoute } from "next";
import { LOCALES, LOCALIZED_PATHS, PREFIXED, localePath } from "@/lib/i18n";

export const dynamic = "force-static";

const base = "https://castecheq.com";
const paths = ["/", "/catalog/", "/live-games/", "/table-signs/", "/jackpot-screens/", "/installations/", "/slot-machines/", "/accessories/", "/about/", "/contact/", "/privacy/", "/terms/"];

const alternates = (p: string) => ({
  languages: Object.fromEntries(LOCALES.map((l) => [l, `${base}${localePath(l, p)}`])),
});

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = LOCALIZED_PATHS as readonly string[];
  const en = paths.map((p) => ({ url: `${base}${p}`, ...(localized.includes(p) ? { alternates: alternates(p) } : {}) }));
  const others = PREFIXED.flatMap((l) => localized.map((p) => ({ url: `${base}${localePath(l, p)}`, alternates: alternates(p) })));
  return [...en, ...others];
}
