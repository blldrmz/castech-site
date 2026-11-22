import { adsConversion } from "@/content/site";

// Google Ads conversion tracking, loaded only after the visitor accepts advertising cookies.

const KEY = "cookie-consent";
export const OPEN_EVENT = "castech:cookie-settings";
export type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const adsEnabled = Boolean(adsConversion.id);

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

let loaded = false;

export function loadAds() {
  if (loaded || !adsEnabled) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", adsConversion.id);
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(adsConversion.id);
  document.head.appendChild(s);
}

export function setConsent(v: Consent) {
  try {
    localStorage.setItem(KEY, v);
  } catch {
    /* storage blocked: choice lasts for this page only */
  }
  if (v === "granted") loadAds();
  else window.gtag?.("consent", "update", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
}

export function trackConversion() {
  if (!adsEnabled || getConsent() !== "granted") return;
  loadAds();
  window.gtag?.("event", "conversion", { send_to: `${adsConversion.id}/${adsConversion.label}` });
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
