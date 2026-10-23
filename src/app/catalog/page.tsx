import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { homeCategoryCards } from "@/content/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Catalog",
  description: "Explore professional casino equipment categories at CasTech EQ. Complete product information and verified imagery will be integrated from the CasTech e-catalog.",
};

const codes = ["01", "02", "03", "04"];

export default function CatalogPage() {
  return <SiteShell>
    <section className="relative border-b border-white/10 bg-[#0a1522]">
      <div className="castech-container py-20 sm:py-28">
        <p className="castech-eyebrow">CasTech EQ / Product Categories</p>
        <h1 className="mt-6 max-w-4xl font-heading text-5xl font-bold tracking-[-.055em] text-white sm:text-6xl">The equipment catalog.</h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300">Find equipment for live games, slot floors, surveillance and daily casino operations. The full model-level catalog and verified product photography will be integrated into these categories.</p>
      </div>
    </section>
    <section className="bg-[#070c14]"><div className="castech-container py-20 sm:py-24">
      <div className="grid gap-5 sm:grid-cols-2">
        {homeCategoryCards.map((item, index)=><Link key={item.href} href={item.href} className="group flex min-h-[245px] flex-col justify-between rounded-xl border border-slate-700/70 bg-gradient-to-br from-[#142236] to-[#0d1827] p-8 transition hover:-translate-y-1 hover:border-emerald-400/50">
          <div className="flex items-center justify-between"><span className="font-heading text-xs font-bold text-emerald-300">{codes[index]} / CATEGORY</span><span className="text-emerald-300" aria-hidden>↗</span></div>
          <div><h2 className="font-heading text-2xl font-bold tracking-[-.035em] text-white">{item.title}</h2><p className="mt-4 max-w-md text-[15px] leading-8 text-slate-300">{item.description}</p><p className="mt-6 text-sm font-semibold text-emerald-300">Explore range →</p></div>
        </Link>)}
      </div>
      <div className="mt-12 rounded-xl border border-slate-700/60 bg-[#111d2b] p-7 sm:p-9">
        <h2 className="font-heading text-xl font-semibold text-white">Product inquiry and catalog updates</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">Product models, photographs, dimensions and specification sheets will be attached to their correct category. No indicative price or stock claims are shown until confirmed.</p>
        <Link href="/contact" className="mt-6 inline-flex font-semibold text-emerald-300">Contact CasTech ↗</Link>
      </div>
    </div></section>
  </SiteShell>;
}
