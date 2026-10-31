import { catalogueCategories } from "../catalogueData";
import type { JackpotContent } from "@/views/JackpotView";
import type { TableSignsContent } from "@/views/SimpleViews";
import type { AboutBackground, AboutContent } from "@/views/AboutView";

const g = (file: string, alt: string, caption: string) => ({ src: `/images/hero/${file}.webp`, alt, caption });

export const deJackpot: JackpotContent = {
  hero: {
    eyebrow: "Eigene Produktion",
    title: "LED-Jackpot-Bildschirme für Casinos nach Maß.",
    lead:
      "CasTech EQ by Virexa entwickelt und produziert LED-Jackpot-Bildschirme für Casinos. Jeder Jackpot-Bildschirm wird in Ihrer Größe gebaut und mit Jackpot-Servern jeder Marke verbunden, darunter EGT, Apex und Novomatic. Sie können Live-Jackpotwerte oder andere Inhalte zeigen, zum Beispiel Sportübertragungen.",
  },
  highlights: [
    { title: "In Ihren Maßen", text: "Nennen Sie uns Breite und Höhe. Jeder Bildschirm wird in Ihrer Wunschgröße gefertigt, nicht aus einem festen Katalog gewählt." },
    { title: "Jeder Jackpot-Server", text: "Unsere Bildschirme sind mit Jackpot-Servern jeder Marke und jedes Modells kompatibel – Sie behalten Ihr bestehendes System." },
    { title: "Jackpot oder andere Inhalte", text: "Mit Ihrem Jackpot-Server verbunden, zeigt der Bildschirm Live-Jackpotwerte. Auf Wunsch auch andere Inhalte wie Sportübertragungen oder Promotions." },
    { title: "Von uns gefertigt und geliefert", text: "Das ist unsere eigene Fertigung. Wir bauen den Bildschirm, liefern ihn und unterstützen die Einrichtung in Ihrem Spielsaal." },
  ],
  sizes: {
    title: "Individuelle Größen oder vertraute Formate.",
    paragraphs: [
      "Senden Sie uns die exakten Maße oder wünschen Sie eine Größe ähnlich den Jackpot-Anzeigen für EGT-, Apex- oder Novomatic-Gehäuse. Wir passen den Bildschirm an Ihre Automatenreihe, Wand oder Säule an.",
      "Unsere Bildschirme sind Eigenproduktion und keine Originalteile der Hersteller. Markennamen dienen nur zur Beschreibung der gewünschten Größe.",
    ],
  },
  formats: [
    { title: "Anzeige über der Automatenreihe", text: "Breiter Bildschirm über einer verbundenen Reihe von Spielautomaten." },
    { title: "Mehrstufig und mehrseitig", text: "Mehrere Jackpot-Stufen, auch Anzeigen, die von mehreren Seiten sichtbar sind." },
    { title: "Eingang und Wand", text: "Jackpotwerte am Casino-Eingang oder an einer Akzentwand." },
    { title: "Schmale Säulen und Trenner", text: "Schmale leuchtende LED-Säulen zwischen benachbarten Automaten." },
  ],
  brief: [
    "Die gewünschte Größe oder das Automatenmodell, an dessen Anzeige der Bildschirm angepasst werden soll",
    "Montageort: über einer Automatenreihe, an der Wand oder zwischen Automaten",
    "Marke und Modell Ihres Jackpot-Servers",
    "Lieferland und Wunschtermin",
  ],
  gallery: [
    g("six-bank", "Breiter LED-Jackpot-Bildschirm über einer Reihe von sechs Spielautomaten im Casino", "Breiter Bildschirm über sechs Automaten"),
    g("egt-three-machines", "Jackpot-Bildschirm nach Maß über Spielautomaten, kompatibel mit EGT-Jackpot-Server", "Jackpot-Bildschirm über einer Automatenreihe"),
    g("overhead-grand", "Mehrstufiger Casino-Jackpot-Bildschirm über Spielautomaten", "Mehrstufiger Jackpot-Bildschirm"),
    g("wall-screen", "Großer Casino-Jackpot-Bildschirm an der Wand über Spielautomaten", "Jackpot-Bildschirm an der Wand"),
    g("egt-cube", "LED-Jackpot-Bildschirm in Würfelform über einer Automatenreihe", "Jackpot-Würfel"),
    g("three-level-fireworks", "Dreistufiger LED-Jackpot-Bildschirm mit Super-, Middle- und Mini-Werten", "Dreistufiger Jackpot-Bildschirm"),
    g("four-sided-purple", "Vierseitiger LED-Jackpot-Bildschirm mit Live-Jackpotwerten über einer Automatenreihe", "Vierseitiger Jackpot-Bildschirm"),
    g("entrance-led", "LED-Jackpot-Bildschirm am Casino-Eingang", "Jackpot-Bildschirm am Eingang"),
    g("tv-wall", "Großer LED-Jackpot-Bildschirm über einer Automaten-Lounge, auch für Live-Übertragungen", "Großer Bildschirm: Jackpot oder Übertragung"),
    g("dark-room", "Vertikale LED-Säulen zwischen Spielautomaten in einem dunklen Spielsaal", "LED-Säulen zwischen Automaten"),
    g("boost-closeup", "Integrierter LED-Bildschirm zwischen benachbarten Spielautomaten", "LED-Trenner zwischen Automaten"),
    g("apex-clover-wave", "Schmale LED-Säule zwischen zwei gebogenen Spielautomaten", "Schmale Säule zwischen gebogenen Gehäusen"),
    g("apex-clover-twist", "Schmale leuchtende LED-Säule zwischen zwei Spielautomaten", "Schmale Leuchtsäule"),
    g("princess-bell-link", "Schmale LED-Säule mit Casino-Branding zwischen zwei gebogenen Automaten", "Säule mit Casino-Branding"),
    g("slim-column", "Rotes LED-Seitenpaneel zwischen Automatenreihen", "LED-Seitenpaneel zwischen Reihen"),
  ],
  labels: {
    sizesEyebrow: "Größen",
    quote: "Angebot für Jackpot-Bildschirm anfordern",
    installEyebrow: "Installationen",
    installTitle: "In echten Spielsälen.",
    photoNote:
      "Die Fotos zeigen installierte Jackpot-Bildschirme. Dieselben Bildschirme können Jackpotwerte von Ihrem Server oder andere Inhalte Ihrer Wahl zeigen, etwa eine Live-Sportübertragung. Auf den Fotos sichtbare Automatenmarken gehören ihren Herstellern und stehen in keiner Verbindung zu CasTech EQ.",
    ledPre: "Sie brauchen einen größeren LED-Bildschirm oder eine Videowand, innen oder außen? Siehe",
    ledLink: "LED-Bildschirme und LED-Videowände für Casinos",
    ledPost: " von CasTech LED.",
    installLink: "Installationsberichte und Videos (EN)",
    briefEyebrow: "Für ein schnelles Angebot",
    briefTitle: "Was wir von Ihnen brauchen.",
    ctaTitle: "Brauchen Sie einen Jackpot-Bildschirm für Ihren Spielsaal?",
    ctaText: "Senden Sie uns Größe, Montageposition und Angaben zum Jackpot-Server. Wir melden uns mit Konfiguration und Angebot.",
  },
};

