import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { companyContent, contactContent } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Privacy Policy",
  "How CasTech EQ handles personal data submitted through castecheq.com and by email.",
  "/privacy/",
);

const sections = [
  {
    title: "1. Who is responsible",
    body: [
      `${companyContent.legalName}, registered office ${companyContent.registeredOffice}, company ID (IČO) ${companyContent.ico}. ${companyContent.register}. The company operates the CasTech EQ brand. Contact: ${contactContent.email}, tel. ${contactContent.praguePhone}.`,
    ],
  },
  {
    title: "2. What we collect and why",
    body: [
      "Inquiry form and email: name, company, email, phone and the project details you enter. We use them to answer your inquiry and prepare an offer (steps taken at your request before a contract, Art. 6(1)(b) GDPR, and our legitimate interest in handling business inquiries, Art. 6(1)(f)).",
    ],
  },
  {
    title: "3. Cookies and third parties",
    body: [
      "This website does not set advertising or analytics cookies. It is hosted on GitHub Pages, so GitHub processes technical request data (such as IP address) to deliver pages. Some decorative photographs are loaded from Unsplash servers, which receive your IP address when those images load. Form submissions are processed by the form service FormSubmit before they reach our mailbox.",
    ],
  },
  {
    title: "4. Who receives your data",
    body: [
      "Our email provider, the form-processing service named above, and, where needed for your project, manufacturers, logistics and installation partners. We do not sell personal data.",
    ],
  },
  {
    title: "5. How long we keep it",
    body: [
      "Inquiries that do not lead to a contract are deleted after 24 months at the latest. Data tied to contracts and invoices is kept as long as accounting and tax law requires.",
    ],
  },
  {
    title: "6. Your rights",
    body: [
      `You may request access, correction, deletion, restriction or portability of your data, and object to processing based on legitimate interest. Write to ${contactContent.email}. You may also complain to the Czech data protection authority, Úřad pro ochranu osobních údajů (uoou.gov.cz).`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero id="top" eyebrow="Legal" title="Privacy Policy" lead="How we handle personal data sent through this website and by email. Last updated: October 2026." />
      <div className="bg-[#050507]">
        <div className="castech-container castech-section-y">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-heading text-xl font-bold text-white">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="castech-body mt-4 text-zinc-300">{p}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
