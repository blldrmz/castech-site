"use client";

import { companyContent, contactContent } from "@/content/site";
import { href, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "fallback";

const RU = {
  eyebrow: "Запросы от компаний",
  title: "Опишите, какое оборудование вам нужно.",
  description:
    "Расскажите, что требуется вашему казино: LED-табло джекпота, игровые столы, игровые автоматы или аксессуары. Мы обсудим спецификации, наличие и требования проекта. Для клиентов из Грузии и стран СНГ работает офис в Батуми.",
  formTitle: "Запрос на оборудование",
  formNote: "Опишите, что вам нужно. Мы ответим по электронной почте, обычно с уточняющими вопросами о количестве, размерах и стране доставки.",
  fields: { name: "Имя", company: "Компания", email: "Email", phone: "Телефон / WhatsApp / Telegram", message: "Оборудование и требования проекта" },
  submit: "Отправить запрос",
  sending: "Отправка…",
  sent: "Спасибо! Ваш запрос отправлен, мы ответим по электронной почте.",
  fallback: "Не удалось отправить. Откроется ваша почтовая программа с готовым письмом — отправьте его оттуда.",
  businessEmail: "Электронная почта",
  batumi: "Грузия · Батуми (запросы на русском языке)",
  prague: "Чехия · Прага (юридический адрес)",
  company: "Реквизиты",
  sister: "компания в Грузии, с",
  website: "Сайт",
  consentA: "Я согласен(на), что CasTech EQ использует эти данные для ответа на мой запрос. См.",
  privacy: "Privacy Policy",
  inquiryAbout: "Запрос по позиции: ",
  findMachine: "Пожалуйста, найдите для меня автомат:\n\nПроизводитель / модель: ",
  findMachineRest: "\nТип корпуса (стандартный, наклонный, VIP...):\nНабор игр или джекпот:\nКоличество:\nСтрана доставки:\n",
};

const DE = {
  eyebrow: "Geschäftsanfragen",
  title: "Beschreiben Sie Ihren Ausstattungsbedarf.",
  description:
    "Sagen Sie uns, was Ihr Casino braucht – von LED-Jackpot-Bildschirmen über Spieltische und Spielautomaten bis zu Zubehör. Wir besprechen Spezifikationen, Verfügbarkeit und Projektanforderungen.",
  formTitle: "Ausstattungsanfrage",
  formNote: "Beschreiben Sie, was Sie benötigen. Wir antworten per E-Mail, meist mit Rückfragen zu Mengen, Größen und Lieferland.",
  fields: { name: "Name", company: "Unternehmen", email: "E-Mail", phone: "Telefon / WhatsApp", message: "Ausstattung und Projektanforderungen" },
  submit: "Anfrage senden",
  sending: "Wird gesendet…",
  sent: "Vielen Dank. Ihre Anfrage wurde gesendet, wir antworten per E-Mail.",
  fallback: "Senden fehlgeschlagen. Ihr E-Mail-Programm öffnet sich mit der Anfrage – bitte senden Sie sie von dort.",
  businessEmail: "Geschäftliche E-Mail",
  batumi: "Georgien · Batumi",
  prague: "Tschechien · Prag (Firmensitz)",
  company: "Unternehmensdaten",
  sister: "Schwesterunternehmen, Georgien, seit",
  website: "Website",
  consentA: "Ich bin einverstanden, dass CasTech EQ diese Angaben zur Beantwortung meiner Anfrage verwendet. Siehe",
  privacy: "Privacy Policy",
  inquiryAbout: "Anfrage zu: ",
  findMachine: "Bitte finden Sie für mich diesen Automaten:\n\nHersteller / Modell: ",
  findMachineRest: "\nGehäusetyp (Upright, Slant Top, VIP...):\nSpielemix oder Jackpot:\nMenge:\nLieferland:\n",
};

const CS = {
  eyebrow: "Obchodní poptávky",
  title: "Popište, jaké vybavení potřebujete.",
  description:
    "Napište nám, co vaše kasino potřebuje – od LED jackpotových obrazovek přes herní stoly a výherní automaty po příslušenství. Probereme specifikace, dostupnost a požadavky projektu. Naše sídlo je v Praze.",
  formTitle: "Poptávka vybavení",
  formNote: "Popište, co potřebujete. Odpovíme e-mailem, obvykle s doplňujícími otázkami k množství, rozměrům a zemi dodání.",
  fields: { name: "Jméno", company: "Společnost", email: "E-mail", phone: "Telefon / WhatsApp", message: "Vybavení a požadavky projektu" },
  submit: "Odeslat poptávku",
  sending: "Odesílám…",
  sent: "Děkujeme. Vaše poptávka byla odeslána, odpovíme e-mailem.",
  fallback: "Odeslání se nezdařilo. Otevře se váš e-mailový program s poptávkou – odešlete ji prosím odtud.",
  businessEmail: "Obchodní e-mail",
  batumi: "Gruzie · Batumi",
  prague: "Česká republika · Praha (sídlo)",
  company: "Údaje o společnosti",
  sister: "sesterská společnost, Gruzie, od",
  website: "Web",
  consentA: "Souhlasím s tím, že CasTech EQ může tyto údaje použít k odpovědi na mou poptávku. Viz",
  privacy: "Privacy Policy",
  inquiryAbout: "Poptávka: ",
  findMachine: "Najděte mi prosím tento automat:\n\nVýrobce / model: ",
  findMachineRest: "\nTyp kabinetu (upright, slant top, VIP...):\nSada her nebo jackpot:\nMnožství:\nZemě dodání:\n",
};

const LOCAL = { de: DE, cs: CS, ru: RU };

export function Contact({ locale = "en" }: { locale?: Locale }) {
  const L = locale === "en" ? null : LOCAL[locale];
  const ru = locale === "ru";
  const c = L ? { ...contactContent, ...L } : contactContent;
  const { fields } = c;
  const [status, setStatus] = useState<Status>("idle");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Prefill the message when arriving from a product / search link (?item=...)
  useEffect(() => {
    const item = new URLSearchParams(window.location.search).get("item");
    if (item && messageRef.current && !messageRef.current.value) {
      const found = item.replace(/^Find a machine:?\s*/, "").slice(0, 120);
      messageRef.current.value = item.startsWith("Find a machine")
        ? L
          ? L.findMachine + found + L.findMachineRest
          : "Please find this machine for me:\n\nBrand / model: " + found + "\nCabinet type (upright, slant top, VIP...):\nGame mix or jackpot:\nQuantity:\nDelivery country:\n"
        : (L ? L.inquiryAbout : "Inquiry about: ") + item.slice(0, 200) + "\n\n";
    }
  }, [L]);

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
    const subject = (L ? `[${locale.toUpperCase()}] ` : "") + "CasTech EQ equipment inquiry" + (company ? " — " + company : "");
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
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    try {
      const res = await fetch(contactContent.formEndpoint, {
        method: "POST",
        signal: ctrl.signal,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, company, email, phone, message, _subject: subject, _template: "table", _replyto: email }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const result = await res.json().catch(() => ({}));
      if (result.success !== true && result.success !== "true") throw new Error(result.message || "Not accepted");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("fallback");
      window.location.href =
        "mailto:" + contactContent.inquiryEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
    } finally {
      clearTimeout(timer);
    }
  }

  return (
    <section id="contact" className="border-t border-white/10 bg-[#0b1421]">
      <div className="castech-container castech-section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <p className="castech-eyebrow">{c.eyebrow}</p>
            <h2 className="castech-h2 castech-h2-gap max-w-xl">{c.title}</h2>
            <p className="castech-body-strong mt-8 max-w-xl sm:mt-9">{c.description}</p>

            <div className="mt-9 space-y-5 border-t border-white/10 pt-7 text-[15px] leading-8 text-slate-300">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">{L ? L.businessEmail : "Business email"}</span>
                <a href={`mailto:${contactContent.email}`} className="font-semibold text-white underline-offset-4 hover:underline">
                  {contactContent.email} ↗
                </a>
              </div>
              {ru ? (
                <>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">{L ? L.batumi : "Georgia · Batumi"}</span>
                <span>{contactContent.batumiAddress}</span>
                <a href={`tel:${contactContent.georgiaPhoneTel}`} className="mt-1 block font-semibold text-white hover:text-[#e3bc7b]">{contactContent.georgiaPhone}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">{L ? L.prague : "Czech Republic · Prague (registered office)"}</span>
                <span>{contactContent.pragueAddress}</span>
                <a href={`tel:${contactContent.praguePhoneTel}`} className="mt-1 block font-semibold text-white hover:text-[#e3bc7b]">{contactContent.praguePhone}</a>
              </div>
                </>
              ) : (
                <>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">{L ? L.prague : "Czech Republic · Prague (registered office)"}</span>
                <span>{contactContent.pragueAddress}</span>
                <a href={`tel:${contactContent.praguePhoneTel}`} className="mt-1 block font-semibold text-white hover:text-[#e3bc7b]">{contactContent.praguePhone}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">{L ? L.batumi : "Georgia · Batumi"}</span>
                <span>{contactContent.batumiAddress}</span>
                <a href={`tel:${contactContent.georgiaPhoneTel}`} className="mt-1 block font-semibold text-white hover:text-[#e3bc7b]">{contactContent.georgiaPhone}</a>
              </div>
                </>
              )}
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">{L ? L.company : "Company details"}</span>
                <span className="block">{companyContent.legalName}</span>
                <span className="block">IČO {companyContent.ico}</span>
                <span className="block text-sm leading-7 text-slate-400">{companyContent.register}</span>
                <span className="mt-3 block">{companyContent.sister.legalName} <span className="text-slate-400">({L ? L.sister : "sister company, Georgia, since"} {companyContent.sister.since})</span></span>
                <span className="block">ID {companyContent.sister.id}</span>
                <span className="block text-sm leading-7 text-slate-400">{companyContent.sister.address}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[.17em] text-[#e3bc7b]">{L ? L.website : "Website"}</span>
                <a href={contactContent.websiteHref} className="font-semibold text-white hover:text-[#e3bc7b]">{contactContent.websiteLabel} ↗</a>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border border-slate-600/50 bg-[#101c2d] p-7 shadow-xl shadow-black/30 sm:p-9">
            <div className="font-heading text-xl font-bold tracking-tight text-white">{c.formTitle}</div>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-300">{c.formNote}</p>
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
                  {L ? L.consentA : "I agree that CasTech EQ may use these details to reply to my inquiry. See the"}{" "}
                  <Link href="/privacy" className="text-[#e3bc7b] underline underline-offset-4">Privacy Policy</Link>. *
                </span>
              </label>
              <button type="submit" disabled={status === "sending"} className="castech-btn-primary mt-1 w-full sm:w-auto">
                {status === "sending" ? (L ? L.sending : "Sending…") : c.submit} <span aria-hidden="true">↗</span>
              </button>
              <p role="status" aria-live="polite" className="text-sm leading-7 text-slate-300">
                {status === "sent" ? (L ? L.sent : "Thank you. Your inquiry was sent and we will reply by email.") : null}
                {status === "fallback" ? (L ? L.fallback : "Sending failed. Your email application should open with the request, please send it from there.") : null}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
