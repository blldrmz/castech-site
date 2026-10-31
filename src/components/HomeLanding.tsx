import Link from "next/link";
import { catalogueCategories } from "@/content/catalogueData";
import { href, type Locale } from "@/lib/i18n";

const focus = ["led", "machines", "tables", "chairs", "shufflers", "chips", "cards", "accessories"];

const linkCls = "text-[#e3bc7b] underline-offset-4 hover:underline";
type LK = (path: string, label: string) => React.ReactNode;

const TEXT = {
  en: {
    eyebrow: "CASTECH / EQUIPMENT COLLECTION",
    h1a: "Casino equipment",
    h1b: "for the modern casino floor.",
    lead: (lk: LK) => (
      <>
        CasTech EQ by Virexa supplies casinos with new {lk("/live-games", "gaming tables")}, casino chairs, chips, layouts and{" "}
        {lk("/accessories", "accessories")}, sourced directly from manufacturers. We also offer quality{" "}
        {lk("/slot-machines", "used slot machines")}, refurbished shuffle machines and our own{" "}
        {lk("/jackpot-screens", "custom LED jackpot screens")}. With 22 years of casino experience and casino openings on three
        continents and on cruise ships, we help casinos choose, source and install the right equipment.
      </>
    ),
    explore: "Explore catalogue ↗",
    sales: "Contact sales",
    supplyTitle: "WHAT WE SUPPLY",
    supply: [
      ["LED jackpot screens", "Our own production, made to your size"],
      ["Used slot machines", "Condition confirmed per unit"],
      ["Refurbished shufflers", "Plus tables and floor equipment from direct manufacturer partners"],
    ],
    deptEyebrow: "SELECTED DEPARTMENTS",
    deptTitle: "Find your equipment.",
    allCategories: "All categories ↗",
    collection: "COLLECTION",
    ctaEyebrow: "PROFESSIONAL INQUIRIES",
    ctaTitle: "Let’s discuss your project.",
    ctaText: "Product details, availability and specifications on request.",
    ctaButton: "Request information ↗",
  },
  de: {
    eyebrow: "CASTECH / CASINO-AUSSTATTUNG",
    h1a: "Casino-Ausstattung",
    h1b: "für den modernen Spielsaal.",
    lead: (lk: LK) => (
      <>
        CasTech EQ by Virexa liefert Casinos neue {lk("/live-games", "Spieltische")}, Casino-Stühle, Chips, Tischtücher und {lk("/accessories", "Zubehör")} direkt
        von den Herstellern. Außerdem bieten wir hochwertige {lk("/slot-machines", "gebrauchte Spielautomaten")}, generalüberholte Shuffler und unsere eigenen{" "}
        {lk("/jackpot-screens", "LED-Jackpot-Bildschirme nach Maß")}. Mit 22 Jahren Casino-Erfahrung und Casino-Eröffnungen auf drei Kontinenten und auf
        Kreuzfahrtschiffen helfen wir Casinos, die richtige Ausstattung auszuwählen, zu beschaffen und zu installieren.
      </>
    ),
    explore: "Jackpot-Bildschirme ↗",
    sales: "Vertrieb kontaktieren",
    supplyTitle: "UNSER ANGEBOT",
    supply: [
      ["LED-Jackpot-Bildschirme", "Eigene Produktion, in Ihrer Größe"],
      ["Gebrauchte Spielautomaten", "Zustand je Gerät bestätigt"],
      ["Generalüberholte Shuffler", "Dazu Tische und Saalausstattung von Herstellerpartnern"],
    ],
    deptEyebrow: "BEREICHE",
    deptTitle: "Finden Sie Ihre Ausstattung.",
    allCategories: "Kontakt aufnehmen ↗",
    collection: "BEREICH",
    ctaEyebrow: "GESCHÄFTSANFRAGEN",
    ctaTitle: "Sprechen wir über Ihr Projekt.",
    ctaText: "Produktdetails, Verfügbarkeit und Spezifikationen auf Anfrage.",
    ctaButton: "Informationen anfordern ↗",
  },
  cs: {
    eyebrow: "CASTECH / VYBAVENÍ PRO KASINA",
    h1a: "Vybavení pro kasina",
    h1b: "od automatů po jackpotové obrazovky.",
    lead: (lk: LK) => (
      <>
        CasTech EQ by Virexa dodává kasinům nové {lk("/live-games", "herní stoly")}, kasinové židle, žetony, sukna a {lk("/accessories", "příslušenství")} přímo od
        výrobců. Nabízíme také kvalitní {lk("/slot-machines", "použité výherní automaty")}, repasované míchačky karet a vlastní{" "}
        {lk("/jackpot-screens", "LED jackpotové obrazovky na zakázku")}. Díky 22 letům zkušeností v kasinech a otevírání kasin na třech kontinentech a na
        výletních lodích pomáháme kasinům vybrat, dodat a nainstalovat správné vybavení.
      </>
    ),
    explore: "Jackpotové obrazovky ↗",
    sales: "Kontaktovat obchod",
    supplyTitle: "CO DODÁVÁME",
    supply: [
      ["LED jackpotové obrazovky", "Vlastní výroba, v libovolné velikosti"],
      ["Použité výherní automaty", "Stav ověřujeme u každého kusu"],
      ["Repasované míchačky karet", "A také stoly a vybavení sálu od partnerských výrobců"],
    ],
    deptEyebrow: "SEKCE",
    deptTitle: "Najděte své vybavení.",
    allCategories: "Kontaktujte nás ↗",
    collection: "SEKCE",
    ctaEyebrow: "OBCHODNÍ POPTÁVKY",
    ctaTitle: "Pojďme probrat váš projekt.",
    ctaText: "Podrobnosti, dostupnost a specifikace na vyžádání.",
    ctaButton: "Vyžádat informace ↗",
  },
  ru: {
    eyebrow: "CASTECH / ОБОРУДОВАНИЕ ДЛЯ КАЗИНО",
    h1a: "Оборудование для казино",
    h1b: "от автоматов до джекпот-табло.",
    lead: (lk: LK) => (
      <>
        CasTech EQ by Virexa поставляет казино новые {lk("/live-games", "игровые столы")}, кресла, фишки, сукно и{" "}
        {lk("/accessories", "аксессуары")} напрямую от производителей. Мы также предлагаем качественные{" "}
        {lk("/slot-machines", "игровые автоматы б/у")}, восстановленные шафлеры и собственные{" "}
        {lk("/jackpot-screens", "LED-табло джекпота под заказ")}. За плечами 22 года работы в казино и открытия казино на
        трёх континентах и на круизных лайнерах — мы помогаем выбрать, поставить и установить подходящее оборудование.
      </>
    ),
    explore: "Джекпот-табло ↗",
    sales: "Связаться с нами",
    supplyTitle: "ЧТО МЫ ПОСТАВЛЯЕМ",
    supply: [
      ["LED-табло джекпота", "Собственное производство, любой размер"],
      ["Игровые автоматы б/у", "Состояние проверяется по каждому аппарату"],
      ["Восстановленные шафлеры", "А также столы и оборудование зала от производителей-партнёров"],
    ],
    deptEyebrow: "РАЗДЕЛЫ",
    deptTitle: "Подберите оборудование.",
    allCategories: "Свяжитесь с нами ↗",
    collection: "РАЗДЕЛ",
    ctaEyebrow: "ЗАПРОСЫ ОТ КОМПАНИЙ",
    ctaTitle: "Обсудим ваш проект.",
    ctaText: "Подробности, наличие и спецификации — по запросу. Офис в Батуми отвечает на русском языке.",
    ctaButton: "Запросить информацию ↗",
  },
};

