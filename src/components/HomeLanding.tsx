import { homeCategoryCards, homeHero } from "@/content/home";
import Link from "next/link";

export function HomeLanding() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/[0.06] bg-zinc-950"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_42%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%)]" />
        <div className="relative z-10 castech-container castech-section-y">
          <div className="castech-eyebrow-hero">{homeHero.eyebrow}</div>
          <h1 className="castech-hero-title max-w-4xl">
            {homeHero.title}{" "}
            <span className="text-emerald-400">{homeHero.titleLine2}</span>
          </h1>
          <p className="castech-hero-body mt-9 max-w-2xl sm:mt-10">
            {homeHero.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
            <Link href="/live-games" className="castech-btn-primary">
              Browse Live Game
            </Link>
            <Link href="/contact" className="castech-btn-secondary">
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/[0.06] bg-[#050507]"
        aria-labelledby="home-categories-heading"
      >
        <div className="castech-container castech-section-y">
          <h2
            id="home-categories-heading"
            className="castech-h2 max-w-2xl text-zinc-50"
          >
            Browse by category
          </h2>
          <p className="castech-body mt-5 max-w-2xl text-zinc-400 sm:mt-6">
            Jump straight into the range you need—each area lists typical equipment
            and brands we can supply or help you specify.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
            {homeCategoryCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="castech-card-product group flex flex-col p-7 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500/25 sm:p-8"
              >
                <h3 className="font-heading text-lg font-bold tracking-tight text-zinc-50 sm:text-xl">
                  {card.title}
                </h3>
                <p className="castech-body mt-4 flex-1 text-sm leading-7 text-zinc-200 sm:mt-5 sm:text-base sm:leading-8">
                  {card.description}
                </p>
                <span className="font-heading mt-6 text-sm font-semibold text-emerald-400/95 transition group-hover:text-emerald-300">
                  View range →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="castech-body text-zinc-400">
              Company profile, service approach, and who we are.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="castech-btn-secondary min-h-12 px-6">
                About CasTech
              </Link>
              <Link href="/contact" className="castech-btn-primary min-h-12 px-6">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
