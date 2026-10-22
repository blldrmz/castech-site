import { homeCategoryCards, homeHero } from "@/content/home";
import Link from "next/link";

const categoryDetails = [
  { id: "01", short: "TABLE GAMES", icon: "◈" },
  { id: "02", short: "SLOT SYSTEMS", icon: "▣" },
  { id: "03", short: "SURVEILLANCE", icon: "◎" },
  { id: "04", short: "FLOOR ESSENTIALS", icon: "⌘" },
] as const;

export function HomeLanding() {
  return (
    <>
      <section id="home" className="relative overflow-hidden border-b border-white/10 bg-[#080e18]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_75%_at_90%_30%,rgba(59,130,246,0.12),transparent_70%),radial-gradient(ellipse_35%_45%_at_10%_85%,rgba(16,185,129,0.08),transparent_70%)]" />
        <div className="relative castech-container grid items-center gap-14 py-24 sm:py-28 lg:min-h-[660px] lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-3 border-b border-emerald-400/25 pb-3 font-heading text-[11px] font-semibold uppercase tracking-[0.19em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {homeHero.eyebrow}
            </div>
            <h1 className="mt-9 max-w-[790px] font-heading text-[clamp(2.85rem,5.2vw,5.6rem)] font-bold leading-[1.07] tracking-[-0.06em] text-white">
              {homeHero.title} <span className="text-emerald-300">{homeHero.titleLine2}</span>
            </h1>
            <p className="mt-9 max-w-xl text-[15px] font-medium leading-[1.95] text-slate-300 sm:text-[17px]">
              {homeHero.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/live-games" className="castech-btn-primary">Explore equipment <span className="ml-3" aria-hidden>↗</span></Link>
              <Link href="/contact" className="castech-btn-secondary">Request an offer <span className="ml-3" aria-hidden>↗</span></Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
              <span>Physical equipment</span><span>Product specification</span><span>Project inquiries</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]" aria-label="CasTech equipment categories">
            <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-emerald-500/[0.035] blur-3xl" />
            <div className="relative overflow-hidden rounded-[20px] border border-white/15 bg-[#101a2a] shadow-[0_35px_85px_rgba(0,0,0,.55)]">
              <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">CasTech / Equipment portfolio</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.7)]" />
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/10">
                {categoryDetails.map((item, i) => (
                  <Link key={item.id} href={homeCategoryCards[i].href} className="group min-h-[155px] bg-[#0c1422] p-6 transition hover:bg-[#152535] sm:min-h-[190px] sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="font-heading text-[10px] font-semibold tracking-widest text-emerald-300">{item.id}</span>
                      <span className="text-3xl font-light text-emerald-300/70" aria-hidden>{item.icon}</span>
                    </div>
                    <div className="mt-9 font-heading text-sm font-semibold uppercase tracking-[0.06em] text-slate-100 sm:mt-12 sm:text-[15px]">{item.short}</div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 px-7 py-4 text-[11px] text-slate-400">
                <span>Professional casino environments</span>
                <span className="text-emerald-300">EQ / 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#070c14]" aria-labelledby="home-categories-heading">
        <div className="castech-container castech-section-y">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="castech-eyebrow">The CasTech catalog / 01</p>
              <h2 id="home-categories-heading" className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-5xl">Built for the gaming floor.</h2>
            </div>
            <p className="max-w-md text-[15px] leading-8 text-slate-300">
              Discover equipment by application. Product specifications and availability are confirmed individually — this is a catalog, not a live stock list.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-5">
            {homeCategoryCards.map((card, i) => (
              <Link key={card.href} href={card.href} className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-xl border border-slate-700/70 bg-gradient-to-br from-[#142233] to-[#0b1421] p-8 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/40 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-heading text-[11px] font-semibold tracking-[0.2em] text-emerald-300">0{i + 1} / EQUIPMENT</span>
                  <span className="text-2xl font-light text-slate-400 transition group-hover:text-emerald-300" aria-hidden>↗</span>
                </div>
                <div>
                  <h3 className="font-heading text-[23px] font-bold tracking-[-0.04em] text-white sm:text-[27px]">{card.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-[1.95] text-slate-300 sm:text-[15px]">{card.description}</p>
                  <span className="mt-7 inline-block border-b border-emerald-400/50 pb-1 font-heading text-[12px] font-semibold text-emerald-300">Explore category</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0b121e]">
        <div className="castech-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="castech-eyebrow">A Virexa AI Technologies division</p>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl">Specialist hardware.<br/>Connected expertise.</h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-300">CasTech concentrates on physical casino equipment and professional supply inquiries. Virexa brings the wider group's technology and engineering focus.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/about" className="castech-btn-secondary">About CasTech</Link>
            <Link href="/contact" className="castech-btn-primary">Contact sales</Link>
            <a href="https://virexa-tech.com" target="_blank" rel="noopener noreferrer" className="castech-btn-secondary">Virexa ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
