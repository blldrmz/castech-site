import { contactContent } from "@/content/site";

export function Contact() {
  const { fields } = contactContent;

  return (
    <section id="contact" className="border-t border-white/[0.06] bg-black/35">
      <div className="castech-container castech-section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <p className="castech-eyebrow">{contactContent.eyebrow}</p>
            <h2 className="castech-h2 castech-h2-gap max-w-xl">
              {contactContent.title}
            </h2>
            <p className="castech-body-strong mt-8 max-w-xl sm:mt-9">
              {contactContent.description}
            </p>
            <div className="font-sans mt-10 space-y-3.5 text-base font-medium leading-8 text-zinc-200">
              <div>
                <span className="text-zinc-300">Email</span>
                <span className="mx-2 text-zinc-600">·</span>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="font-medium text-emerald-400 underline-offset-[3px] transition hover:text-emerald-300 hover:underline"
                >
                  {contactContent.email}
                </a>
              </div>
              <div>
                <span className="text-zinc-300">Website</span>
                <span className="mx-2 text-zinc-600">·</span>
                <a
                  href={contactContent.websiteHref}
                  className="font-medium text-emerald-400 underline-offset-[3px] transition hover:text-emerald-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactContent.websiteLabel}
                </a>
              </div>
              <div>
                <span className="text-zinc-300">Location</span>
                <span className="mx-2 text-zinc-600">·</span>
                <span className="text-zinc-100">{contactContent.location}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-zinc-900/50 to-zinc-950/80 p-7 shadow-xl shadow-black/30 sm:p-9">
            <div className="font-heading text-lg font-bold tracking-tight text-zinc-50">
              {contactContent.formTitle}
            </div>
            <p className="font-sans mt-3 text-sm font-medium leading-relaxed text-zinc-300">
              {contactContent.formNote}
            </p>
            <form className="mt-8 grid gap-5" noValidate>
              <div className="grid gap-2.5">
                <label htmlFor="contact-name" className="castech-field-label">
                  {fields.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  className="castech-input"
                />
              </div>
              <div className="grid gap-2.5">
                <label htmlFor="contact-company" className="castech-field-label">
                  {fields.company}
                </label>
                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  className="castech-input"
                />
              </div>
              <div className="grid gap-2.5">
                <label htmlFor="contact-email" className="castech-field-label">
                  {fields.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  className="castech-input"
                />
              </div>
              <div className="grid gap-2.5">
                <label htmlFor="contact-message" className="castech-field-label">
                  {fields.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="castech-input min-h-[132px] resize-y py-3.5 leading-relaxed"
                />
              </div>
              <button
                type="button"
                className="castech-btn-primary mt-1 w-full sm:w-auto"
              >
                {contactContent.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
