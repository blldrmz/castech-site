import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeLanding } from "@/components/HomeLanding";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Casino Equipment Supplier | Slot Machines, Gaming Tables, Chips & Jackpot Screens",
  "Casino equipment supplier based in Prague and Batumi. New gaming tables, chairs, chips, layouts and accessories, plus used slot machines, refurbished shufflers and custom LED jackpot screens.",
  "/",
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070d15] text-white">
      <Header />
      <main>
        <HomeLanding />
      </main>
      <Footer />
    </div>
  );
}
