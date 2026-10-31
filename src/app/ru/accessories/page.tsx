import { ruAccessoriesCta, ruAccessoriesHero, ruAccessoryGroups } from "@/content/ru/groups";
import { pageMeta } from "@/lib/seo";
import { AccessoriesView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Аксессуары для казино | Фишки, карты, сукно",
  "Аксессуары и расходные материалы для казино: фишки, игральные карты, аксессуары для дилеров, сукно, чип-трэи и расходники для зала с доставкой от CasTech EQ.",
  "/accessories/",
  "ru",
);

export default function RuAccessoriesPage() {
  return <AccessoriesView hero={ruAccessoriesHero} groups={ruAccessoryGroups} cta={ruAccessoriesCta} locale="ru" />;
}
