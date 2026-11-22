"use client";

import { openCookieSettings } from "@/lib/ads";

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className="transition hover:text-gold">
      {label}
    </button>
  );
}
