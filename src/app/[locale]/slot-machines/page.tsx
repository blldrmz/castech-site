import { pageMeta } from "@/lib/seo";
import { SlotMachinesView } from "@/views/SimpleViews";
import { generateStaticParams, resolve, type LocaleParams } from "../params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return pageMeta(pack.meta.slots.title, pack.meta.slots.description, "/slot-machines/", locale);
}

export default async function Page({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return <SlotMachinesView hero={pack.slots.hero} cta={pack.slots.cta} locale={locale} />;
}
