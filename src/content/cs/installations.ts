import { installationStories, installationsHeroSlides, type InstallationStory } from "../installations";
import type { InstallationsContent } from "@/views/InstallationsView";

type StoryText = Omit<InstallationStory, "id" | "media" | "cta"> & { captions: string[]; cta?: string };

/** Czech text for each installation story; photos and videos are shared with the English page. */
const cs: Record<string, StoryText> = {
  "cube-displays": {
    tag: "Čtyřstranné kostky",
    title: "Jackpotové kostky nad řadou automatů.",
    lead: "Čtyřstranná LED kostka namontovaná na řadě výherních automatů ukazuje propojený jackpot na všech stranách, takže hodnoty jsou vidět z celého herního sálu.",
    points: [
      { label: "Formát", text: "Čtyřstranná kostka vyrobená na šířku řady, umístěná nad automaty." },
      { label: "Připojení", text: "Připojeno k jackpotovému serveru provozovny; hodnoty na kostce se mění spolu s automaty." },
      { label: "Výsledek", text: "Jackpot je vidět z každé uličky, nejen z míst před řadou." },
    ],
    captions: [
      "Kostka nad řadou automatů s aktuálními hodnotami Grand a Major",
      "Kostka s aktuálními hodnotami na všech stranách",
      "Pohled na kostku při procházce sálem",
      "Kostka viděná přes celý herní sál",
      "Kostka z konce řady",
      "Kostka nad řadou tří automatů",
      "Kostka zblízka",
    ],
  },
  "wide-displays": {
    tag: "Široké obrazovky nad řadou",
    title: "Jedna široká obrazovka přes celou řadu.",
    lead: "Jedna široká obrazovka nad řadou automatů, vyrobená na celou délku řady a zobrazující obsah jackpotového systému provozovny.",
    points: [
      { label: "Formát", text: "Vyrobeno přesně na délku řady, od tří do šesti a více automatů." },
      { label: "Obsah", text: "Hodnoty jackpotu, animace jackpotového systému nebo promo akce provozovny." },
      { label: "Výsledek", text: "Čistá souvislá linie nad řadou místo samostatných topperů." },
    ],
    captions: [
      "Široká obrazovka nad řadou automatů s progresivními jackpoty",
      "Široká obrazovka s animacemi jackpotu",
      "Hodnoty Grand a Major nad řadou šesti automatů",
      "Široká obrazovka v prémiové zóně automatů",
      "Široká obrazovka s animovaným obsahem jackpotového systému",
      "Široká obrazovka mezi cykly jackpotu",
    ],
  },
  "wall-and-entrance": {
    tag: "Stěny, vstupy a toppery",
    title: "Obrazovky pro stěny, vstupy a rohy.",
    lead: "Kde nad automaty není místo, umístíme obrazovku na stěnu, nad vstup nebo do rohu za řadou – ve velikosti, kterou prostor dovolí.",
    points: [
      { label: "Formát", text: "Nástěnné obrazovky, obrazovky nad vstupem a toppery vyrobené podle dostupného prostoru." },
      { label: "Branding", text: "Mezi aktualizacemi jackpotu může obrazovka ukazovat vlastní značku provozovny." },
      { label: "Výsledek", text: "Hodnoty jackpotu vidět už od dveří a přes celou místnost." },
    ],
    captions: [
      "Nástěnná jackpotová obrazovka v rohu nad řadou",
      "Tříúrovňová jackpotová obrazovka nad vstupem do kasina",
      "Brandovaná obrazovka nad řadou automatů",
      "Víceúrovňový jackpotový displej nad řadou",
      "Víceúrovňový displej s animovaným obsahem",
      "Nástěnná obrazovka nad řadou šesti automatů",
    ],
  },
  "any-content": {
    tag: "Jackpot nebo jiný obsah",
    title: "Jackpoty, výsledky rulety nebo živý zápas.",
    lead: "Obrazovky nejsou omezené jen na hodnoty jackpotu. Po připojení k ruletě zobrazují výsledky a statistiky, v loungi mohou vysílat živý sportovní přenos.",
    points: [
      { label: "Ruleta", text: "Displej výsledků a statistik u elektronické rulety s vlastním jackpotem." },
      { label: "Lounge", text: "Velká obrazovka nad slot loungem s živým sportovním přenosem." },
      { label: "Podle vás", text: "Obsah určuje provozovna a lze ho kdykoli změnit." },
    ],
    captions: ["Velká obrazovka ve slot loungi se živým sportovním přenosem", "Výsledky rulety a jackpot na herním sále"],
  },
  "slim-pillars": {
    tag: "Úzké LED sloupky",
    title: "Úzké sloupky, otestované v naší dílně.",
    lead: "Úzké LED sloupky, které se vejdou mezi kabinety. Každý před odesláním spustíme v naší dílně s obsahem provozovny.",
    points: [
      { label: "Formát", text: "Úzké svislé displeje na míru mezeře mezi kabinety." },
      { label: "Testování", text: "Každý sloupek před dodáním zapojíme a zkontrolujeme se skutečným obsahem." },
    ],
    captions: ["Úzké sloupky při testu v dílně"],
  },
  "wireless-charging": {
    tag: "Novinka · Stolní vybavení",
    title: "Bezdrátové nabíjení zabudované do herního stolu.",
    lead: "Bezdrátové nabíjecí podložky na míru zabudované do mantinelu pokerových, karetních a ruletových stolů – hráči si nabijí telefon bez kabelů na suknu.",
    points: [
      { label: "Montáž", text: "Nabíječka je zabudovaná v mantinelu stolu a označená na suknu nebo na mantinelu." },
      { label: "Kde", text: "Ruletové, karetní a pokerové stoly, výherní automaty a elektronické stolní hry." },
      { label: "Výsledek", text: "Hráči nabíjejí telefon přímo u stolu, bez kabelů přes sukno." },
    ],
    captions: ["Nabíjení telefonu na mantinelu pokerového stolu", "Bezdrátové nabíjecí místo na karetním stole"],
    cta: "Zeptat se na bezdrátové nabíjení ke stolům",
  },
};

