"use client";

import type { InventorySlotMachine } from "@/content/inventory";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  item: InventorySlotMachine;
};

export function InventoryMachineCard({ item }: Props) {
  const [imageFailed, setImageFailed] = useState(false);
  const title = `${item.brand} ${item.model}`;
  const contactHref = `/#contact`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.07] bg-gradient-to-b from-zinc-900/60 to-zinc-950 shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-950/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
        {!imageFailed ? (
          <Image
            src={item.image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full min-h-[12rem] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black px-6 text-center">
            <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
              CasTech
            </span>
            <p className="font-heading text-sm font-semibold tracking-wide text-zinc-400">
              Image Coming Soon
            </p>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-heading text-lg font-bold leading-snug tracking-tight text-zinc-50 sm:text-xl">
          <span className="text-emerald-400/95">{item.brand}</span>
          <span className="text-zinc-100"> · {item.model}</span>
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.category.map((c) => (
            <span
              key={c}
              className="font-heading rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-300 transition group-hover:border-emerald-500/20 group-hover:text-zinc-200"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="font-sans mt-4 flex-1 text-base font-medium leading-7 text-zinc-400">
          {item.description}
        </p>
        <Link
          href={contactHref}
          className="font-heading mt-6 inline-flex min-h-[2.75rem] items-center justify-center rounded-xl border border-emerald-500/35 bg-emerald-500/[0.08] px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400/50 hover:bg-emerald-500/[0.14] active:scale-[0.99]"
        >
          Request Details
        </Link>
      </div>
    </article>
  );
}
