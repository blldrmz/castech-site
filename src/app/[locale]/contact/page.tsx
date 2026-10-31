import { pageMeta } from "@/lib/seo";
import { ContactView } from "@/views/SimpleViews";
import { generateStaticParams, resolve, type LocaleParams } from "../params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return pageMeta(pack.meta.contact.title, pack.meta.contact.description, "/contact/", locale);
}

export default async function Page({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return <ContactView srTitle={pack.contactTitle} locale={locale} />;
}
