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
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Avante Visibility - AI Visibility & Local SEO Audits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AvanteVisible",
    creator: "@AvanteVisible",
    images: ["https://avantevisibility.com/opengraph-image"],
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
      logo: "https://avantevisibility.com/logo.png",
      image: "https://avantevisibility.com/opengraph-image",
      description:
        "AI visibility audits, review intelligence, and Google Business Profile audits for businesses and agencies nationwide.",
      telephone: "+17025255958",
      email: "jolyn@avante.agency",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "JoLyn Laney",
        url: "https://avantevisibility.com/about",
        jobTitle: "Founder & AI Visibility Strategist",
        description:
          "JoLyn Laney has over 20 years of experience in digital marketing, SEO, and paid media. A Google Partner since 2012, she specializes in helping businesses get found by AI-powered search engines.",
        sameAs: [
          "https://www.linkedin.com/company/avante-visibility",
          "https://x.com/AvanteVisible",
        ],
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
        email: "jolyn@avante.agency",
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
      image: "https://avantevisibility.com/opengraph-image",
      telephone: "+17025255958",
      email: "jolyn@avante.agency",
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
        <link rel="llms" href="https://avantevisibility.com/llms.txt" />
        <link rel="llms-full" href="https://avantevisibility.com/llms-full.txt" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/69d96b96e0ef771c36227ed4/1jlskohck';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`,
          }}
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
