import { ruLiveCta, ruLiveGroups, ruLiveHero } from "@/content/ru/groups";
import { pageMeta } from "@/lib/seo";
import { LiveGamesView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Игровые столы для казино | Рулетка, блэкджек, покер, баккара",
  "Игровые столы для рулетки, блэкджека, покера и баккары, а также рулеточные колёса, сукно, фишки, кресла для казино, фурнитура для столов и восстановленные шафлеры.",
  "/live-games/",
  "ru",
);

export default function RuLiveGamesPage() {
  return (
    <LiveGamesView
      hero={ruLiveHero}
      groups={ruLiveGroups}
      cta={ruLiveCta}
      signsPre="Нужны табло лимитов и результатов для столов? Смотрите"
      signsLink="табло для столов и рулетки"
      locale="ru"
    />
  );
}
