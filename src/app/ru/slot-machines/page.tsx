import { ruSlotCta, ruSlotHero } from "@/content/ru/main";
import { pageMeta } from "@/lib/seo";
import { SlotMachinesView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Игровые автоматы б/у | EGT, Novomatic, Apex и другие",
  "Игровые автоматы б/у от EGT, Novomatic, Apex и других ведущих производителей. Состояние, конфигурация и наличие подтверждаются до продажи, помощь с доставкой и установкой.",
  "/slot-machines/",
  "ru",
);

export default function RuSlotMachinesPage() {
  return <SlotMachinesView hero={ruSlotHero} cta={ruSlotCta} locale="ru" />;
}
