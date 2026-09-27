"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface ShowcaseVignette {
  title: string;
  category: string;
  tagAccent: "crimson" | "sapphire";
  description: string;
  image: string;
  aspectRatioClass: string;
  colSpanClass: string;
  tagLabel: string;
  servicesTag: string;
  whatsappMessage: string;
}

const VIGNETTES: ShowcaseVignette[] = [
  {
    title: "Double-Height Aperture Drapery & Sheers",
    category: "Window Solutions",
    tagAccent: "crimson",
    tagLabel: "Window Solutions",
    description: "Concealed motorized track systems with fluid ceiling-recessed sheer fabrics for seamless light filtering.",
    image: "/images/curtains-sheer.webp",
    aspectRatioClass: "aspect-[16/9] lg:aspect-[21/9]",
    colSpanClass: "md:col-span-12",
    servicesTag: "Motorized Curtains & Sheers",
    whatsappMessage: "Hi SYS Interiors, I'm interested in double-height curtain drapery solutions for my space.",
  },
  {
    title: "Natural Herringbone Wooden Foundation",
    category: "Flooring Solutions",
    tagAccent: "sapphire",
    tagLabel: "Underfoot Craft",
    description: "High-density scratch-resistant timber laid in classic herringbone geometry across open floor plans.",
    image: "/images/flooring-wood.webp",
    aspectRatioClass: "aspect-[4/3]",
    colSpanClass: "md:col-span-6",
    servicesTag: "Herringbone Wood & Acoustic Underlay",
    whatsappMessage: "Hi SYS Interiors, I'd like to consult on herringbone wooden flooring for my space.",
  },
  {
    title: "Solar Heat Rejection & Architectural Glazing",
    category: "Sun Control & Glazing",
    tagAccent: "crimson",
    tagLabel: "Solar Glazing & Films",
    description: "Certified 3M and Garware architectural solar control films paired with slim-profile privacy glass framing.",
    image: "/images/blinds-motorized.webp",
    aspectRatioClass: "aspect-[4/3]",
    colSpanClass: "md:col-span-6",
    servicesTag: "3M Sun Films & Blinds",
    whatsappMessage: "Hi SYS Interiors, I'm interested in solar control window films and commercial partitions.",
  },
  {
    title: "Architectural Wall Murals & Joinery",
    category: "Wallpapers & Joinery",
    tagAccent: "sapphire",
    tagLabel: "Surface & Joinery",
    description: "Embossed 3D dimensional wallpapers integrated with customized modular cabinetry and discreet roller shading.",
    image: "/images/kitchen-wallpaper.webp",
    aspectRatioClass: "aspect-[16/10]",
    colSpanClass: "md:col-span-12",
    servicesTag: "3D Wallpapers & Modular Units",
    whatsappMessage: "Hi SYS Interiors, I'd like to discuss customized wallpapers and modular interior works.",
  },
];

export default function SelectedWork() {
  const handleVignetteClick = (title: string) => {
    trackEvent("whatsapp_service_click", { vignette: title });
  };

  return (
    <section
      id="selected-work"
      className="py-20 lg:py-28 bg-[#EFEBE4] border-t border-[#E8E3DB] px-6 lg:px-12"
      aria-label="Selected Craft Solutions"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.24em] text-sys-red font-semibold block">
              Craft Capabilities &amp; Proof
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary">
              See the difference.
            </h2>
          </div>
          <p className="text-sm text-secondary max-w-sm font-light">
            Precision window treatments, surface installations, and customized interior craftsmanship across Hyderabad.
          </p>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {VIGNETTES.map((item, idx) => {
            if (idx === 0) {
              // Full-width Hero Vignette
              return (
                <div
                  key={item.title}
                  className="md:col-span-12 group bg-white rounded-sm border border-[#E8E3DB] overflow-hidden shadow-sm"
                >
                  <div className={`relative ${item.aspectRatioClass} overflow-hidden bg-[#EDE7DF]`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="100vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between text-white gap-4">
                      <div>
                        <span className="text-[0.6875rem] uppercase tracking-widest text-[#D92525] bg-white/95 px-2.5 py-1 rounded-sm font-semibold">
                          {item.tagLabel}
                        </span>
                        <h3 className="font-display text-2xl lg:text-3xl mt-2.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/85 font-light mt-1 max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                      <a
                        href={buildWhatsAppUrl(item.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleVignetteClick(item.title)}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white hover:text-sys-green transition-colors border border-white/40 px-4 py-2.5 rounded-sm backdrop-blur-sm whitespace-nowrap"
                      >
                        <span>Enquire Similar</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            if (idx === 1 || idx === 2) {
              // Two 6-col balanced cards
              return (
                <div
                  key={item.title}
                  className="md:col-span-6 group bg-white rounded-sm border border-[#E8E3DB] overflow-hidden flex flex-col shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE7DF]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      <span
                        className={`text-xs uppercase tracking-widest font-semibold ${
                          item.tagAccent === "crimson" ? "text-sys-red" : "text-sys-blue"
                        }`}
                      >
                        {item.tagLabel}
                      </span>
                      <h3 className="font-display text-xl text-primary mt-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-secondary font-light mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#E8E3DB] flex items-center justify-between">
                      <span className="text-xs text-secondary">{item.servicesTag}</span>
                      <a
                        href={buildWhatsAppUrl(item.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleVignetteClick(item.title)}
                        className="text-xs uppercase tracking-wider font-semibold text-primary hover:text-sys-blue transition-colors"
                      >
                        Enquire →
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            // Fourth 12-col asymmetric card
            return (
              <div
                key={item.title}
                className="md:col-span-12 group bg-white rounded-sm border border-[#E8E3DB] overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#EDE7DF]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="lg:col-span-5 p-8 lg:p-12 space-y-4">
                    <span
                      className={`text-xs uppercase tracking-widest font-semibold ${
                        item.tagAccent === "crimson" ? "text-sys-red" : "text-sys-blue"
                      }`}
                    >
                      {item.tagLabel}
                    </span>
                    <h3 className="font-display text-2xl text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary font-light leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2">
                      <a
                        href={buildWhatsAppUrl(item.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleVignetteClick(item.title)}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-primary hover:text-sys-blue transition-colors border-b border-primary/30 pb-1"
                      >
                        <span>Discuss Similar Execution</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Project Consultation Callout Banner */}
        <div className="bg-primary text-white p-6 lg:p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-xl lg:text-2xl">
              Love this look? Let&apos;s create something similar for your space.
            </h4>
            <p className="text-xs lg:text-sm text-white/70 font-light">
              Direct consultation, physical swatch boards, and precision laser measurements.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(siteData.whatsapp.serviceMessages.quote)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_service_click", { location: "portfolio_banner" })}
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-[#EDE7DF] px-6 py-3 rounded-sm text-xs uppercase tracking-wider font-semibold transition-colors duration-200 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-sys-green" aria-hidden="true"></span>
            <span>Discuss on WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
