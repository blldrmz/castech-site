import { pageMeta } from "@/lib/seo";
import { AboutView } from "@/views/AboutView";
import { generateStaticParams, resolve, type LocaleParams } from "../params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return pageMeta(pack.meta.about.title, pack.meta.about.description, "/about/", locale);
}

export default async function Page({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return <AboutView {...pack.about} locale={locale} />;
}
