/**
 * Top navigation — matches main product areas + contact.
 * Logo still links to home.
 */
export const mainNav = [
  { href: "/live-games", label: "Live Game" },
  { href: "/slot-machines", label: "Slot Machines" },
  { href: "/cctv", label: "CCTV" },
  { href: "/accessories", label: "Accessories" },
  { href: "/contact", label: "Contact" },
] as const;

export type MainNavItem = (typeof mainNav)[number];
