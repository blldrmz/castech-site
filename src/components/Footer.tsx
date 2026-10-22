import { mainNav } from "@/content/navigation";
import { footerContent } from "@/content/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070c14] px-6 py-11 text-slate-300 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <div className="font-heading text-xl font-bold tracking-[.12em] text-white">CASTECH</div>
            <p className="mt-1 text-xs uppercase tracking-[.13em] text-slate-400">Professional casino equipment</p>
            <p className="mt-4 text-[13px] leading-7 text-slate-400">{footerContent.tagline}</p>
          </div>
          <div className="flex flex-col items-start gap-2 text-[13px]">
            <a href="mailto:info@castecheq.com" className="font-semibold text-slate-200 hover:text-emerald-300">info@castecheq.com ↗</a>
            <span className="text-slate-400">Prague · Batumi</span>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[13px] font-medium" aria-label="Footer">
          <Link href="/" className="hover:text-emerald-300">Home</Link>
          {mainNav.map(({href,label})=><Link key={href} href={href} className="hover:text-emerald-300">{label}</Link>)}
          <Link href="/about" className="hover:text-emerald-300">About</Link>
        </nav>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400">
          <span>{footerContent.copyright}</span>
          <a href="https://virexa-tech.com" rel="noopener noreferrer" className="font-semibold text-slate-300 hover:text-emerald-300">A Virexa AI Technologies division ↗</a>
        </div>
      </div>
    </footer>
  );
}
