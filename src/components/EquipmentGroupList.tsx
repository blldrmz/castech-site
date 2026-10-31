import type { LiveGameGroup } from "@/content/liveGames";
import { href, ui, type Locale } from "@/lib/i18n";
import Link from "next/link";

type Props = {
  groups: LiveGameGroup[];
  coverById?: Record<string, string>;
  locale?: Locale;
};

export function EquipmentGroupList({ groups, locale = "en" }: Props) {
  const t = ui[locale].groups;
  return (
    <div>
      <div className="mb-14 rounded-xl border border-slate-700/55 bg-[#112031] px-6 py-6 sm:mb-20 sm:px-8">
        <p className="castech-eyebrow">{t.explore}</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="rounded-lg border border-white/15 px-4 py-2.5 text-[12px] font-semibold text-slate-200 transition hover:border-[#e3bc7b]/50 hover:text-[#e3bc7b]">{g.title} ↘</a>
          ))}
        </div>
      </div>
      <div className="space-y-20 sm:space-y-24">
        {groups.map((group,groupIndex) => (
          <section key={group.id} id={group.id} className="scroll-mt-28 border-b border-slate-700/50 pb-20 last:border-0 sm:pb-24">
            <div className="grid gap-5 lg:grid-cols-[80px_1fr] lg:gap-8">
              <div className="font-heading text-[12px] font-bold tracking-[.16em] text-[#e3bc7b]">{String(groupIndex+1).padStart(2,"0")} /</div>
              <div>
                <h2 className="max-w-4xl font-heading text-[clamp(1.8rem,3.2vw,2.7rem)] font-bold leading-[1.2] tracking-[-.045em] text-white">{group.title}</h2>
                <p className="mt-5 max-w-3xl text-[15px] leading-8 text-slate-300">{group.intro}</p>
                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {group.items.map((item,index)=>(
                    <article key={item.title} className="flex min-h-[210px] flex-col rounded-xl border border-slate-600/40 bg-[#111e2d] p-6 transition hover:border-[#e3bc7b]/30 sm:p-7">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-heading text-[11px] font-bold tracking-[.13em] text-[#e3bc7b]">{t.item} {String(index+1).padStart(2,"0")}</span>
                        <span className="h-px w-10 bg-[#e3bc7b]/30" aria-hidden="true"/>
                      </div>
                      <h3 className="mt-6 font-heading text-[17px] font-semibold leading-7 text-white">{item.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-[1.85] text-slate-300">{item.description}</p>
                      <Link className="mt-5 w-fit text-[12px] font-semibold text-[#e3bc7b] hover:text-[#f3d59e]" href={href(locale, "/contact")}>{t.ask}</Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <p className="mt-6 max-w-4xl text-xs leading-6 text-slate-400">{t.note}</p>
    </div>
  );
}
