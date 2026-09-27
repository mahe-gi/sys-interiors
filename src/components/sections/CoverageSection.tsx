"use client";

import React from "react";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function CoverageSection() {
  const { coverage } = siteData;

  const handleAreaClick = (areaName: string) => {
    trackEvent("whatsapp_service_click", {
      location: "coverage_badges",
      area: areaName,
    });
  };

  return (
    <section
      id="territory"
      className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E3DB]"
      aria-label="Greater Hyderabad Coverage & Service Territory"
    >
      {/* Header */}
      <div className="max-w-3xl space-y-4 mb-14">
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sys-red" aria-hidden="true" />
          <span className="w-1.5 h-1.5 rounded-full bg-sys-blue" aria-hidden="true" />
          <span className="text-[0.6875rem] uppercase tracking-[0.2em] font-semibold text-secondary">
            {coverage.tagline}
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary font-medium tracking-tight leading-tight">
          {coverage.headline}
        </h2>

        <p className="text-sm lg:text-base text-secondary font-light leading-relaxed">
          {coverage.description}
        </p>
      </div>

      {/* 4-Zone Coverage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coverage.zones.map((zoneItem, idx) => (
          <div
            key={zoneItem.zone}
            className="bg-white p-6 rounded-sm border border-[#E8E3DB] shadow-sm flex flex-col justify-between space-y-5 hover:border-[#D8D2C7] transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#E8E3DB]/60 pb-3">
                <span className="text-[0.625rem] font-mono tracking-widest text-secondary uppercase">
                  Zone 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-sys-blue/40" />
              </div>

              <h3 className="font-display text-lg text-primary font-medium">
                {zoneItem.zone}
              </h3>

              {/* Area Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {zoneItem.areas.map((area) => (
                  <a
                    key={area}
                    href={buildWhatsAppUrl(
                      `Hi Yogender, I'm located in ${area}, Hyderabad. I'd like to arrange an on-site consultation for interior solutions.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleAreaClick(area)}
                    className="text-[0.6875rem] px-2.5 py-1 bg-[#F6F3EE] hover:bg-[#EAE5DC] text-primary rounded-sm border border-[#E8E3DB]/60 transition-colors"
                    title={`Request swatch visit in ${area}`}
                  >
                    {area}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[0.6875rem] text-secondary/70 flex items-center gap-1.5 border-t border-[#E8E3DB]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-sys-green" />
              <span>Direct doorstep consultations</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Territory Guarantee Banner */}
      <div className="mt-10 p-6 md:p-8 bg-[#EFEBE4] rounded-sm border border-[#E8E3DB] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-display text-base md:text-lg font-medium text-primary">
            Located in another community or outer Hyderabad township?
          </p>
          <p className="text-xs md:text-sm text-secondary font-light">
            We regularly consult across gated communities, high-rises, and commercial complexes across the entire Hyderabad metropolitan region.
          </p>
        </div>

        <a
          href={buildWhatsAppUrl("Hi Yogender, I would like to check if you can visit my location in Hyderabad for a consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm hover:bg-[#2C2C2C] shadow-sm whitespace-nowrap transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-sys-green animate-pulse" />
          <span>Confirm Your Location on WhatsApp →</span>
        </a>
      </div>
    </section>
  );
}
