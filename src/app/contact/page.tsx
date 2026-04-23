import { Contact } from "@/components/Contact";
import { SiteShell } from "@/components/SiteShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a casino equipment offer from CasTech. Georgia-based supplier for live games, slots, accessories and CCTV.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="bg-zinc-950/80">
        <div className="castech-container pt-20 sm:pt-24">
          <div className="h-px w-14 rounded-full bg-gradient-to-r from-emerald-400/70 to-transparent" />
        </div>
      </div>
      <Contact />
    </SiteShell>
  );
}
