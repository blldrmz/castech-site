import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeLanding } from "@/components/HomeLanding";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Casino Equipment & Jackpot Screens | Used Slot Machines",
  "Casino equipment supplier based in Prague. Used slot machines, refurbished shuffle machines and custom LED jackpot screens for casinos across Europe, Africa and Asia.",
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
