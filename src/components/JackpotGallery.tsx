"use client";
import { useCallback, useEffect, useState } from "react";

type Item = { src: string; alt: string; caption: string };

/** Full-frame masonry portfolio with a click-to-enlarge viewer. */
export function JackpotGallery({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className="mt-10 columns-2 gap-4 sm:gap-5 lg:columns-3 xl:columns-4">
        {items.map((g, i) => (
          <figure key={g.src} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-[#0e1722] sm:mb-5">
            <button type="button" onClick={() => setOpen(i)} className="block w-full cursor-zoom-in" aria-label={`Enlarge: ${g.caption}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async" className="block h-auto w-full" />
            </button>
            <figcaption className="px-4 py-3 text-xs font-semibold text-zinc-300">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4" role="dialog" aria-modal="true" aria-label={items[open].caption} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={items[open].src} alt={items[open].alt} className="max-h-[88vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm font-semibold text-zinc-200">{items[open].caption} · {open + 1}/{items.length}</p>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white/10 text-2xl text-white hover:bg-white/20">×</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-3xl text-white hover:bg-white/20">‹</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-3xl text-white hover:bg-white/20">›</button>
        </div>
      )}
    </>
  );
}
