import { companyContent, contactContent } from "@/content/site";
import { href, ui, type Locale } from "@/lib/i18n";
import Link from "next/link";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale].footer;
  const phones = [
    { tel: contactContent.praguePhoneTel, label: `${contactContent.praguePhone} (${t.prague})` },
    { tel: contactContent.georgiaPhoneTel, label: `${contactContent.georgiaPhone} (${t.batumi})` },
  ];
  if (t.batumiFirst) phones.reverse();
  return (
    <footer className="border-t border-[#e3bc7b]/20 bg-[#070d15]">
      <div className="castech-container py-12">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="font-heading text-xl font-bold tracking-[.17em] text-white">
              CASTECH <span className="text-[#e3bc7b]">EQ</span>
            </p>
            <p className="mt-3 text-[12px] tracking-[.13em] text-slate-400">{t.claim}</p>
            <p className="mt-5 max-w-xs text-xs leading-6 text-slate-400">
              {companyContent.legalName}
              <br />
              {companyContent.registeredOffice}
              <br />
              IČO {companyContent.ico}
            </p>
            <p className="mt-3 max-w-xs text-xs leading-6 text-slate-400">
              {t.sister} {companyContent.sister.legalName}
              <br />
              {companyContent.sister.address}
              <br />
              ID {companyContent.sister.id}
            </p>
          </div>
          <div className="flex max-w-xl flex-wrap gap-6 text-sm text-slate-300">
            {t.links.map((l) => (
              <Link key={l.href} href={href(locale, l.href)} className="hover:text-[#e3bc7b]">{l.label}</Link>
            ))}
          </div>
          <div className="text-sm text-slate-300">
            <a href={`mailto:${contactContent.email}`} className="block hover:text-[#e3bc7b]">{contactContent.email}</a>
            {phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="mt-2 block hover:text-[#e3bc7b]">{p.label}</a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-slate-400">
          <span>{t.copyright}</span>
          <a href="https://virexa-tech.com" target="_blank" rel="noopener noreferrer" className="font-semibold tracking-[.08em] text-[#e3bc7b] hover:underline">
            {t.company}
          </a>
        </div>
      </div>
    </footer>
  );
}
