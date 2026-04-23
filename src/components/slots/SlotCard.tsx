"use client";

import type { SlotMachine } from "@/content/slotMachines";
import Image from "next/image";
import { useState } from "react";

export function SlotCard({ item }: { item: SlotMachine }) {
  const [failed, setFailed] = useState(false);
  const alt = `${item.brand} ${item.model}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-zinc-900/70 to-zinc-950/95 shadow-lg shadow-black/35 transition duration-300 hover:-translate-y-1 hover:border-amber-500/35 hover:shadow-xl hover:shadow-amber-500/[0.06]">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <Image
          src={failed ? "/images/slots/placeholder.svg" : item.image}
          alt={failed ? "" : alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          onError={() => setFailed(true)}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-90"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400/90">
          {item.brand}
        </p>
        <h3 className="font-heading mt-2 text-lg font-bold leading-snug tracking-tight text-zinc-50 sm:text-xl">
          {item.model}
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.category.map((c) => (
            <span
              key={c}
              className="font-heading rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-300 transition group-hover:border-amber-500/25 group-hover:text-zinc-200"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="font-sans mt-4 text-base font-medium leading-7 text-zinc-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}
