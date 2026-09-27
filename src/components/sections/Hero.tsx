"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const handleWhatsAppHero = () => {
    trackEvent("whatsapp_hero_click", { location: "hero" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto"
      aria-label="Hero Section"
    >
      {/* Architectural Micro-Tag */}
      <div className="inline-flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-sys-red" aria-hidden="true"></span>
        <span className="w-2 h-2 rounded-full bg-sys-blue" aria-hidden="true"></span>
        <span className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold ml-1">
          SYS INTERIORS — HYDERABAD
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Narrative Column */}
        <div className="lg:col-span-6 space-y-6">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.12] tracking-tight">
            Designing spaces.
            <br />
            <span className="italic font-display text-primary">Defining lifestyles.</span>
          </h1>

          <p className="font-body text-base lg:text-lg text-secondary max-w-xl font-light leading-relaxed">
            {siteData.brand.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={buildWhatsAppUrl(siteData.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHero}
              className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-medium px-6 py-3.5 rounded-sm hover:bg-[#2C2C2C] shadow-sm transition-all duration-200"
              aria-label="Enquire with SYS Interiors on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-sys-green" aria-hidden="true"></span>
              <span>WhatsApp Us →</span>
            </a>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 bg-[#EDE7DF] hover:bg-[#E4DFD6] text-primary text-sm font-medium px-6 py-3.5 rounded-sm transition-colors duration-200"
            >
              <span>Explore Our Work</span>
              <span className="text-xs" aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        {/* Right Architectural Photography Composition */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] lg:aspect-[14/11] rounded-sm overflow-hidden shadow-2xl bg-[#EDE7DF]">
            <Image
              src={siteData.brand.heroImage}
              alt="Floor-to-ceiling drapery and herringbone wooden flooring tailored by SYS Interiors"
              fill
              preload={true}
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
              className="w-full h-full object-cover"
            />
            {/* Subtle photographic vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"></div>

            {/* Architectural Framing Detail Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-sm flex items-center justify-between border border-[#EBE6DE] shadow-sm">
              <div>
                <p className="font-display text-sm md:text-base font-semibold text-primary">
                  Floor-to-Ceiling Drapery &amp; Herringbone Wood
                </p>
                <p className="text-[0.6875rem] uppercase tracking-widest text-secondary mt-0.5">
                  Private Residence • Jubilee Hills
                </p>
              </div>
              <span className="text-[0.6875rem] uppercase tracking-widest font-semibold text-sys-blue">
                Turnkey Styling
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
