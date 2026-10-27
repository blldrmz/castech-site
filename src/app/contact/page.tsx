import { pageMeta } from "@/lib/seo";
import { Contact } from "@/components/Contact";
import { SiteShell } from "@/components/SiteShell";

export const metadata = pageMeta(
  "Contact",
  "Request a casino equipment offer from CasTech EQ. Offices in Prague, Czech Republic and Batumi, Georgia: live games, slots, jackpot screens and accessories.",
  "/contact/",
);

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="bg-zinc-950/80">
        <div className="castech-container pt-20 sm:pt-24">
          <div className="h-px w-14 rounded-full bg-gradient-to-r from-[#e3bc7b]/70 to-transparent" />
        </div>
      </div>
      <Contact />
    </SiteShell>
  );
}
