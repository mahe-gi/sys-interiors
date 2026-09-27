"use client";

import React from "react";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function DarkCTASection() {
  const { contact } = siteData;

  const handleFinalWhatsAppClick = () => {
    trackEvent("whatsapp_final_cta_click", { location: "final_cta" });
  };

  const handleCallClick = () => {
    trackEvent("phone_call_click", { location: "final_cta" });
  };

  return (
    <section
      id="contact"
      className="bg-[#121212] text-white py-20 lg:py-28 px-6 lg:px-12 border-t border-[#2C2C2C]"
      aria-label="Direct Consultation and Contact"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Sales Message */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-sys-red" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.24em] text-white/70 font-semibold">
              Start the Conversation
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
            Imagine your space
            <br />
            <span className="italic font-display text-[#E5E0D8]">differently.</span>
          </h2>

          <p className="font-body text-base lg:text-lg text-white/70 max-w-xl font-light leading-relaxed">
            Tell us what you are looking for and let&apos;s discuss the right solution for your home or workspace. From single-room window styling to complete turnkey fit-outs, we bring sample swatches straight to your doorstep.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={buildWhatsAppUrl(siteData.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFinalWhatsAppClick}
              className="inline-flex items-center gap-2.5 bg-sys-green hover:bg-[#1EBE5D] text-white text-sm font-semibold px-6 py-3.5 rounded-sm transition-colors duration-200 shadow-lg"
              aria-label="Start WhatsApp Enquiry"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>Start a WhatsApp Enquiry →</span>
            </a>

            <a
              href={contact.telLink}
              onClick={handleCallClick}
              className="inline-flex items-center gap-2 bg-[#262626] hover:bg-[#333333] text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors duration-200 border border-white/10"
              aria-label={`Call SYS Interiors at ${contact.phoneDisplay}`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Call SYS Interiors: {contact.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Studio Quick Details Card */}
        <div className="lg:col-span-5 bg-[#202020] p-8 lg:p-10 rounded-sm border border-white/10 space-y-6">
          <span className="text-xs uppercase tracking-widest text-sys-red font-semibold block">
            Studio Details
          </span>

          <div className="space-y-4 text-xs lg:text-sm">
            <div>
              <span className="text-white/50 block text-[0.6875rem] uppercase tracking-wider">
                Service Territory
              </span>
              <p className="text-white/90 mt-0.5 font-light leading-relaxed">
                {contact.territory}
              </p>
            </div>

            <div>
              <span className="text-white/50 block text-[0.6875rem] uppercase tracking-wider">
                Direct WhatsApp &amp; Phone
              </span>
              <a
                href={contact.telLink}
                className="text-white/90 hover:text-white font-medium mt-0.5 block text-sm"
              >
                {contact.phoneDisplay}
              </a>
            </div>

            {/* Email only if verified in siteData */}
            {contact.email && (
              <div>
                <span className="text-white/50 block text-[0.6875rem] uppercase tracking-wider">
                  Email Inquiry
                </span>
                <p className="text-white/90 mt-0.5 font-light">{contact.email}</p>
              </div>
            )}

            <div>
              <span className="text-white/50 block text-[0.6875rem] uppercase tracking-wider">
                Consultation Hours
              </span>
              <p className="text-white/90 mt-0.5 font-light">
                {contact.consultationHours}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[0.6875rem] uppercase tracking-widest text-white/50">
            <span>Free On-Site Measurements</span>
            <span className="text-sys-green font-medium">Active WhatsApp Desk</span>
          </div>
        </div>
      </div>
    </section>
  );
}
