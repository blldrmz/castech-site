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
    ? "font-heading rounded-xl border border-[#c4a66e]/45 bg-[#c4a66e]/[0.12] px-3.5 py-2 text-[12px] font-semibold tracking-wide text-[#f3d59e] transition"
    : "font-heading rounded-xl border border-white/[0.08] bg-zinc-900/50 px-3.5 py-2 text-[12px] font-semibold tracking-wide text-zinc-300 transition hover:border-white/15 hover:text-zinc-100";

export function InventoryCatalog({ locale = "en" }: { locale?: Locale }) {
  const t = TEXT[locale];
  const v = (x: string) => (locale === "ru" ? RU_VALUES[x] ?? x : x);
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
    <section className="border-b border-white/[0.06] bg-[#070d15]" aria-labelledby="slot-machine-catalog-heading">
      <div className="castech-container castech-section-y">
        <div className="max-w-3xl">
          <h2 id="slot-machine-catalog-heading" className="castech-h2">{t.heading}</h2>
          <p className="castech-body mt-5 text-zinc-400 sm:mt-6">{t.intro}</p>
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{t.brand}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label={t.brandFilter}>
              {inventoryBrandTabs.map((t) => (
                <button key={t.id} type="button" role="tab" aria-selected={brandTab === t.id} onClick={() => setBrandTab(t.id)} className={chip(brandTab === t.id)}>
                  {v(t.label)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{t.format}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label={t.formatFilter}>
              {inventoryTypeFilters.map((id) => (
                <button key={id} type="button" role="tab" aria-selected={typeFilter === id} onClick={() => setTypeFilter(id)} className={chip(typeFilter === id)}>
                  {v(id)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="font-heading mt-10 text-sm font-medium text-zinc-500">
          {t.showing} <span className="text-zinc-300">{filtered.length}</span> {t.models(filtered.length)}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((m) => (
            <article key={m.image} className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1722] transition hover:border-[#c4a66e]/35">
              {m.image ? (
                <button
                  type="button"
                  onClick={() => setLightbox(m)}
                  className="relative flex h-64 items-center justify-center bg-[#0b131d] p-4 outline-none ring-[#c4a66e]/40 focus-visible:ring-2"
                  aria-label={`${t.enlarge}: ${title(m)}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={`${title(m)}, ${v(m.condition).toLowerCase()}`} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </button>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center gap-2 bg-[#0b131d] p-4 text-center">
                  <span className="font-heading text-sm font-semibold text-zinc-300">{m.brand}</span>
                  <span className="text-xs text-zinc-500">{t.photoOnRequest}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-wide text-[#e3bc7b]/90">
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
                        <dt className="text-zinc-500">{k}</dt>
                        <dd className="text-zinc-200">{v(String(val))}</dd>
                      </div>
                    ))}
                  {!m.gamePack ? (
                    <>
                      <dt className="text-zinc-500">{t.details}</dt>
                      <dd className="text-zinc-200">{t.detailsOnRequest}</dd>
                    </>
                  ) : null}
                </dl>
                <Link href={inquiry(m)} className="mt-auto pt-4 text-xs font-semibold text-[#e3bc7b] hover:text-[#f3d59e]">
                  {t.request}
                </Link>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-2xl border border-dashed border-[#c4a66e]/45 bg-[#c4a66e]/[0.05] p-6">
            <div>
              <p className="font-heading text-[11px] font-semibold uppercase tracking-wide text-[#e3bc7b]">{t.notListed}</p>
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
