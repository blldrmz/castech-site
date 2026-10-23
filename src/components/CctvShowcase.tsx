import type { CctvShowcaseBrand } from "@/content/cctvContent";
import Link from "next/link";

type Props = { brands: CctvShowcaseBrand[] };

export function CctvShowcase({brands}:Props) {
  return (
    <div>
      <p className="mb-7 max-w-4xl text-sm leading-7 text-slate-300">Explore surveillance manufacturers and equipment types for your project. Names are provided as product references; they do not imply authorized-dealer status or guaranteed stock.</p>
      <div className="grid gap-5 md:grid-cols-2">
        {brands.map((brand,i)=>(
          <article key={brand.id} className="flex flex-col rounded-xl border border-slate-600/45 bg-[#111e2d] p-7 shadow-xl shadow-black/20 transition hover:border-emerald-400/30 sm:p-9">
            <div className="flex items-center justify-between gap-6">
              <span className="font-heading text-[11px] font-bold tracking-[.16em] text-emerald-300">SURVEILLANCE / {String(i+1).padStart(2,"0")}</span>
              <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-lg border border-emerald-400/25 bg-emerald-400/5 text-xl text-emerald-300">◎</span>
            </div>
            <h3 className="mt-9 font-heading text-3xl font-bold tracking-[-.045em] text-white">{brand.name}</h3>
            <p className="mt-3 text-[15px] font-semibold text-emerald-200">{brand.tagline}</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-300">{brand.points.map(p=><li key={p}>{p}</li>)}</ul>
            <Link href="/contact" className="mt-8 w-fit border-b border-emerald-300/50 pb-1 text-[13px] font-semibold text-emerald-300">Discuss specifications ↗</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
