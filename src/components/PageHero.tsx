type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  id?: string;
};

export function PageHero({ eyebrow, title, lead, id }: Props) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-b border-white/[0.06] bg-zinc-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.11),transparent_52%),radial-gradient(circle_at_20%_80%,rgba(6,78,59,0.15),transparent_42%),radial-gradient(circle_at_left,rgba(24,24,27,0.9),transparent_50%)]" />
      <div className="relative z-10 castech-container castech-section-y pb-14 sm:pb-16">
        <div className="h-px w-14 rounded-full bg-gradient-to-r from-emerald-400/70 to-transparent" />
        <p className="castech-eyebrow mt-8">{eyebrow}</p>
        <h1 className="castech-hero-title mt-5 max-w-3xl sm:mt-6">{title}</h1>
        <p className="castech-hero-body mt-8 max-w-3xl text-zinc-300 sm:mt-10">
          {lead}
        </p>
      </div>
    </section>
  );
}
