"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_nav_click", { location: "header" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F3EE]/92 backdrop-blur-md border-b border-[#E8E3DB] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
          aria-label={`${siteData.brand.name} Home`}
        >
          <Image
            src={siteData.brand.logo}
            alt={siteData.brand.name}
            width={220}
            height={48}
            className="h-9 md:h-10 w-auto object-contain"
            preload={true}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8 text-[0.8125rem] tracking-[0.14em] uppercase font-medium text-secondary"
          aria-label="Main Navigation"
        >
          {siteData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors py-1 focus:outline-none focus:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Header Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href={buildWhatsAppUrl(siteData.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 bg-primary text-white text-xs tracking-wider uppercase px-4 py-2.5 rounded-sm hover:bg-[#2C2C2C] shadow-sm transition-colors duration-200"
            aria-label="Contact on WhatsApp"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sys-green animate-pulse" aria-hidden="true"></span>
            <span>WhatsApp →</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F3EE] border-b border-[#E8E3DB] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3 text-sm uppercase tracking-[0.14em] font-medium text-secondary">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary py-2 border-b border-[#E8E3DB]/50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={buildWhatsAppUrl(siteData.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-sys-green text-white text-xs uppercase tracking-wider font-semibold py-3 rounded-sm"
            >
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span>Start WhatsApp Enquiry</span>
            </a>
            <a
              href={siteData.contact.telLink}
              className="inline-flex items-center justify-center gap-2 bg-[#EFEBE4] text-primary text-xs uppercase tracking-wider font-medium py-3 rounded-sm border border-[#E8E3DB]"
            >
              <span>Call: {siteData.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
