import React from "react";
import Image from "next/image";
import { siteData } from "@/data/site";

export default function VisualHook() {
  const { visualHook } = siteData;

  return (
    <section className="border-y border-[#E8E3DB] bg-[#EFEBE4] py-16 px-6 lg:px-12" aria-label="Visual Narrative">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[0.6875rem] uppercase tracking-[0.24em] text-sys-red font-semibold block mb-1">
              {visualHook.tag}
            </span>
            <h2 className="font-display text-2xl lg:text-3xl text-primary">
              {visualHook.headline}
            </h2>
          </div>
          <p className="text-sm text-secondary max-w-md font-light leading-relaxed">
            {visualHook.description}
          </p>
        </div>

        {/* 5-Slide Horizontal Visual Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-4">
          {visualHook.slides.map((slide, idx) => (
            <div
              key={slide.title}
              className={`group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#EDE7DF] ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <Image
                src={slide.image}
                alt={`${slide.title} by SYS Interiors`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 250px"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                <span className="text-white text-xs tracking-wider uppercase font-medium">
                  {slide.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
