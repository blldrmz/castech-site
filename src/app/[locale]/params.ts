import { packs } from "@/content/locales";
import { PREFIXED, type PrefixedLocale } from "@/lib/i18n";

export type LocaleParams = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return PREFIXED.map((locale) => ({ locale }));
}

export async function resolve(params: LocaleParams["params"]) {
  const { locale } = await params;
  const l = locale as PrefixedLocale;
  return { locale: l, pack: packs[l] };
}