const CATEGORY_PATHS: Record<string, string> = {
  led: "/jackpot-screens",
  machines: "/slot-machines",
  tables: "/live-games",
  chairs: "/live-games#seating",
  shufflers: "/live-games#blackjack",
  chips: "/live-games#chips",
  cards: "/live-games#cards",
  accessories: "/accessories",
};

/** Category titles for the home grid outside English (English uses the catalogue titles). */
const CATEGORY_TITLES: Record<"de" | "cs" | "ru", Record<string, string>> = {
  de: { led: "LED-Jackpot-Bildschirme", machines: "Spielautomaten", tables: "Spieltische", chairs: "Casino-Stühle", shufflers: "Shuffler", chips: "Casino-Chips", cards: "Spielkarten", accessories: "Zubehör" },
  cs: { led: "LED jackpotové obrazovky", machines: "Výherní automaty", tables: "Herní stoly", chairs: "Kasinové židle", shufflers: "Míchačky karet", chips: "Kasinové žetony", cards: "Hrací karty", accessories: "Příslušenství" },
  ru: { led: "LED-табло джекпота", machines: "Игровые автоматы", tables: "Игровые столы", chairs: "Кресла для казино", shufflers: "Шафлеры", chips: "Фишки для казино", cards: "Игральные карты", accessories: "Аксессуары" },
};

