import { Contact } from "@/components/Contact";
import { EquipmentGroupList } from "@/components/EquipmentGroupList";
import { InventoryCatalog } from "@/components/inventory/InventoryCatalog";
import { JackpotGallery } from "@/components/JackpotGallery";
import { LiveGameSpotlight } from "@/components/live-games/LiveGameSpotlight";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import type { LiveGameGroup } from "@/content/liveGames";
import { href, type Locale } from "@/lib/i18n";
import Link from "next/link";

type Hero = { readonly eyebrow: string; readonly title: string; readonly lead: string };
type Cta = { title: string; text: string };

export function SlotMachinesView({ hero, cta, locale = "en" }: { hero: Hero; cta: Cta; locale?: Locale }) {
  return (
    <SiteShell locale={locale}>
      <PageHero id="top" eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} locale={locale} />
      <InventoryCatalog locale={locale} />
      <SectionCta title={cta.title} text={cta.text} locale={locale} />
    </SiteShell>
  );
}

export function LiveGamesView({
  hero,
  groups,
  cta,
  signsPre,
  signsLink,
  locale = "en",
}: {
  hero: Hero;
  groups: LiveGameGroup[];
  cta: Cta;
  signsPre: string;
  signsLink: string;
  locale?: Locale;
}) {
  return (
    <SiteShell locale={locale}>
      <PageHero id="top" eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} locale={locale} />
      <LiveGameSpotlight locale={locale} />
      <div className="bg-ink">
        <div className="castech-container castech-section-y pt-16 sm:pt-20">
          <EquipmentGroupList groups={groups} locale={locale} />
        </div>
      </div>
      <div className="bg-ink">
        <div className="castech-container pb-16">
          <p className="castech-body max-w-3xl text-zinc-300">
            {signsPre}{" "}
            <Link href={href(locale, "/table-signs")} className="text-gold underline-offset-4 hover:underline">{signsLink}</Link>.
          </p>
        </div>
      </div>
      <SectionCta title={cta.title} text={cta.text} locale={locale} />
    </SiteShell>
  );
}

export function AccessoriesView({ hero, groups, cta, locale = "en" }: { hero: Hero; groups: LiveGameGroup[]; cta: Cta; locale?: Locale }) {
  return (
    <SiteShell locale={locale}>
      <PageHero id="top" eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} locale={locale} />
      <div className="bg-ink">
        <div className="castech-container castech-section-y pt-16 sm:pt-20">
          <EquipmentGroupList groups={groups} locale={locale} />
        </div>
      </div>
      <SectionCta title={cta.title} text={cta.text} locale={locale} />
    </SiteShell>
  );
}

export type TableSignsContent = {
  hero: Hero;
  galleryEyebrow: string;
  galleryTitle: string;
  gallery: readonly { src: string; alt: string; caption: string }[];
  briefEyebrow: string;
  briefTitle: string;
  brief: readonly string[];
  quote: string;
  pitPre: string;
  pitLink: string;
  cta: Cta;
};

export function TableSignsView({ c, locale = "en" }: { c: TableSignsContent; locale?: Locale }) {
  return (
    <SiteShell locale={locale}>
      <PageHero id="top" eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} locale={locale} />
      <div className="bg-ink">
        <div className="castech-container castech-section-y">
          <p className="castech-eyebrow">{c.galleryEyebrow}</p>
          <h2 className="castech-h2 castech-h2-gap">{c.galleryTitle}</h2>
          <JackpotGallery items={c.gallery} locale={locale} />

          <div className="mt-20 max-w-3xl">
            <p className="castech-eyebrow">{c.briefEyebrow}</p>
            <h2 className="castech-h2 castech-h2-gap">{c.briefTitle}</h2>
            <ul className="mt-8 space-y-3">
              {c.brief.map((b) => (
                <li key={b} className="castech-body flex gap-3 text-zinc-200">
                  <span aria-hidden="true" className="mt-1 text-gold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link href={href(locale, "/contact?item=Table%20signs")} className="castech-btn-primary mt-9 inline-flex">
              {c.quote} <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
            <p className="castech-body mt-10 text-zinc-300">
              {c.pitPre}{" "}
              <Link href={href(locale, "/live-games")} className="text-gold underline-offset-4 hover:underline">{c.pitLink}</Link>.
            </p>
          </div>
        </div>
      </div>
      <SectionCta title={c.cta.title} text={c.cta.text} locale={locale} />
    </SiteShell>
  );
}

export function ContactView({ srTitle, locale = "en" }: { srTitle: string; locale?: Locale }) {
  return (
    <SiteShell locale={locale}>
      <div className="bg-zinc-950/80">
        <div className="castech-container pt-20 sm:pt-24">
          <div className="h-px w-14 rounded-full bg-gradient-to-r from-gold/70 to-transparent" />
        </div>
      </div>
      <h1 className="sr-only">{srTitle}</h1>
      <Contact locale={locale} />
    </SiteShell>
  );
}
