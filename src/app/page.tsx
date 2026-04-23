import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InventoryPageContent } from "@/components/InventoryPageContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Header />
      <main>
        <InventoryPageContent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
