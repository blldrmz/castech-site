"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { InstallationMedia } from "@/content/installations";

function AutoVideo({ m }: { m: Extract<InstallationMedia, { kind: "video" }> }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.controls = true;
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (v.preload === "none") v.preload = "auto";
          v.play().catch(() => {});
        } else v.pause();
      },
      { rootMargin: "120px 0px", threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={m.src}
      poster={m.poster}
      width={m.w}
      height={m.h}
      muted
      loop
      playsInline
      preload="none"
      aria-label={m.caption}
      className={`h-full w-full ${m.contain ? "bg-[#17162a] object-contain" : "object-cover"}`}
    />
  );
}

/** Feature-first grid of photos and looping site videos, with a click-to-enlarge viewer for photos. */
export function InstallationGallery({ items }: { items: readonly InstallationMedia[] }) {
  const photos = items.filter((m) => m.kind === "image");
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
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

  const n = items.length - 1;
  const single = items.length === 1;
  // Fill the last row of the 4-column desktop grid (feature takes 2x2) and the 2-column mobile grid.
  const rem = (4 + n) % 4;
  const lastSpanLg = rem ? 4 - rem + 1 : 1;
  const lastSpanSm = n % 2 ? 2 : 1;
  const spanLg = ["", "lg:col-span-1", "lg:col-span-2", "lg:col-span-3", "lg:col-span-4"];

  return (
    <>
      <div
        className={
          single
            ? "mt-10 grid"
            : "mt-10 grid auto-rows-[170px] grid-cols-2 gap-2.5 sm:auto-rows-[210px] sm:gap-3 lg:auto-rows-[230px] lg:grid-cols-4"
        }
      >
        {items.map((m, i) => {
          const isLast = i === items.length - 1 && i > 0;
          const cls = [
            "group relative overflow-hidden rounded-xl border border-white/10 bg-[#0e1722]",
            single ? (m.w > m.h ? "aspect-video" : "mx-auto aspect-[9/16] w-full max-w-sm") : "",
            !single && m.feature ? "col-span-2 row-span-2" : "",
            !single && isLast && !m.feature
              ? n === 1
                ? "col-span-2 row-span-2"
                : `${lastSpanSm === 2 ? "col-span-2" : ""} ${spanLg[lastSpanLg]}`
              : "",
          ].join(" ");
          const caption = (
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3.5 pb-3 pt-8 text-left text-xs font-semibold leading-5 text-zinc-100">
              {m.kind === "video" && (
                <span aria-hidden="true" className="mr-2 inline-grid h-[18px] w-[18px] place-items-center rounded-full bg-[#e3bc7b] align-[1px] text-[8px] text-[#1a1305]">▶</span>
              )}
              {m.caption}
            </figcaption>
          );
          if (m.kind === "video")
            return (
              <figure key={m.src} className={cls}>
                <AutoVideo m={m} />
                {caption}
              </figure>
            );
          const pi = photos.indexOf(m);
          return (
            <figure key={m.src} className={cls}>
              <button type="button" onClick={() => setOpen(pi)} className="block h-full w-full cursor-zoom-in" aria-label={`Enlarge: ${m.caption}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.src} alt={m.alt} width={m.w} height={m.h} loading="lazy" decoding="async" className="h-full w-full object-cover object-[center_28%] transition duration-500 group-hover:scale-[1.03]" />
              </button>
              {caption}
            </figure>
          );
        })}
      </div>
      {open !== null && photos[open] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4" role="dialog" aria-modal="true" aria-label={photos[open].caption} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos[open].src} alt={photos[open].kind === "image" ? photos[open].alt : ""} className="max-h-[86vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-5 left-0 right-0 px-4 text-center text-sm font-semibold text-zinc-200">
            {photos[open].caption} · {open + 1}/{photos.length}
          </p>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white/10 text-2xl text-white hover:bg-white/20">×</button>
          {photos.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-white/10 text-xl text-white hover:bg-white/20">‹</button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-white/10 text-xl text-white hover:bg-white/20">›</button>
            </>
          )}
        </div>
      )}
    </>
  );
}
