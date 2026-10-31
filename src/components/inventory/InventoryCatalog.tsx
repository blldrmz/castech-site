"use client";

import {
  inventoryBrandTabs,
  inventorySlotMachines,
  inventoryTypeFilters,
  matchesInventoryTypeFilter,
  type InventoryBrandTabId,
  type InventorySlotMachine,
  type InventoryTypeFilterId,
} from "@/content/inventory";
import { href, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { srcSetFor } from "@/lib/srcset";

const title = (m: InventorySlotMachine) => `${m.brand} ${m.model}`;

const RU_VALUES: Record<string, string> = {
  "On request": "По запросу",
  Included: "Включён",
  "Choice of games": "Набор игр на выбор",
  "Choice of game": "Игра на выбор",
  "Choice of multigames": "Мультигейм на выбор",
  "Choice of games, jackpot option": "Набор игр на выбор, опция джекпота",
  "Any game choice, including jackpot": "Любые игры, включая джекпот",
  Multigame: "Мультигейм",
  "Multigame and single game": "Мультигейм и одиночные игры",
  "New U-Switch multigame": "Новый мультигейм U-Switch",
  "130-game multigame": "Мультигейм на 130 игр",
  "Premium games": "Премиум-игры",
  "Premium S games": "Игры Premium S",
  "Multi Win games": "Игры Multi Win",
  "Selexion multigame": "Мультигейм Selexion",
  "Electronic roulette": "Электронная рулетка",
  "Superia Cash Connection 2, linked multigame mix": "Superia Cash Connection 2, связанный мультигейм",
  "Hot & Wild progressive, incl. sign and controller": "Прогрессив Hot & Wild, с табло и контроллером",
  "VIP lounge cabinet with integrated seat.": "VIP-кабинет со встроенным креслом.",
  Upright: "Стандартный корпус",
  "Slant Top": "Наклонный корпус",
  "Dual Screen": "Два экрана",
  "VIP Lounge": "VIP-кабинет",
  "Electronic Roulette": "Электронная рулетка",
  All: "Все",
  "Pre-owned": "Б/у",
  New: "Новый",
};

const DE_VALUES: Record<string, string> = {
  "On request": "Auf Anfrage",
  "Included": "Inklusive",
  "Choice of games": "Spiele nach Wahl",
  "Choice of game": "Spiel nach Wahl",
  "Choice of multigames": "Multigame nach Wahl",
  "Choice of games, jackpot option": "Spiele nach Wahl, Jackpot-Option",
  "Any game choice, including jackpot": "Beliebige Spiele, inklusive Jackpot",
  "Multigame": "Multigame",
  "Multigame and single game": "Multigame und Einzelspiel",
  "New U-Switch multigame": "Neues U-Switch Multigame",
  "130-game multigame": "Multigame mit 130 Spielen",
  "Premium games": "Premium-Spiele",
  "Premium S games": "Premium-S-Spiele",
  "Multi Win games": "Multi-Win-Spiele",
  "Selexion multigame": "Selexion Multigame",
  "Electronic roulette": "Elektronisches Roulette",
  "Superia Cash Connection 2, linked multigame mix": "Superia Cash Connection 2, verlinkter Multigame-Mix",
  "Hot & Wild progressive, incl. sign and controller": "Hot & Wild Progressive, inkl. Anzeige und Controller",
  "VIP lounge cabinet with integrated seat.": "VIP-Lounge-Gehäuse mit integriertem Sitz.",
  "Upright": "Upright",
  "Slant Top": "Slant Top",
  "Dual Screen": "Zwei Bildschirme",
  "VIP Lounge": "VIP-Lounge",
  "Electronic Roulette": "Elektronisches Roulette",
  "All": "Alle",
  "Pre-owned": "Gebraucht",
  "New": "Neu",
};

const CS_VALUES: Record<string, string> = {
  "On request": "Na vyžádání",
  "Included": "Součástí",
  "Choice of games": "Výběr her",
  "Choice of game": "Hra dle výběru",
  "Choice of multigames": "Multigame dle výběru",
  "Choice of games, jackpot option": "Výběr her, možnost jackpotu",
  "Any game choice, including jackpot": "Libovolné hry včetně jackpotu",
  "Multigame": "Multigame",
  "Multigame and single game": "Multigame i jednotlivé hry",
  "New U-Switch multigame": "Nový multigame U-Switch",
  "130-game multigame": "Multigame se 130 hrami",
  "Premium games": "Prémiové hry",
  "Premium S games": "Hry Premium S",
  "Multi Win games": "Hry Multi Win",
  "Selexion multigame": "Multigame Selexion",
  "Electronic roulette": "Elektronická ruleta",
  "Superia Cash Connection 2, linked multigame mix": "Superia Cash Connection 2, propojený multigame",
  "Hot & Wild progressive, incl. sign and controller": "Progresivní Hot & Wild, včetně displeje a kontroléru",
  "VIP lounge cabinet with integrated seat.": "VIP kabinet s integrovaným sedadlem.",
  "Upright": "Upright",
  "Slant Top": "Slant Top",
  "Dual Screen": "Dvě obrazovky",
  "VIP Lounge": "VIP kabinet",
  "Electronic Roulette": "Elektronická ruleta",
  "All": "Vše",
  "Pre-owned": "Použité",
  "New": "Nové",
};

const VALUES: Record<Exclude<Locale, "en">, Record<string, string>> = { de: DE_VALUES, cs: CS_VALUES, ru: RU_VALUES };

const TEXT = {
  en: {
    heading: "Slot machines",
    intro: (
      <>
        Machines are <strong className="text-zinc-200">pre-owned</strong> unless marked new. Game packs, bill validators and years are listed per
        model; condition, current availability, price and lead time are confirmed per unit on request. CasTech EQ is not an authorized dealer or distributor of any brand shown; manufacturer names are used only to
        identify cabinet models.
      </>
    ),
    brand: "Brand",
    brandFilter: "Filter by brand",
    format: "Format",
    formatFilter: "Filter by cabinet format",
    showing: "Showing",
    models: (n: number) => (n === 1 ? "model" : "models"),
    enlarge: "Enlarge photo",
    photoOnRequest: "Photo on request",
    gamePack: "Game pack",
    billValidator: "Bill validator",
    year: "Year",
    printer: "Printer",
    details: "Details",
    detailsOnRequest: "Game mix and year on request",
    request: "Request details ↗",
    notListed: "Not on the list?",
    tellUs: "Tell us the machine you are looking for.",
    tellUsText: "Send us the brand, model, cabinet type or game mix you need. We will search our supplier network and find it for you.",
    find: "Find a machine for me",
    close: "Close",
  },
  de: {
    heading: "Spielautomaten",
    intro: (
      <>
        Alle Automaten sind <strong className="text-zinc-200">gebraucht</strong>, sofern nicht als neu gekennzeichnet. Spielepakete, Banknotenprüfer und Baujahre sind
        je Modell angegeben; Zustand, Verfügbarkeit, Preis und Lieferzeit werden je Gerät auf Anfrage bestätigt. CasTech EQ ist kein autorisierter Händler oder Distributor der gezeigten Marken; Herstellernamen dienen nur der Bezeichnung der Gehäusemodelle.
      </>
    ),
    brand: "Hersteller",
    brandFilter: "Nach Hersteller filtern",
    format: "Gehäuse",
    formatFilter: "Nach Gehäusetyp filtern",
    showing: "Angezeigt:",
    models: (n: number) => (n === 1 ? "Modell" : "Modelle"),
    enlarge: "Foto vergrößern",
    photoOnRequest: "Foto auf Anfrage",
    gamePack: "Spiele",
    billValidator: "Banknotenprüfer",
    year: "Baujahr",
    printer: "Drucker",
    details: "Details",
    detailsOnRequest: "Spiele und Baujahr auf Anfrage",
    request: "Details anfragen ↗",
    notListed: "Nicht in der Liste?",
    tellUs: "Sagen Sie uns, welchen Automaten Sie suchen.",
    tellUsText: "Nennen Sie Hersteller, Modell, Gehäusetyp oder Spielemix. Wir suchen ihn über unser Lieferantennetzwerk für Sie.",
    find: "Automaten für mich finden",
    close: "Schließen",
  },
  cs: {
    heading: "Výherní automaty",
    intro: (
      <>
        Všechny automaty jsou <strong className="text-zinc-200">použité</strong>, pokud není uvedeno jinak. Herní sady, akceptory bankovek a roky výroby jsou uvedeny u
        každého modelu; stav, dostupnost, cenu a dodací lhůtu potvrzujeme u každého kusu na vyžádání. CasTech EQ není autorizovaným prodejcem ani distributorem uvedených značek; názvy výrobců slouží pouze k označení modelů.
      </>
    ),
    brand: "Výrobce",
    brandFilter: "Filtrovat podle výrobce",
    format: "Kabinet",
    formatFilter: "Filtrovat podle typu kabinetu",
    showing: "Zobrazeno modelů:",
    models: () => "",
    enlarge: "Zvětšit fotografii",
    photoOnRequest: "Fotografie na vyžádání",
    gamePack: "Hry",
    billValidator: "Akceptor bankovek",
    year: "Rok výroby",
    printer: "Tiskárna",
    details: "Podrobnosti",
    detailsOnRequest: "Hry a rok výroby na vyžádání",
    request: "Vyžádat podrobnosti ↗",
    notListed: "Není v seznamu?",
    tellUs: "Napište nám, jaký automat hledáte.",
    tellUsText: "Uveďte výrobce, model, typ kabinetu nebo sadu her. Najdeme ho pro vás v naší síti dodavatelů.",
    find: "Najít automat",
    close: "Zavřít",
  },
  ru: {
    heading: "Игровые автоматы",
    intro: (
      <>
        Все автоматы — <strong className="text-zinc-200">б/у</strong>, если не указано иное. Набор игр, купюроприёмник и год указаны для каждой
        модели; состояние, наличие, цена и срок поставки подтверждаются по каждому аппарату по запросу. CasTech EQ не является официальным дилером или дистрибьютором указанных брендов; названия производителей используются только для обозначения моделей.
      </>
    ),
    brand: "Производитель",
    brandFilter: "Фильтр по производителю",
    format: "Корпус",
    formatFilter: "Фильтр по типу корпуса",
    showing: "Показано моделей:",
    models: () => "",
    enlarge: "Увеличить фото",
    photoOnRequest: "Фото по запросу",
    gamePack: "Игры",
    billValidator: "Купюроприёмник",
    year: "Год",
    printer: "Принтер",
    details: "Подробности",
    detailsOnRequest: "Набор игр и год по запросу",
    request: "Запросить подробности ↗",
    notListed: "Нет в списке?",
    tellUs: "Напишите, какой автомат вам нужен.",
    tellUsText: "Укажите производителя, модель, тип корпуса или набор игр. Мы найдём его через нашу сеть поставщиков.",
    find: "Найти автомат",
    close: "Закрыть",
  },
};

const chip = (active: boolean) =>
  active
    ? "font-heading rounded-xl border border-gold-deep/45 bg-gold-deep/[0.12] px-3.5 py-2 text-[12px] font-semibold tracking-wide text-gold-light transition"
    : "font-heading rounded-xl border border-white/[0.08] bg-zinc-900/50 px-3.5 py-2 text-[12px] font-semibold tracking-wide text-zinc-300 transition hover:border-white/15 hover:text-zinc-100";

export function InventoryCatalog({ locale = "en" }: { locale?: Locale }) {
  const t = TEXT[locale];
  const v = (x: string) => (locale === "en" ? x : VALUES[locale][x] ?? x);
  const inquiry = (m: InventorySlotMachine) => href(locale, `/contact?item=${encodeURIComponent(title(m))}`);
  const [brandTab, setBrandTab] = useState<InventoryBrandTabId>("all");
  const [typeFilter, setTypeFilter] = useState<InventoryTypeFilterId>("All");
  const [lightbox, setLightbox] = useState<InventorySlotMachine | null>(null);
  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, close]);

  const filtered = useMemo(() => {
    const tab = inventoryBrandTabs.find((t) => t.id === brandTab);
    return inventorySlotMachines.filter(
      (m) => (!tab || tab.brandKey === null || m.brand === tab.brandKey) && matchesInventoryTypeFilter(m, typeFilter),
    );
  }, [brandTab, typeFilter]);

  return (
    <section className="border-b border-white/[0.06] bg-ink" aria-labelledby="slot-machine-catalog-heading">
      <div className="castech-container castech-section-y">
        <div className="max-w-3xl">
          <h2 id="slot-machine-catalog-heading" className="castech-h2">{t.heading}</h2>
          <p className="castech-body mt-5 text-zinc-400 sm:mt-6">{t.intro}</p>
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">{t.brand}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label={t.brandFilter}>
              {inventoryBrandTabs.map((t) => (
                <button key={t.id} type="button" role="tab" aria-selected={brandTab === t.id} onClick={() => setBrandTab(t.id)} className={chip(brandTab === t.id)}>
                  {v(t.label)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">{t.format}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label={t.formatFilter}>
              {inventoryTypeFilters.map((id) => (
                <button key={id} type="button" role="tab" aria-selected={typeFilter === id} onClick={() => setTypeFilter(id)} className={chip(typeFilter === id)}>
                  {v(id)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="font-heading mt-10 text-sm font-medium text-zinc-400">
          {t.showing} <span className="text-zinc-300">{filtered.length}</span> {t.models(filtered.length)}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((m) => (
            <article key={m.image} className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-2 transition hover:border-gold-deep/35">
              {m.image ? (
                <button
                  type="button"
                  onClick={() => setLightbox(m)}
                  className="relative flex h-64 items-center justify-center bg-[radial-gradient(ellipse_at_50%_38%,#1b2838_0%,#0b131d_72%)] p-3 outline-none ring-gold-deep/40 focus-visible:ring-2"
                  aria-label={`${t.enlarge}: ${title(m)}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} srcSet={srcSetFor(m.image)} sizes="(min-width:1024px) 25vw, 50vw" alt={`${title(m)}, ${v(m.condition).toLowerCase()}`} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </button>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center gap-2 bg-[#0b131d] p-4 text-center">
                  <span className="font-heading text-sm font-semibold text-zinc-300">{m.brand}</span>
                  <span className="text-xs text-zinc-400">{t.photoOnRequest}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-wide text-gold/90">
                  {v(m.type)} · {v(m.condition)}
                </p>
                <h3 className="font-heading mt-1.5 text-base font-bold leading-snug tracking-tight text-zinc-50">{title(m)}</h3>
                {m.note ? <p className="mt-2 text-xs font-medium leading-relaxed text-zinc-400">{v(m.note)}</p> : null}
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs leading-5">
                  {(
                    [
                      [t.gamePack, m.gamePack],
                      [t.billValidator, m.billValidator],
                      [t.year, m.year],
                      [t.printer, m.printer],
                    ] as const
                  )
                    .filter(([, val]) => val)
                    .map(([k, val]) => (
                      <div key={k} className="contents">
                        <dt className="text-zinc-400">{k}</dt>
                        <dd className="text-zinc-200">{v(String(val))}</dd>
                      </div>
                    ))}
                  {!m.gamePack ? (
                    <>
                      <dt className="text-zinc-400">{t.details}</dt>
                      <dd className="text-zinc-200">{t.detailsOnRequest}</dd>
                    </>
                  ) : null}
                </dl>
                <Link href={inquiry(m)} className="mt-auto pt-4 text-xs font-semibold text-gold hover:text-gold-light">
                  {t.request}
                </Link>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-2xl border border-dashed border-gold-deep/45 bg-gold-deep/[0.05] p-6">
            <div>
              <p className="font-heading text-[11px] font-semibold uppercase tracking-wide text-gold">{t.notListed}</p>
              <h3 className="font-heading mt-2 text-lg font-bold leading-snug tracking-tight text-zinc-50">{t.tellUs}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {t.tellUsText}
              </p>
            </div>
            <Link href={href(locale, "/contact?item=Find%20a%20machine")} className="castech-btn-primary mt-6 self-start">
              {t.find} <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </article>
        </div>
      </div>

      {lightbox ? (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={title(lightbox)} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox.image ?? undefined} alt={title(lightbox)} className="max-h-[82vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm font-semibold text-zinc-200">{title(lightbox)} · {v(lightbox.type)}</p>
          <button type="button" onClick={close} aria-label={t.close} className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white/10 text-2xl text-white hover:bg-white/20">×</button>
        </div>
      ) : null}
    </section>
  );
}
