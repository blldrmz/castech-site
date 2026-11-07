import type { MetadataRoute } from "next";
import { localePath, localesFor } from "@/lib/i18n";

export const dynamic = "force-static";

const base = "https://castecheq.com";
const paths = ["/", "/catalog/", "/live-games/", "/table-signs/", "/jackpot-screens/", "/installations/", "/slot-machines/", "/accessories/", "/about/", "/contact/", "/privacy/", "/terms/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((p) => {
    const ls = localesFor(p);
    const alternates = ls.length > 1 ? { alternates: { languages: Object.fromEntries(ls.map((l) => [l, `${base}${localePath(l, p)}`])) } } : {};
    return ls.map((l) => ({ url: `${base}${localePath(l, p)}`, ...alternates }));
  });
}
