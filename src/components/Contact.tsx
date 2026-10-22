"use client";

import { contactContent } from "@/content/site";
import { useState, type FormEvent } from "react";

export function Contact() {
  const { fields } = contactContent;
  const [prepared, setPrepared] = useState(false);

  function prepareEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent("CasTech EQ equipment inquiry" + (company ? " — " + company : ""));
    const body = encodeURIComponent(
      ["CasTech EQ equipment inquiry", "", "Name: " + name, "Company: " + (company || "Not specified"), "Email: " + email, "", "Equipment requirements:", message].join("\n")
    );
    setPrepared(true);
    window.location.href = "mailto:" + contactContent.email + "?subject=" + subject + "&body=" + body;
  }

  return (
    <section id="contact" className="border-t border-white/10 bg-[#0b1421]">
      <div className="castech-container castech-section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <p className="castech-eyebrow">{contactContent.eyebrow}</p>
            <h2 className="castech-h2 castech-h2-gap max-w-xl">{contactContent.title}</h2>
            <p className="castech-body-strong mt-8 max-w-xl sm:mt-9">{contactContent.description}</p>

            <div className="mt-9 space-y-5 border-t border-white/10 pt-7 text-[15px] leading-8 text-slate-300">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-emerald-300">Business email</span>
                <a href={`mailto:${contactContent.email}`} className="font-semibold text-white underline-offset-4 hover:underline">
                  {contactContent.email} ↗
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-emerald-300">Czech Republic · Prague</span>
                <span>{contactContent.pragueAddress}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-emerald-300">Georgia · Batumi</span>
                <span>{contactContent.batumiAddress}</span>
                <a href="tel:+995555481975" className="mt-1 block font-semibold text-white hover:text-emerald-300">{contactContent.georgiaPhone}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-emerald-300">Website</span>
                <a href={contactContent.websiteHref} className="font-semibold text-white hover:text-emerald-300">{contactContent.websiteLabel} ↗</a>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border border-slate-600/50 bg-[#101c2d] p-7 shadow-xl shadow-black/30 sm:p-9">
            <div className="font-heading text-xl font-bold tracking-tight text-white">{contactContent.formTitle}</div>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-300">{contactContent.formNote}</p>
            <form onSubmit={prepareEmail} className="mt-8 grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="contact-name" className="castech-field-label">{fields.name} *</label>
                <input id="contact-name" name="name" autoComplete="name" required className="castech-input" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="contact-company" className="castech-field-label">{fields.company}</label>
                <input id="contact-company" name="company" autoComplete="organization" className="castech-input" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="contact-email" className="castech-field-label">{fields.email} *</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" required className="castech-input" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="contact-message" className="castech-field-label">{fields.message} *</label>
                <textarea id="contact-message" name="message" required className="castech-input min-h-[140px] resize-y py-3.5 leading-relaxed" />
              </div>
              <button type="submit" className="castech-btn-primary mt-1 w-full sm:w-auto">{contactContent.submit} ↗</button>
              {prepared ? <p role="status" className="text-sm leading-7 text-slate-300">Your email application should open with the request. Review and send it there; this website does not send messages directly.</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
