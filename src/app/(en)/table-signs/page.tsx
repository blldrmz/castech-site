import { catalogueCategories } from "@/content/catalogueData";
import { pageMeta } from "@/lib/seo";
import { TableSignsView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Casino Table Signs | Double-Sided Table Limit Signs",
  "Double-sided casino table limit signs designed and assembled by CasTech EQ, with optional video or live video. 11 to 21 inch screens or any size on request.",
  "/table-signs/",
);

const tableSigns = catalogueCategories.find((c) => c.slug === "table-signs")!;

export default function TableSignsPage() {
  return (
    <TableSignsView
      c={{
        hero: {
          eyebrow: "Table signs",
          title: "Table signs for every live gaming table.",
          lead: "Double-sided table limit signs designed and assembled by CasTech EQ. Screen sizes from 11 to 21 inches, or any other size on request, on stands designed to fit your table layout.",
        },
        galleryEyebrow: "Our table signs",
        galleryTitle: "Table limit signs for live gaming tables.",
        gallery: tableSigns.items.map((i) => ({
          src: i.image,
          alt: `${i.title.replace(/—/g, "-")}: casino table limit sign for live gaming tables`,
          caption: i.title,
        })),
        briefEyebrow: "To quote quickly",
        briefTitle: "What to send us.",
        brief: [
          "Which games: roulette, blackjack, poker, baccarat or others",
          "Number of tables, preferred screen size and how each sign will be mounted",
          "What to show: table limits only, or limits with video or live video",
          "Delivery country and target date",
        ],
        info: {
          "eyebrow": "Table limit signs",
          "title": "Built for the live gaming floor.",
          "paragraphs": [
            "A clear table sign answers the player's first question before they sit down: what are the limits here? Our double-sided table limit signs show the minimum and maximum bets for each game in large, readable type, so players choose the right table quickly and dealers spend less time explaining limits.",
            "Every sign is designed and assembled by CasTech EQ. We select the screen, build the stand and design the layout to match your tables and your casino's look."
          ],
          "lists": [
            {
              "title": "Screen sizes and mounting",
              "items": [
                "Double-sided, readable from both sides of the table",
                "13″ and 21″ are the most common sizes; any size from 11″ to 21″, or a custom size, on request",
                "Stands designed for your table layout"
              ]
            },
            {
              "title": "What the screens can show",
              "items": [
                "Table minimum and maximum limits, per game",
                "Video or live video, optional, alongside the limits"
              ]
            }
          ]
        },
        faq: {
          "title": "Table sign questions.",
          "items": [
            {
              "q": "Who changes the limits?",
              "a": "The pit boss updates the limits whenever a table changes game or limit level."
            },
            {
              "q": "Do you ship outside Europe?",
              "a": "Yes. We deliver worldwide from our offices in Prague and Batumi."
            },
            {
              "q": "How do we get a quote?",
              "a": "Send us your games, the number of tables, the screen size you prefer and how each sign will be mounted. We will come back with a configuration and offer."
            }
          ]
        },
        quote: "Request a table sign quote",
        pitPre: "Equipping a full pit? See our",
        pitLink: "casino gaming tables and live game equipment",
        cta: {
          title: "Need table signs for your casino?",
          text: "Send us your games, number of tables and what each sign should show. We will come back with a configuration and offer.",
        },
      }}
    />
  );
}
