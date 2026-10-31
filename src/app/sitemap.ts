import type { MetadataRoute } from "next";
import { RU_PATHS } from "@/lib/i18n";

export const dynamic = "force-static";

const base = "https://castecheq.com";
const paths = ["/", "/catalog/", "/live-games/", "/table-signs/", "/jackpot-screens/", "/installations/", "/slot-machines/", "/accessories/", "/about/", "/contact/", "/privacy/", "/terms/"];

const ru = (p: string) => (p === "/" ? "/ru/" : `/ru${p}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const en = paths.map((p) => {
    const hasRu = (RU_PATHS as readonly string[]).includes(p);
    return {
      url: `${base}${p}`,
      ...(hasRu ? { alternates: { languages: { en: `${base}${p}`, ru: `${base}${ru(p)}` } } } : {}),
    };
  });
  const russian = RU_PATHS.map((p) => ({
    url: `${base}${ru(p)}`,
    alternates: { languages: { en: `${base}${p}`, ru: `${base}${ru(p)}` } },
  }));
  return [...en, ...russian];
}