const signTitles: Record<string, string> = {
  "01": "Tischanzeige auf Ständer",
  "02": "Tischanzeige mit Touchscreen",
  "03": "Schlanke Tischanzeige",
  "04": "Touch-Terminal und Anschlüsse",
  "05": "Touch-Tischanzeige, Vorderansicht",
};
const tableSigns = catalogueCategories.find((c) => c.slug === "table-signs")!;

export const deTableSigns: TableSignsContent = {
  hero: {
    eyebrow: "Tischanzeigen",
    title: "Tischanzeigen für jeden Live-Spieltisch.",
    lead:
      "Limitanzeigen und Roulette-Ergebnisanzeigen, entwickelt und montiert von CasTech EQ. Bildschirmgrößen von 11 bis 21 Zoll oder jede andere Größe auf Anfrage, auf Ständern passend zu Ihrem Tischlayout.",
  },
  galleryEyebrow: "Unsere Tischanzeigen",
  galleryTitle: "Limitanzeigen und Roulette-Ergebnisanzeigen.",
  gallery: tableSigns.items.map((i) => {
    const caption = signTitles[i.image.split("/").pop()!.slice(0, 2)] ?? i.title;
    return { src: i.image, alt: `${caption}: Limitanzeige für Casino-Spieltische`, caption };
  }),
  briefEyebrow: "Für ein schnelles Angebot",
  briefTitle: "Was wir von Ihnen brauchen.",
  brief: [
    "Welche Spiele: Roulette, Blackjack, Poker, Baccara oder andere",
    "Anzahl der Tische, gewünschte Bildschirmgröße und Montageart",
    "Was angezeigt werden soll: Limits, Roulette-Ergebnisse, Statistiken oder Promotions",
    "Lieferland und Wunschtermin",
  ],
  quote: "Angebot für Tischanzeigen anfordern",
  pitPre: "Sie statten einen ganzen Pit aus? Siehe unsere",
  pitLink: "Casino-Spieltische und Ausstattung für Live-Spiele",
  cta: {
    title: "Brauchen Sie Tischanzeigen für Ihr Casino?",
    text: "Nennen Sie uns Ihre Spiele, die Anzahl der Tische und was jede Anzeige zeigen soll. Wir melden uns mit Konfiguration und Angebot.",
  },
};

