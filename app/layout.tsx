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
    default: "Avante Visibility — AI Search Visibility for Local Businesses",
    template: "%s | Avante Visibility",
  },
  description:
    "Your business is invisible to AI search. We audit, fix, and monitor your presence across ChatGPT, Google AI, and Perplexity so customers find you first.",
  verification: {
    google: "fVrPXoghLTUXCWoQ5DBqBIuc6vSo1JbLA1qU7ayvT28",
  },
  metadataBase: new URL("https://avantevisibility.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avantevisibility.com",
    siteName: "Avante Visibility",
    title: "Avante Visibility — AI Search Visibility for Local Businesses",
    description:
      "Your business is invisible to AI search. We audit, fix, and monitor your presence across ChatGPT, Google AI, and Perplexity so customers find you first.",
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
      email: "jolyn@avantevisibility.com",
      telephone: "(702) 525-5958",
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
      url: "https://avantevisibility.com",
      email: "jolyn@avantevisibility.com",
      telephone: "(702) 525-5958",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
      priceRange: "$$",
      description:
        "AI search visibility agency for local businesses. GEO/AEO Visibility Audits, Reputation Management, and Google Ads optimization.",
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
