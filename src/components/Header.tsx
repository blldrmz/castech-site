"use client";

import { mainNav } from "@/content/navigation";
import { brand } from "@/content/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function navLinkClassName(active: boolean) {
  return [
    "rounded-lg px-2.5 py-2 text-[12px] font-medium tracking-wide transition sm:px-3 lg:text-[13px]",
    active
      ? "bg-white/[0.08] text-white"
      : "text-zinc-200 hover:bg-white/[0.04] hover:text-white",
  ].join(" ");
}

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/90 backdrop-blur-md">
      <div className="castech-container flex max-w-7xl items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4">
        <Link
          href="/"
          className="min-w-0 shrink text-left font-heading transition-opacity hover:opacity-90"
        >
          <div className="text-base font-bold tracking-[0.18em] text-zinc-50 sm:text-lg md:text-xl">
            {brand.name}
          </div>
          <div className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.28em] text-zinc-300 sm:text-[9px] md:text-[10px]">
            {brand.tagline}
          </div>
        </Link>

        <nav
          className="hidden flex-wrap items-center justify-end gap-0.5 font-heading md:flex lg:gap-1"
          aria-label="Primary"
        >
          {mainNav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navLinkClassName(isActiveLink(pathname, href))}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/contact" className="castech-btn-header hidden sm:inline-flex">
            Get a quote
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-zinc-300 transition hover:bg-white/[0.05] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/[0.06] bg-zinc-950/98 md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="castech-container flex max-w-7xl flex-col gap-0.5 py-4 font-heading"
          aria-label="Mobile"
        >
          {mainNav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-xl px-3 py-3 text-[15px] font-medium tracking-wide ${
                isActiveLink(pathname, href)
                  ? "bg-white/[0.08] text-white"
                  : "text-zinc-200 hover:bg-white/[0.05]"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="castech-btn-header mt-3 justify-center py-3"
            onClick={() => setOpen(false)}
          >
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
