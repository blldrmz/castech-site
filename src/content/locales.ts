import type { LiveGameGroup } from "./liveGames";
import type { PrefixedLocale } from "@/lib/i18n";
import type { AboutBackground, AboutContent } from "@/views/AboutView";
import type { JackpotContent } from "@/views/JackpotView";
import type { TableSignsContent } from "@/views/SimpleViews";
import * as csG from "./cs/groups";
import * as csM from "./cs/main";
import * as deG from "./de/groups";
import * as deM from "./de/main";
import * as ruG from "./ru/groups";
import * as ruM from "./ru/main";

type Hero = { eyebrow: string; title: string; lead: string };
type Cta = { title: string; text: string };
type Meta = { title: string; description: string };
export type PageKey = "home" | "jackpot" | "slots" | "live" | "signs" | "accessories" | "about" | "contact";

export type LocalePack = {
  htmlTitle: string;
  htmlDescription: string;
  meta: Record<PageKey, Meta>;
  jackpot: JackpotContent;
  tableSigns: TableSignsContent;
  slots: { hero: Hero; cta: Cta };
  live: { hero: Hero; groups: LiveGameGroup[]; cta: Cta; signsPre: string; signsLink: string };
  accessories: { hero: Hero; groups: LiveGameGroup[]; cta: Cta };
  about: { c: AboutContent; b: AboutBackground; cta: Cta };
  contactTitle: string;
};

