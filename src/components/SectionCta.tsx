import Link from "next/link";

type Props = {
  title?: string;
  text?: string;
};

export function SectionCta({
  title = "Ready to specify your project?",
  text = "Share your floor plan, brand preferences, and timeline—we will respond with options and next steps.",
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-zinc-950 to-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_58%)]" />
      <div className="relative z-10 castech-container castech-section-y">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 shadow-2xl shadow-black/50 sm:p-10 lg:p-12">
          <div className="mx-auto h-px w-16 rounded-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
          <h2 className="castech-h2 mt-8 text-center">{title}</h2>
          <p className="font-sans mt-6 text-center text-base font-medium leading-8 text-zinc-400 sm:text-lg sm:leading-8">
            {text}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/contact"
              className="castech-btn-primary min-h-[3rem] justify-center sm:min-h-[2.875rem]"
            >
              Contact us
            </Link>
            <Link
              href="/contact"
              className="castech-btn-secondary min-h-[3rem] justify-center sm:min-h-[2.875rem]"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
