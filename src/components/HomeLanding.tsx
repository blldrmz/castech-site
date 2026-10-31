import Link from "next/link";
import { catalogueCategories } from "@/content/catalogueData";
import { href, type Locale } from "@/lib/i18n";

const focus = ["led", "machines", "tables", "chairs", "shufflers", "chips", "cards", "accessories"];

const linkCls = "text-[#e3bc7b] underline-offset-4 hover:underline";

const TEXT = {
  en: {
    eyebrow: "CASTECH / EQUIPMENT COLLECTION",
    h1a: "Casino equipment",
    h1b: "for the modern casino floor.",
    lead: (
      <>
        CasTech EQ by Virexa supplies casinos with new <Link href="/live-games" className={linkCls}>gaming tables</Link>, casino chairs, chips, layouts and{" "}
        <Link href="/accessories" className={linkCls}>accessories</Link>, sourced directly from manufacturers. We also offer quality{" "}
        <Link href="/slot-machines" className={linkCls}>used slot machines</Link>, refurbished shuffle machines and our own{" "}
        <Link href="/jackpot-screens" className={linkCls}>custom LED jackpot screens</Link>. With 22 years of casino experience and casino openings on three
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
  ru: {
    eyebrow: "CASTECH / ОБОРУДОВАНИЕ ДЛЯ КАЗИНО",
    h1a: "Оборудование для казино",
    h1b: "от автоматов до джекпот-табло.",
    lead: (
      <>
        CasTech EQ by Virexa поставляет казино новые <Link href="/ru/live-games/" className={linkCls}>игровые столы</Link>, кресла, фишки, сукно и{" "}
        <Link href="/ru/accessories/" className={linkCls}>аксессуары</Link> напрямую от производителей. Мы также предлагаем качественные{" "}
        <Link href="/ru/slot-machines/" className={linkCls}>игровые автоматы б/у</Link>, восстановленные шафлеры и собственные{" "}
        <Link href="/ru/jackpot-screens/" className={linkCls}>LED-табло джекпота под заказ</Link>. За плечами 22 года работы в казино и открытия казино на
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

/** Russian titles and Russian page targets for the home category grid. */
const RU_CATEGORIES: Record<string, { title: string; href: string }> = {
  led: { title: "LED-табло джекпота", href: "/ru/jackpot-screens/" },
  machines: { title: "Игровые автоматы", href: "/ru/slot-machines/" },
  tables: { title: "Игровые столы", href: "/ru/live-games/" },
  chairs: { title: "Кресла для казино", href: "/ru/live-games/#seating" },
  shufflers: { title: "Шафлеры", href: "/ru/live-games/#blackjack" },
  chips: { title: "Фишки для казино", href: "/ru/live-games/#chips" },
  cards: { title: "Игральные карты", href: "/ru/live-games/#cards" },
  accessories: { title: "Аксессуары", href: "/ru/accessories/" },
};

export function HomeLanding({ locale = "en" }: { locale?: Locale }) {
  const t = TEXT[locale];
  const lead = focus.map((x) => {
    const c = catalogueCategories.find((cat) => cat.slug === x)!;
    const ru = RU_CATEGORIES[x];
    return locale === "ru"
      ? { slug: c.slug, cover: c.cover, title: ru.title, href: ru.href }
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
                locale === "ru" ? "text-[clamp(2.6rem,4.8vw,5rem)] tracking-[-.05em]" : "text-[clamp(3.2rem,6vw,6.2rem)]"
              }`}
            >
              {t.h1a}
              <br />
              <span className="text-[#e3bc7b]">{t.h1b}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-[1.95] text-slate-300">{t.lead}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={locale === "ru" ? "/ru/jackpot-screens/" : "/catalog"}
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
          <Link href={locale === "ru" ? "/ru/contact/" : "/catalog"} className="border-b border-[#e3bc7b]/70 pb-2 text-sm font-semibold text-[#e3bc7b]">
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
