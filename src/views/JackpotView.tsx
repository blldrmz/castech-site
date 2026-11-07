import { JackpotGallery } from "@/components/JackpotGallery";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { href, localePath, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";
import Link from "next/link";

type TitleText = { readonly title: string; readonly text: string };

export type JackpotContent = {
  hero: { readonly eyebrow: string; readonly title: string; readonly lead: string };
  highlights: readonly TitleText[];
  sizes: { readonly title: string; readonly paragraphs: readonly string[] };
  formats: readonly TitleText[];
  brief: readonly string[];
  gallery: readonly { src: string; alt: string; caption: string }[];
  faq?: { readonly title: string; readonly items: readonly { readonly q: string; readonly a: string }[] };
  labels: {
    sizesEyebrow: string;
    quote: string;
    installEyebrow: string;
    installTitle: string;
    photoNote: string;
    ledPre: string;
    ledLink: string;
    ledPost: string;
    installLink: string;
    briefEyebrow: string;
    briefTitle: string;
    ctaTitle: string;
    ctaText: string;
  };
};

const heroSlides = [
  "six-bank", "egt-three-machines", "overhead-grand", "wall-screen", "four-sided-purple", "entrance-led", "tv-wall", "egt-cube",
  "three-level-fireworks", "dark-room", "boost-closeup", "apex-clover-wave", "apex-clover-twist", "princess-bell-link", "slim-column",
].map((n) => ({ src: `/images/hero/${n}.webp`, position: "center" }));

export function JackpotView({ c, locale = "en" }: { c: JackpotContent; locale?: Locale }) {
  const l = c.labels;
  const pageUrl = `${SITE_URL}${localePath(locale, "/jackpot-screens/")}`;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: c.hero.title.replace(/\.$/, ""),
    description: c.hero.lead,
    url: pageUrl,
    image: c.gallery.slice(0, 4).map((g) => `${SITE_URL}${g.src}`),
    brand: { "@type": "Brand", name: "CasTech EQ" },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Casino LED jackpot display",
  };
  const faqJsonLd = c.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <SiteShell locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <PageHero id="top" slides={heroSlides} eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} locale={locale} />

      <div className="bg-ink">
        <div className="castech-container castech-section-y">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {c.highlights.map((h) => (
              <div key={h.title} className="castech-card-product flex flex-col p-6 sm:p-7">
                <h2 className="castech-card-title">{h.title}</h2>
                <p className="castech-body mt-3 text-sm text-zinc-200 sm:mt-4 sm:text-base">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="castech-eyebrow">{l.sizesEyebrow}</p>
              <h2 className="castech-h2 castech-h2-gap">{c.sizes.title}</h2>
              {c.sizes.paragraphs.map((p, i) => (
                <p key={i} className="castech-body mt-6 text-zinc-300">{p}</p>
              ))}
              <Link href={href(locale, "/contact?item=LED%20jackpot%20screen")} className="castech-btn-primary mt-9 inline-flex">
                {l.quote} <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.formats.map((f) => (
                <div key={f.title} className="castech-card-product p-6">
                  <h3 className="castech-card-title">{f.title}</h3>
                  <p className="castech-body mt-3 text-sm text-zinc-300">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <p className="castech-eyebrow">{l.installEyebrow}</p>
            <h2 className="castech-h2 castech-h2-gap">{l.installTitle}</h2>
            <JackpotGallery items={c.gallery} locale={locale} />
            <p className="mt-6 max-w-[72ch] text-[13px] leading-6 text-slate-400">{l.photoNote}</p>
            <p className="castech-body mt-6 max-w-3xl text-zinc-300">
              {l.ledPre}{" "}
              <a href="https://castechled.com" className="text-gold underline-offset-4 hover:underline">{l.ledLink}</a>
              {l.ledPost}
            </p>
            <Link href={href(locale, "/installations")} className="castech-btn-secondary mt-8 inline-flex">
              {l.installLink} <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>

          <div className="mt-20 max-w-3xl">
            <p className="castech-eyebrow">{l.briefEyebrow}</p>
            <h2 className="castech-h2 castech-h2-gap">{l.briefTitle}</h2>
            <ul className="mt-8 space-y-3">
              {c.brief.map((b) => (
                <li key={b} className="castech-body flex gap-3 text-zinc-200">
                  <span aria-hidden="true" className="mt-1 text-gold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {c.faq && (
            <div className="mt-20 max-w-3xl">
              <p className="castech-eyebrow">FAQ</p>
              <h2 className="castech-h2 castech-h2-gap">{c.faq.title}</h2>
              <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {c.faq.items.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span aria-hidden="true" className="text-gold transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="castech-body mt-3 text-zinc-300">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <SectionCta title={l.ctaTitle} text={l.ctaText} locale={locale} />
    </SiteShell>
  );
}
