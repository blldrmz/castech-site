import { pageMeta } from "@/lib/seo";
import { ContactView } from "@/views/SimpleViews";

export const metadata = pageMeta(
  "Contact — request a casino equipment offer",
  "Request a casino equipment offer from CasTech EQ. Offices in Prague, Czech Republic and Batumi, Georgia: live games, slots, jackpot screens and accessories.",
  "/contact/",
);

export default function ContactPage() {
  return <ContactView srTitle="Contact CasTech EQ, a brand of Virexa AI Technologies s.r.o." />;
}
