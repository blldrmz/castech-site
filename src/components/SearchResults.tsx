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
          {results.length ? `${results.length} result${results.length === 1 ? "" : "s"} for “${initial}”` : `No results for “${initial}”. Try a shorter word, or contact us and we will help.`}
        </p>
      ) : null}

      <ul className="mt-6 grid gap-3">
        {results.map((r) => (
          <li key={`${r.title}|${r.href}`}>
            <Link
              href={r.href}
              className="block rounded-lg border border-white/10 bg-[#111b29] p-5 transition hover:border-[#e3bc7b]/60"
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[.15em] text-[#e3bc7b]">{r.type}</span>
              <span className="mt-2 block font-heading text-base font-semibold text-white">{r.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
