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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avantevisibility.com/#organization",
      name: "Avante Visibility",
      url: "https://avantevisibility.com",
      telephone: "+17025255958",
      email: "jolyn@avantevisibility.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://avantevisibility.com/#localbusiness",
      name: "Avante Visibility",
      description:
        "AI visibility audits, review intelligence audits, and Google Business Profile audits for local businesses and agencies.",
      url: "https://avantevisibility.com",
      telephone: "+17025255958",
      email: "jolyn@avantevisibility.com",
      priceRange: "$$",
      areaServed: "US",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://avantevisibility.com/#website",
      url: "https://avantevisibility.com",
      name: "Avante Visibility",
      publisher: {
        "@id": "https://avantevisibility.com/#organization",
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
