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
        className="absolute inset-y-0 right-0 w-full lg:w-[58%]"
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 18%)", maskImage: "linear-gradient(to right, transparent 0%, #000 18%)" }}
      >
        {slides.map((s, n) => (n === i || n === (i + 1) % slides.length || n < i) && (
          <div key={s.src} className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out" style={{ opacity: n === i ? 1 : 0 }}>
            <div className="absolute inset-0 scale-110 bg-cover blur-2xl" style={{ backgroundImage: `url(${s.src})`, backgroundPosition: "center", opacity: 0.35 }} />
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${s.src})`, opacity: 0.8, animation: n === i ? "heroZoom 10s ease-out forwards" : undefined }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[#070d15]/60 lg:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070d15] via-transparent to-[#070d15]/50" />
    </div>
  );
}
