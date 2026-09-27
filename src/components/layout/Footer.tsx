import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFEBE4] border-t border-[#E8E3DB] py-12 px-6 lg:px-12 text-secondary" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        {/* Brand Logo in Footer */}
        <div className="flex items-center gap-3">
          <Image
            src={siteData.brand.logo}
            alt={siteData.brand.name}
            width={160}
            height={34}
            className="h-7 w-auto object-contain opacity-85"
            loading="lazy"
          />
        </div>

        {/* Copyright & Location Statement */}
        <p className="text-center md:text-left text-secondary font-light">
          © {currentYear} {siteData.brand.name} • {siteData.brand.primaryTagline} • Hyderabad, Telangana.
        </p>

        {/* Quick Nav Anchors */}
        <div className="flex items-center gap-6 text-[0.6875rem] uppercase tracking-wider">
          <Link href="#hero" className="hover:text-primary transition-colors">
            Top
          </Link>
          <Link href="#services" className="hover:text-primary transition-colors">
            Solutions
          </Link>
          <Link href="#spaces" className="hover:text-primary transition-colors">
            Spaces
          </Link>
          <Link href="#selected-work" className="hover:text-primary transition-colors">
            Portfolio
          </Link>
          <a
            href={buildWhatsAppUrl(siteData.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sys-green font-medium transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