export const deSlotHero = {
  eyebrow: "Gebrauchte Spielautomaten",
  title: "Gebrauchte Spielautomaten für Casinos.",
  lead:
    "Wir liefern hochwertige gebrauchte Spielautomaten führender Hersteller wie EGT, Novomatic und Apex. Zustand, Konfiguration und Verfügbarkeit jedes Geräts werden vor dem Verkauf bestätigt, und wir helfen bei Versand und Aufstellung.",
};

export const deSlotCta = {
  title: "Sie suchen einen Automaten, der nicht gelistet ist?",
  text: "Nennen Sie uns Hersteller, Modell oder Gehäusetyp. Wir finden ihn für Sie und bestätigen Zustand, Verfügbarkeit und Lieferung in Ihr Land.",
};

export const deAbout: AboutContent = {
  eyebrow: "Über CasTech EQ",
  title: "Von Casino-Experten aufgebaut.",
  lead:
    "CasTech EQ by Virexa basiert auf 22 Jahren praktischer Casino-Arbeit – vom Slot-Techniker und Slot-Manager bis zur Leitung von Überwachung, IT und Technik. Unser Team hat Casinos in Ghana, Nordzypern, im Kosovo und in Georgien sowie auf Kreuzfahrtschiffen eröffnet und Casinobetriebe in Afrika, Europa und Asien geführt.",
  paragraphs: [
    "Unsere eigene Produktion sind LED-Jackpot-Bildschirme: in den von Ihnen gewünschten Größen gebaut, kompatibel mit Jackpot-Servern jeder Marke und jedes Modells, geliefert und in Ihrem Spielsaal eingerichtet.",
    "Spielautomaten werden gebraucht geliefert, Shuffler generalüberholt. Andere Ausstattung, die gefertigt werden muss, beziehen wir auf Bestellung über unsere direkten Herstellerbeziehungen. CasTech EQ ist kein autorisierter Händler oder Distributor einer Marke; Markennamen auf dieser Website dienen nur zur Bezeichnung der Ausstattung.",
    "Genaue Spezifikationen, Verfügbarkeit, regulatorische Anforderungen und kommerzielle Bedingungen werden für jede Anfrage individuell bestätigt. Virexa AI Technologies s.r.o., IČO 29716055, Cihlářská 782/10a, Prosek, 190 00 Praha 9.",
    "Unser Schwesterunternehmen in Georgien ist die Deniz Trade LLC (ID 445613480, Khakhuli Str. No. 3, Batumi), gegründet 2021.",
  ],
  highlights: [
    { title: "Eigene LED-Produktion", text: "Jackpot-Bildschirme in Ihren Größen, kompatibel mit Jackpot-Servern jeder Marke und jedes Modells." },
    { title: "Gebraucht und generalüberholt", text: "Gebrauchte Spielautomaten und generalüberholte Shuffler, Zustand je Gerät bestätigt." },
    { title: "Direkt vom Hersteller", text: "Ausstattung auf Bestellung über unsere eigenen Herstellerbeziehungen." },
  ],
};

