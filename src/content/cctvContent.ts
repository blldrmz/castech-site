import { media } from "./mediaUrls";

export type CctvShowcaseBrand = {
  id: string;
  name: string;
  tagline: string;
  points: string[];
  image: string;
};

export const cctvPageHero = {
  eyebrow: "Surveillance & VMS",
  title: "Casino-grade CCTV you can spec with confidence",
  lead:
    "Gaming environments demand low-light performance, long retention, and integration with access control. Below are four lines operators often standardize on—each illustrated with a representative scene. We also support Axis, Hanwha Vision (Wisenet), Dahua and more on request.",
} as const;

/** Featured manufacturers with large visuals (per your brief). */
export const cctvShowcaseBrands: CctvShowcaseBrand[] = [
  {
    id: "pelco",
    name: "Pelco",
    tagline: "Motorola / Pelco by Motorola — enterprise video",
    image: media.cctvPelco,
    points: [
      "Enterprise cameras and VMS that scale from single-pit to multi-property visibility.",
      "Strong fit when you need manufacturer-backed service and deep integration options.",
    ],
  },
  {
    id: "dallmeier",
    name: "Dallmeier",
    tagline: "Mission-critical German engineering",
    image: media.cctvDallmeier,
    points: [
      "Panoramic, PTZ, and 4K lines suited to wide gaming floors and forensic review.",
      "Often chosen where retention and search across years of footage are strict.",
    ],
  },
  {
    id: "hikvision",
    name: "Hikvision",
    tagline: "Broad portfolio, deep value",
    image: media.cctvHikvision,
    points: [
      "Fixed, dome, and bullet series with strong low-light and IR for ceiling and soffit work.",
      "Flexible for phased rollouts—slot aisles first, pit and cage next.",
    ],
  },
  {
    id: "panasonic",
    name: "Panasonic",
    tagline: "i-PRO & legacy Panasonic surveillance lines",
    image: media.cctvPanasonic,
    points: [
      "Robust build quality for 24/7 use in mixed-light and smoke-adjacent areas.",
      "Natural color and reliable PTZ control where pit and cage need clarity.",
    ],
  },
];

export const cctvOtherNotes = {
  title: "Also in scope",
  bullets: [
    "Axis Communications, Hanwha Vision (Wisenet), Dahua and other ONVIF-friendly lines",
    "NVR, SAN and retention sizing for regulatory minimums in your licensing jurisdiction",
    "Encoder bridges for older analog or hybrid feeds you are not yet ready to retire",
    "Pit, cage, count-room and back-of-house placement coordinated with your floor plan",
  ],
} as const;
