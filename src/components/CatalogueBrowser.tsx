"use client";
import { useEffect, useMemo, useState } from "react";
import { catalogueCategories } from "@/content/catalogueData";
import { jackpotGallery } from "@/content/jackpotScreens";
import { csJackpot } from "@/content/cs/main";
import { csCatalogUi, csCategoryTitles, csNotes, csTitles } from "@/content/cs/catalog";
import { href, type Locale } from "@/lib/i18n";
import { srcSetFor } from "@/lib/srcset";

const enUi = {
  eyebrow: "THE COLLECTION / 2026",
  title: "Product catalogue.",
  srTitle: " CasTech EQ casino equipment: jackpot screens, slot machines, gaming tables, chairs and accessories",
  lead: "Browse our equipment by category, or search by product name. Select a category to view its products.",
  departments: "PRODUCT DEPARTMENTS",
  navLabel: "Product categories",
  category: "CATEGORY",
  searchLabel: "Search in this category",
  searchPlaceholder: "Search products…",
  product: "PRODUCT",
  details: "Request details ↗",
  empty: "No matches in this category.",
  note: "Specifications, condition and availability are confirmed per inquiry. Slot machines are pre-owned and shufflers refurbished. CasTech EQ is not an authorized dealer or distributor of any brand named here.",
};

// LED items mirror the jackpot gallery, whose Czech captions already exist.
const csLed: Record<string, string> = Object.fromEntries(jackpotGallery.map((g, i) => [g.caption, csJackpot.gallery[i]?.caption ?? g.caption]));

function localize(locale: Locale) {
  if (locale !== "cs") return { ui: enUi, cats: catalogueCategories };
  const cats = catalogueCategories.map((c) => ({
    ...c,
    title: csCategoryTitles[c.slug] ?? c.title,
    items: c.items.map((it) => ({
      ...it,
      title: csTitles[it.title] ?? csLed[it.title] ?? it.title,
      note: it.note ? csNotes[it.note] ?? it.note : "",
    })),
  }));
  return { ui: csCatalogUi, cats };
}

export function CatalogueBrowser({ locale = "en" }: { locale?: Locale }) {
  const { ui: t, cats: all } = useMemo(() => localize(locale), [locale]);
  const [active, setActive] = useState("led");
  const [term, setTerm] = useState("");
  // Read ?category= and ?q= after load, so the full catalogue is in the static HTML for search engines.
  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const slug = search.get("category");
    if (slug && all.some((x) => x.slug === slug)) setActive(slug);
    const q = search.get("q");
    if (q) setTerm(q);
  }, [all]);
  const category = all.find((x) => x.slug === active)!;
  const products = useMemo(() => category.items.filter((x) => x.title.toLowerCase().includes(term.trim().toLowerCase())), [term, category]);
  return (
    <div className="castech-container py-14 sm:py-20">
      <div className="mb-12">
        <p className="text-[11px] font-bold uppercase tracking-[.2em] text-gold">{t.eyebrow}</p>
        <h1 className="mt-5 font-heading text-4xl font-bold tracking-[-.06em] text-white sm:text-6xl">
          {t.title}
          <span className="sr-only">{t.srTitle}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-8 text-slate-300">{t.lead}</p>
      </div>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-12">
        <aside className="self-start lg:sticky lg:top-24">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.2em] text-slate-400">{t.departments}</p>
          <nav aria-label={t.navLabel} className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-1">
            {all.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => {
                  setActive(c.slug);
                  setTerm("");
                }}
                className={`flex min-h-12 items-center justify-between gap-2 rounded-sm border px-3 py-3 text-left text-[12px] font-semibold transition sm:text-[13px] ${active === c.slug ? "border-gold bg-gold/10 text-gold-light" : "border-white/10 bg-[#121e2b] text-slate-300 hover:border-gold/40"}`}
              >
                <span>{c.title}</span>
              </button>
            ))}
          </nav>
        </aside>
        <div>
          <div className="flex flex-wrap items-end justify-between gap-5 border-b border-white/15 pb-7">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-gold">
                {t.category} / {String(all.findIndex((x) => x.slug === active) + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-[-.05em] text-white sm:text-4xl">{category.title}</h2>
            </div>
            <input
              aria-label={t.searchLabel}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full rounded-sm border border-white/15 bg-[#141f2c] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-gold sm:w-56"
            />
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((item, i) => (
              <article key={item.title + i} className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface">
                <div className={`relative aspect-[4/3] overflow-hidden ${active === "chairs" ? "bg-[#f4f2f6]" : active === "machines" ? "bg-[#0f1621]" : "bg-surface-media"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    srcSet={srcSetFor(item.image)}
                    sizes="(min-width:1280px) 300px, (min-width:640px) 45vw, 100vw"
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-contain ${active === "chairs" ? "p-3 mix-blend-multiply" : "p-2"}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold tracking-[.15em] text-gold">
                    {t.product} {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-heading text-base font-semibold leading-6 text-white">{item.title}</h3>
                  {item.note && <p className="mt-2 text-[13px] leading-6 text-slate-300">{item.note}</p>}
                  <a className="mt-auto w-fit pt-5 text-xs font-semibold text-gold hover:underline" href={href(locale, `/contact/?item=${encodeURIComponent(item.title)}`)}>
                    {t.details}
                  </a>
                </div>
              </article>
            ))}
          </div>
          {!products.length && <p className="py-12 text-sm text-slate-400">{t.empty}</p>}
          <p className="mt-8 text-xs leading-6 text-slate-400">{t.note}</p>
        </div>
      </div>
    </div>
  );
}
