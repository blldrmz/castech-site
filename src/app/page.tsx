import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Solutions } from "@/components/Solutions";
import { WhyCasTech } from "@/components/WhyCasTech";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <WhyCasTech />
        <Products />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
