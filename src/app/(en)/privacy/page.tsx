import { LegalDocument } from "@/components/LegalDocument";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { legalUpdated, privacySections } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Privacy Policy by Virexa AI Technologies",
  "How Virexa AI Technologies s.r.o., operator of CasTech EQ, handles personal data submitted through castecheq.com and by email.",
  "/privacy/",
);

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero id="top" eyebrow="Legal" title="Privacy Policy" lead={`How Virexa AI Technologies s.r.o. handles personal data sent through this website and by email. Last updated: ${legalUpdated}.`} />
      <LegalDocument sections={privacySections} />
    </SiteShell>
  );
}
