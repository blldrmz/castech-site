import { SiteShell } from "@/components/SiteShell";
import { HomeLanding } from "@/components/HomeLanding";
import { pageMeta } from "@/lib/seo";
import { generateStaticParams, resolve, type LocaleParams } from "./params";

export const dynamicParams = false;
export { generateStaticParams };

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, pack } = await resolve(params);
  return pageMeta(pack.meta.home.title, pack.meta.home.description, "/", locale);
}

export default async function Home({ params }: LocaleParams) {
  const { locale } = await resolve(params);
  return (
    <SiteShell locale={locale}>
      <HomeLanding locale={locale} />
    </SiteShell>
  );
}
