"use client";

import {
  slotMachines,
  type SlotMachineFilterId,
} from "@/content/slotMachines";
import { useMemo, useState } from "react";
import { SlotCard } from "./SlotCard";
import { SlotCategoryFilter } from "./SlotCategoryFilter";

export function SlotMachinesCatalog() {
  const [filter, setFilter] = useState<SlotMachineFilterId>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return slotMachines;
    return slotMachines.filter((m) => m.category.includes(filter));
  }, [filter]);

  return (
    <section
      className="border-b border-white/[0.06] bg-black/20"
      aria-labelledby="slot-catalog-heading"
    >
      <div className="castech-container castech-section-y">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h2 id="slot-catalog-heading" className="castech-h2">
              Portfolio
            </h2>
            <p className="castech-body mt-5 sm:mt-6">
              Filter by cabinet type or product category to explore models from
              leading manufacturers.
            </p>
          </div>
          <SlotCategoryFilter active={filter} onChange={setFilter} />
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <SlotCard
              key={`${item.brand}-${item.model}-${item.image}`}
              item={item}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="font-sans mt-10 text-center text-base font-medium text-zinc-400">
            No models match this filter. Try another category.
          </p>
        ) : null}
      </div>
    </section>
  );
}
