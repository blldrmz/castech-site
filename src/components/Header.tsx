"use client";

import { brand } from "@/content/site";
import { LANG_NAMES, LOCALES, href as lhref, isLocalized, localeFromPath, localePath, toEnPath, ui } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function navLinkClassName(active: boolean) {
  return [
    "rounded-lg px-2.5 py-2 text-[12px] font-medium tracking-wide transition sm:px-3 lg:text-[13px]",
    active
      ? "bg-white/[0.08] text-white"
      : "text-zinc-200 hover:bg-white/[0.04] hover:text-white",
  ].join(" ");
}

function isActiveLink(pathname: string, href: string) {
  const p = pathname.replace(/\/$/, "") || "/";
  const h = href.replace(/\/$/, "") || "/";
  if (/^\/(de|cs|ru)?$/.test(h)) return p === h;
  return p === h || p.startsWith(`${h}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const locale = localeFromPath(pathname);
  const t = ui[locale];
  const enPath = toEnPath(pathname);
  const nav = t.nav.map((n) => ({ href: lhref(locale, n.href), label: n.label }));
  const langHref = (l: (typeof LOCALES)[number]) => (isLocalized(enPath) ? localePath(l, enPath) : localePath(l, "/"));
  const langRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (langRef.current?.open && !langRef.current.contains(e.target as Node)) langRef.current.open = false;
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) setOpen(false);
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
          href={lhref(locale, "/")}
          className="flex min-w-0 shrink items-center gap-2.5 text-left font-heading transition-opacity hover:opacity-90 sm:gap-3"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/castech-mark.svg" alt="" width={62} height={62} className="h-11 w-auto shrink-0 sm:h-[62px]" />
          <span className="min-w-0">
          <div className="whitespace-nowrap text-[15px] font-bold tracking-[0.12em] text-zinc-50 sm:text-lg sm:tracking-[0.18em] md:text-xl">
            {brand.name} <span className="text-gold">EQ</span>
          </div>
          <div className="mt-1 hidden whitespace-nowrap text-[11px] min-[420px]:block font-semibold uppercase tracking-[0.1em] text-zinc-300 sm:tracking-[0.16em]">
            {t.tagline}
          </div>
          </span>
        </Link>

        <nav
          className="hidden flex-wrap items-center justify-end gap-0.5 font-heading xl:flex xl:gap-1"
          aria-label={t.mainNav}
        >
          {nav.map(({ href, label }) => (
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
          {locale === "en" ? (
          <Link
            href="/search/"
            aria-label={t.search}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-zinc-300 transition hover:bg-white/[0.05]"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </Link>
          ) : null}
          <Link href={lhref(locale, "/contact")} className="castech-btn-header hidden sm:inline-flex">
            {t.quote}
          </Link>
          <details ref={langRef} className="group relative">
            <summary
              aria-label={t.langLabel}
              className="flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-xl border border-white/[0.08] px-3 font-heading text-[12px] font-semibold tracking-[.12em] text-zinc-200 transition hover:border-gold/50 hover:text-gold [&::-webkit-details-marker]:hidden"
            >
              {locale.toUpperCase()}
              <svg aria-hidden="true" className="h-3 w-3 transition group-open:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M2.5 4.5 6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-xl border border-white/10 bg-zinc-950 py-1.5 shadow-2xl shadow-black/50">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={langHref(l)}
                  hrefLang={l}
                  lang={l}
                  onClick={() => langRef.current?.removeAttribute("open")}
                  className={`flex items-center justify-between px-4 py-2.5 text-[13px] transition hover:bg-white/[0.05] ${l === locale ? "font-semibold text-gold" : "text-zinc-200"}`}
                >
                  {LANG_NAMES[l]}
                  <span className="text-[10px] tracking-[.14em] text-zinc-400">{l.toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </details>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-zinc-300 transition hover:bg-white/[0.05] xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.closeMenu : t.openMenu}
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
        className={`border-t border-white/[0.06] bg-zinc-950/98 xl:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="castech-container flex max-w-7xl flex-col gap-0.5 py-4 font-heading"
          aria-label={t.mobileNav}
        >
          {nav.map(({ href, label }) => (
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
            href={lhref(locale, "/contact")}
            className="castech-btn-header mt-3 justify-center py-3"
            onClick={() => setOpen(false)}
          >
            {t.quote}
          </Link>
        </nav>
      </div>
    </header>
  );
}
