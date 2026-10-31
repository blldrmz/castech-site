import { ruJackpot } from "@/content/ru/main";
import { pageMeta } from "@/lib/seo";
import { JackpotView } from "@/views/JackpotView";

export const metadata = pageMeta(
  "LED-табло джекпота для казино | Джекпот-табло под заказ",
  "LED-табло джекпота для казино любого размера. Совместимы с джекпот-серверами EGT, Apex, Novomatic и других производителей. Разработка и поставка — CasTech EQ by Virexa.",
  "/jackpot-screens/",
  "ru",
);

export default function RuJackpotPage() {
  return <JackpotView c={ruJackpot} locale="ru" />;
}
