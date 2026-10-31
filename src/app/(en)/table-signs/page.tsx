import { catalogueCategories } from "@/content/catalogueData";
import { pageMeta } from "@/lib/seo";
import { TableSignsView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Casino Table Signs | Table Limit Displays & Roulette Result Displays",
  "Casino table signs designed and assembled by CasTech EQ: table limit displays and roulette result displays, 11 to 21 inch screens or any size on request.",
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
          lead: "Table limit signs and roulette result displays designed and assembled by CasTech EQ. Screen sizes from 11 to 21 inches, or any other size on request, on stands designed to fit your table layout.",
        },
        galleryEyebrow: "Our table signs",
        galleryTitle: "Table limit displays and roulette result displays.",
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
          "What to show: table limits, roulette results, statistics or promotions",
          "Delivery country and target date",
        ],
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
