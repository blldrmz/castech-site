export type InstallationMedia =
  | { kind: "image"; src: string; alt: string; caption: string; w: number; h: number; feature?: boolean }
  | { kind: "video"; src: string; poster: string; caption: string; w: number; h: number; feature?: boolean; contain?: boolean };

export type InstallationStory = {
  id: string;
  tag: string;
  title: string;
  lead: string;
  points: readonly { label: string; text: string }[];
  media: readonly InstallationMedia[];
  cta?: { href: string; label: string };
};

const img = (name: string, w: number, h: number, caption: string, alt = caption, feature = false): InstallationMedia => ({
  kind: "image",
  src: `/images/installations/${name}.webp`,
  alt,
  caption,
  w,
  h,
  feature,
});

const vid = (name: string, w: number, h: number, caption: string, feature = false, contain = false): InstallationMedia => ({
  kind: "video",
  contain,
  src: `/video/installations/${name}.mp4`,
  poster: `/video/installations/${name}.webp`,
  caption,
  w,
  h,
  feature,
});

export const installationsHero = {
  eyebrow: "Installations",
  title: "Our screens on real casino floors.",
  lead:
    "Jackpot displays and table equipment we produced and installed, shown with our own photographs and site videos. Each screen is connected to the venue's existing jackpot system and shows its live values.",
} as const;

export const installationsHeroSlides = [
  { src: "/images/installations/bell-cube-01.webp", position: "center" },
  { src: "/images/installations/wide-04.webp", position: "center" },
  { src: "/images/installations/wide-03.webp", position: "center" },
  { src: "/images/installations/bell-cube-02.webp", position: "center" },
];

export const installationStories: readonly InstallationStory[] = [
  {
    id: "cube-displays",
    tag: "Four-sided cube displays",
    title: "Jackpot cubes above the slot bank.",
    lead:
      "A four-sided LED cube mounted on top of a slot bank shows the linked jackpot on every side, so the values are visible from anywhere on the floor.",
    points: [
      { label: "Format", text: "Four-sided cube built to the width of the bank, on top of the machines." },
      { label: "Connection", text: "Connected to the venue's jackpot server; the values on the cube update with the machines." },
      { label: "Result", text: "The jackpot reads from every aisle, not only from the seats in front of the bank." },
    ],
    media: [
      img("bell-cube-01", 1280, 720, "Cube display above a slot bank with live Grand and Major values", undefined, true),
      vid("bell-cube", 464, 832, "Cube display, live values on all sides"),
      vid("bell-cube-floor", 576, 1024, "Walking around the cube on the floor"),
      img("bell-cube-02", 1280, 720, "Cube display seen across the gaming floor"),
      img("bell-cube-03", 720, 1280, "Cube display from the end of the bank"),
      img("bell-cube-04", 720, 1280, "Cube display above a three-machine bank"),
      img("bell-cube-05", 802, 1280, "Cube display, close view"),
    ],
  },
  {
    id: "wide-displays",
    tag: "Wide bank displays",
    title: "One wide screen across the whole bank.",
    lead:
      "A single wide display mounted above a row of machines, sized to the full length of the bank and running the content of the venue's jackpot system.",
    points: [
      { label: "Format", text: "Made to the exact length of the bank, from three to six or more machines." },
      { label: "Content", text: "Jackpot values, the jackpot system's own animations or the venue's promotions." },
      { label: "Result", text: "A clean, continuous line above the bank instead of separate toppers." },
    ],
    media: [
      img("wide-04", 1280, 720, "Wide display above a slot bank with progressive jackpot values", undefined, true),
      vid("double-link", 576, 1024, "Wide display running jackpot animations"),
      img("wide-03", 1280, 720, "Grand and Major values above a six-machine bank"),
      img("wide-05", 634, 1280, "Wide display in a premium slot area"),
      img("wide-01", 1280, 720, "Wide display with the jackpot system's animated content"),
      img("wide-02", 1280, 720, "Wide display between jackpot cycles"),
    ],
  },
  {
    id: "wall-and-entrance",
    tag: "Wall, entrance and topper screens",
    title: "Screens for walls, entrances and corners.",
    lead:
      "Where there is no room above the machines, the display goes on the wall, over the entrance or in the corner behind the bank, in the size the space allows.",
    points: [
      { label: "Format", text: "Wall-mounted, entrance and topper screens built to the space available." },
      { label: "Branding", text: "The same screen can show the venue's own brand between jackpot updates." },
      { label: "Result", text: "Jackpot values visible from the door and from across the room." },
    ],
    media: [
      img("wall-01", 576, 678, "Wall-mounted jackpot screen in a corner above the bank", undefined, true),
      img("entrance-01", 720, 1280, "Three-level jackpot screen above a casino entrance"),
      img("top-01", 720, 1280, "Branded screen above a slot bank"),
      img("cube-01", 720, 704, "Multi-level jackpot display above a bank"),
      vid("cube-jackpot", 576, 1024, "Multi-level display with animated content"),
      img("wall-02", 1280, 324, "Wall screen with Grand and Major values"),
    ],
  },
  {
    id: "any-content",
    tag: "Jackpot or any content",
    title: "Jackpots, roulette results or a live match.",
    lead:
      "The screens are not limited to jackpot values. Connected to a roulette system they show results and statistics; in a lounge they can show a live sports broadcast.",
    points: [
      { label: "Roulette", text: "Result and statistics display next to an electronic roulette with its own jackpot." },
      { label: "Lounge", text: "A large screen above a slot lounge showing a live sports broadcast." },
      { label: "Your choice", text: "Content is set by the venue and can be changed at any time." },
    ],
    media: [
      img("lounge-01", 720, 537, "Large screen in a slot lounge showing a live sports broadcast", undefined, true),
      img("roulette-01", 999, 720, "Roulette results and jackpot display on the gaming floor"),
    ],
  },
  {
    id: "slim-pillars",
    tag: "Slim LED pillars",
    title: "Slim pillars, tested in our workshop.",
    lead:
      "Narrow LED pillars that fit between cabinets. Each one is run with the venue's content in our workshop before it is shipped.",
    points: [
      { label: "Format", text: "Slim vertical displays sized to the gap between cabinets." },
      { label: "Testing", text: "Every pillar is powered and checked with real content before delivery." },
    ],
    media: [vid("pillar-test", 576, 1024, "Slim pillar displays during the workshop test", true)],
  },
  {
    id: "wireless-charging",
    tag: "New · Table equipment",
    title: "Wireless charging built into the gaming table.",
    lead:
      "Custom wireless charging pads fitted into the rail of poker, card and roulette tables, so players can charge their phones without cables on the layout.",
    points: [
      { label: "Fitting", text: "The charger is built into the table rail and marked on the cloth or rail surface." },
      { label: "Where", text: "Roulette, card and poker tables, slot machines and electronic table games." },
      { label: "Result", text: "Players charge their phones at the table, with no cables across the layout." },
    ],
    media: [
      vid("charger-promo", 720, 402, "CasTech custom wireless charging for gaming equipment", true, true),
      vid("charger-table-1", 576, 1024, "Phone charging on a poker table rail"),
      vid("charger-table-2", 576, 1024, "Wireless charging point on a card table"),
      img("charger-01", 720, 1280, "Wireless charging mark on a table layout"),
    ],
    cta: { href: "/contact?item=Wireless%20table%20charger", label: "Ask about wireless table charging" },
  },
];
