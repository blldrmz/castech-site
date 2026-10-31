import { catalogueCategories } from "../catalogueData";
import type { JackpotContent } from "@/views/JackpotView";
import type { TableSignsContent } from "@/views/SimpleViews";
import type { AboutBackground, AboutContent } from "@/views/AboutView";

const g = (file: string, alt: string, caption: string) => ({ src: `/images/hero/${file}.webp`, alt, caption });

export const csJackpot: JackpotContent = {
  hero: {
    eyebrow: "Vlastní výroba",
    title: "LED jackpotové obrazovky pro kasina na zakázku.",
    lead:
      "CasTech EQ by Virexa navrhuje a vyrábí LED jackpotové obrazovky pro kasina. Každou jackpotovou obrazovku vyrobíme ve vaší velikosti a připojíme k jackpotovému serveru jakékoli značky, včetně EGT, Apex a Novomatic. Zobrazovat můžete aktuální hodnoty jackpotu nebo jiný obsah, například sportovní přenosy.",
  },
  highlights: [
    { title: "Ve vašich rozměrech", text: "Sdělte nám požadovanou šířku a výšku. Každou obrazovku vyrábíme ve vaší velikosti, ne z pevného katalogu." },
    { title: "Jakýkoli jackpotový server", text: "Naše obrazovky jsou kompatibilní s jackpotovými servery všech značek a modelů – zůstanete u systému, který už používáte." },
    { title: "Jackpot nebo jiný obsah", text: "Po připojení k jackpotovému serveru obrazovka ukazuje aktuální hodnoty jackpotu. Podle potřeby může zobrazovat i jiný obsah, třeba sportovní přenos nebo promo akce." },
    { title: "Vyrábíme a dodáváme sami", text: "Jde o naši vlastní výrobu. Obrazovku vyrobíme, dodáme a pomůžeme s instalací ve vašem sále." },
  ],
  sizes: {
    title: "Rozměry na míru nebo známé formáty.",
    paragraphs: [
      "Pošlete nám přesné rozměry, nebo požadujte velikost podobnou jackpotovým displejům pro kabinety EGT, Apex či Novomatic. Obrazovku přizpůsobíme vaší řadě automatů, stěně nebo sloupu.",
      "Naše obrazovky jsou vlastní výroba, nikoli originální díly výrobců. Názvy značek slouží jen k popisu požadované velikosti.",
    ],
  },
  formats: [
    { title: "Obrazovka nad řadou automatů", text: "Široká obrazovka nad propojenou řadou výherních automatů." },
    { title: "Víceúrovňové a vícestranné", text: "Několik úrovní jackpotu, včetně obrazovek viditelných z více stran." },
    { title: "Vstup a stěny", text: "Hodnoty jackpotu u vstupu do kasina nebo na výrazné stěně." },
    { title: "Úzké sloupky a předěly", text: "Úzké svítící LED sloupky mezi sousedními automaty." },
  ],
  brief: [
    "Požadovanou velikost nebo model automatu, jehož displeji se má obrazovka přizpůsobit",
    "Místo montáže: nad řadou automatů, na stěnu nebo mezi automaty",
    "Značku a model vašeho jackpotového serveru",
    "Zemi dodání a požadovaný termín",
  ],
  gallery: [
    g("six-bank", "Široká LED jackpotová obrazovka nad řadou šesti výherních automatů v kasinu", "Široká obrazovka nad šesti automaty"),
    g("egt-three-machines", "Jackpotová obrazovka na zakázku nad automaty, kompatibilní s jackpotovým serverem EGT", "Jackpotová obrazovka nad řadou automatů"),
    g("overhead-grand", "Víceúrovňová kasinová jackpotová obrazovka nad automaty", "Víceúrovňová jackpotová obrazovka"),
    g("wall-screen", "Velká kasinová jackpotová obrazovka na stěně nad automaty", "Nástěnná jackpotová obrazovka"),
    g("egt-cube", "LED jackpotová obrazovka ve tvaru kostky nad řadou automatů", "Jackpotová kostka"),
    g("three-level-fireworks", "Tříúrovňová LED jackpotová obrazovka s hodnotami Super, Middle a Mini", "Tříúrovňová jackpotová obrazovka"),
    g("four-sided-purple", "Čtyřstranná LED jackpotová obrazovka s aktuálními hodnotami nad řadou automatů", "Čtyřstranná jackpotová obrazovka"),
    g("entrance-led", "LED jackpotová obrazovka u vstupu do kasina", "Jackpotová obrazovka u vstupu"),
    g("tv-wall", "Velká LED jackpotová obrazovka nad zónou automatů, také pro živé přenosy", "Velká obrazovka: jackpot nebo přenos"),
    g("dark-room", "Vertikální LED sloupky mezi automaty v tmavém herním sále", "LED sloupky mezi automaty"),
    g("boost-closeup", "Integrovaná LED obrazovka mezi sousedními automaty", "LED předěl mezi automaty"),
    g("apex-clover-wave", "Úzký LED sloupek mezi dvěma zakřivenými automaty", "Úzký sloupek mezi zakřivenými kabinety"),
    g("apex-clover-twist", "Úzký svítící LED sloupek mezi dvěma automaty", "Úzký svítící sloupek"),
    g("princess-bell-link", "Úzký LED sloupek s brandingem kasina mezi dvěma zakřivenými automaty", "Sloupek s brandingem kasina"),
    g("slim-column", "Červený boční LED panel mezi řadami automatů", "Boční LED panel mezi řadami"),
  ],
  labels: {
    sizesEyebrow: "Rozměry",
    quote: "Poptat jackpotovou obrazovku",
    installEyebrow: "Instalace",
    installTitle: "Ve skutečných herních sálech.",
    photoNote:
      "Fotografie zachycují nainstalované jackpotové obrazovky. Tytéž obrazovky mohou zobrazovat hodnoty jackpotu z vašeho serveru nebo jakýkoli jiný obsah, například živý sportovní přenos. Značky automatů viditelné na fotografiích patří jejich výrobcům a nejsou s CasTech EQ nijak spojeny.",
    ledPre: "Potřebujete větší LED obrazovku nebo videostěnu do interiéru či exteriéru? Viz",
    ledLink: "LED obrazovky a LED videostěny pro kasina",
    ledPost: " od CasTech LED.",
    installLink: "Příběhy instalací a videa (EN)",
    briefEyebrow: "Pro rychlou nabídku",
    briefTitle: "Co nám poslat.",
    ctaTitle: "Potřebujete jackpotovou obrazovku do svého sálu?",
    ctaText: "Pošlete nám velikost, místo montáže a údaje o jackpotovém serveru. Ozveme se s konfigurací a nabídkou.",
  },
};

