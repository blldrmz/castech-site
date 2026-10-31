import { pageMeta } from "@/lib/seo";
import { TableSignsView } from "@/views/SimpleViews";
import { generateStaticParams, resolve, type LocaleParams } from "../params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return pageMeta(pack.meta.signs.title, pack.meta.signs.description, "/table-signs/", locale);
}

export default async function Page({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return <TableSignsView c={pack.tableSigns} locale={locale} />;
}
