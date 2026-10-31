import { ruTableSigns } from "@/content/ru/main";
import { pageMeta } from "@/lib/seo";
import { TableSignsView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Табло для игровых столов | Табло лимитов и результатов рулетки",
  "Табло для игровых столов казино, разработанные и собранные CasTech EQ: табло лимитов и табло результатов рулетки, экраны от 11 до 21 дюйма или любого размера по запросу.",
  "/table-signs/",
  "ru",
);

export default function RuTableSignsPage() {
  return <TableSignsView c={ruTableSigns} locale="ru" />;
}
