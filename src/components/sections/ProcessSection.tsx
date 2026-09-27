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

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {process.map((p, index) => (
          <div
            key={p.step}
            className="bg-white p-6 lg:p-8 rounded-sm border border-[#E8E3DB] space-y-5 shadow-sm flex flex-col justify-between relative group hover:border-[#D8D2C7] transition-colors"
          >
            {/* Top Step Number Header */}
            <div className="flex items-center justify-between border-b border-[#E8E3DB]/60 pb-4">
              <div className="w-11 h-11 rounded-full bg-[#F6F3EE] border border-[#D8D2C7] flex items-center justify-center font-display text-base text-primary font-semibold">
                {p.step}
              </div>
              <span className="text-[0.6875rem] font-mono tracking-widest text-secondary uppercase">
                Phase 0{index + 1}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl text-primary font-medium">
                {p.title}
              </h3>
              <p className="text-xs lg:text-sm text-secondary font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
