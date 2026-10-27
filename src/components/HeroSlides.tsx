"use client";
import { useEffect, useState } from "react";

export type HeroSlide = { src: string; position?: string };

/** Cross-fading, slowly zooming photo background for a hero section. */
export function HeroSlides({ slides, interval = 5500 }: { slides: HeroSlide[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[66%]"
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 38%)", maskImage: "linear-gradient(to right, transparent 0%, #000 38%)" }}
      >
        {slides.map((s, n) => (n === i || n === (i + 1) % slides.length || n < i) && (
          <div
            key={s.src}
            className="absolute inset-0 bg-cover transition-opacity duration-[1800ms] ease-in-out"
            style={{
              backgroundImage: `url(${s.src})`,
              backgroundPosition: s.position ?? "center",
              opacity: n === i ? 0.62 : 0,
              animation: n === i ? "heroZoom 9s ease-out forwards" : undefined,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[#070d15]/45 lg:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070d15] via-transparent to-[#070d15]/50" />
    </div>
  );
}
