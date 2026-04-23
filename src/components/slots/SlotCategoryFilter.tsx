"use client";

import {
  slotMachineFilters,
  type SlotMachineFilterId,
} from "@/content/slotMachines";

type Props = {
  active: SlotMachineFilterId;
  onChange: (id: SlotMachineFilterId) => void;
};

export function SlotCategoryFilter({ active, onChange }: Props) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter slot machines by category"
    >
      {slotMachineFilters.map((id) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={
              isActive
                ? "font-heading rounded-xl border border-amber-500/45 bg-amber-500/[0.12] px-3.5 py-2 text-[12px] font-semibold tracking-wide text-amber-100 shadow-sm shadow-amber-500/10 transition hover:bg-amber-500/[0.18]"
                : "font-heading rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[12px] font-semibold tracking-wide text-zinc-300 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-zinc-100"
            }
          >
            {id}
          </button>
        );
      })}
    </div>
  );
}
