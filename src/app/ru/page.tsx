import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeLanding } from "@/components/HomeLanding";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Оборудование для казино | Игровые автоматы, столы, фишки и джекпот-табло",
  "Поставщик оборудования для казино с офисами в Батуми и Праге. Новые игровые столы, кресла, фишки, сукно и аксессуары, а также игровые автоматы б/у, восстановленные шафлеры и LED-табло джекпота под заказ.",
  "/",
  "ru",
);

export default function RuHome() {
  return (
    <div className="min-h-screen bg-[#070d15] text-white">
      <Header />
      <main>
        <HomeLanding locale="ru" />
      </main>
      <Footer locale="ru" />
    </div>
  );
}
