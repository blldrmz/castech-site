import { SiteShell } from "@/components/SiteShell";
import { HomeLanding } from "@/components/HomeLanding";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Casino Equipment Supplier | Slot Machines, Gaming Tables, Chips & Jackpot Screens",
  "Casino equipment supplier based in Prague and Batumi. New gaming tables, chairs, chips, layouts and accessories, plus used slot machines, refurbished shufflers and custom LED jackpot screens.",
  "/",
);

export default function Home() {
  return (
    <SiteShell>
      <HomeLanding />
    </SiteShell>
  );
}
