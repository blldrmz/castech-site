import { aboutContent } from "@/content/site";

export function About() {
  return (
    <section id="about" className="castech-container castech-section-y">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="castech-eyebrow">{aboutContent.eyebrow}</p>
          <h2 className="castech-h2 castech-h2-gap">{aboutContent.title}</h2>
          {aboutContent.paragraphs.map((p, i) => (
            <p
              key={p.slice(0, 48)}
              className={`castech-body-strong max-w-prose ${
                i === 0 ? "mt-8 sm:mt-9" : "mt-6"
              }`}
            >
              {p}
            </p>
          ))}
        </div>
        <div className="rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-cyan-500/[0.06] p-7 sm:p-9">
          <p className="castech-eyebrow-muted">{aboutContent.focusHeading}</p>
          <div className="mt-8 space-y-3">
            {aboutContent.focusAreas.map((item) => (
              <div
                key={item}
                className="font-sans rounded-2xl border border-white/[0.07] bg-black/30 px-5 py-3.5 text-base font-medium leading-snug tracking-normal text-zinc-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
