import { footerContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center sm:text-left">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="font-sans space-y-1 text-sm font-medium leading-relaxed text-zinc-300">
            <div>{footerContent.copyright}</div>
            <div className="text-[13px] text-zinc-400">
              {footerContent.brandLine}
            </div>
          </div>
          <div className="font-sans text-[13px] leading-relaxed text-zinc-400">
            {footerContent.tagline}
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-8 text-center font-sans text-xs font-medium uppercase tracking-wide text-zinc-500 sm:text-left">
          {footerContent.poweredBy}
        </div>
      </div>
    </footer>
  );
}
