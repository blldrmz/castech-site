import { companyContent, contactContent, footerContent } from "@/content/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#e3bc7b]/20 bg-[#070d15]">
      <div className="castech-container py-12">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="font-heading text-xl font-bold tracking-[.17em] text-white">
              CASTECH <span className="text-[#e3bc7b]">EQ</span>
            </p>
            <p className="mt-3 text-[12px] tracking-[.13em] text-slate-400">PROFESSIONAL CASINO EQUIPMENT</p>
            <p className="mt-5 max-w-xs text-xs leading-6 text-slate-400">
              {companyContent.legalName}
              <br />
              {companyContent.registeredOffice}
              <br />
              IČO {companyContent.ico}
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <Link href="/catalog" className="hover:text-[#e3bc7b]">Catalogue</Link>
            <Link href="/about" className="hover:text-[#e3bc7b]">About</Link>
            <Link href="/contact" className="hover:text-[#e3bc7b]">Contact</Link>
            <Link href="/privacy" className="hover:text-[#e3bc7b]">Privacy Policy</Link>
          </div>
          <div className="text-sm text-slate-300">
            <a href={`mailto:${contactContent.email}`} className="block hover:text-[#e3bc7b]">{contactContent.email}</a>
            <a href={`tel:${contactContent.praguePhoneTel}`} className="mt-2 block hover:text-[#e3bc7b]">{contactContent.praguePhone} (Prague)</a>
            <a href={`tel:${contactContent.georgiaPhoneTel}`} className="mt-2 block hover:text-[#e3bc7b]">{contactContent.georgiaPhone} (Batumi)</a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-slate-400">
          <span>{footerContent.copyright}</span>
          <a href="https://virexa-tech.com" target="_blank" rel="noopener noreferrer" className="font-semibold tracking-[.08em] text-[#e3bc7b] hover:underline">
            A VIREXA AI TECHNOLOGIES COMPANY ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
