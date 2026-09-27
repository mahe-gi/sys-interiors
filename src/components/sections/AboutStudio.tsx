"use client";

import React from "react";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function AboutStudio() {
  const { reviews } = siteData;
  const hasRealReviews = Array.isArray(reviews) && reviews.length > 0;

  return (
    <section
      id="about"
      className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto space-y-16"
      aria-label="About The Studio"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: About The Studio */}
        <div className="lg:col-span-5 space-y-5">
          <span className="text-xs uppercase tracking-[0.24em] text-sys-blue font-semibold block">
            About The Studio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-primary leading-tight">
            Designed around people.
            <br />
            Built around spaces.
          </h2>
          <p className="text-sm lg:text-base text-secondary font-light leading-relaxed">
            Headquartered in Habsiguda and serving premier residential and commercial clients across Hyderabad and Secunderabad, SYS Interiors brings integrated material craftsmanship under one unified roof. We bridge the gap between design vision and precision on-site execution.
          </p>
          <div className="pt-2 flex flex-col space-y-2 text-xs uppercase tracking-wider text-secondary">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sys-red" aria-hidden="true"></span>
              <span>Curtains • Blinds • Wallpapers • Flooring</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sys-blue" aria-hidden="true"></span>
              <span>Sun Control Films • Partitions • Modular Kitchens</span>
            </div>
          </div>
        </div>

        {/* Right Column: Customer Reviews / Experience Policy (Strictly Anti-Hallucination) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-[0.24em] text-secondary font-semibold block">
            Client Experience &amp; Standards
          </span>

          {hasRealReviews ? (
            <div className="space-y-4">
              {reviews.map((r) => (
                <div key={r.id} className="bg-white p-6 rounded-sm border border-[#E8E3DB] space-y-3">
                  <p className="text-sm text-primary font-light italic leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                  <div className="pt-2 border-t border-[#F0ECE4]">
                    <p className="text-xs font-semibold text-primary">{r.author}</p>
                    <p className="text-[0.6875rem] uppercase tracking-widest text-secondary">{r.roleOrLocation}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Clean, honest, non-fabricated trust card
            <div className="bg-white p-8 lg:p-10 rounded-sm border border-[#E8E3DB] space-y-6 shadow-sm">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-sys-blue">
                  <span className="w-2 h-2 rounded-full bg-sys-blue" aria-hidden="true"></span>
                  <span>Our Service Commitment</span>
                </div>
                <h3 className="font-display text-xl text-primary font-medium">
                  Direct In-Person Material Consultations
                </h3>
                <p className="text-sm text-secondary font-light leading-relaxed">
                  We believe in complete transparency and physical material verification before you make any commitment. Founder Yogender personally brings physical swatch books—imported curtain weaves, motorized track mechanisms, wooden floor samples, and 3M solar films—directly to your doorstep for on-site daylight evaluation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8E3DB] text-xs text-secondary">
                <div>
                  <span className="font-semibold text-primary block mb-0.5">Complimentary Site Visit</span>
                  <span>Laser measurement and daylight angle assessment anywhere in Hyderabad.</span>
                </div>
                <div>
                  <span className="font-semibold text-primary block mb-0.5">Zero Fabricated Claims</span>
                  <span>Genuine distributor-certified products with manufacturer warranties.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl("Hi SYS Interiors, I would like to schedule a home/office material consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-primary hover:text-sys-blue transition-colors border-b border-primary/30 pb-1"
                >
                  <span>Request In-Person Consultation</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