export const packs: Record<PrefixedLocale, LocalePack> = {
  ru: {
    htmlTitle: "Оборудование для казино | CasTech EQ",
    htmlDescription:
      "Поставщик оборудования для казино с офисами в Батуми и Праге: игровые столы, фишки, сукно, игровые автоматы б/у и LED-табло джекпота под заказ.",
    meta: {
      home: { title: "Оборудование для казино | Игровые автоматы, столы, фишки и джекпот-табло", description: "Поставщик оборудования для казино с офисами в Батуми и Праге. Новые игровые столы, кресла, фишки, сукно и аксессуары, а также игровые автоматы б/у, восстановленные шафлеры и LED-табло джекпота под заказ." },
      jackpot: { title: "LED-табло джекпота для казино | Джекпот-табло под заказ", description: "LED-табло джекпота для казино любого размера. Совместимы с джекпот-серверами EGT, Apex, Novomatic и других производителей. Разработка и поставка — CasTech EQ by Virexa." },
      slots: { title: "Игровые автоматы б/у | EGT, Novomatic, Apex и другие", description: "Игровые автоматы б/у от EGT, Novomatic, Apex и других ведущих производителей. Состояние, конфигурация и наличие подтверждаются до продажи, помощь с доставкой и установкой." },
      live: { title: "Игровые столы для казино | Рулетка, блэкджек, покер, баккара", description: "Игровые столы для рулетки, блэкджека, покера и баккары, а также рулеточные колёса, сукно, фишки, кресла для казино, фурнитура для столов и восстановленные шафлеры." },
      signs: { title: "Табло для игровых столов | Табло лимитов и результатов рулетки", description: "Табло для игровых столов казино, разработанные и собранные CasTech EQ: табло лимитов и табло результатов рулетки, экраны от 11 до 21 дюйма или любого размера по запросу." },
      accessories: { title: "Аксессуары для казино | Фишки, карты, сукно", description: "Аксессуары и расходные материалы для казино: фишки, игральные карты, аксессуары для дилеров, сукно, чип-трэи и расходники для зала с доставкой от CasTech EQ." },
      about: { title: "О CasTech EQ | 22 года международного опыта в казино", description: "CasTech EQ — бренд Virexa AI Technologies s.r.o. и Deniz Trade LLC (Батуми): 22 года опыта открытия и управления казино, собственное производство LED-табло джекпота, игровые автоматы б/у и шафлеры." },
      contact: { title: "Контакты | Запрос предложения на оборудование для казино", description: "Запросите предложение на оборудование для казино у CasTech EQ. Офис в Батуми (Грузия) для клиентов из Грузии и стран СНГ, юридический адрес в Праге." },
    },
    jackpot: ruM.ruJackpot,
    tableSigns: ruM.ruTableSigns,
    slots: { hero: ruM.ruSlotHero, cta: ruM.ruSlotCta },
    live: { hero: ruG.ruLiveHero, groups: ruG.ruLiveGroups, cta: ruG.ruLiveCta, signsPre: "Нужны табло лимитов и результатов для столов? Смотрите", signsLink: "табло для столов и рулетки" },
    accessories: { hero: ruG.ruAccessoriesHero, groups: ruG.ruAccessoryGroups, cta: ruG.ruAccessoriesCta },
    about: { c: ruM.ruAbout, b: ruM.ruAboutBackground, cta: ruM.ruAboutCta },
    contactTitle: "Контакты CasTech EQ",
  },
  de: {
    htmlTitle: "Casino-Ausstattung | CasTech EQ",
    htmlDescription:
      "Casino-Ausstatter mit Sitz in Prag und Batumi: neue Spieltische, Chips, Tischtücher und Zubehör, gebrauchte Spielautomaten und LED-Jackpot-Bildschirme nach Maß.",
    meta: {
      home: { title: "Casino-Ausstatter | Spielautomaten, Spieltische, Chips & Jackpot-Bildschirme", description: "Casino-Ausstatter mit Sitz in Prag und Batumi. Neue Spieltische, Stühle, Chips, Tischtücher und Zubehör sowie gebrauchte Spielautomaten, generalüberholte Shuffler und LED-Jackpot-Bildschirme nach Maß." },
      jackpot: { title: "Jackpot-Bildschirme für Casinos | LED-Jackpot-Bildschirm nach Maß", description: "LED-Jackpot-Bildschirme für Casinos in jeder Größe. Kompatibel mit Jackpot-Servern von EGT, Apex, Novomatic und anderen. Entwickelt und geliefert von CasTech EQ by Virexa." },
      slots: { title: "Gebrauchte Spielautomaten kaufen | EGT, Novomatic, Apex & mehr", description: "Gebrauchte Spielautomaten von EGT, Novomatic, Apex und anderen führenden Herstellern. Zustand, Konfiguration und Verfügbarkeit vor dem Verkauf bestätigt, mit Unterstützung bei Versand und Aufstellung." },
      live: { title: "Casino-Spieltische | Roulette, Blackjack, Poker & Baccara", description: "Casino-Spieltische für Roulette, Blackjack, Poker und Baccara sowie Roulettekessel, Tischtücher, Chips, Casino-Stühle, Tischzubehör und generalüberholte Shuffler." },
      signs: { title: "Tischanzeigen für Casinos | Limitanzeigen & Roulette-Ergebnisanzeigen", description: "Tischanzeigen für Casinos, entwickelt und montiert von CasTech EQ: Limitanzeigen und Roulette-Ergebnisanzeigen, Bildschirme von 11 bis 21 Zoll oder jede Größe auf Anfrage." },
      accessories: { title: "Casino-Zubehör & Verbrauchsmaterial | Chips, Karten, Tischtücher", description: "Casino-Zubehör und Verbrauchsmaterial: Chips, Spielkarten, Croupier-Zubehör, Tischtücher, Chip-Trays und Saalbedarf, geliefert von CasTech EQ." },
      about: { title: "Über CasTech EQ | 22 Jahre internationale Casino-Erfahrung", description: "CasTech EQ, eine Marke der Virexa AI Technologies s.r.o.: 22 Jahre Erfahrung mit Casino-Eröffnungen, eigene Produktion von LED-Jackpot-Bildschirmen, gebrauchte Automaten und Shuffler." },
      contact: { title: "Kontakt | Angebot für Casino-Ausstattung anfordern", description: "Fordern Sie ein Angebot für Casino-Ausstattung bei CasTech EQ an. Büros in Prag, Tschechien, und Batumi, Georgien." },
    },
    jackpot: deM.deJackpot,
    tableSigns: deM.deTableSigns,
    slots: { hero: deM.deSlotHero, cta: deM.deSlotCta },
    live: { hero: deG.deLiveHero, groups: deG.deLiveGroups, cta: deG.deLiveCta, signsPre: "Sie brauchen Limit- und Ergebnisanzeigen für Ihre Tische? Siehe unsere", signsLink: "Tischanzeigen und Roulette-Anzeigen" },
    accessories: { hero: deG.deAccessoriesHero, groups: deG.deAccessoryGroups, cta: deG.deAccessoriesCta },
    about: { c: deM.deAbout, b: deM.deAboutBackground, cta: deM.deAboutCta },
    contactTitle: "Kontakt CasTech EQ",
  },
  cs: {
    htmlTitle: "Vybavení pro kasina | CasTech EQ",
    htmlDescription:
      "Dodavatel vybavení pro kasina se sídlem v Praze a pobočkou v Batumi: nové herní stoly, žetony, sukna a příslušenství, použité výherní automaty a LED jackpotové obrazovky na zakázku.",
    meta: {
      home: { title: "Dodavatel vybavení pro kasina | Výherní automaty, herní stoly, žetony a jackpotové obrazovky", description: "Dodavatel vybavení pro kasina se sídlem v Praze a pobočkou v Batumi. Nové herní stoly, židle, žetony, sukna a příslušenství, použité výherní automaty, repasované míchačky karet a LED jackpotové obrazovky na zakázku." },
      jackpot: { title: "Jackpotové obrazovky pro kasina | LED jackpotová obrazovka na zakázku", description: "LED jackpotové obrazovky pro kasina v jakékoli velikosti. Kompatibilní s jackpotovými servery EGT, Apex, Novomatic a dalších. Navrhuje a dodává CasTech EQ by Virexa." },
      slots: { title: "Použité výherní automaty na prodej | EGT, Novomatic, Apex a další", description: "Použité výherní automaty od EGT, Novomatic, Apex a dalších předních výrobců. Stav, konfigurace a dostupnost ověřené před prodejem, s pomocí při dopravě a instalaci." },
      live: { title: "Kasinové herní stoly | Ruleta, blackjack, poker a baccarat", description: "Kasinové herní stoly pro ruletu, blackjack, poker a baccarat, ruletová kola, sukna, žetony, kasinové židle, stolní příslušenství a repasované míchačky karet." },
      signs: { title: "Stolní displeje pro kasina | Displeje limitů a výsledků rulety", description: "Stolní displeje pro kasina navržené a sestavené CasTech EQ: displeje limitů a výsledků rulety, obrazovky od 11 do 21 palců nebo v jakékoli velikosti na vyžádání." },
      accessories: { title: "Kasinové příslušenství a spotřební materiál | Žetony, karty, sukna", description: "Kasinové příslušenství a spotřební materiál: žetony, hrací karty, krupiérské příslušenství, sukna, trayky a potřeby pro sál od CasTech EQ." },
      about: { title: "O CasTech EQ | 22 let mezinárodních zkušeností z kasin", description: "CasTech EQ, značka Virexa AI Technologies s.r.o.: 22 let zkušeností s otevíráním kasin, vlastní výroba LED jackpotových obrazovek, použité automaty a míchačky karet." },
      contact: { title: "Kontakt | Poptávka vybavení pro kasina", description: "Poptejte vybavení pro kasina u CasTech EQ. Sídlo v Praze a pobočka v Batumi v Gruzii." },
    },
    jackpot: csM.csJackpot,
    tableSigns: csM.csTableSigns,
    slots: { hero: csM.csSlotHero, cta: csM.csSlotCta },
    live: { hero: csG.csLiveHero, groups: csG.csLiveGroups, cta: csG.csLiveCta, signsPre: "Potřebujete displeje limitů a výsledků pro své stoly? Podívejte se na naše", signsLink: "stolní displeje a displeje rulety" },
    accessories: { hero: csG.csAccessoriesHero, groups: csG.csAccessoryGroups, cta: csG.csAccessoriesCta },
    about: { c: csM.csAbout, b: csM.csAboutBackground, cta: csM.csAboutCta },
    contactTitle: "Kontakt CasTech EQ",
  },
};
