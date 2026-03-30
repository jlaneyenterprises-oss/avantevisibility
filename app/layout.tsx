import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AI Visibility & Local SEO Audits | Avante Visibility",
    template: "%s | Avante Visibility",
  },
  description:
    "Your business may be invisible to ChatGPT, Google AI, and Perplexity. Avante Visibility audits find the gaps and fix them fast. Get your free score.",
  verification: {
    google: "fVrPXoghLTUXCWoQ5DBqBIuc6vSo1JbLA1qU7ayvT28",
  },
  metadataBase: new URL("https://avantevisibility.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avantevisibility.com",
    siteName: "Avante Visibility",
    title: "AI Visibility & Local SEO Audits | Avante Visibility",
    description:
      "Your business may be invisible to ChatGPT, Google AI, and Perplexity. Avante Visibility audits find the gaps and fix them fast. Get your free score.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AvanteVisible",
    creator: "@AvanteVisible",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avantevisibility.com/#organization",
      name: "Avante Visibility",
      url: "https://avantevisibility.com",
      logo: "https://avantevisibility.com/favicon.ico",
      description:
        "AI visibility audits, review intelligence, and Google Business Profile audits for businesses and agencies nationwide.",
      telephone: "+17025255958",
      email: "jolyn@avantevisibility.com",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "JoLyn Laney",
      },
      sameAs: [
        "https://www.linkedin.com/company/avante-visibility",
        "https://www.facebook.com/profile.php?id=61577552439813",
        "https://www.instagram.com/avantevisibility",
        "https://x.com/AvanteVisible",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+17025255958",
        contactType: "sales",
        email: "jolyn@avantevisibility.com",
        areaServed: "US",
        availableLanguage: "English",
      },
      areaServed: {
        "@type": "Country",
        name: "US",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://avantevisibility.com/#business",
      name: "Avante Visibility",
      description:
        "AI visibility audits, review intelligence, and Google Business Profile audits for businesses and agencies nationwide.",
      url: "https://avantevisibility.com",
      image: "https://avantevisibility.com/favicon.ico",
      telephone: "+17025255958",
      email: "jolyn@avantevisibility.com",
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "US",
      },
      sameAs: [
        "https://www.linkedin.com/company/avante-visibility",
        "https://www.facebook.com/profile.php?id=61577552439813",
        "https://www.instagram.com/avantevisibility",
        "https://x.com/AvanteVisible",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Visibility Audits",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Visibility Audit",
              description:
                "Comprehensive audit testing whether AI platforms like ChatGPT, Perplexity, and Google AI recommend your business.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Review Intelligence Audit",
              description:
                "Analysis of review sentiment, language patterns, and competitive positioning across review platforms.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Business Profile Audit",
              description:
                "Comprehensive GBP optimization assessment with prioritized action items.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://avantevisibility.com/#website",
      url: "https://avantevisibility.com",
      name: "Avante Visibility",
      description:
        "AI visibility audits, review intelligence, and Google Business Profile audits for businesses and agencies nationwide.",
      publisher: {
        "@id": "https://avantevisibility.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://avantevisibility.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PLMWGDDQ0N"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-PLMWGDDQ0N');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
