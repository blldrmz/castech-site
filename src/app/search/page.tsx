import { SearchResults } from "@/components/SearchResults";
import { SiteShell } from "@/components/SiteShell";
import { pageMeta } from "@/lib/seo";
import { Suspense } from "react";

export const metadata = {
  ...pageMeta("Search", "Search CasTech EQ equipment, jackpot screens and pages.", "/search/"),
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <SiteShell>
      <div className="min-h-[60vh] bg-[#070d15]">
        <Suspense fallback={<div className="castech-container py-28 text-slate-300">Loading…</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </SiteShell>
  );
}
