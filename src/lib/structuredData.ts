import { siteData } from "@/data/site";

/**
 * Generates verified schema.org JSON-LD structured data for SYS Interiors.
 * Strictly adheres to truthfulness rules:
 * - NO fake aggregate ratings or fake review counts
 * - NO fabricated street address or fake GPS coordinates
 * - Accurate local territory, phone, founder, and verified services
 */
export function getStructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteData.brand.name,
    description: siteData.seo.description,
    url: siteData.seo.siteUrl,
    telephone: siteData.contact.phoneRaw,
    image: `${siteData.seo.siteUrl}${siteData.brand.heroImage}`,
    logo: `${siteData.seo.siteUrl}${siteData.brand.logo}`,
    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "City",
        name: "Secunderabad",
      },
    ],
    founder: {
      "@type": "Person",
      name: siteData.founder.name,
      jobTitle: siteData.founder.role,
    },
    knowsAbout: siteData.services.flatMap((s) => [
      s.title,
      ...s.subcategories.map((sub) => sub.name),
    ]),
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
    name: "Interior Solutions by SYS Interiors",
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

  return {
    localBusinessSchema,
    websiteSchema,
    serviceCatalogSchema,
  };
}
