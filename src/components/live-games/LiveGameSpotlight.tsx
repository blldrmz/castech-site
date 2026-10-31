import { media } from "@/content/mediaUrls";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

const tilesEn = [
  {
    href: "#roulette",
    title: "Tables & felts",
    subtitle: "Roulette, BJ, baccarat, poker",
    image: media.blackjack,
  },
  {
    href: "#seating",
    title: "Seating",
    subtitle: "Players, dealers, pit",
    image: media.seating,
  },
  {
    href: "#chips",
    title: "Chips & cash",
    subtitle: "Plaques, trays, drops",
    image: media.chips,
  },
  {
    href: "#cards",
    title: "Cards & paper",
    subtitle: "Decks, cut cards, forms",
    image: media.cards,
  },
] as const;

const tilesRu = [
  { href: "#roulette", title: "Столы и сукно", subtitle: "Рулетка, блэкджек, баккара, покер", image: media.blackjack },
  { href: "#seating", title: "Кресла", subtitle: "Для игроков, дилеров, пит-боссов", image: media.seating },
  { href: "#chips", title: "Фишки и касса", subtitle: "Плаки, трэи, дроп-боксы", image: media.chips },
  { href: "#cards", title: "Карты и бланки", subtitle: "Колоды, кат-карты, формы", image: media.cards },
] as const;

const tilesDe = [
  { href: "#roulette", title: "Tische & Tücher", subtitle: "Roulette, Blackjack, Baccara, Poker", image: media.blackjack },
  { href: "#seating", title: "Sitze", subtitle: "Spieler, Croupiers, Pit", image: media.seating },
  { href: "#chips", title: "Chips & Kasse", subtitle: "Plaques, Trays, Drop-Boxen", image: media.chips },
  { href: "#cards", title: "Karten & Formulare", subtitle: "Decks, Schnittkarten, Formulare", image: media.cards },
] as const;

const tilesCs = [
  { href: "#roulette", title: "Stoly a sukna", subtitle: "Ruleta, blackjack, baccarat, poker", image: media.blackjack },
  { href: "#seating", title: "Sezení", subtitle: "Hráči, krupiéři, pit", image: media.seating },
  { href: "#chips", title: "Žetony a pokladna", subtitle: "Plakety, trayky, drop boxy", image: media.chips },
  { href: "#cards", title: "Karty a formuláře", subtitle: "Balíčky, řezací karty, formuláře", image: media.cards },
] as const;

const TILES = { en: tilesEn, de: tilesDe, cs: tilesCs, ru: tilesRu };

const TEXT = {
  en: { aria: "Live game essentials", eyebrow: "At a glance", title: "Tables, chairs, chips, cards—organized the way the pit runs", view: "View section ↓" },
  de: { aria: "Grundausstattung für Live-Spiele", eyebrow: "Auf einen Blick", title: "Tische, Stühle, Chips, Karten – organisiert, wie der Pit arbeitet", view: "Zum Bereich ↓" },
  cs: { aria: "Základní vybavení pro živé hry", eyebrow: "Přehled", title: "Stoly, židle, žetony, karty – uspořádané podle provozu pitu", view: "Přejít na sekci ↓" },
  ru: { aria: "Основное оборудование для живых игр", eyebrow: "Коротко", title: "Столы, кресла, фишки, карты — всё, что нужно игровому залу", view: "Перейти к разделу ↓" },
};

export function LiveGameSpotlight({ locale = "en" }: { locale?: Locale }) {
  const t = TEXT[locale];
  const tiles = TILES[locale];
  return (
    <section
      className="border-b border-white/[0.06] bg-zinc-950/50"
      aria-label={t.aria}
    >
      <div className="castech-container py-14 sm:py-16">
        <p className="castech-eyebrow">{t.eyebrow}</p>
        <h2 className="castech-h2 mt-4 max-w-2xl text-zinc-50">
          {t.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 shadow-lg shadow-black/40 transition hover:border-[#c4a66e]/35"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="font-heading text-lg font-bold tracking-tight text-white sm:text-xl">
                    {tile.title}
                  </div>
                  <div className="mt-1 text-sm font-medium text-zinc-300">
                    {tile.subtitle}
                  </div>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#e3bc7b]/95">
                    {t.view}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
