"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { adsEnabled, getConsent, loadAds, OPEN_EVENT, setConsent, type Consent } from "@/lib/ads";
import type { Locale } from "@/lib/i18n";

const TEXT: Record<Locale, { text: string; privacy: string; accept: string; reject: string }> = {
  en: {
    text: "We use Google Ads cookies only with your consent, to measure whether our ads lead to enquiries.",
    privacy: "Privacy policy",
    accept: "Accept",
    reject: "Reject",
  },
  de: {
    text: "Wir verwenden Google-Ads-Cookies nur mit Ihrer Einwilligung, um zu messen, ob unsere Anzeigen zu Anfragen führen.",
    privacy: "Datenschutz",
    accept: "Akzeptieren",
    reject: "Ablehnen",
  },
  fr: {
    text: "Nous utilisons des cookies Google Ads uniquement avec votre consentement, pour mesurer si nos annonces génèrent des demandes.",
    privacy: "Confidentialité",
    accept: "Accepter",
    reject: "Refuser",
  },
  cs: {
    text: "Soubory cookie Google Ads používáme jen s vaším souhlasem, abychom změřili, zda naše reklamy přinášejí poptávky.",
    privacy: "Ochrana osobních údajů",
    accept: "Přijmout",
    reject: "Odmítnout",
  },
  ru: {
    text: "Мы используем файлы cookie Google Ads только с вашего согласия, чтобы оценить, приводят ли наши объявления к запросам.",
    privacy: "Конфиденциальность",
    accept: "Принять",
    reject: "Отклонить",
  },
};

export function ConsentBanner({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!adsEnabled) return;
    const c = getConsent();
    if (c === "granted") loadAds();
    if (c === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!adsEnabled || !open) return null;
  const t = TEXT[lang] ?? TEXT.en;
  const choose = (v: Consent) => {
    setConsent(v);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.privacy}
      className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-3xl rounded-xl border border-gold/30 bg-ink/95 p-4 text-sm text-slate-200 shadow-2xl backdrop-blur sm:inset-x-6 sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-6">
          {t.text}{" "}
          <Link href="/privacy" className="text-gold underline-offset-4 hover:underline">
            {t.privacy}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-md border border-white/25 px-4 py-2 font-semibold text-white transition hover:border-gold hover:text-gold"
          >
            {t.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-md bg-gold px-4 py-2 font-semibold text-gold-ink transition hover:brightness-110"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