const signTitles: Record<string, string> = {
  "01": "Stolní displej na stojanu",
  "02": "Stolní displej s dotykovou obrazovkou",
  "03": "Tenký stolní displej",
  "04": "Dotykový terminál a konektory",
  "05": "Dotykový stolní displej zepředu",
};
const tableSigns = catalogueCategories.find((c) => c.slug === "table-signs")!;

export const csTableSigns: TableSignsContent = {
  hero: {
    eyebrow: "Stolní displeje",
    title: "Displeje pro každý živý herní stůl.",
    lead:
      "Displeje limitů a displeje výsledků rulety, navržené a sestavené CasTech EQ. Obrazovky od 11 do 21 palců nebo v jakékoli jiné velikosti na vyžádání, na stojanech přizpůsobených vašemu stolu.",
  },
  galleryEyebrow: "Naše stolní displeje",
  galleryTitle: "Displeje limitů a výsledků rulety.",
  gallery: tableSigns.items.map((i) => {
    const caption = signTitles[i.image.split("/").pop()!.slice(0, 2)] ?? i.title;
    return { src: i.image, alt: `${caption}: displej limitů pro kasinové herní stoly`, caption };
  }),
  briefEyebrow: "Pro rychlou nabídku",
  briefTitle: "Co nám poslat.",
  brief: [
    "Které hry: ruleta, blackjack, poker, baccarat nebo jiné",
    "Počet stolů, požadovanou velikost obrazovky a způsob montáže",
    "Co zobrazovat: limity, výsledky rulety, statistiky nebo promo akce",
    "Zemi dodání a požadovaný termín",
  ],
  quote: "Poptat stolní displeje",
  pitPre: "Vybavujete celý pit? Podívejte se na naše",
  pitLink: "kasinové herní stoly a vybavení pro živé hry",
  cta: {
    title: "Potřebujete stolní displeje pro své kasino?",
    text: "Napište nám, jaké hry provozujete, kolik máte stolů a co má každý displej zobrazovat. Ozveme se s konfigurací a nabídkou.",
  },
};

export const csSlotHero = {
  eyebrow: "Použité výherní automaty",
  title: "Použité výherní automaty pro kasina.",
  lead:
    "Dodáváme kvalitní použité výherní automaty předních výrobců, jako jsou EGT, Novomatic a Apex. Stav, konfiguraci a dostupnost každého automatu ověříme před prodejem a pomůžeme s dopravou i instalací.",
};

export const csSlotCta = {
  title: "Hledáte automat, který není v seznamu?",
  text: "Napište nám výrobce, model nebo typ kabinetu. Najdeme ho a potvrdíme stav, dostupnost i dodání do vaší země.",
};

