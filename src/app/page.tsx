import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeLanding } from "@/components/HomeLanding";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Header />
      <main>
        <HomeLanding />
      </main>
      <Footer />
    </div>
  );
}
