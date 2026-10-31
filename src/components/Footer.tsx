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
    <footer className="border-t border-gold/20 bg-ink">
      <div className="castech-container py-12">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="flex items-center gap-3 font-heading text-xl font-bold tracking-[.17em] text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/castech-mark.svg" alt="" width={62} height={62} className="h-14 w-auto" />
              <span>CASTECH <span className="text-gold">EQ</span></span>
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
              <Link key={l.href} href={href(locale, l.href)} className="hover:text-gold">{l.label}</Link>
            ))}
          </div>
          <div className="text-sm text-slate-300">
            <a href={`mailto:${contactContent.email}`} className="block hover:text-gold">{contactContent.email}</a>
            {phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="mt-2 block hover:text-gold">{p.label}</a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-slate-400">
          <span>{t.copyright}</span>
          <a href="https://virexa-tech.com" target="_blank" rel="noopener noreferrer" className="font-semibold tracking-[.08em] text-gold hover:underline">
            {t.company}
          </a>
        </div>
      </div>
    </footer>
  );
}
