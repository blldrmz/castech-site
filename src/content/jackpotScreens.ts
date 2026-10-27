export const jackpotHero = {
  eyebrow: "Own production",
  title: "LED jackpot screens made to your size.",
  lead:
    "CasTech EQ by Virexa designs, produces and delivers LED jackpot displays for casino floors. Every screen is built to the dimensions you need and works with jackpot servers of any brand and model.",
} as const;

export const jackpotHighlights = [
  {
    title: "Made to your dimensions",
    text: "Tell us the width and height you need. Each screen is produced to your requested size, not cut from a fixed catalogue.",
  },
  {
    title: "Any jackpot server",
    text: "Our screens are compatible with jackpot servers of any brand and model, so you keep the system you already run.",
  },
  {
    title: "Produced and delivered by us",
    text: "This is our own manufacturing. We build the screen, ship it and support the setup on your floor.",
  },
] as const;

export const jackpotSizes = {
  title: "Custom sizes, or familiar formats.",
  paragraphs: [
    "Send us the exact dimensions you want, or ask for a size similar to the jackpot displays used with EGT, Apex or Novomatic cabinets. We match the footprint of your bank, wall or column.",
    "Our screens are our own production and are not original manufacturer parts. Brand names are used only to describe the size you are looking for.",
  ],
} as const;

export const jackpotFormats = [
  { title: "Overhead bank header", text: "Wide display above a connected row of slot machines." },
  { title: "Multi-level and multi-sided", text: "Stacked jackpot levels, including displays visible from several sides." },
  { title: "Entrance and wall signs", text: "Jackpot values shown at the casino entrance or on a feature wall." },
  { title: "Slim columns and dividers", text: "Narrow illuminated LED columns that fit between neighbouring machines." },
] as const;

export const jackpotBrief = [
  "The size you need, or the cabinet model whose display you want to match",
  "Where it will be mounted: above a bank, on a wall, or between machines",
  "Your jackpot server brand and model",
  "Delivery country and target date",
] as const;

export const jackpotGallery = [
  { src: "/images/jackpot/overhead-bank.webp", alt: "LED jackpot display above a bank of slot machines on a casino floor", caption: "Overhead jackpot display above a slot bank" },
  { src: "/images/jackpot/wide-header.webp", alt: "Wide LED jackpot header installed over slot machines", caption: "Wide overhead jackpot display" },
  { src: "/images/jackpot/entrance-sign.webp", alt: "LED jackpot values displayed at a casino entrance", caption: "Entrance jackpot screen" },
  { src: "/images/jackpot/multi-level.webp", alt: "Multi-level LED jackpot display over slot machines", caption: "Multi-level jackpot display" },
  { src: "/images/jackpot/overhead-three-cabinet.webp", alt: "Three-cabinet overhead LED jackpot display", caption: "Three-cabinet overhead display" },
  { src: "/images/jackpot/led-divider.webp", alt: "Integrated LED display between neighbouring slot machines", caption: "LED divider between machines" },
  { src: "/images/jackpot/information-column.webp", alt: "Vertical LED information column separating gaming rows", caption: "Central LED information column" },
  { src: "/images/jackpot/slim-column.webp", alt: "Slim illuminated LED column between two slot machines", caption: "Slim LED column" },
] as const;
