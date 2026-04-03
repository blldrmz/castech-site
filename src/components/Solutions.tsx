import { solutionItems, solutionsIntro } from "@/content/site";

export function Solutions() {
  return (
    <section id="solutions" className="border-y border-white/[0.06] bg-black/25">
      <div className="castech-container castech-section-y">
        <div className="max-w-2xl">
          <p className="castech-eyebrow">{solutionsIntro.eyebrow}</p>
          <h2 className="castech-h2 castech-h2-gap">{solutionsIntro.title}</h2>
          <p className="castech-body mt-8 sm:mt-9">{solutionsIntro.description}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {solutionItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/[0.07] bg-white/[0.04] p-7 transition hover:border-white/[0.1] sm:p-8"
            >
              <div className="castech-card-title">{item.title}</div>
              <div className="castech-body mt-4">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
