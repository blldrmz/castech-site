"use client";

import { companyContent, contactContent } from "@/content/site";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "fallback";

export function Contact() {
  const { fields } = contactContent;
  const [status, setStatus] = useState<Status>("idle");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Prefill the message when arriving from a product / search link (?item=...)
  useEffect(() => {
    const item = new URLSearchParams(window.location.search).get("item");
    if (item && messageRef.current && !messageRef.current.value) {
      messageRef.current.value = "Inquiry about: " + item.slice(0, 200) + "\n\n";
    }
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (String(fd.get("website") || "")) return; // honeypot
    const name = String(fd.get("name") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) return;
    const subject = "CasTech EQ equipment inquiry" + (company ? " — " + company : "");
    const text = [
      "Name: " + name,
      "Company: " + (company || "Not specified"),
      "Email: " + email,
      "Phone / WhatsApp: " + (phone || "Not specified"),
      "",
      "Equipment requirements:",
      message,
    ].join("\n");

    setStatus("sending");
    try {
      const res = await fetch(contactContent.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, company, email, phone, message, _subject: subject, _template: "table", _replyto: email }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("fallback");
      window.location.href =
        "mailto:" + contactContent.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
    }
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
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">Business email</span>
                <a href={`mailto:${contactContent.email}`} className="font-semibold text-white underline-offset-4 hover:underline">
                  {contactContent.email} ↗
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">Czech Republic · Prague (registered office)</span>
                <span>{contactContent.pragueAddress}</span>
                <a href={`tel:${contactContent.praguePhoneTel}`} className="mt-1 block font-semibold text-white hover:text-[#e3bc7b]">{contactContent.praguePhone}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">Georgia · Batumi</span>
                <span>{contactContent.batumiAddress}</span>
                <a href={`tel:${contactContent.georgiaPhoneTel}`} className="mt-1 block font-semibold text-white hover:text-[#e3bc7b]">{contactContent.georgiaPhone}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">Company details</span>
                <span className="block">{companyContent.legalName}</span>
                <span className="block">IČO {companyContent.ico}</span>
                <span className="block text-sm leading-7 text-slate-400">{companyContent.register}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">Website</span>
                <a href={contactContent.websiteHref} className="font-semibold text-white hover:text-[#e3bc7b]">{contactContent.websiteLabel} ↗</a>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border border-slate-600/50 bg-[#101c2d] p-7 shadow-xl shadow-black/30 sm:p-9">
            <div className="font-heading text-xl font-bold tracking-tight text-white">{contactContent.formTitle}</div>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-300">{contactContent.formNote}</p>
            <form onSubmit={submit} className="mt-8 grid gap-5">
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
                <label htmlFor="contact-phone" className="castech-field-label">{fields.phone}</label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className="castech-input" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="contact-message" className="castech-field-label">{fields.message} *</label>
                <textarea id="contact-message" ref={messageRef} name="message" required className="castech-input min-h-[140px] resize-y py-3.5 leading-relaxed" />
              </div>
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
                <label htmlFor="contact-website">Leave this field empty</label>
                <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <label className="flex items-start gap-3 text-[13px] leading-6 text-slate-300">
                <input type="checkbox" name="consent" required className="mt-1.5 shrink-0" />
                <span>
                  I agree that CasTech EQ may use these details to reply to my inquiry. See the{" "}
                  <Link href="/privacy" className="text-[#e3bc7b] underline underline-offset-4">Privacy Policy</Link>. *
                </span>
              </label>
              <button type="submit" disabled={status === "sending"} className="castech-btn-primary mt-1 w-full sm:w-auto">
                {status === "sending" ? "Sending…" : contactContent.submit} <span aria-hidden="true">↗</span>
              </button>
              <p role="status" aria-live="polite" className="text-sm leading-7 text-slate-300">
                {status === "sent" ? "Thank you. Your inquiry was sent and we will reply by email." : null}
                {status === "fallback" ? "Sending failed. Your email application should open with the request, please send it from there." : null}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
