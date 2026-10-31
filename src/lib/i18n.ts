export const LOCALES = ["en", "de", "cs", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
/** Languages with their own folder (/de/, /cs/, /ru/). English lives at the root. */
export const PREFIXED = ["de", "cs", "ru"] as const;
export type PrefixedLocale = (typeof PREFIXED)[number];

export const LANG_NAMES: Record<Locale, string> = { en: "English", de: "Deutsch", cs: "Čeština", ru: "Русский" };
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", de: "de_DE", cs: "cs_CZ", ru: "ru_RU" };

/** English paths that also exist in every other language. */
export const LOCALIZED_PATHS = [
  "/",
  "/jackpot-screens/",
  "/slot-machines/",
  "/live-games/",
  "/table-signs/",
  "/accessories/",
  "/about/",
  "/contact/",
] as const;

function normalize(path: string) {
  const clean = path.split(/[?#]/)[0] || "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

/** True when this English path exists in the other languages too. */
export function isLocalized(path: string) {
  return (LOCALIZED_PATHS as readonly string[]).includes(normalize(path));
}

/** Absolute path of an English page in another language (e.g. "/about/" -> "/de/about/"). */
export function localePath(locale: Locale, enPath: string) {
  const base = normalize(enPath);
  if (locale === "en") return base;
  return base === "/" ? `/${locale}/` : `/${locale}${base}`;
}

/**
 * Link target for a locale. Links point to the translated page only when it exists;
 * otherwise they fall back to the English page. Query strings and hashes are kept.
 */
export function href(locale: Locale, path: string) {
  if (locale === "en" || !isLocalized(path)) return path;
  const suffix = path.slice(path.split(/[?#]/)[0].length);
  return localePath(locale, path) + suffix;
}

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return (PREFIXED as readonly string[]).includes(first) ? (first as Locale) : "en";
}

/** English path for a pathname that may start with a language folder. */
export function toEnPath(pathname: string) {
  const loc = localeFromPath(pathname);
  if (loc === "en") return pathname;
  const rest = pathname.slice(loc.length + 1);
  return rest === "" ? "/" : rest;
}

export const ui = {
  en: {
    tagline: "Casino Equipment & Hardware",
    nav: [
      { href: "/jackpot-screens", label: "Jackpot Screens" },
      { href: "/installations", label: "Installations" },
      { href: "/slot-machines", label: "Slot Machines" },
      { href: "/catalog", label: "Catalogue" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    quote: "Get a quote",
    search: "Search",
    searchSite: "Search the site",
    searchPlaceholder: "Search…",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
    mobileNav: "Mobile",
    langLabel: "Language",
    breadcrumbHome: "Home",
    breadcrumbEquipment: "Equipment",
    heroTagline: "Equipment selection · specification · inquiry",
    footer: {
      claim: "PROFESSIONAL CASINO EQUIPMENT",
      sister: "Sister company in Georgia:",
      about: "Casino equipment and own-production LED jackpot screens for casino operators, backed by 22 years on the casino floor.",
      productsTitle: "Products",
      companyTitle: "Company",
      contactTitle: "Contact",
      products: [
        { href: "/jackpot-screens", label: "Jackpot Screens" },
        { href: "/slot-machines", label: "Slot Machines" },
        { href: "/live-games", label: "Gaming Tables" },
        { href: "/table-signs", label: "Table Signs" },
        { href: "/accessories", label: "Accessories" },
        { href: "/catalog", label: "Full Catalogue" },
      ],
      companyLinks: [
        { href: "/about", label: "About Us" },
        { href: "/installations", label: "Installations" },
        { href: "/contact", label: "Request a Quote" },
      ],
      led: "LED screens: CasTech LED",
      pragueOffice: "Prague office",
      batumiOffice: "Batumi office",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      follow: "Follow us",
      prague: "Prague",
      batumi: "Batumi",
      batumiFirst: false,
      copyright: "© 2026 CasTech EQ, a brand of Virexa AI Technologies s.r.o., IČO 29716055. All rights reserved.",
      company: "A VIREXA AI TECHNOLOGIES COMPANY ↗",
    },
    cta: {
      eyebrow: "Project inquiries",
      title: "Planning a casino equipment project?",
      text: "Tell us about your project scope and requirements. We can discuss product formats, specifications and sourcing options.",
      quote: "Request a quote",
      email: "Email CasTech",
    },
    gallery: { close: "Close", prev: "Previous", next: "Next", open: "Open photo" },
    groups: {
      explore: "Explore this category",
      item: "ITEM",
      ask: "Ask about this item ↗",
      note: "Specifications, photography and lead times are confirmed per inquiry. Shufflers are supplied refurbished; other equipment is produced to order through our direct manufacturer relationships. CasTech EQ is not an authorized dealer or distributor of any brand.",
    },
  },
  de: {
    tagline: "Casino-Ausstattung",
    nav: [
      { href: "/jackpot-screens", label: "Jackpot-Bildschirme" },
      { href: "/slot-machines", label: "Spielautomaten" },
      { href: "/live-games", label: "Spieltische" },
      { href: "/about", label: "Über uns" },
      { href: "/contact", label: "Kontakt" },
    ],
    quote: "Angebot anfordern",
    search: "Suche",
    searchSite: "Website durchsuchen",
    searchPlaceholder: "Suche…",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    mainNav: "Hauptmenü",
    mobileNav: "Mobiles Menü",
    langLabel: "Sprache",
    breadcrumbHome: "Start",
    breadcrumbEquipment: "Ausstattung",
    heroTagline: "Auswahl · Spezifikation · Anfrage",
    footer: {
      claim: "PROFESSIONELLE CASINO-AUSSTATTUNG",
      sister: "Schwesterunternehmen in Georgien:",
      about: "Casino-Ausstattung und LED-Jackpot-Bildschirme aus eigener Produktion für Casinobetreiber – mit 22 Jahren Erfahrung im Spielsaal.",
      productsTitle: "Produkte",
      companyTitle: "Unternehmen",
      contactTitle: "Kontakt",
      products: [
        { href: "/jackpot-screens", label: "Jackpot-Bildschirme" },
        { href: "/slot-machines", label: "Spielautomaten" },
        { href: "/live-games", label: "Spieltische" },
        { href: "/table-signs", label: "Tischanzeigen" },
        { href: "/accessories", label: "Zubehör" },
      ],
      companyLinks: [
        { href: "/about", label: "Über uns" },
        { href: "/contact", label: "Angebot anfordern" },
      ],
      led: "LED-Bildschirme: CasTech LED",
      pragueOffice: "Büro Prag",
      batumiOffice: "Büro Batumi",
      privacy: "Datenschutz (EN)",
      terms: "AGB (EN)",
      follow: "Folgen Sie uns",
      prague: "Prag",
      batumi: "Batumi",
      batumiFirst: false,
      copyright: "© 2026 CasTech EQ, eine Marke der Virexa AI Technologies s.r.o., IČO 29716055. Alle Rechte vorbehalten.",
      company: "EIN UNTERNEHMEN VON VIREXA AI TECHNOLOGIES ↗",
    },
    cta: {
      eyebrow: "Projektanfragen",
      title: "Planen Sie ein Casino-Ausstattungsprojekt?",
      text: "Erzählen Sie uns von Umfang und Anforderungen Ihres Projekts. Wir besprechen Formate, Spezifikationen und Beschaffungsoptionen.",
      quote: "Angebot anfordern",
      email: "E-Mail an CasTech",
    },
    gallery: { close: "Schließen", prev: "Zurück", next: "Weiter", open: "Foto öffnen" },
    groups: {
      explore: "Bereiche",
      item: "POSITION",
      ask: "Zu dieser Position anfragen ↗",
      note: "Spezifikationen, Fotos und Lieferzeiten werden je Anfrage bestätigt. Shuffler werden generalüberholt geliefert; andere Ausstattung wird über unsere direkten Herstellerbeziehungen auf Bestellung gefertigt. CasTech EQ ist kein autorisierter Händler oder Distributor einer Marke.",
    },
  },
  cs: {
    tagline: "Vybavení pro kasina",
    nav: [
      { href: "/jackpot-screens", label: "Jackpotové obrazovky" },
      { href: "/slot-machines", label: "Výherní automaty" },
      { href: "/live-games", label: "Herní stoly" },
      { href: "/about", label: "O nás" },
      { href: "/contact", label: "Kontakt" },
    ],
    quote: "Poptat cenu",
    search: "Hledat",
    searchSite: "Hledat na webu",
    searchPlaceholder: "Hledat…",
    openMenu: "Otevřít menu",
    closeMenu: "Zavřít menu",
    mainNav: "Hlavní menu",
    mobileNav: "Mobilní menu",
    langLabel: "Jazyk",
    breadcrumbHome: "Úvod",
    breadcrumbEquipment: "Vybavení",
    heroTagline: "Výběr · specifikace · poptávka",
    footer: {
      claim: "PROFESIONÁLNÍ VYBAVENÍ PRO KASINA",
      sister: "Sesterská společnost v Gruzii:",
      about: "Vybavení pro kasina a LED jackpotové obrazovky z vlastní výroby pro provozovatele kasin – s 22 lety zkušeností z herních sálů.",
      productsTitle: "Produkty",
      companyTitle: "Společnost",
      contactTitle: "Kontakt",
      products: [
        { href: "/jackpot-screens", label: "Jackpotové obrazovky" },
        { href: "/slot-machines", label: "Výherní automaty" },
        { href: "/live-games", label: "Herní stoly" },
        { href: "/table-signs", label: "Stolní displeje" },
        { href: "/accessories", label: "Příslušenství" },
      ],
      companyLinks: [
        { href: "/about", label: "O nás" },
        { href: "/contact", label: "Poptávka" },
      ],
      led: "LED obrazovky: CasTech LED",
      pragueOffice: "Kancelář Praha",
      batumiOffice: "Kancelář Batumi",
      privacy: "Ochrana osobních údajů (EN)",
      terms: "Obchodní podmínky (EN)",
      follow: "Sledujte nás",
      prague: "Praha",
      batumi: "Batumi",
      batumiFirst: false,
      copyright: "© 2026 CasTech EQ, značka společnosti Virexa AI Technologies s.r.o., IČO 29716055. Všechna práva vyhrazena.",
      company: "SPOLEČNOST VIREXA AI TECHNOLOGIES ↗",
    },
    cta: {
      eyebrow: "Poptávky projektů",
      title: "Plánujete vybavení kasina?",
      text: "Popište nám rozsah a požadavky projektu. Probereme formáty, specifikace a možnosti dodání.",
      quote: "Poptat nabídku",
      email: "Napsat CasTech",
    },
    gallery: { close: "Zavřít", prev: "Předchozí", next: "Další", open: "Otevřít fotografii" },
    groups: {
      explore: "Sekce",
      item: "POLOŽKA",
      ask: "Zeptat se na položku ↗",
      note: "Specifikace, fotografie a dodací lhůty potvrzujeme u každé poptávky. Míchačky karet dodáváme repasované; ostatní vybavení vyrábíme na zakázku díky přímým vztahům s výrobci. CasTech EQ není autorizovaným prodejcem ani distributorem žádné značky.",
    },
  },
  ru: {
    tagline: "Оборудование для казино",
    nav: [
      { href: "/jackpot-screens", label: "Джекпот-табло" },
      { href: "/slot-machines", label: "Игровые автоматы" },
      { href: "/live-games", label: "Игровые столы" },
      { href: "/about", label: "О компании" },
      { href: "/contact", label: "Контакты" },
    ],
    quote: "Запросить цену",
    search: "Поиск",
    searchSite: "Поиск по сайту",
    searchPlaceholder: "Поиск…",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    mainNav: "Главное меню",
    mobileNav: "Мобильное меню",
    langLabel: "Язык",
    breadcrumbHome: "Главная",
    breadcrumbEquipment: "Оборудование",
    heroTagline: "Подбор · спецификация · запрос",
    footer: {
      claim: "ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ ДЛЯ КАЗИНО",
      sister: "Компания в Грузии:",
      about: "Оборудование для казино и LED-табло джекпота собственного производства для операторов казино — 22 года опыта в игровых залах.",
      productsTitle: "Продукция",
      companyTitle: "Компания",
      contactTitle: "Контакты",
      products: [
        { href: "/jackpot-screens", label: "Джекпот-табло" },
        { href: "/slot-machines", label: "Игровые автоматы" },
        { href: "/live-games", label: "Игровые столы" },
        { href: "/table-signs", label: "Табло для столов" },
        { href: "/accessories", label: "Аксессуары" },
      ],
      companyLinks: [
        { href: "/about", label: "О компании" },
        { href: "/contact", label: "Запросить цену" },
      ],
      led: "LED-экраны: CasTech LED",
      pragueOffice: "Офис в Праге",
      batumiOffice: "Офис в Батуми",
      privacy: "Privacy Policy (EN)",
      terms: "Terms & Conditions (EN)",
      follow: "Мы в соцсетях",
      prague: "Прага",
      batumi: "Батуми",
      batumiFirst: true,
      copyright: "© 2026 CasTech EQ — бренд Virexa AI Technologies s.r.o., IČO 29716055. Все права защищены.",
      company: "КОМПАНИЯ VIREXA AI TECHNOLOGIES ↗",
    },
    cta: {
      eyebrow: "Запросы по проектам",
      title: "Планируете оснащение казино?",
      text: "Расскажите о проекте и требованиях. Мы обсудим форматы, спецификации и варианты поставки.",
      quote: "Запросить предложение",
      email: "Написать нам",
    },
    gallery: { close: "Закрыть", prev: "Назад", next: "Вперёд", open: "Открыть фото" },
    groups: {
      explore: "Разделы",
      item: "ПОЗИЦИЯ",
      ask: "Узнать подробнее ↗",
      note: "Спецификации, фотографии и сроки поставки уточняются по каждому запросу. Шафлеры поставляются восстановленными; остальное оборудование изготавливается под заказ через наши прямые связи с производителями. CasTech EQ не является официальным дилером или дистрибьютором какого-либо бренда.",
    },
  },
} as const;

export type Ui = (typeof ui)[Locale];
