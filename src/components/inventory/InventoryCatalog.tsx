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
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

const title = (m: InventorySlotMachine) => `${m.brand} ${m.model}`;
const inquiry = (m: InventorySlotMachine) => `/contact?item=${encodeURIComponent(title(m))}`;

const chip = (active: boolean) =>
  active
    ? "font-heading rounded-xl border border-[#c4a66e]/45 bg-[#c4a66e]/[0.12] px-3.5 py-2 text-[12px] font-semibold tracking-wide text-[#f3d59e] transition"
    : "font-heading rounded-xl border border-white/[0.08] bg-zinc-900/50 px-3.5 py-2 text-[12px] font-semibold tracking-wide text-zinc-300 transition hover:border-white/15 hover:text-zinc-100";

export function InventoryCatalog() {
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
          <h2 id="slot-machine-catalog-heading" className="castech-h2">Slot machines</h2>
          <p className="castech-body mt-5 text-zinc-400 sm:mt-6">
            Machines are <strong className="text-zinc-200">pre-owned</strong> unless marked new. Game packs, bill validators and years are listed per
            model; condition, current availability, price and lead time are confirmed per unit on request. CasTech EQ is not an authorized dealer or distributor of any brand shown; manufacturer names are used only to
            identify cabinet models.
          </p>
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Brand</p>
            <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Filter by brand">
              {inventoryBrandTabs.map((t) => (
                <button key={t.id} type="button" role="tab" aria-selected={brandTab === t.id} onClick={() => setBrandTab(t.id)} className={chip(brandTab === t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Format</p>
            <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Filter by cabinet format">
              {inventoryTypeFilters.map((id) => (
                <button key={id} type="button" role="tab" aria-selected={typeFilter === id} onClick={() => setTypeFilter(id)} className={chip(typeFilter === id)}>
                  {id}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="font-heading mt-10 text-sm font-medium text-zinc-500">
          Showing <span className="text-zinc-300">{filtered.length}</span> {filtered.length === 1 ? "model" : "models"}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((m) => (
            <article key={m.image} className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1722] transition hover:border-[#c4a66e]/35">
              {m.image ? (
                <button
                  type="button"
                  onClick={() => setLightbox(m)}
                  className="relative flex h-64 items-center justify-center bg-[#0b131d] p-4 outline-none ring-[#c4a66e]/40 focus-visible:ring-2"
                  aria-label={`Enlarge photo: ${title(m)}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={`${title(m)}, ${m.condition.toLowerCase()}`} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </button>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center gap-2 bg-[#0b131d] p-4 text-center">
                  <span className="font-heading text-sm font-semibold text-zinc-300">{m.brand}</span>
                  <span className="text-xs text-zinc-500">Photo on request</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-wide text-[#e3bc7b]/90">
                  {m.type} · {m.condition}
                </p>
                <h3 className="font-heading mt-1.5 text-base font-bold leading-snug tracking-tight text-zinc-50">{title(m)}</h3>
                {m.note ? <p className="mt-2 text-xs font-medium leading-relaxed text-zinc-400">{m.note}</p> : null}
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs leading-5">
                  {(
                    [
                      ["Game pack", m.gamePack],
                      ["Bill validator", m.billValidator],
                      ["Year", m.year],
                      ["Printer", m.printer],
                    ] as const
                  )
                    .filter(([, v]) => v)
                    .map(([k, v]) => (
                      <div key={k} className="contents">
                        <dt className="text-zinc-500">{k}</dt>
                        <dd className="text-zinc-200">{v}</dd>
                      </div>
                    ))}
                  {!m.gamePack ? (
                    <>
                      <dt className="text-zinc-500">Details</dt>
                      <dd className="text-zinc-200">Game mix and year on request</dd>
                    </>
                  ) : null}
                </dl>
                <Link href={inquiry(m)} className="mt-auto pt-4 text-xs font-semibold text-[#e3bc7b] hover:text-[#f3d59e]">
                  Request details ↗
                </Link>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-2xl border border-dashed border-[#c4a66e]/45 bg-[#c4a66e]/[0.05] p-6">
            <div>
              <p className="font-heading text-[11px] font-semibold uppercase tracking-wide text-[#e3bc7b]">Not on the list?</p>
              <h3 className="font-heading mt-2 text-lg font-bold leading-snug tracking-tight text-zinc-50">Tell us the machine you are looking for.</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Send us the brand, model, cabinet type or game mix you need. We will search our supplier network and find it for you.
              </p>
            </div>
            <Link href="/contact?item=Find%20a%20machine" className="castech-btn-primary mt-6 self-start">
              Find a machine for me <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </article>
        </div>
      </div>

      {lightbox ? (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={title(lightbox)} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox.image ?? undefined} alt={title(lightbox)} className="max-h-[82vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm font-semibold text-zinc-200">{title(lightbox)} · {lightbox.type}</p>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white/10 text-2xl text-white hover:bg-white/20">×</button>
        </div>
      ) : null}
    </section>
  );
}
