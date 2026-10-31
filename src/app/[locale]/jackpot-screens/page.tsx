import { pageMeta } from "@/lib/seo";
import { JackpotView } from "@/views/JackpotView";
import { generateStaticParams, resolve, type LocaleParams } from "../params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return pageMeta(pack.meta.jackpot.title, pack.meta.jackpot.description, "/jackpot-screens/", locale);
}

export default async function Page({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return <JackpotView c={pack.jackpot} locale={locale} />;
}
