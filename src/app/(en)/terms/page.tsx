import { LegalDocument } from "@/components/LegalDocument";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { legalUpdated, termsSections } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Terms & Conditions by Virexa AI Technologies",
  "Website terms of use and general conditions for CasTech EQ, a brand of Virexa AI Technologies s.r.o., Prague.",
  "/terms/",
);

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero id="top" eyebrow="Legal" title="Terms & Conditions" lead={`Terms of use for this website, operated by Virexa AI Technologies s.r.o. Last updated: ${legalUpdated}.`} />
      <LegalDocument sections={termsSections} />
    </SiteShell>
  );
}
