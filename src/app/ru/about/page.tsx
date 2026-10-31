import { ruAbout, ruAboutBackground, ruAboutCta } from "@/content/ru/main";
import { pageMeta } from "@/lib/seo";
import { AboutView } from "@/views/AboutView";

export const metadata = pageMeta(
  "О CasTech EQ | 22 года международного опыта в казино",
  "CasTech EQ — бренд Virexa AI Technologies s.r.o. и Deniz Trade LLC (Батуми): 22 года опыта открытия и управления казино, собственное производство LED-табло джекпота, игровые автоматы б/у и шафлеры.",
  "/about/",
  "ru",
);

export default function RuAboutPage() {
  return <AboutView c={ruAbout} b={ruAboutBackground} cta={ruAboutCta} locale="ru" />;
}
