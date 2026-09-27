import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#F6F3EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteData.seo.siteUrl),
  title: siteData.seo.title,
  description: siteData.seo.description,
  keywords: [...siteData.seo.keywords],
  authors: [{ name: "SYS Interiors" }, { name: siteData.founder.name }],
  creator: siteData.brand.name,
  publisher: siteData.brand.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    url: siteData.seo.siteUrl,
    siteName: siteData.brand.name,
    locale: siteData.seo.locale,
    type: "website",
    images: [
      {
        url: siteData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteData.brand.name} - ${siteData.brand.primaryTagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [siteData.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen font-body bg-[#F6F3EE] text-[#181818] antialiased selection:bg-[#181818] selection:text-white flex flex-col">
        <SmoothScroll>
          <Header />
          <div className="flex-grow pt-20">
            {children}
          </div>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
