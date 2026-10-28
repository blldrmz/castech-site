import type { LegalSection } from "@/content/legal";

const MAIL = "sales@virexa-tech.com";

function withLinks(text: string) {
  const parts = text.split(new RegExp(`(${MAIL}|uoou\\.gov\\.cz|/\\.well-known/security\\.txt)`, "g"));
  return parts.map((part, i) => {
    if (part === MAIL) return <a key={i} href={`mailto:${MAIL}`} className="text-[#e3bc7b] underline underline-offset-4">{part}</a>;
    if (part === "uoou.gov.cz") return <a key={i} href="https://uoou.gov.cz" rel="noopener noreferrer" className="text-[#e3bc7b] underline underline-offset-4">{part}</a>;
    if (part === "/.well-known/security.txt") return <a key={i} href="/.well-known/security.txt" className="text-[#e3bc7b] underline underline-offset-4">{part}</a>;
    return part;
  });
}

export function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="bg-[#070d15]">
      <div className="castech-container castech-section-y">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-heading text-xl font-bold text-white">{s.title}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="castech-body mt-4 text-zinc-300">{withLinks(p)}</p>
              ))}
              {s.bullets.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="castech-body">{withLinks(b)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