export const deAboutBackground: AboutBackground = {
  eyebrow: "Wer wir sind",
  title: "22 Jahre in Spielsälen, dann das eigene Unternehmen.",
  yearsLabel: "22",
  yearsText: "Jahre internationales Casino-Management und Casino-Eröffnungen",
  paragraphs: [
    "Unser Gründer Bilal Durmaz war 22 Jahre im internationalen Casino-Management und in der Casino-Ausstattung in Europa, Afrika und Asien tätig, an Land und auf Kreuzfahrtschiffen. Er eröffnete Casinos in Ghana, Nordzypern, im Kosovo, in Batumi und Tiflis (Georgien) sowie auf zwei Kreuzfahrtschiffen.",
    "2021 wurde aus dieser Erfahrung ein Unternehmen: die Deniz Trade LLC in Batumi, Georgien. Wir begannen mit dem Verkauf von Casino-Ausstattung und Spielautomaten sowie eigener LED-Bildschirmproduktion. Seitdem haben wir Spielautomaten und Casino-Ausstattung an Kunden in Liberia, Belgien, Trinidad und Tobago und Taiwan geliefert und Jackpot-Bildschirme für Casinos in Batumi und Tiflis gebaut und installiert.",
    "2026 gründeten wir in Prag die Virexa AI Technologies s.r.o. zusammen mit CasTech AI. CasTech EQ führt unsere Arbeit mit Ausstattung und LED-Jackpot-Bildschirmen als Marke von Virexa fort, mit der Deniz Trade LLC als Schwesterunternehmen in Georgien.",
    "Wir wissen, wie ein Spielsaal funktioniert und was ein Betreiber am Eröffnungstag braucht. Deshalb sprechen wir die Sprache des Saals: Layouts, Sichtlinien für die Überwachung, Lieferzeiten, Ersatzteile und Service – nicht nur Produktlisten.",
  ],
  timelineTitle: "Unsere Geschichte",
  timeline: [
    { year: "22 Jahre", text: "Casino-Management, Ausstattung und Eröffnungen in Europa, Afrika, Asien und auf Kreuzfahrtschiffen" },
    { year: "2021", text: "Gründung der Deniz Trade LLC in Batumi: Casino-Ausstattung, Spielautomaten und LED-Bildschirmproduktion" },
    { year: "Seit 2021", text: "Spielautomaten und Ausstattung nach Liberia, Belgien, Trinidad und Tobago und Taiwan; Jackpot-Bildschirme für Casinos in Batumi und Tiflis" },
    { year: "2026", text: "Gründung von Virexa AI Technologies s.r.o. und CasTech AI in Prag" },
  ],
  salesTitle: "Wohin wir geliefert haben",
  sales: ["Liberia", "Belgien", "Trinidad und Tobago", "Taiwan", "Georgien"],
  placesTitle: "Wo wir gearbeitet haben",
  places: ["Nordzypern", "Kamerun", "Kosovo", "Rumänien", "Dschibuti", "Tansania", "Malawi", "Ghana", "Montenegro", "Georgien", "Kreuzfahrtschiffe"],
  highlights: ["Casino-Eröffnungen", "Casino-Management", "Produktion von LED-Jackpot-Bildschirmen", "Ausstattung für neue Häuser und Umbauten"],
};

export const deAboutCta = {
  title: "Arbeiten wir an Ihrem nächsten Projekt",
  text: "Ob Erweiterung, Modernisierung oder Neubau – wir helfen bei Auswahl und Planung der Ausstattung.",
};
