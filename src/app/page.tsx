import React from "react";
import Hero from "@/components/sections/Hero";
import VisualHook from "@/components/sections/VisualHook";
import ServicesSection from "@/components/sections/ServicesSection";
import SelectedWork from "@/components/sections/SelectedWork";
import DomainSplit from "@/components/sections/DomainSplit";
import WhySYS from "@/components/sections/WhySYS";
import ProcessSection from "@/components/sections/ProcessSection";
import FounderSection from "@/components/sections/FounderSection";
import AboutStudio from "@/components/sections/AboutStudio";
import FaqSection from "@/components/sections/FaqSection";
import DarkCTASection from "@/components/sections/DarkCTASection";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Immediate Visual Hook */}
      <VisualHook />

      {/* 3. Services / Solutions ("What We Transform") */}
      <ServicesSection />

      {/* 4. Selected Work / Proof ("See the difference.") */}
      <SelectedWork />

      {/* 5. Residential vs Commercial Domain Split */}
      <DomainSplit />

      {/* 6. Why SYS Interiors ("Beautiful spaces are built through details") */}
      <WhySYS />

      {/* 7. Disciplined 4-Stage Process */}
      <ProcessSection />

      {/* 8. Founder Direct Stewardship */}
      <FounderSection />

      {/* 9. About The Studio & Client Reflections */}
      <AboutStudio />

      {/* 10. Frequently Asked Questions (SEO & GEO Verified) */}
      <FaqSection />

      {/* 11. Final Dark Sales Moment */}
      <DarkCTASection />
    </main>
  );
}
