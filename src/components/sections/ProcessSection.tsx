import React from "react";
import { siteData } from "@/data/site";

export default function ProcessSection() {
  const { process } = siteData;

  return (
    <section
      id="process"
      className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto space-y-16"
      aria-label="Execution Journey"
    >
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-[0.24em] text-secondary font-semibold">
          Execution Journey
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-primary">
          From idea to finished space.
        </h2>
        <p className="text-sm text-secondary font-light">
          A disciplined four-phase approach designed to eliminate guesswork.
        </p>
      </div>

      <div className="relative">
        {/* Architectural Datum Line for Desktop */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-[#D8D2C7] z-0" aria-hidden="true"></div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {process.map((p) => (
            <div
              key={p.step}
              className="bg-white p-6 lg:p-7 rounded-sm border border-[#E8E3DB] space-y-4 shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-[#F6F3EE] border border-[#D8D2C7] flex items-center justify-center font-display text-lg text-primary">
                {p.step}
              </div>
              <h3 className="font-display text-lg text-primary font-medium">
                {p.title}
              </h3>
              <p className="text-xs lg:text-sm text-secondary font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
