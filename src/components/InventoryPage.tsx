import {
  inventoryPageHero,
  inventorySections,
  type InventoryEquipmentItem,
} from "@/content/inventory";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

const badgeClass: Record<
  InventoryEquipmentItem["badge"],
  string
> = {
  Available:
    "border-emerald-500/35 bg-emerald-500/10 text-emerald-200",
  "On Request":
    "border-zinc-500/35 bg-white/[0.05] text-zinc-200",
  Custom:
    "border-sky-500/35 bg-sky-500/10 text-sky-100",
  "AI System":
    "border-emerald-400/50 bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-400/25",
};

function EquipmentCard({ item }: { item: InventoryEquipmentItem }) {
  const ai = item.badge === "AI System";
  return (
    <div
      className={
        ai
          ? "flex flex-col rounded-[28px] border border-emerald-400/30 bg-gradient-to-b from-emerald-500/[0.1] to-zinc-950/90 p-7 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-400/15 sm:p-8"
          : "castech-card-product flex flex-col"
      }
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-heading max-w-[85%] text-lg font-bold leading-snug tracking-tight text-zinc-50 sm:text-xl">
          {item.title}
        </h3>
        <span
          className={`font-heading shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${badgeClass[item.badge]}`}
        >
          {item.badge}
        </span>
      </div>
      <p className="font-sans mt-4 text-base font-medium leading-8 text-zinc-200">
        {item.blurb}
      </p>
    </div>
  );
}

export function InventoryPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_45%),radial-gradient(circle_at_left,rgba(59,130,246,0.08),transparent_35%)]" />
          <div className="relative z-10 castech-container castech-section-y pb-12 sm:pb-16">
            <p className="castech-eyebrow">{inventoryPageHero.eyebrow}</p>
            <h1 className="castech-hero-title mt-6 max-w-3xl">
              {inventoryPageHero.title}
            </h1>
            <p className="castech-hero-body mt-8 max-w-3xl sm:mt-10">
              {inventoryPageHero.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#contact" className="castech-btn-primary">
                Request a quote
              </Link>
              <Link href="/#products" className="castech-btn-secondary">
                View product lines
              </Link>
            </div>
          </div>
        </section>

        {inventorySections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className={
              sectionIndex % 2 === 1
                ? "border-y border-white/[0.06] bg-black/25"
                : "border-b border-white/[0.06] bg-zinc-950"
            }
          >
            <div className="castech-container castech-section-y">
              <div className="max-w-2xl">
                <p className="castech-eyebrow">{section.eyebrow}</p>
                <h2 className="castech-h2 castech-h2-gap">{section.title}</h2>
              </div>

              <div
                className={`mt-12 grid gap-6 sm:mt-14 ${
                  section.id === "accessories"
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : section.id === "live-tables"
                      ? "sm:grid-cols-2 lg:grid-cols-3"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {section.items.map((item) => (
                  <EquipmentCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
