"use client";

import { searchSite } from "@/content/searchIndex";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [value, setValue] = useState(initial);
  const results = useMemo(() => searchSite(initial), [initial]);

  return (
    <div className="castech-container castech-section-y">
      <p className="castech-eyebrow">Search</p>
      <h1 className="castech-h2 castech-h2-gap">Search the site.</h1>
      <form
        role="search"
        className="mt-8 flex max-w-2xl gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search/?q=${encodeURIComponent(value.trim())}`);
        }}
      >
        <input
          type="search"
          name="q"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Search the site"
          placeholder="Roulette, jackpot screen, shuffler, chairs…"
          className="castech-input min-w-0 flex-1"
        />
        <button type="submit" className="castech-btn-primary">Search</button>
      </form>

      {initial ? (
        <p className="mt-8 text-sm text-slate-400" role="status" aria-live="polite">
          {results.length ? `${results.length} result${results.length === 1 ? "" : "s"} for “${initial}”` : `No results for “${initial}”. Try a shorter word.`}
        </p>
      ) : null}

      {initial ? (
        <div className="mt-6 flex max-w-2xl flex-col gap-4 rounded-xl border border-dashed border-gold-deep/45 bg-gold-deep/[0.05] p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-200">
            {results.length ? "Looking for a specific machine that is not listed?" : "We may still be able to source it."} Tell us what you need and we will find it for you.
          </p>
          <Link href={`/contact?item=${encodeURIComponent(`Find a machine: ${initial}`)}`} className="castech-btn-primary shrink-0 whitespace-nowrap">
            Find it for me <span aria-hidden="true" className="ml-2">↗</span>
          </Link>
        </div>
      ) : null}

      <ul className="mt-6 grid gap-3">
        {results.map((r) => (
          <li key={`${r.title}|${r.href}`}>
            <Link
              href={r.href}
              className="block rounded-lg border border-white/10 bg-surface p-5 transition hover:border-gold/60"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[.15em] text-gold">{r.type}</span>
              <span className="mt-2 block font-heading text-base font-semibold text-white">{r.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
