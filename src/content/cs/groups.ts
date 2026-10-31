import type { LiveGameGroup } from "../liveGames";

export const csLiveHero = {
  eyebrow: "Vybavení pro živé hry",
  title: "Kasinové herní stoly a vybavení pro živé hry.",
  lead:
    "Stoly pro ruletu, blackjack, poker a baccarat pro každý herní sál. Dodáváme kompletní vybavení pro živé hry, včetně ruletových kol, suken, žetonů, kasinových židlí a stolního příslušenství, přizpůsobené návrhu vašeho sálu a specifikacím.",
};

export const csLiveGroups: LiveGameGroup[] = [
  {
    id: "seating",
    title: "Sezení: hráči, krupiéři a pit",
    intro: "Od stoliček k automatům po křesla pro high-limit stoly: v plném sále rozhoduje ergonomie, třída čalounění i výhled pro bezpečnostní dohled.",
    items: [
      { title: "Stoličky k automatům a elektronickým hrám", description: "Nastavitelná výška, otočné podnože, opěrky nohou a povrchy podle šířky uliček a typu kabinetů." },
      { title: "Hráčská křesla ke stolům", description: "Sezení pro standardní i high-limit stoly s opěrkami nebo bez, nehořlavé látky a vyšitá loga." },
      { title: "Sezení pro krupiéry a supervizory", description: "Nízké krupiérské židle, sezení k pit stolu a odolné čalounění pro dlouhé směny." },
      { title: "Opěrky nohou a doplňky", description: "Opěrky, vylepšené polstry a náhradní díly, aby sezení vydrželo do další rekonstrukce." },
    ],
  },
  {
    id: "cards",
    title: "Karty, řezací karty a formuláře",
    intro: "Hrací karty, řezací karty a formuláře pitu jsou drobnosti, bez kterých se hra zastaví – plánujte je jako jakoukoli jinou kritickou zásobu.",
    items: [
      { title: "Hrací karty (ve velkém, kasinová kvalita)", description: "Velký i standardní index, plastové i papírové balíčky podle míchačky a pravidel hry." },
      { title: "Řezací karty a odhoz", description: "Barevně odlišené řezací karty, boxy na odhoz a příslušenství podle vnitřních kontrol." },
      { title: "Displeje limitů, doklady a formuláře pitu", description: "Displeje limitů, doklady o doplnění a odběru a pokladní formuláře ve vašem formátu." },
      { title: "Popisovače, pera a organizéry", description: "Krupiérské popisovače, klipy na hranu stolu a kompaktní organizéry, aby byl stůl na kamerách dobře čitelný." },
    ],
  },
  {
    id: "roulette",
    title: "Ruleta",
    intro: "Kola, displeje a podpůrné vybavení pro klasickou i automatickou ruletu.",
    items: [
      { title: "Ruletová kola a válce", description: "Turnikety, dráhy kuličky a přesně vyvážená kola podle kasinových standardů, kompatibilní se suknem a servisním režimem." },
      { title: "Automatická a vzduchová kola", description: "Varianty pro vytížené sály, kde se hodí uzavřené, automatické nebo vzduchem nadnášené kolo podle vašeho konceptu a místních předpisů." },
      { title: "Displeje výsledků a snímače", description: "Snímače nad kolem, sloupy výsledků a integrační displeje, aby pit i hráči viděli výherní čísla bez zpoždění." },
      { title: "Sukna a podnože stolů", description: "Vlněná nebo syntetická sukna, loketní opěrky a lišty na žetony podle vašeho prostoru." },
    ],
  },
  {
    id: "blackjack",
    title: "Blackjack a karetní stoly",
    intro: "Rychlost rozdávání, míchání a veškeré stolní vybavení, na kterém karetní pit stojí celý den.",
    items: [
      { title: "Stoly pro blackjack (standard a prémium)", description: "Délky, výšky hran a povrchy na míru – od běžných stolů po high-limit zóny." },
      { title: "Průběžné míchačky karet", description: "Repasované vícebalíčkové a speciální míchačky podle rychlosti hry a pravidel back-office." },
      { title: "Sáňky a řezací karty", description: "Sáňky pro 4, 6 a 8 balíčků, řezací karty, boxy na odhoz a doplňky podle vašich vnitřních kontrol." },
      { title: "Displeje pitu a informační panely", description: "Limity, pravidla a promo akce v hraně stolu nebo na kompaktních displejích." },
    ],
  },
  {
    id: "baccarat",
    title: "Baccarat a hry s provizí",
    intro: "Od baccaratu se squeeze po varianty bez provize – dodáme kompletní vybavení.",
    items: [
      { title: "Stoly pro midi a velký baccarat", description: "Tvary fazole a ledviny s požadovanou geometrií hrany a místem pro nohy." },
      { title: "Příslušenství pro squeeze", description: "Stojany, plexisklové panely a pracovní plochy pro baccarat se squeeze." },
      { title: "Nástroje pro provize a výplaty", description: "Pomůcky pro výpočet výplat, značky sázek a stolní doplňky podle vašich postupů." },
    ],
  },
  {
    id: "poker",
    title: "Poker a turnaje",
    intro: "Pokerové herny, turnaje i každodenní cash game používají stejné základní vybavení.",
    items: [
      { title: "Stoly pro Texas Hold’em a stud", description: "Oválné a heads-up stoly s vestavěným místem pro míchačku, odkladači telefonů a držáky nápojů na přání." },
      { title: "Sukna pro turnaje a cash game", description: "Sukna s logem nebo v turnajovém standardu, polstrování a rychle vyměnitelné desky." },
      { title: "Pokerové míchačky a náhradní díly", description: "Repasované stolní míchačky, karty ve velkém a spotřební materiál pro rušnou hernu." },
    ],
  },
  {
    id: "craps",
    title: "Craps a kostky",
    intro: "Sukno, hole a příslušenství, aby byl craps stůl pro krupiéry i hráče bezpečný a přehledný.",
    items: [
      { title: "Stoly pro craps a podložky", description: "Předepsané rozměry, geometrie mantinelů a lišty na žetony pro vaši řadu stolů." },
      { title: "Kostky, hole, puky on/off a tlačítka", description: "Barevné kostky, krupiérské hole, puky on/off a sady tlačítek buy a lay." },
      { title: "Značky a příslušenství pro odds", description: "Ploché žetony, zásobníky značek a pomůcky pro odds podle vašich pravidel." },
    ],
  },
  {
    id: "specialty",
    title: "Speciální hry",
    intro: "Když rozšíříte nabídku za hlavní hry, pro vybavení i sukna platí stejné nároky.",
    items: [
      { title: "Sukna pro sic bo, pai gow a kolo štěstí", description: "Sukna, klece na kostky, kola a drobné příslušenství pro každou třídu her." },
      { title: "Vedlejší sázky", description: "Stolní moduly a cedulky, které ladí s vaším stávajícím nábytkem pitu." },
    ],
  },
  {
    id: "chips",
    title: "Žetony, plakety a stolní pokladna",
    intro: "Barevné sady, bezpečnostní prvky a vybavení, které propojuje pokladnu se stolem.",
    items: [
      { title: "Kasinové žetony a plakety", description: "Sady podle nominálních hodnot, s inlejí nebo s podporou RFID, pokud to předpisy umožňují." },
      { title: "Trayky, doplňování a kryty", description: "Velikost traye podle hrany stolu, napojení na drop slot a kryty." },
      { title: "Drop boxy a počítání", description: "Uzamykatelné boxy, vodítka pod stolem a příslušenství pro vaši počítací místnost." },
    ],
  },
  {
    id: "hardware",
    title: "Stolní kování a servis",
    intro: "Neviditelná infrastruktura, díky které stoly fungují: napájení, data a přístup pro údržbu.",
    items: [
      { title: "Krupiérská pódia a podstavce displejů", description: "Stojany krupiérů v jednotném stylu pitu, tabule s pravidly a výhled pro bezpečnostní dohled." },
      { title: "Napájení a data ve stole", description: "Průchodky, kabelové kanály a výřezy pro snímače, míchačky a servis." },
      { title: "Osvětlení, držáky nápojů a pohodlí", description: "Servisní osvětlení pod hranou, výřezy a doplňky proti únavě krupiérů při dlouhých směnách." },
    ],
  },
];

