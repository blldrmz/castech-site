import { csInstallations } from "@/content/cs/installations";
import { PARTIAL_PATHS } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { InstallationsView } from "@/views/InstallationsView";
import { resolve, type LocaleParams } from "../params";

export const dynamicParams = false;

// Only the languages this page has been translated into (see PARTIAL_PATHS).
export function generateStaticParams() {
  return PARTIAL_PATHS["/installations/"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleParams) {
  const { locale } = await resolve(params);
  return pageMeta(
    "Realizace: jackpotové obrazovky v kasinech",
    "Fotografie a videa jackpotových displejů CasTech EQ z kasin: čtyřstranné kostky, široké obrazovky nad řadou automatů, úzké LED sloupky a bezdrátové nabíjení u herních stolů.",
    "/installations/",
    locale,
  );
}

export default async function Page({ params }: LocaleParams) {
  const { locale } = await resolve(params);
  return <InstallationsView c={csInstallations} locale={locale} />;
}
