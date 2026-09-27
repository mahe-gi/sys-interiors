"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function ServicesSection() {
  const { services } = siteData;

  const handleEnquireService = (title: string) => {
    trackEvent("whatsapp_service_click", { service: title });
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto space-y-16"
      aria-label="Services Section"
    >
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs uppercase tracking-[0.22em] text-sys-blue font-semibold block">
          Curated Disciplines
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
          From windows to walls, every detail matters.
        </h2>
        <p className="font-body text-base lg:text-lg text-secondary font-light">
          We don’t just supply interior products. We craft the atmosphere, lighting, and tactile feel of where you live and work.
        </p>
      </div>

      {/* Alternating Asymmetric Editorial Cards */}
      <div className="space-y-16">
        {services.map((service, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={service.id}
              className="bg-white rounded-sm border border-[#E8E3DB] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-7 relative min-h-[340px] lg:min-h-[440px] bg-[#EDE7DF] ${
                  isReversed ? "order-1 lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} interior craftsmanship by SYS Interiors`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-full object-cover"
                />
                {/* Index Badge */}
                <div
                  className={`absolute top-4 ${
                    isReversed ? "right-4" : "left-4"
                  } bg-primary text-white text-[0.6875rem] uppercase tracking-widest px-3 py-1 font-medium`}
                >
                  {service.clusterBadge}
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6 ${
                  isReversed ? "order-2 lg:order-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <span
                    className={`text-xs uppercase tracking-widest font-semibold ${
                      service.clusterAccent === "crimson" ? "text-sys-red" : "text-sys-blue"
                    }`}
                  >
                    {service.cluster}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base text-secondary font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Subcategory Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.subcategories.map((sub) => (
                      <span
                        key={sub.id}
                        className="text-xs bg-[#EDE7DF] text-primary px-3 py-1 rounded-sm font-normal"
                      >
                        {sub.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Contextual WhatsApp CTA */}
                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleEnquireService(service.title)}
                    className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-primary transition-colors border-b border-primary/30 pb-1 ${
                      service.clusterAccent === "crimson"
                        ? "hover:text-sys-red hover:border-sys-red"
                        : "hover:text-sys-blue hover:border-sys-blue"
                    }`}
                  >
                    <span>Enquire About {service.title}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
