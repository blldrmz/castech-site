import { heroContent, heroHighlights } from "@/content/site";
import Link from "next/link";

export function Hero() {
  const { rightCard } = heroContent;

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_42%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_35%)]" />
      <div className="relative z-10 castech-container grid gap-16 py-20 sm:gap-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div>
          <div className="castech-eyebrow-hero">{heroContent.eyebrow}</div>
          <h1 className="castech-hero-title">
            Intelligent casino systems engineered for{" "}
            <span className="text-emerald-400">accuracy</span>,{" "}
            <span className="text-emerald-400">control</span> and{" "}
            <span className="text-emerald-400">premium table experience</span>.
          </h1>
          <p className="castech-hero-body mt-9 sm:mt-10">{heroContent.description}</p>
          <div className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
            <a
              href={heroContent.ctaPrimaryHref}
              className="castech-btn-primary"
            >
              {heroContent.ctaPrimary}
            </a>
            <a
              href={heroContent.ctaSecondaryHref}
              className="castech-btn-secondary"
            >
              {heroContent.ctaSecondary}
            </a>
          </div>
          <p className="font-sans mt-8 text-base font-medium leading-8 text-zinc-300 sm:mt-10">
            <Link
              href="/inventory"
              className="text-emerald-400 underline-offset-4 transition hover:text-emerald-300 hover:underline"
            >
              Explore available casino equipment in our Inventory
            </Link>
          </p>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-3">
            {heroHighlights.map(([title, sub]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.04] px-5 py-4 sm:py-5"
              >
                <div className="castech-stat-title">{title}</div>
                <div className="castech-stat-sub mt-2">{sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pt-2">
          <div className="rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1.5 shadow-2xl shadow-black/40 sm:p-2">
            <div className="rounded-[26px] border border-emerald-500/15 bg-zinc-900/90 p-6 shadow-inner sm:p-7">
              <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="castech-eyebrow-muted">{rightCard.eyebrow}</div>
                  <div className="font-heading mt-3 text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl">
                    {rightCard.title}
                  </div>
                </div>
                <div className="font-heading rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                  {rightCard.badge}
                </div>
              </div>

              <div className="grid gap-3.5">
                <div className="rounded-2xl border border-white/[0.07] bg-zinc-950/80 px-5 py-4">
                  <div className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {rightCard.gameModule.label}
                  </div>
                  <div className="font-heading mt-2 text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                    {rightCard.gameModule.value}
                  </div>
                </div>
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.07] bg-zinc-950/80 px-4 py-4 sm:px-5">
                    <div className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {rightCard.detection.label}
                    </div>
                    <div className="font-heading mt-2 text-[15px] font-semibold leading-snug tracking-tight text-zinc-100 sm:text-base">
                      {rightCard.detection.value}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/[0.07] bg-zinc-950/80 px-4 py-4 sm:px-5">
                    <div className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {rightCard.warnings.label}
                    </div>
                    <div className="font-heading mt-2 text-[15px] font-semibold leading-snug tracking-tight text-zinc-100 sm:text-base">
                      {rightCard.warnings.value}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-500/10 bg-gradient-to-br from-emerald-500/[0.12] to-cyan-500/[0.06] px-5 py-4">
                  <div className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {rightCard.focus.label}
                  </div>
                  <div className="font-sans mt-2 text-base font-normal leading-8 text-zinc-100">
                    {rightCard.focus.value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
