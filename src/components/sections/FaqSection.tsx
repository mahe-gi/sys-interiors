"use client";

import React, { useState } from "react";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
    trackEvent("faq_toggle", { question_index: idx });
  };

  return (
    <section
      id="faqs"
      className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E3DB]"
      aria-label="Frequently Asked Questions"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Editorial Header */}
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sys-red" aria-hidden="true" />
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] font-semibold text-secondary">
              Common Questions
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-4xl text-primary font-medium tracking-tight leading-snug">
            Everything you need to know before consultation.
          </h2>

          <p className="text-sm text-secondary font-light leading-relaxed">
            Transparent answers regarding on-site swatch visits, service territory across Hyderabad, material curation, and typical turnaround times.
          </p>

          <div className="pt-4">
            <p className="text-xs text-secondary mb-2">Have a specific architectural query?</p>
            <a
              href={buildWhatsAppUrl("Hi Yogender, I have a custom question about an interior requirement.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-sys-green transition-colors"
            >
              <span>Ask Lead Consultant Directly</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-8 divide-y divide-[#E8E3DB] border-y border-[#E8E3DB]">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg lg:text-xl text-primary font-medium">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#D8D2C7] flex items-center justify-center text-primary text-sm font-light transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-primary text-white border-primary" : "bg-white"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-6 text-sm text-secondary font-light leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
