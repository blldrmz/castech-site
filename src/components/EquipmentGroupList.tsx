import type { LiveGameGroup } from "@/content/liveGames";
import Image from "next/image";

type Props = {
  groups: LiveGameGroup[];
  coverById?: Record<string, string>;
};

export function EquipmentGroupList({ groups, coverById }: Props) {
  return (
    <div className="space-y-20 sm:space-y-24">
      {groups.map((group) => {
        const cover = coverById?.[group.id];
        return (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-28 border-b border-white/[0.04] pb-20 last:border-0 sm:pb-24"
          >
            {cover ? (
              <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/[0.08]">
                <div className="relative aspect-[21/9] w-full min-h-[140px] sm:aspect-[24/9]">
                  <Image
                    src={cover}
                    alt={group.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1280px"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/55 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                    <h2 className="font-heading max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {group.title}
                    </h2>
                    <p className="castech-body mt-3 max-w-xl line-clamp-3 text-sm text-zinc-200 sm:text-base">
                      {group.intro}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-3xl">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
                  {group.title}
                </h2>
                <p className="castech-body mt-4 text-zinc-300">{group.intro}</p>
              </div>
            )}

            <div className={`grid gap-5 sm:grid-cols-2 ${cover ? "mt-8" : "mt-10"}`}>
              {group.items.map((item) => (
                <article
                  key={item.title}
                  className="castech-card-product flex min-h-0 flex-col p-6 sm:p-7"
                >
                  <h3 className="castech-card-title text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="castech-body mt-3 text-sm leading-7 text-zinc-200 sm:mt-4 sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
