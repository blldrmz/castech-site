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
import { slotCatalogImageUrl } from "@/lib/slotImages";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

function filterByBrand(
  items: InventorySlotMachine[],
  brandTabId: InventoryBrandTabId,
): InventorySlotMachine[] {
  const tab = inventoryBrandTabs.find((t) => t.id === brandTabId);
  if (!tab || tab.brandKey === null) return items;
  return items.filter((m) => m.brand === tab.brandKey);
}

function groupByBrand(items: InventorySlotMachine[]): [string, InventorySlotMachine[]][] {
  const map = new Map<string, InventorySlotMachine[]>();
  for (const m of items) {
    const list = map.get(m.brand) ?? [];
    list.push(m);
    map.set(m.brand, list);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export function InventoryCatalog() {
  const [brandTab, setBrandTab] = useState<InventoryBrandTabId>("egt");
  const [typeFilter, setTypeFilter] =
    useState<InventoryTypeFilterId>("All");
  const [lightbox, setLightbox] = useState<InventorySlotMachine | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, closeLightbox]);

  const filtered = useMemo(() => {
    let list = filterByBrand(inventorySlotMachines, brandTab);
    list = list.filter((m) => matchesInventoryTypeFilter(m, typeFilter));
    return list;
  }, [brandTab, typeFilter]);

  const brandSections = useMemo(() => groupByBrand(filtered), [filtered]);

  return (
    <section
      className="border-b border-white/[0.06] bg-[#050507]"
      aria-labelledby="slot-machine-catalog-heading"
    >
      <div className="castech-container castech-section-y">
        <div className="max-w-3xl">
          <h2 id="slot-machine-catalog-heading" className="castech-h2">
            Slot machines
          </h2>
          <p className="castech-body mt-5 text-zinc-400 sm:mt-6">
            Each row shows the <strong className="text-zinc-200">manufacturer logo</strong>{" "}
            (Wikimedia where we have a stable file, otherwise a clean initials badge).
            Click opens a 256×256 preview. Use{" "}
            <strong className="text-zinc-200">All</strong> at the end of the brand row only
            when you want every manufacturer at once.
          </p>
        </div>

        <div className="mt-10 space-y-8 sm:mt-12">
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
              Brand
            </p>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter by brand"
            >
              {inventoryBrandTabs.map((tab) => {
                const active = brandTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setBrandTab(tab.id)}
                    className={
                      active
                        ? "font-heading rounded-xl border border-emerald-500/45 bg-emerald-500/[0.12] px-3.5 py-2 text-[12px] font-semibold tracking-wide text-emerald-100 shadow-sm shadow-emerald-500/10 transition hover:bg-emerald-500/[0.16]"
                        : "font-heading rounded-xl border border-white/[0.08] bg-zinc-900/50 px-3.5 py-2 text-[12px] font-semibold tracking-wide text-zinc-300 transition hover:border-white/15 hover:bg-zinc-800/60 hover:text-zinc-100"
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
              Format
            </p>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter by cabinet format"
            >
              {inventoryTypeFilters.map((id) => {
                const active = typeFilter === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTypeFilter(id)}
                    className={
                      active
                        ? "font-heading rounded-xl border border-white/[0.14] bg-white/[0.08] px-3.5 py-2 text-[12px] font-semibold tracking-wide text-zinc-50 transition hover:bg-white/[0.1]"
                        : "font-heading rounded-xl border border-white/[0.06] bg-transparent px-3.5 py-2 text-[12px] font-semibold tracking-wide text-zinc-400 transition hover:border-white/12 hover:text-zinc-200"
                    }
                  >
                    {id}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="font-heading mt-10 text-sm font-medium text-zinc-500 sm:mt-12">
          Showing{" "}
          <span className="text-zinc-300">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "model" : "models"}
        </p>

        <div className="mt-10 space-y-16 sm:space-y-20">
          {brandSections.map(([brand, models]) => (
            <div key={brand}>
              <h3 className="font-heading border-b border-emerald-500/25 pb-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
                {brand}
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {models.map((item) => {
                  const thumbSrc = slotCatalogImageUrl(item, "thumb");
                  return (
                    <div
                      key={`${item.brand}-${item.model}`}
                      className="flex gap-3 rounded-2xl border border-white/[0.07] bg-zinc-900/40 p-3 transition hover:border-emerald-500/25"
                    >
                      <button
                        type="button"
                        className="relative h-[72px] w-[104px] shrink-0 overflow-hidden rounded-lg border border-white/[0.08] bg-zinc-950 p-1.5 outline-none ring-emerald-500/40 focus-visible:ring-2"
                        onClick={() => setLightbox(item)}
                        aria-label={`Enlarge brand image for ${item.brand} ${item.model}`}
                      >
                        <Image
                          src={thumbSrc}
                          alt={`${item.brand} logo`}
                          fill
                          className="object-contain"
                          sizes="104px"
                          unoptimized
                        />
                      </button>
                      <div className="min-w-0 flex-1">
                        <p className="font-heading text-[11px] font-semibold uppercase tracking-wide text-emerald-400/90">
                          {item.type}
                        </p>
                        <p className="font-heading mt-1 text-sm font-bold leading-snug tracking-tight text-zinc-100">
                          {item.model}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs font-medium leading-relaxed text-zinc-400">
                          {item.description}
                        </p>
                        <Link
                          href="/contact"
                          className="mt-2 inline-block text-xs font-semibold text-emerald-400/95 hover:text-emerald-300"
                        >
                          Request details →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="font-sans mt-12 text-center text-base font-medium text-zinc-500">
            No models match these filters. Open{" "}
            <button
              type="button"
              className="text-emerald-400 underline-offset-2 hover:underline"
              onClick={() => setBrandTab("all")}
            >
              All
            </button>{" "}
            brands or relax the format filter.
          </p>
        ) : null}
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >
          <div
            className="relative w-[256px] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -right-1 -top-10 rounded-lg border border-white/15 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 sm:-right-2 sm:-top-12"
              onClick={closeLightbox}
            >
              Close
            </button>
            <div className="relative h-[256px] w-[256px] max-w-[85vw] overflow-hidden rounded-xl border border-white/[0.12] bg-zinc-900 p-4 shadow-2xl">
              <Image
                src={slotCatalogImageUrl(lightbox, "modal")}
                alt={`${lightbox.brand} logo`}
                width={256}
                height={256}
                className="h-full w-full object-contain"
                unoptimized
              />
            </div>
            <p className="mt-3 text-center font-heading text-sm font-semibold text-zinc-200">
              {lightbox.brand}{" "}
              <span className="text-zinc-400">·</span> {lightbox.model}
            </p>
            <p className="mt-1 text-center text-xs text-zinc-500">
              Cabinet photo on request — shown here is brand identity.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
