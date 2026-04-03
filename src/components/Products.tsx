import { products, productsIntro } from "@/content/site";

export function Products() {
  return (
    <section id="products" className="castech-container castech-section-y">
      <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <p className="castech-eyebrow">{productsIntro.eyebrow}</p>
          <h2 className="castech-h2 castech-h2-gap">{productsIntro.title}</h2>
        </div>
        <p className="castech-body max-w-xl lg:max-w-md lg:pb-1 lg:text-right">
          {productsIntro.description}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-7">
        {products.map((product) => (
          <div key={product.title} className="castech-card-product group">
            <div className="font-heading text-lg font-bold tracking-tight text-zinc-50 sm:text-xl">
              {product.title}
            </div>
            <p className="font-sans mt-6 flex-1 text-base font-medium leading-8 text-zinc-100 sm:min-h-[7.5rem]">
              {product.desc}
            </p>
            <div className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-8">
              {product.points.map((point) => (
                <div
                  key={point}
                  className="font-sans rounded-xl border border-white/[0.06] bg-black/25 px-4 py-3 text-[15px] font-medium leading-snug text-zinc-100"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