export function HomeLanding({ locale = "en" }: { locale?: Locale }) {
  const t = TEXT[locale];
  const lk: LK = (path, label) => (
    <Link href={href(locale, path)} className={linkCls}>
      {label}
    </Link>
  );
  const lead = focus.map((x) => {
    const c = catalogueCategories.find((cat) => cat.slug === x)!;
    return locale !== "en"
      ? { slug: c.slug, cover: c.cover, title: CATEGORY_TITLES[locale][x], href: href(locale, CATEGORY_PATHS[x]) }
      : { slug: c.slug, cover: c.cover, title: c.title, href: `/catalog?category=${c.slug}` };
  });
  return (
    <div className="bg-[#080e16]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute right-[-15%] top-[-40%] h-[650px] w-[650px] rounded-full bg-[#c4a66e]/[.065] blur-[90px]" />
        <div className="relative castech-container grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-[1.15fr_.85fr] lg:py-40">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.27em] text-[#e2bb7a]">{t.eyebrow}</p>
            <h1
              className={`mt-8 max-w-4xl font-heading font-bold leading-[1.06] tracking-[-.07em] text-white ${
                locale !== "en" ? "text-[clamp(2.6rem,4.8vw,5rem)] tracking-[-.05em]" : "text-[clamp(3.2rem,6vw,6.2rem)]"
              }`}
            >
              {t.h1a}
              <br />
              <span className="text-[#e3bc7b]">{t.h1b}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-[1.95] text-slate-300">{t.lead(lk)}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={locale === "en" ? "/catalog" : href(locale, "/jackpot-screens")}
                className="inline-flex min-h-12 items-center rounded-md bg-[#e3bc7b] px-7 text-sm font-bold text-[#0b1420] hover:bg-[#f3d59e]"
              >
                {t.explore}
              </Link>
              <Link
                href={href(locale, "/contact")}
                className="inline-flex min-h-12 items-center rounded-md border border-white/25 px-7 text-sm font-semibold text-white hover:border-[#e3bc7b]"
              >
                {t.sales}
              </Link>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-[450px] lg:block">
            <div className="border border-[#e3bc7b]/25 p-5">
              <div className="border border-white/10 bg-[#101b28] p-9">
                <p className="text-[11px] uppercase tracking-[.25em] text-[#e3bc7b]">{t.supplyTitle}</p>
                <ul className="mt-9 space-y-7 text-white">
                  {t.supply.map(([title, text]) => (
                    <li key={title}>
                      <span className="block font-heading text-xl font-semibold tracking-[-.03em]">{title}</span>
                      <span className="mt-1 block border-t border-white/15 pt-3 text-sm text-slate-300">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="castech-container py-24 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#e3bc7b]">{t.deptEyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-.05em] text-white sm:text-5xl">{t.deptTitle}</h2>
          </div>
          <Link href={locale === "en" ? "/catalog" : href(locale, "/contact")} className="border-b border-[#e3bc7b]/70 pb-2 text-sm font-semibold text-[#e3bc7b]">
            {t.allCategories}
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lead.map((c, i) => (
            <Link key={c.slug} href={c.href} className="group flex flex-col overflow-hidden border border-white/10 bg-[#111b29] transition hover:border-[#e3bc7b]/60">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a121c]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.cover} alt={c.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain p-2 transition group-hover:scale-[1.03]" />
              </div>
              <div className="flex items-center justify-between p-6 sm:p-7">
                <div>
                  <span className="text-[11px] tracking-[.15em] text-[#e3bc7b]">0{i + 1} / {t.collection}</span>
                  <h3 className="mt-2 font-heading text-[22px] font-semibold tracking-[-.04em] text-white">{c.title}</h3>
                </div>
                <span className="text-xl text-[#e3bc7b]">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-t border-white/10 bg-[#101a27]">
        <div className="castech-container flex flex-col justify-between gap-7 py-20 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#e3bc7b]">{t.ctaEyebrow}</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-.04em] text-white">{t.ctaTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{t.ctaText}</p>
          </div>
          <Link href={href(locale, "/contact")} className="w-fit rounded-md bg-[#e3bc7b] px-8 py-4 text-sm font-bold text-[#09131c]">
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
