import { pageMeta } from "@/lib/seo";
import { AccessoriesView } from "@/views/SimpleViews";
import { generateStaticParams, resolve, type LocaleParams } from "../params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return pageMeta(pack.meta.accessories.title, pack.meta.accessories.description, "/accessories/", locale);
}

export default async function Page({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return <AccessoriesView {...pack.accessories} locale={locale} />;
}
