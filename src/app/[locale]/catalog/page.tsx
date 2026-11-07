import { Suspense } from "react";
import { CatalogueBrowser } from "@/components/CatalogueBrowser";
import { SiteShell } from "@/components/SiteShell";
import { PARTIAL_PATHS } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { resolve, type LocaleParams } from "../params";

export const dynamicParams = false;

export function generateStaticParams() {
  return PARTIAL_PATHS["/catalog/"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleParams) {
  const { locale } = await resolve(params);
  return pageMeta(
    "Katalog vybavení pro kasina",
    "Katalog CasTech EQ: LED jackpotové obrazovky, výherní automaty, herní stoly, kasinové židle, žetony, sukna, míchačky karet a příslušenství pro kasina a herny.",
    "/catalog/",
    locale,
  );
}

export default async function Page({ params }: LocaleParams) {
  const { locale } = await resolve(params);
  return (
    <SiteShell locale={locale}>
      <Suspense fallback={<div className="castech-container py-28 text-slate-300">Načítání katalogu…</div>}>
        <CatalogueBrowser locale={locale} />
      </Suspense>
    </SiteShell>
  );
}