export const csInstallations: InstallationsContent = {
  hero: {
    eyebrow: "Realizace",
    title: "Naše obrazovky v reálných kasinech.",
    lead: "Jackpotové displeje a stolní vybavení, které jsme vyrobili a nainstalovali, na našich vlastních fotografiích a videích z provozoven. Každá obrazovka je připojená ke stávajícímu jackpotovému systému provozovny a ukazuje jeho aktuální hodnoty.",
  },
  heroSlides: installationsHeroSlides,
  stories: installationStories.map((s) => {
    const t = cs[s.id];
    if (!t) return s;
    return {
      ...s,
      tag: t.tag,
      title: t.title,
      lead: t.lead,
      points: t.points,
      media: s.media.map((m, i) => {
        const caption = t.captions[i] ?? m.caption;
        return m.kind === "image" ? { ...m, caption, alt: caption } : { ...m, caption };
      }),
      cta: s.cta && t.cta ? { href: s.cta.href, label: t.cta } : s.cta,
    };
  }),
  labels: {
    navLabel: "Realizace na této stránce",
    footnote:
      "Fotografie a videa byly pořízeny přímo v provozovnách a v naší dílně. Jackpotové systémy a značky automatů viditelné na obrazovkách patří jejich výrobcům a nejsou s CasTech EQ spojeny; naše obrazovky se připojují ke stávajícímu jackpotovému serveru provozovny.",
    sizesLink: "Velikosti a formáty jackpotových obrazovek",
    ctaTitle: "Plánujete obrazovky pro svůj sál?",
    ctaText: "Pošlete nám rozměry řad, místa montáže a údaje o jackpotovém serveru. Ozveme se s návrhem konfigurace a nabídkou.",
  },
};