export const csAbout: AboutContent = {
  eyebrow: "O CasTech EQ",
  title: "Vytvořeno odborníky na kasina.",
  lead:
    "CasTech EQ by Virexa stojí na 22 letech praktické práce v kasinech – od slot technika a slot manažera po vedení bezpečnostního dohledu, IT a technického oddělení. Náš tým otevíral kasina v Ghaně, na Severním Kypru, v Kosovu a v Gruzii i na výletních lodích a řídil kasinový provoz v Africe, Evropě a Asii.",
  paragraphs: [
    "Naší vlastní výrobou jsou LED jackpotové obrazovky: vyrábíme je ve velikostech, které potřebujete, jsou kompatibilní s jackpotovými servery všech značek a modelů a dodáme je i nainstalujeme ve vašem sále.",
    "Výherní automaty dodáváme použité, míchačky karet repasované. Ostatní vybavení, které je třeba vyrobit, zajišťujeme na zakázku díky přímým vztahům s výrobci. CasTech EQ není autorizovaným prodejcem ani distributorem žádné značky; názvy značek na tomto webu slouží jen k označení vybavení.",
    "Přesné specifikace, dostupnost, regulatorní požadavky a obchodní podmínky potvrzujeme individuálně u každé poptávky. Virexa AI Technologies s.r.o., IČO 29716055, Cihlářská 782/10a, Prosek, 190 00 Praha 9.",
    "Naší sesterskou společností v Gruzii je Deniz Trade LLC (ID 445613480, Khakhuli Str. No. 3, Batumi), založená v roce 2021.",
  ],
  highlights: [
    { title: "Vlastní LED výroba", text: "Jackpotové obrazovky ve vašich rozměrech, kompatibilní s jackpotovými servery všech značek a modelů." },
    { title: "Použité a repasované", text: "Použité výherní automaty a repasované míchačky karet, stav ověřený u každého kusu." },
    { title: "Přímo od výrobců", text: "Vybavení na zakázku díky našim vlastním vztahům s výrobci." },
  ],
};

export const csAboutBackground: AboutBackground = {
  eyebrow: "Kdo jsme",
  title: "22 let v herních sálech, pak vlastní firma.",
  yearsLabel: "22",
  yearsText: "let mezinárodního řízení a otevírání kasin",
  paragraphs: [
    "Náš zakladatel Bilal Durmaz strávil 22 let v mezinárodním řízení a vybavování kasin v Evropě, Africe a Asii, na pevnině i na výletních lodích. Otevíral kasina v Ghaně, na Severním Kypru, v Kosovu, v Batumi a Tbilisi (Gruzie) a na dvou výletních lodích.",
    "V roce 2021 se z těchto zkušeností stala firma: Deniz Trade LLC v Batumi v Gruzii. Začali jsme prodejem kasinového vybavení a výherních automatů a vlastní výrobou LED obrazovek. Od té doby jsme dodali automaty a vybavení zákazníkům v Libérii, Belgii, Trinidadu a Tobagu a na Tchaj-wanu a vyrobili a nainstalovali jackpotové obrazovky pro kasina v Batumi a Tbilisi.",
    "V roce 2026 jsme v Praze založili společnost Virexa AI Technologies s.r.o. spolu s CasTech AI. CasTech EQ pokračuje v naší práci s vybavením a LED jackpotovými obrazovkami jako značka Virexa, se sesterskou společností Deniz Trade LLC v Gruzii.",
    "Víme, jak funguje herní sál a co provozovatel potřebuje v den otevření. Proto mluvíme jazykem sálu: dispozice, výhled pro bezpečnostní dohled, dodací lhůty, náhradní díly a servis – ne jen seznamy produktů.",
  ],
  timelineTitle: "Náš příběh",
  timeline: [
    { year: "22 let", text: "Řízení, vybavení a otevírání kasin v Evropě, Africe, Asii a na výletních lodích" },
    { year: "2021", text: "Založení Deniz Trade LLC v Batumi: kasinové vybavení, výherní automaty a výroba LED obrazovek" },
    { year: "Od 2021", text: "Automaty a vybavení do Libérie, Belgie, Trinidadu a Tobaga a na Tchaj-wan; jackpotové obrazovky pro kasina v Batumi a Tbilisi" },
    { year: "2026", text: "Založení Virexa AI Technologies s.r.o. a CasTech AI v Praze" },
  ],
  salesTitle: "Kam jsme dodávali",
  sales: ["Libérie", "Belgie", "Trinidad a Tobago", "Tchaj-wan", "Gruzie"],
  placesTitle: "Kde jsme pracovali",
  places: ["Severní Kypr", "Kamerun", "Kosovo", "Rumunsko", "Džibutsko", "Tanzanie", "Malawi", "Ghana", "Černá Hora", "Gruzie", "Výletní lodě"],
  highlights: ["Otevírání kasin", "Řízení kasin", "Výroba LED jackpotových obrazovek", "Vybavení nových provozoven a rekonstrukcí"],
};

export const csAboutCta = {
  title: "Pojďme spolupracovat na vašem dalším projektu",
  text: "Ať rozšiřujete, modernizujete, nebo stavíte kasino od základů, pomůžeme s výběrem vybavení a plánováním.",
};
