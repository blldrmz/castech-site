import { pageMeta } from "@/lib/seo";
import { LiveGamesView } from "@/views/SimpleViews";
import { generateStaticParams, resolve, type LocaleParams } from "../params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return pageMeta(pack.meta.live.title, pack.meta.live.description, "/live-games/", locale);
}

export default async function Page({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return <LiveGamesView {...pack.live} locale={locale} />;
}
