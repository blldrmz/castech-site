import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SlotMachinesCatalog } from "@/components/slots/SlotMachinesCatalog";
import {
  slotMachinesPageCopy,
  slotMachinesWhatsappUrl,
} from "@/content/slotMachines";
import Link from "next/link";

export function SlotMachinesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.09),transparent_50%),radial-gradient(circle_at_left,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_bottom,rgba(234,179,8,0.05),transparent_45%)]" />
          <div className="relative z-10 castech-container castech-section-y pb-12 sm:pb-16">
            <div className="h-px w-16 rounded-full bg-gradient-to-r from-amber-400/80 to-transparent" />
            <h1 className="castech-hero-title mt-8 max-w-3xl">
              Slot Machines
            </h1>
            <p className="castech-hero-body mt-8 max-w-3xl sm:mt-10">
              {slotMachinesPageCopy.heroSubtitle}
            </p>
          </div>
        </section>

        <section
          className="border-b border-white/[0.06] bg-zinc-950"
          aria-labelledby="slot-intro-heading"
        >
          <div className="castech-container castech-section-y">
            <h2 id="slot-intro-heading" className="castech-h2 max-w-3xl">
              Equipment overview
            </h2>
            <p className="castech-body mt-6 max-w-3xl sm:mt-8">
              {slotMachinesPageCopy.intro}
            </p>
          </div>
        </section>

        <SlotMachinesCatalog />

        <section className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-zinc-950 to-black/40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_55%)]" />
          <div className="relative z-10 castech-container castech-section-y">
            <div className="mx-auto max-w-3xl rounded-[28px] border border-amber-500/20 bg-gradient-to-br from-zinc-900/80 to-zinc-950/95 p-8 shadow-xl shadow-black/40 sm:p-10 lg:p-12">
              <div className="mx-auto h-px w-20 rounded-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
              <h2 className="castech-h2 mt-8 text-center">
                {slotMachinesPageCopy.ctaTitle}
              </h2>
              <p className="font-sans mt-6 text-center text-base font-medium leading-8 text-zinc-300 sm:text-lg sm:leading-8">
                {slotMachinesPageCopy.ctaText}
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#contact"
                  className="castech-btn-primary min-h-[3rem] justify-center sm:min-h-[2.875rem]"
                >
                  {slotMachinesPageCopy.contactLabel}
                </Link>
                <a
                  href={slotMachinesWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading inline-flex min-h-[3rem] items-center justify-center rounded-xl border border-amber-500/45 bg-amber-500/[0.08] px-8 py-3.5 text-sm font-semibold text-amber-100 shadow-lg shadow-amber-500/5 transition hover:border-amber-400/60 hover:bg-amber-500/[0.14] active:scale-[0.99] sm:min-h-[2.875rem]"
                >
                  {slotMachinesPageCopy.whatsappLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
