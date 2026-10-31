import { aboutBackground, aboutPageContent } from "@/content/aboutPage";
import { pageMeta } from "@/lib/seo";
import { AboutView } from "@/views/AboutView";

export const metadata = pageMeta(
  "About CasTech EQ | 22 Years of International Casino Experience",
  "CasTech EQ, a brand of Virexa AI Technologies s.r.o.: 22 years of casino setup experience, own-production LED jackpot screens, used slots and shufflers.",
  "/about/",
);

export default function AboutPage() {
  return (
    <AboutView
      c={aboutPageContent}
      b={aboutBackground}
      cta={{ title: "Work with us on your next project", text: "If you are expanding, refurbishing, or building from greenfield, we are ready to help with equipment selection and planning." }}
    />
  );
}