export const csLiveCta = {
  title: "Vybavujete nový pit nebo rekonstruujete?",
  text: "Sladíme značky, náhradní díly a dodací lhůty s termínem otevření – pošlete nám plán sálu a skladbu her.",
};

export const csAccessoriesHero = {
  eyebrow: "Příslušenství pro sál a pit",
  title: "Kasinové příslušenství a spotřební materiál.",
  lead:
    "Vše, co váš herní sál denně potřebuje: kasinové žetony, hrací karty, krupiérské příslušenství, sukna, trayky na žetony a spotřební materiál – s dodáním do vašeho kasina.",
};

export const csAccessoryGroups: LiveGameGroup[] = [
  {
    id: "tito-operations",
    title: "TITO, tiskárny a tikety",
    intro: "Kompletní práce s tikety a vouchery podle vašeho slot systému a pokladny.",
    items: [
      { title: "TITO tikety a papír na zakázku", description: "Tikety s logem i bez, podle vaší tiskárny a pravidel proplácení." },
      { title: "Tiskárny pro kiosky a automaty", description: "Spolehlivé tiskové hlavy a náhradní díly pro kratší odstávky při výměně." },
      { title: "Čárové kódy a validace", description: "Upgrady čteček a testovací vybavení, aby pokladna i sál přijímaly tikety stejně." },
    ],
  },
  {
    id: "seating-service",
    title: "Sezení a pohodlí hráčů",
    intro: "Od stoliček k automatům po křesla pro high-limit stoly: záleží na ergonomii i povrchu.",
    items: [
      { title: "Stoličky k automatům a elektronickým stolům", description: "Výškově nastavitelné a otočné modely podle rozestupu automatů." },
      { title: "Hráčská křesla ke stolům (pit a high limit)", description: "Třídy čalounění, požární normy a vyšitá loga, pokud to vaše značka vyžaduje." },
      { title: "Sezení pro krupiéry a supervizory", description: "Odolné nízké modely, které se vejdou pod pit stoly a servisní hrany." },
    ],
  },
  {
    id: "service-pit",
    title: "Servisní vozíky, rohože a úložné prostory",
    intro: "Převážejte žetony, doklady a nástroje, aniž byste zpomalili provoz sálu.",
    items: [
      { title: "Vozíky pro pit a pokladnu", description: "Uzamykatelné vozíky s koly vhodnými na koberec a přihrádkami pro doplňování, odběry a klíče." },
      { title: "Protiúnavové a kabelové rohože", description: "Ochrana servisních uliček a kabelových tras při velkém provozu." },
      { title: "Skříňky pod pult a mobilní úložné prostory", description: "Kompaktní skříňky na náhradní díly, formuláře a nouzové zásoby podél pitu." },
    ],
  },
  {
    id: "table-smallware",
    title: "Drobnosti pro stoly",
    intro: "Spotřební materiál, který má každý pit manažer na seznamu povinných zásob.",
    items: [
      { title: "Kartáče, stěrky a kryty stolů", description: "Barevně odlišené a označené nástroje pro jednotné standardy dohledu a školení." },
      { title: "Balíčky karet, řezací karty a boxy na odhoz", description: "Velkoobchodní balení a plán rotace zásob podle vaší skladby her." },
      { title: "Sponky na sukna a klipy na hranu", description: "Spojovací materiál a opravné sady pro rychlou noční opravu sukna bez demontáže stolu." },
    ],
  },
  {
    id: "keys-security",
    title: "Klíče, plomby a kontrola klíčů",
    intro: "Prvky fyzického zabezpečení, které fungují podle vašich postupů.",
    items: [
      { title: "Klíče k drop boxům, polotovary a vložky", description: "Systémy generálních klíčů s číslovanými duplikáty a rezervou v pokladně." },
      { title: "Plomby a štítky proti neoprávněné manipulaci", description: "Pro vozíky, kryty a přesuny mezi pokladnou a počítací místností." },
    ],
  },
  {
    id: "signage-branding",
    title: "Cedule, jackpoty a grafika sálu",
    intro: "Povinné cedule, navigace a branding v celém sále.",
    items: [
      { title: "Toppery a skleněné vložky automatů", description: "Tematická i povinná grafika pro každý typ kabinetu ve vašem sále." },
      { title: "Navigace, limity a plakáty o zodpovědném hraní", description: "Odolné, snadno vyměnitelné systémy cedulí pro přestavby sálu." },
    ],
  },
];

export const csAccessoriesCta = {
  title: "Sestavíme seznam zásob společně",
  text: "Příslušenství přidáváme k objednávkám vybavení, aby vše dorazilo najednou – pošlete nám svůj seznam nebo standardy pitu.",
};
