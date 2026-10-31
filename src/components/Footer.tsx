import { companyContent, contactContent } from "@/content/site";
import { href, ui, type Locale } from "@/lib/i18n";
import Link from "next/link";

const SOCIAL = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/castecheq",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V22H7.72V8z",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/castech.eq/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13a5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
];

const heading = "font-heading text-[11px] font-bold uppercase tracking-[.2em] text-gold";
const linkCls = "text-sm text-slate-300 transition hover:text-gold";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale].footer;
  const offices = [
    { label: t.pragueOffice, address: companyContent.registeredOffice, tel: contactContent.praguePhoneTel, phone: contactContent.praguePhone },
    { label: t.batumiOffice, address: companyContent.sister.address, tel: contactContent.georgiaPhoneTel, phone: contactContent.georgiaPhone },
  ];
  if (t.batumiFirst) offices.reverse();

  return (
    <footer className="border-t border-gold/20 bg-ink">
      <div className="castech-container pb-8 pt-14 sm:pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr_1.25fr] lg:gap-10">
          <div>
            <Link href={href(locale, "/")} className="inline-flex items-center gap-3 font-heading text-xl font-bold tracking-[.17em] text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/castech-mark.svg" alt="" width={62} height={62} className="h-12 w-auto" />
              <span>
                CASTECH <span className="text-gold">EQ</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">{t.about}</p>
            <p className={`${heading} mt-7`}>{t.follow}</p>
            <div className="mt-3 flex gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-gold/60 hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={t.productsTitle}>
            <p className={heading}>{t.productsTitle}</p>
            <ul className="mt-5 space-y-3">
              {t.products.map((l) => (
                <li key={l.href}>
                  <Link href={href(locale, l.href)} className={linkCls}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.companyTitle}>
            <p className={heading}>{t.companyTitle}</p>
            <ul className="mt-5 space-y-3">
              {t.companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={href(locale, l.href)} className={linkCls}>{l.label}</Link>
                </li>
              ))}
              <li>
                <a href="https://castechled.com" className={linkCls}>{t.led} ↗</a>
              </li>
            </ul>
          </nav>

          <div>
            <p className={heading}>{t.contactTitle}</p>
            <a href={`mailto:${contactContent.email}`} className="mt-5 inline-block text-sm font-semibold text-white transition hover:text-gold">
              {contactContent.email}
            </a>
            <div className="mt-5 space-y-5">
              {offices.map((o) => (
                <div key={o.label}>
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-slate-400">{o.label}</p>
                  <a href={`tel:${o.tel}`} className="mt-1.5 block text-sm font-semibold text-white transition hover:text-gold">{o.phone}</a>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{o.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1.5">
            <span>{t.copyright}</span>
            <span>
              {t.sister} {companyContent.sister.legalName}, ID {companyContent.sister.id}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:justify-end">
            <Link href="/privacy" className="transition hover:text-gold">{t.privacy}</Link>
            <Link href="/terms" className="transition hover:text-gold">{t.terms}</Link>
            <a href="https://virexa-tech.com" target="_blank" rel="noopener noreferrer" className="font-semibold tracking-[.08em] text-gold hover:underline">
              {t.company}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
