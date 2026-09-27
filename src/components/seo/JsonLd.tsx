import React from "react";
import { getStructuredData } from "@/lib/structuredData";

export default function JsonLd() {
  const { localBusinessSchema, websiteSchema, serviceCatalogSchema } = getStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
    </>
  );
}
