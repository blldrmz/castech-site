import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    <div className="min-h-screen bg-[#070d15] text-white">
      <Header />
      <main>
        <HomeLanding locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
