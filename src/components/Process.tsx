import { processIntro, processSteps } from "@/content/site";

export function Process() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.025]">
      <div className="castech-container castech-section-y">
        <div className="max-w-2xl">
          <p className="castech-eyebrow">{processIntro.eyebrow}</p>
          <h2 className="castech-h2 castech-h2-gap">{processIntro.title}</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.no}
              className="rounded-3xl border border-white/[0.07] bg-zinc-950/80 p-7 sm:p-8"
            >
              <div className="font-heading text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-400">
                {step.no}
              </div>
              <div className="font-heading mt-5 text-xl font-bold tracking-tight text-zinc-50">
                {step.title}
              </div>
              <p className="font-sans mt-5 text-base font-medium leading-8 text-zinc-100">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
