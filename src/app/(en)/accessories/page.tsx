import { accessoriesPageHero, accessoryGroups } from "@/content/accessoriesContent";
import { pageMeta } from "@/lib/seo";
import { AccessoriesView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Casino Accessories & Supplies | Chips, Cards, Layouts",
  "Casino accessories and supplies: chips, playing cards, dealer accessories, layouts, chip trays and floor supplies, delivered to your casino by CasTech EQ.",
  "/accessories/",
);

export default function AccessoriesPage() {
  return (
    <AccessoriesView
      hero={accessoriesPageHero}
      groups={accessoryGroups}
      cta={{
        title: "Build a par list with us",
        text: "We bundle accessories with equipment orders so everything lands together—send your list or your pit standards.",
      }}
    />
  );
}
