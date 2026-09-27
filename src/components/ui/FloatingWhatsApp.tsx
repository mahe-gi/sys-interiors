"use client";

import React from "react";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = (location: string) => {
    trackEvent("whatsapp_floating_click", { location });
  };

  const handlePhoneClick = () => {
    trackEvent("phone_call_click", { location: "mobile_dock" });
  };

  return (
    <>
      {/* 1. Desktop Floating Pill (Visible on md+ screens) */}
      <aside
        className="hidden md:flex fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
        aria-label="Direct Studio WhatsApp Communication"
      >
        <a
          href={buildWhatsAppUrl(siteData.whatsapp.defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleWhatsAppClick("desktop_floating_button")}
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

      {/* 2. Mobile Sticky Bottom Action Dock (Visible on mobile < md screens) */}
      <aside
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#F6F3EE]/95 backdrop-blur-md border-t border-[#E8E3DB] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        aria-label="Mobile Quick Action Bar"
      >
        <div className="grid grid-cols-12 gap-2.5 items-center max-w-lg mx-auto">
          {/* Quick Call Button */}
          <a
            href={siteData.contact.telLink}
            onClick={handlePhoneClick}
            className="col-span-4 flex items-center justify-center gap-1.5 bg-[#EFEBE4] active:bg-[#E4DFD6] text-primary border border-[#D8D2C7] py-2.5 px-2 rounded-sm text-[0.6875rem] font-bold uppercase tracking-wider transition-colors"
            aria-label={`Call SYS Interiors at ${siteData.contact.phoneDisplay}`}
          >
            <svg
              className="w-3.5 h-3.5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call Desk</span>
          </a>

          {/* Quick WhatsApp Button */}
          <a
            href={buildWhatsAppUrl(siteData.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick("mobile_dock")}
            className="col-span-8 flex items-center justify-center gap-2 bg-sys-green active:bg-sys-green-hover text-white py-2.5 px-4 rounded-sm text-[0.6875rem] font-bold uppercase tracking-wider shadow-sm transition-colors"
            aria-label="Start WhatsApp Enquiry"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>WhatsApp Consultation →</span>
          </a>
        </div>
      </aside>
    </>
  );
}
