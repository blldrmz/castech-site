import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://castecheq.com";
const paths = ["/", "/catalog/", "/live-games/", "/slot-machines/", "/cctv/", "/accessories/", "/about/", "/contact/", "/privacy/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${base}${p}` }));
}
