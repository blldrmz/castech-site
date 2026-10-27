import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export function SiteShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#070d15] text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
