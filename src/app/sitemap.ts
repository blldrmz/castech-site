import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://castecheq.com";
const paths = ["/", "/catalog/", "/live-games/", "/jackpot-screens/", "/slot-machines/", "/accessories/", "/about/", "/contact/", "/privacy/", "/terms/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${base}${p}` }));
}
