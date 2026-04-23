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
import { useMemo, useState } from "react";
import { InventoryMachineCard } from "./InventoryMachineCard";

function filterByBrand(
  items: InventorySlotMachine[],
  brandTabId: InventoryBrandTabId,
): InventorySlotMachine[] {
  const tab = inventoryBrandTabs.find((t) => t.id === brandTabId);
  if (!tab || tab.brandKey === null) return items;
  return items.filter((m) => m.brand === tab.brandKey);
}

export function InventoryCatalog() {
  const [brandTab, setBrandTab] = useState<InventoryBrandTabId>("all");
  const [typeFilter, setTypeFilter] =
    useState<InventoryTypeFilterId>("All");

  const filtered = useMemo(() => {
    let list = filterByBrand(inventorySlotMachines, brandTab);
    list = list.filter((m) => matchesInventoryTypeFilter(m, typeFilter));
    return list;
  }, [brandTab, typeFilter]);

  return (
    <section
      className="border-b border-white/[0.06] bg-[#050507]"
      aria-labelledby="inventory-catalog-heading"
    >
      <div className="castech-container castech-section-y">
        <div className="max-w-3xl">
          <h2 id="inventory-catalog-heading" className="castech-h2">
            Equipment catalog
          </h2>
          <p className="castech-body mt-5 text-zinc-400 sm:mt-6">
            Browse the full range by manufacturer and cabinet format. Every
            listing links to our team for specifications and availability.
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <InventoryMachineCard
              key={`${item.brand}-${item.model}-${item.image}`}
              item={item}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="font-sans mt-12 text-center text-base font-medium text-zinc-500">
            No models match these filters. Try &ldquo;All&rdquo; for brand or
            format.
          </p>
        ) : null}
      </div>
    </section>
  );
}
