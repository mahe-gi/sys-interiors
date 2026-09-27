"use client";

import React from "react";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function DomainSplit() {
  const { audiences } = siteData;

  const handleDomainClick = (domain: string) => {
    trackEvent(
      domain === "residential" ? "whatsapp_domain_residential_click" : "whatsapp_domain_commercial_click",
      { domain }
    );
  };

  return (
    <section
      id="spaces"
      className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto space-y-12"
      aria-label="Residential and Commercial Solutions"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-[0.24em] text-secondary font-semibold">
          Dual Domain Mastery
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-primary">
          Tailored to the way you live and work.
        </h2>
      </div>

      {/* 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {audiences.map((aud) => {
          const isResidential = aud.id === "residential";

          return (
            <div
              key={aud.id}
              className={`${
                isResidential ? "bg-white border-[#E8E3DB]" : "bg-[#EDE7DF] border-[#E0DCD3]"
              } p-8 lg:p-12 rounded-sm border flex flex-col justify-between space-y-8 shadow-sm`}
            >
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      aud.tagAccent === "crimson" ? "bg-sys-red" : "bg-sys-blue"
                    }`}
                    aria-hidden="true"
                  ></span>
                  <span
                    className={`text-xs uppercase tracking-widest font-semibold ${
                      aud.tagAccent === "crimson" ? "text-sys-red" : "text-sys-blue"
                    }`}
                  >
                    {aud.tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl text-primary">
                  {aud.title}
                </h3>

                <p className="text-sm lg:text-base text-secondary font-light leading-relaxed">
                  {aud.description}
                </p>

                {/* Sub-sector tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {aud.subSectors.map((sector) => (
                    <span
                      key={sector}
                      className="text-xs bg-white/70 border border-[#E0DCD3] text-primary px-3 py-1 rounded-sm"
                    >
                      {sector}
                    </span>
                  ))}
                </div>

                {/* Key feature bullet points */}
                <ul className="space-y-2.5 pt-2 text-xs lg:text-sm text-secondary font-light">
                  {aud.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" aria-hidden="true"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contextual Action Link */}
              <a
                href={buildWhatsAppUrl(aud.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleDomainClick(aud.id)}
                className={`inline-flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-primary border-t ${
                  isResidential ? "border-[#E8E3DB] hover:text-sys-red" : "border-[#D5D0C6] hover:text-sys-blue"
                } pt-4 transition-colors`}
              >
                <span>{aud.ctaLabel}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
