import { siteData } from "@/data/site";

/**
 * Generates verified schema.org JSON-LD structured data for SYS Interiors.
 * Strictly adheres to truthfulness rules:
 * - NO fake aggregate ratings or fake review counts
 * - NO fabricated street address or fake GPS coordinates
 * - Accurate local territory, phone, founder, and verified services
 * - Rich GEO & FAQ structured knowledge graph for Google & AI search agents
 */
export function getStructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteData.brand.name,
    alternateName: "SYS Interiors Hyderabad",
    description: siteData.seo.description,
    url: siteData.seo.siteUrl,
    telephone: siteData.contact.phoneRaw,
    image: `${siteData.seo.siteUrl}${siteData.brand.heroImage}`,
    logo: `${siteData.seo.siteUrl}${siteData.brand.logo}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Secunderabad" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "Place", name: "Jubilee Hills" },
      { "@type": "Place", name: "Banjara Hills" },
      { "@type": "Place", name: "Gachibowli" },
      { "@type": "Place", name: "Hitec City" },
      { "@type": "Place", name: "Madhapur" },
      { "@type": "Place", name: "Financial District" },
      { "@type": "Place", name: "Kondapur" },
      { "@type": "Place", name: "Kukatpally" },
    ],
    founder: {
      "@type": "Person",
      name: siteData.founder.name,
      jobTitle: siteData.founder.role,
    },
    knowsAbout: [
      "Window Curtains",
      "Motorized Blinds",
      "Zebra Blinds",
      "Roller Blinds",
      "Wooden Flooring",
      "Vinyl Flooring",
      "3D Wallpapers",
      "Customized Wallpapers",
      "Sun Control Films",
      "3M Sun Control Films",
      "Garware Sun Control Films",
      "Aluminium Partitions",
      "Modular Kitchens",
      "Residential Interior Styling",
      "Commercial Window Treatments",
      ...siteData.services.flatMap((s) => [
        s.title,
        ...s.subcategories.map((sub) => sub.name),
      ]),
    ],
    openingHours: "Mo-Sa 09:30-20:00",
    priceRange: "₹₹ - ₹₹₹₹",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteData.brand.name,
    url: siteData.seo.siteUrl,
    description: siteData.seo.description,
    publisher: {
      "@type": "Organization",
      name: siteData.brand.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteData.seo.siteUrl}${siteData.brand.logo}`,
      },
    },
  };

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Interior Solutions Catalog by SYS Interiors",
    itemListElement: siteData.services.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "LocalBusiness",
          name: siteData.brand.name,
          telephone: siteData.contact.phoneRaw,
        },
        areaServed: {
          "@type": "City",
          name: "Hyderabad",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.title,
          itemListElement: service.subcategories.map((sub) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: sub.name,
            },
          })),
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return {
    localBusinessSchema,
    websiteSchema,
    serviceCatalogSchema,
    faqSchema,
  };
}
