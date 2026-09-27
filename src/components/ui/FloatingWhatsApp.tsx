"use client";

import React from "react";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    trackEvent("whatsapp_floating_click", { location: "floating_button" });
  };

  return (
    <aside
      className="fixed bottom-6 right-6 z-50"
      aria-label="Direct Studio Communication"
    >
      <a
        href={buildWhatsAppUrl(siteData.whatsapp.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center gap-2.5 bg-primary text-white pl-4 pr-5 py-3 rounded-full shadow-floating hover:bg-[#2C2C2C] transition-all duration-200 border border-white/20 group focus:outline-none focus:ring-2 focus:ring-sys-green"
        aria-label="Direct WhatsApp Studio Desk"
      >
        <span className="relative flex h-3 w-3" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sys-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sys-green"></span>
        </span>
        <span className="text-xs uppercase tracking-wider font-semibold">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
