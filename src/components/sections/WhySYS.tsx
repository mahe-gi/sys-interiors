import React from "react";
import { siteData } from "@/data/site";

export default function WhySYS() {
  const { whyUs } = siteData;

  return (
    <section
      id="why-sys"
      className="py-20 lg:py-28 bg-[#EFEBE4] border-y border-[#E8E3DB] px-6 lg:px-12"
      aria-label="Why SYS Interiors"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase tracking-[0.24em] text-sys-red font-semibold block">
            The Studio Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
            Beautiful spaces are built through details.
          </h2>
          <p className="font-body text-base text-secondary font-light">
            In bespoke interior treatments, precision is the difference between an ordinary installation and lasting architectural harmony.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((pillar) => (
            <div
              key={pillar.index}
              className="bg-white p-8 rounded-sm border border-[#E8E3DB] space-y-4 shadow-sm"
            >
              <span
                className={`text-xs font-mono font-semibold ${
                  pillar.accent === "crimson" ? "text-sys-red" : "text-sys-blue"
                }`}
              >
                {pillar.index}
              </span>
              <h3 className="font-display text-lg text-primary font-medium">
                {pillar.title}
              </h3>
              <p className="text-xs lg:text-sm text-secondary font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
