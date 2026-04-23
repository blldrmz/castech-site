import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InventoryCatalog } from "@/components/inventory/InventoryCatalog";
import { inventoryPageCta, inventoryPageHero } from "@/content/inventory";
import Link from "next/link";

export function InventoryPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-white/[0.06] bg-zinc-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.11),transparent_52%),radial-gradient(circle_at_20%_80%,rgba(6,78,59,0.15),transparent_42%),radial-gradient(circle_at_left,rgba(24,24,27,0.9),transparent_50%)]" />
          <div className="relative z-10 castech-container castech-section-y pb-14 sm:pb-16">
            <div className="h-px w-14 rounded-full bg-gradient-to-r from-emerald-400/70 to-transparent" />
            <h1 className="castech-hero-title mt-8 max-w-3xl">
              {inventoryPageHero.title}
            </h1>
            <p className="castech-hero-body mt-8 max-w-3xl text-zinc-300 sm:mt-10">
              {inventoryPageHero.intro}
            </p>
          </div>
        </section>

        <InventoryCatalog />

        <section className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-zinc-950 to-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_58%)]" />
          <div className="relative z-10 castech-container castech-section-y">
            <div className="mx-auto max-w-3xl rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 shadow-2xl shadow-black/50 sm:p-10 lg:p-12">
              <div className="mx-auto h-px w-16 rounded-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
              <h2 className="castech-h2 mt-8 text-center">
                {inventoryPageCta.title}
              </h2>
              <p className="font-sans mt-6 text-center text-base font-medium leading-8 text-zinc-400 sm:text-lg sm:leading-8">
                {inventoryPageCta.text}
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href="/#contact"
                  className="castech-btn-primary min-h-[3rem] justify-center sm:min-h-[2.875rem]"
                >
                  {inventoryPageCta.contactLabel}
                </Link>
                <Link
                  href="/#contact"
                  className="castech-btn-secondary min-h-[3rem] justify-center sm:min-h-[2.875rem]"
                >
                  {inventoryPageCta.demoLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
