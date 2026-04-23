import type { CctvShowcaseBrand } from "@/content/cctvContent";
import Image from "next/image";

type Props = {
  brands: CctvShowcaseBrand[];
};

export function CctvShowcase({ brands }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {brands.map((brand) => (
        <article
          key={brand.id}
          className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-zinc-900 shadow-xl shadow-black/40"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
            <Image
              src={brand.image}
              alt={brand.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/20" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {brand.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-emerald-300/95 sm:text-base">
                {brand.tagline}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm font-medium leading-relaxed text-zinc-200 sm:text-[15px] sm:leading-7">
                {brand.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
