export type Locale = "en" | "ru";

/** English paths that also exist in Russian under /ru/. */
export const RU_PATHS = [
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

/** True when this English path has a Russian twin. */
export function hasRu(path: string) {
  return (RU_PATHS as readonly string[]).includes(normalize(path));
}

/**
 * Link target for a locale. Russian links point to /ru/... only when that page exists in Russian;
 * otherwise they fall back to the English page. Query strings and hashes are kept.
 */
export function href(locale: Locale, path: string) {
  if (locale !== "ru" || !hasRu(path)) return path;
  const suffix = path.slice(path.split(/[?#]/)[0].length);
  const base = normalize(path);
  return (base === "/" ? "/ru/" : `/ru${base}`) + suffix;
}

/** English path for a pathname that may start with /ru. */
export function toEnPath(pathname: string) {
  if (pathname === "/ru" || pathname === "/ru/") return "/";
  return pathname.startsWith("/ru/") ? pathname.slice(3) : pathname;
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en";
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
    langSwitch: { label: "RU", title: "Русская версия" },
    breadcrumbHome: "Home",
    breadcrumbEquipment: "Equipment",
    heroTagline: "Equipment selection · specification · inquiry",
    footer: {
      claim: "PROFESSIONAL CASINO EQUIPMENT",
      sister: "Sister company in Georgia:",
      links: [
        { href: "/jackpot-screens", label: "Jackpot Screens" },
        { href: "/slot-machines", label: "Slot Machines" },
        { href: "/live-games", label: "Gaming Tables" },
        { href: "/table-signs", label: "Table Signs" },
        { href: "/catalog", label: "Catalogue" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms & Conditions" },
      ],
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
    langSwitch: { label: "EN", title: "English version" },
    breadcrumbHome: "Главная",
    breadcrumbEquipment: "Оборудование",
    heroTagline: "Подбор · спецификация · запрос",
    footer: {
      claim: "ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ ДЛЯ КАЗИНО",
      sister: "Компания в Грузии:",
      links: [
        { href: "/jackpot-screens", label: "Джекпот-табло" },
        { href: "/slot-machines", label: "Игровые автоматы" },
        { href: "/live-games", label: "Игровые столы" },
        { href: "/table-signs", label: "Табло для столов" },
        { href: "/accessories", label: "Аксессуары" },
        { href: "/about", label: "О компании" },
        { href: "/contact", label: "Контакты" },
        { href: "/privacy", label: "Privacy Policy (EN)" },
        { href: "/terms", label: "Terms & Conditions (EN)" },
      ],
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

export type Ui = (typeof ui)["en"] | (typeof ui)["ru"];
