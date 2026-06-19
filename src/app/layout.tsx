import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Tools & Equipment Insurance | Contractors Choice Agency",
    template: "%s | Tools & Equipment Insurance",
  },
  description: SITE.description,
  keywords: [
    "tools and equipment insurance",
    "contractor tools insurance",
    "tools and equipment floater",
    "scheduled tools coverage",
    "stolen tools insurance",
    "inland marine insurance contractors",
    "installation floater",
    "mobile equipment insurance",
    "equipment breakdown insurance",
    "nail gun insurance contractors",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Tools & Equipment Insurance | Contractors Choice Agency",
    description:
      "Specialized tools & equipment insurance for contractors — scheduled tools floaters, mobile equipment, installation floaters, equipment breakdown, inland marine, commercial auto. Replacement cost. Licensed all 50 states. 15-min quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tools & Equipment Insurance — coverage for contractors' tools, gear, and mobile equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools & Equipment Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for contractors' tools & equipment. Scheduled floaters, mobile equipment, installation floaters, equipment breakdown, inland marine. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.2622,
      longitude: -111.7826,
    },
    employee: {
      "@type": "Person",
      name: "Josh Cotner",
      jobTitle: "Founder & Insurance Agent",
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Tools & Equipment Floater Insurance for Contractors",
      "Scheduled Equipment & Mobile Gear Coverage",
      "Installation Floater Insurance",
      "Inland Marine Insurance for Contractors",
      "Equipment Breakdown (Boiler & Machinery) Coverage",
      "Commercial Auto Insurance for Work Trucks & Tool Trailers",
      "General Liability Insurance for Contractors",
      "Umbrella / Excess Liability Insurance",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
