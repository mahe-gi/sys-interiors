"use client";

import React from "react";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function FounderSection() {
  const { founder } = siteData;

  const handleFounderClick = () => {
    trackEvent("whatsapp_founder_click", { founder: founder.name });
  };

  return (
    <section
      id="founder"
      className="py-20 lg:py-28 bg-[#EFEBE4] border-t border-[#E8E3DB] px-6 lg:px-12"
      aria-label="Founder & Stewardship"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-sm border border-[#E8E3DB] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Architectural Monogram & Stewardship Frame (No Fake Headshot) */}
        <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-[#EDE7DF] flex flex-col items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-[#E8E3DB] editorial-grain">
          <div className="text-center space-y-4">
            {/* Elegant Monogram Insignia */}
            <div className="w-24 h-24 mx-auto rounded-full bg-white border border-[#D8D2C7] flex items-center justify-center shadow-sm">
              <span className="font-display text-4xl font-semibold text-primary">
                Y
              </span>
            </div>

            <div className="space-y-1">
              <p className="font-display text-2xl text-primary font-medium">
                {founder.name}
              </p>
              <p className="text-xs uppercase tracking-widest text-secondary font-medium">
                {founder.role}
              </p>
              <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-sys-blue font-semibold mt-1">
                SYS Interiors • Hyderabad
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white/80 border border-[#E8E3DB] px-3 py-1 rounded-sm text-[0.6875rem] uppercase tracking-wider text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-sys-green animate-pulse" aria-hidden="true"></span>
              <span>Available for On-Site Consultations</span>
            </div>
          </div>
        </div>

        {/* Right: Direct Stewardship Philosophy */}
        <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.24em] text-sys-red font-semibold block mb-1">
                Direct Stewardship
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-primary">
                The person behind SYS Interiors.
              </h2>
            </div>

            <div className="space-y-4 text-sm lg:text-base text-secondary font-light leading-relaxed">
              {founder.philosophy.map((para, i) => (
                <p key={i}>&ldquo;{para}&rdquo;</p>
              ))}
            </div>

            <div>
              <p className="font-display text-xl text-primary font-medium">
                {founder.name}
              </p>
              <p className="text-xs uppercase tracking-widest text-secondary mt-0.5">
                {founder.role}, SYS Interiors
              </p>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="pt-6 border-t border-[#E8E3DB] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[0.6875rem] uppercase tracking-widest text-secondary block">
                Direct Studio Desk
              </span>
              <a
                href={siteData.contact.telLink}
                className="text-sm font-semibold text-primary hover:text-sys-red transition-colors"
              >
                {founder.directDeskPhone}
              </a>
            </div>

            <a
              href={buildWhatsAppUrl(siteData.whatsapp.serviceMessages.founder)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFounderClick}
              className="inline-flex items-center gap-2 bg-primary text-white text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm hover:bg-[#2C2C2C] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sys-green" aria-hidden="true"></span>
              <span>Connect with Yogender →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
