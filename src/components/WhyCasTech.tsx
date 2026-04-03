import { whyCasTechCards, whyCasTechIntro } from "@/content/whyCasTech";

export function WhyCasTech() {
  return (
    <section
      id="why-castech"
      className="border-y border-white/[0.06] bg-zinc-950/80"
    >
      <div className="castech-container castech-section-y">
        <div className="mx-auto max-w-3xl text-center">
          <p className="castech-eyebrow">{whyCasTechIntro.eyebrow}</p>
          <h2 className="castech-h2 castech-h2-gap">{whyCasTechIntro.title}</h2>
          <p className="castech-body mx-auto mt-5 max-w-2xl sm:mt-6">
            {whyCasTechIntro.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyCasTechCards.map((card) => (
            <div
              key={card.title}
              className="castech-card-product flex flex-col text-left"
            >
              <h3 className="castech-card-title text-lg sm:text-xl">{card.title}</h3>
              <p className="font-sans mt-4 text-base font-medium leading-8 text-zinc-200">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
