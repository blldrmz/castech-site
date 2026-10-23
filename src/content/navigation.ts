export const mainNav = [
  { href: "/catalog", label: "Catalog" },
  { href: "/live-games", label: "Live Games" },
  { href: "/slot-machines", label: "Slot Machines" },
  { href: "/cctv", label: "CCTV" },
  { href: "/accessories", label: "Accessories" },
  { href: "/contact", label: "Contact" },
] as const;
export type MainNavItem = (typeof mainNav)[number];
