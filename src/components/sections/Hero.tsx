"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const SLIDE_DURATION_MS = 5000;

export default function Hero() {
  const slides = siteData.brand.heroSlides;
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
    setProgressKey((prev) => prev + 1);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
    setProgressKey((prev) => prev + 1);
  }, [slides.length]);

  const selectSlide = (index: number) => {
    setActiveIdx(index);
    setProgressKey((prev) => prev + 1);
  };

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = slides[activeIdx];

  const handleWhatsAppHero = () => {
    trackEvent("whatsapp_hero_click", {
      location: "hero",
      slide: currentSlide.label,
    });
  };

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (diff > minSwipeDistance) {
      nextSlide(); // Swiped left -> next
    } else if (diff < -minSwipeDistance) {
      prevSlide(); // Swiped right -> prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Ambient architectural warm light veil in background */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#EDE7DF]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Architectural Micro-Tag */}
      <div className="inline-flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-sys-red" aria-hidden="true"></span>
        <span className="w-2 h-2 rounded-full bg-sys-blue" aria-hidden="true"></span>
        <span className="text-xs uppercase tracking-[0.22em] text-secondary font-semibold ml-1">
          SYS INTERIORS — HYDERABAD
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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

          {/* Interactive Architectural Discipline Switcher Pills */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between max-w-md">
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-secondary/80 font-semibold block">
                Explore Core Disciplines:
              </span>
              <span className="text-[0.6875rem] font-mono text-secondary/60">
                0{activeIdx + 1} / 0{slides.length}
              </span>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Interior Disciplines">
              {slides.map((s, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectSlide(idx)}
                    className={`relative text-xs px-3.5 py-1.5 rounded-sm transition-all duration-200 border overflow-hidden ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-sm font-medium"
                        : "bg-[#EDE7DF] hover:bg-[#E4DFD6] text-primary border-transparent font-normal"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href={buildWhatsAppUrl(currentSlide.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHero}
              className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-medium px-6 py-3.5 rounded-sm hover:bg-[#2C2C2C] shadow-sm transition-all duration-200 group"
              aria-label={`Enquire about ${currentSlide.label} on WhatsApp`}
            >
              <span className="w-2 h-2 rounded-full bg-sys-green animate-pulse" aria-hidden="true"></span>
              <span>WhatsApp Us ({currentSlide.label})</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 bg-[#EDE7DF] hover:bg-[#E4DFD6] text-primary text-sm font-medium px-6 py-3.5 rounded-sm transition-colors duration-200"
            >
              <span>Explore All Services</span>
              <span className="text-xs" aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        {/* Right Architectural Photography Aperture (Auto-Scroll Carousel) */}
        <div
          className="lg:col-span-6 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="relative aspect-[4/3] lg:aspect-[14/11] rounded-sm overflow-hidden shadow-2xl bg-[#EDE7DF] border border-[#E8E3DB] select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Live Progress Bar for Auto-Scroll */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/20 z-30 overflow-hidden">
              <div
                key={progressKey}
                className={`h-full bg-white transition-all ${
                  isPaused ? "opacity-40" : "animate-carousel-progress"
                }`}
                style={{
                  animationDuration: `${SLIDE_DURATION_MS}ms`,
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              />
            </div>

            {/* Crossfade Slides */}
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === activeIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  preload={idx === 0}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  className="w-full h-full object-cover transition-transform duration-7000 ease-out scale-100 hover:scale-105"
                />
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent pointer-events-none" />
              </div>
            ))}

            {/* Manual Navigation Arrows (Hover visible on desktop, always accessible on touch) */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Navigation Dots (Top-Right) */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => selectSlide(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.label}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIdx ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* Architectural Framing Detail Badge */}
            <div className="absolute bottom-5 left-5 right-5 z-20 p-4 bg-white/95 backdrop-blur-md rounded-sm flex items-center justify-between border border-[#EBE6DE] shadow-lg transition-all duration-300">
              <div className="pr-4">
                <p className="font-display text-sm md:text-base font-semibold text-primary line-clamp-1">
                  {currentSlide.title}
                </p>
                <p className="text-[0.6875rem] uppercase tracking-widest text-secondary mt-0.5">
                  {currentSlide.subtitle}
                </p>
              </div>
              <span
                className={`text-[0.6875rem] uppercase tracking-widest font-bold whitespace-nowrap px-2.5 py-1 rounded bg-[#F6F3EE] ${
                  currentSlide.accent === "crimson" ? "text-sys-red" : "text-sys-blue"
                }`}
              >
                {currentSlide.tag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
