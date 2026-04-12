import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import {
  Search,
  Brain,
  Star,
  BarChart3,
  FileText,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Eye,
  MessageSquare,
  Wrench,
  Activity,
  Target,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

export const metadata: Metadata = {
  title:
    "AI Visibility for Home Services | HVAC, Plumbing, Roofing & More | Avante Visibility",
  description:
    "Your customers are searching ChatGPT, Perplexity, and Google AI for HVAC, plumbing, roofing, and home service providers. If you don't show up, your competitor does. We fix that.",
  openGraph: {
    title: "AI Visibility for Home Services | Avante Visibility",
    description:
      "Your customers are searching ChatGPT and Google AI for home service providers. If you don't show up, your competitor does. We fix that.",
    url: "https://avantevisibility.com/home-services",
    images: [
      {
        url: "https://avantevisibility.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Visibility for Home Services | Avante Visibility",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Why does AI search visibility matter for my home services business?",
    answer:
      "44% of consumers now use AI chat as their primary search tool, surpassing traditional Google search at 31%. When a homeowner asks ChatGPT or Perplexity for the best HVAC company or plumber near them, the AI generates an answer based on which businesses have the strongest online presence, reviews, structured data, and content. If your business is not optimized for how AI reads and evaluates companies, you will not appear in those answers. Your competitor will.",
  },
  {
    question: "My business already ranks well on Google. Why do I need this?",
    answer:
      "Traditional Google SEO and AI search visibility are two different things. Many home service companies with strong Google rankings are completely invisible in ChatGPT, Perplexity, and Google AI Overviews. AI platforms evaluate businesses differently -- they look for structured data, entity clarity, authoritative content, and review signals that traditional SEO does not address. Our audit tests your actual presence across every major AI platform.",
  },
  {
    question: "What AI platforms do you test my business on?",
    answer:
      "We test your visibility across ChatGPT (including GPT-4 with web browsing), Google AI Overviews (which appear in over 50% of Google searches), Google Gemini, Perplexity AI, Microsoft Copilot, and Claude. We query these platforms with the exact questions your customers ask -- things like 'best HVAC company in [your city]' or 'emergency plumber near me' -- and document whether you appear, how you are described, and who shows up instead.",
  },
  {
    question: "How does AI handle emergency and urgent searches?",
    answer:
      "Emergency searches like 'emergency plumber near me' or '24/7 HVAC repair' are some of the highest-value queries in home services. AI platforms treat urgency differently -- they prioritize businesses that clearly communicate 24/7 availability, fast response times, and emergency service capabilities. We optimize your presence specifically for these high-intent urgent queries.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most home service businesses begin seeing improvements in AI visibility within 4 to 8 weeks after implementing our recommendations. Some changes -- like fixing schema markup, updating your Google Business Profile, and restructuring FAQ content -- can produce results within days as AI platforms recrawl your site.",
  },
  {
    question: "Do you work with home service businesses outside of Las Vegas?",
    answer:
      "Yes. While we are based in Las Vegas, our AI visibility services work for home service businesses in any city. AI search is not location-dependent in the way traditional local SEO is -- the same optimization principles apply whether your business is in Las Vegas, Phoenix, Atlanta, or any other market.",
  },
  {
    question: "What does the free AI Visibility Score include?",
    answer:
      "Use our free AI Visibility Score tool to see if AI platforms mention your business. We run real-time queries across major AI platforms and show you whether your business appears. For a deeper dive, book a free strategy call where we run a comprehensive live AI search test during the call.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Visibility for Home Services",
    alternateName: [
      "Home Services GEO",
      "HVAC AI Search Optimization",
      "Plumbing AI Visibility",
      "Home Services AI Search Optimization",
    ],
    description:
      "AI search visibility optimization services for home service businesses including HVAC, plumbing, roofing, electrical, and more. We help contractors get found and recommended by ChatGPT, Perplexity, Google AI Overviews, and other AI platforms.",
    url: "https://avantevisibility.com/home-services",
    provider: {
      "@id": "https://avantevisibility.com/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Home Service Business Owners and Contractors",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://avantevisibility.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Home Services AI Visibility",
        item: "https://avantevisibility.com/home-services",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function HomeServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Home Services" }]}
      />

      <Hero
        headline="Your Home Services Business Is Invisible to AI Search. We Fix That."
        subheadline="When a homeowner asks ChatGPT &quot;best HVAC company near me&quot; or searches Google AI for &quot;emergency plumber,&quot; does your business appear? 44% of consumers now use AI as their primary search tool. If your business isn&apos;t in the answer, your competitor is getting that call."
        primaryCTA={{
          text: "Get Your Free AI Visibility Score",
          href: "/ai-score",
        }}
        secondaryCTA={{
          text: "Book a Free Strategy Call",
          href: BOOKING_URL,
        }}
        trustBadges={[
          "20+ Years Digital Marketing Experience",
          "Specialized in Local Services",
          "AI-Powered Diagnostics",
          "Results in Weeks, Not Months",
        ]}
      />

      {/* The Problem */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Homeowners Are Asking AI for Contractor Recommendations. Are You in the Answer?
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              The way homeowners find service providers has fundamentally changed. AI platforms are now the first place many people look when they need a plumber, HVAC tech, roofer, or electrician. If your business is not optimized for how AI reads and recommends companies, you are invisible to a growing share of your market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12 stagger">
            {[
              { stat: "44%", text: "of consumers now use AI chat as their primary search tool -- more than traditional Google (31%)" },
              { stat: "$500B+", text: "US home services market -- homeowners searching AI represent massive revenue potential for contractors" },
              { stat: "88%", text: "of consumers who search for a local business on mobile visit or call within 24 hours" },
              { stat: "0%", text: "of most home service businesses are optimized for AI search -- the ones who move first win the market" },
            ].map((item) => (
              <div key={item.stat} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{item.stat}</p>
                <p className="text-sm text-text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border-2 border-primary/40 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">What AI says about your competitor</p>
              <div className="bg-bg-alt rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-secondary">
                    &quot;Based on reviews and service offerings, I recommend{" "}
                    <span className="text-primary font-bold">Elite Home Services</span>. They have 4.9 stars across 500+ reviews, offer 24/7 emergency HVAC and plumbing service, and customers consistently praise their fast response times and upfront pricing...&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border-2 border-gray-300 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">What AI says about your business</p>
              <div className="bg-bg-alt rounded-lg p-4 min-h-[80px] flex items-center justify-center">
                <p className="text-sm text-text-muted italic">[Your business does not appear in this response]</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-white rounded-xl border-2 border-accent p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">After working with Avante Visibility</p>
              <div className="bg-bg-alt rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-secondary">
                    &quot;Based on reviews, credentials, and online presence, I recommend{" "}
                    <span className="text-accent font-bold">Your Home Services Company</span>. They have 4.8 stars across 350+ reviews, are licensed and insured, offer same-day service for HVAC, plumbing, and electrical, and customers consistently highlight their professionalism and fair pricing. They offer free estimates...&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Home Services Need AI Visibility */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Why AI Visibility Is the New Competitive Edge for Home Services
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              Your customers research service providers before they ever call. Increasingly, that research happens in AI chat -- especially for urgent and emergency needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto stagger">
            {[
              { icon: MessageSquare, title: "Homeowners Ask AI First", description: "Before calling a contractor, homeowners ask ChatGPT about their problem, what it might cost, and who the best local providers are. If your business is not in those answers, you never get the chance to compete." },
              { icon: Star, title: "Reviews Drive AI Recommendations", description: "AI platforms heavily weight review sentiment, volume, and recency. Your ratings on Google, Angi, HomeAdvisor, Thumbtack, and BBB all factor into whether AI recommends your business." },
              { icon: Shield, title: "Licensing Builds AI Trust", description: "Licenses, insurance, bonding, certifications, and years of experience are trust signals AI uses to determine which contractors to recommend. Most businesses fail to structure this information for AI." },
              { icon: Wrench, title: "Service Pages Need AI Structure", description: "Your HVAC page, plumbing page, and roofing pages need specific formatting, schema markup, and FAQ structures so AI can extract and cite your expertise for service-specific queries." },
              { icon: Eye, title: "Emergency Searches Are High-Value", description: "\"Emergency plumber near me\" and \"24/7 HVAC repair\" are among the highest-value queries in home services. AI platforms increasingly serve these urgent queries -- and recommend businesses that clearly communicate availability." },
              { icon: Target, title: "First Movers Win This Market", description: "Almost zero home service businesses are optimized for AI search today. The companies that move first will establish AI visibility that compounds over time -- making it harder for competitors to catch up." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              How We Make Your Home Services Business Visible to AI
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              We do not just audit your AI visibility -- we build a complete strategy to get your business recommended by every major AI platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { number: 1, icon: Search, title: "AI Platform Testing", description: "We test your business across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Copilot with the exact queries your customers use -- HVAC repair, plumbing, roofing, electrical, emergency services, and more." },
              { number: 2, icon: BarChart3, title: "Competitive AI Benchmarking", description: "We show you exactly which competitors AI is recommending instead of you, what they are doing differently, and the specific gaps you need to close to overtake them." },
              { number: 3, icon: FileText, title: "Content & Schema Optimization", description: "We restructure your service pages, team bios, and FAQ content with the schema markup and formatting AI platforms need to extract, understand, and cite your expertise." },
              { number: 4, icon: Star, title: "Review Strategy for AI", description: "We analyze your review profile across Google, Angi, HomeAdvisor, Thumbtack, and BBB -- identifying the specific review language and sentiment patterns that drive AI recommendations." },
              { number: 5, icon: Brain, title: "Google Business Profile AI Optimization", description: "Google Maps now uses Gemini AI to answer questions about local businesses. We optimize your GBP so the AI-generated answers about your business are accurate, compelling, and complete." },
              { number: 6, icon: Activity, title: "Ongoing AI Visibility Monitoring", description: "AI search results change constantly. We monitor your visibility across all platforms monthly, track citation trends, and adjust strategy to maintain and grow your AI presence." },
            ].map((item) => (
              <div key={item.number} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg font-bold text-sm shrink-0">{item.number}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Home Services AI Visibility Programs</h2>
            <p className="mt-4 text-text-muted leading-relaxed">Every program starts with a free strategy call where we run a live AI search test on your business. No obligation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Search className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-bold text-secondary">AI Visibility Audit</h3>
              <p className="text-sm text-text-muted mt-2 mb-6 leading-relaxed">Find out exactly where you stand across every major AI platform. Perfect for contractors who want to understand the landscape first.</p>
              <ul className="space-y-3 mb-8">
                {["Full AI platform testing (6+ platforms)", "Service-specific query testing", "Competitive benchmarking", "Schema & structured data review", "Review profile analysis for AI", "Prioritized action plan", "30-minute walkthrough call"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-primary"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-white border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all">Book a Free Strategy Call</a>
            </div>
            <div className="bg-white border-2 border-primary rounded-xl p-8 shadow-lg shadow-primary/10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span></div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><TrendingUp className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-bold text-secondary">Growth Program</h3>
              <p className="text-sm text-text-muted mt-2 mb-6 leading-relaxed">Ongoing AI visibility optimization. We audit, fix, monitor, and grow your AI presence every month.</p>
              <ul className="space-y-3 mb-8">
                {["Everything in the Audit", "Full implementation of fixes", "Monthly AI visibility monitoring", "4-6 AI-optimized content pieces/mo", "GBP AI optimization", "Review strategy & monitoring", "Citation & directory management", "Monthly reporting & strategy call"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-primary"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all">Book a Free Strategy Call</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Sparkles className="w-6 h-6 text-primary" /></div>
              <h3 className="text-xl font-bold text-secondary">Dominate Program</h3>
              <p className="text-sm text-text-muted mt-2 mb-6 leading-relaxed">For multi-location home service companies ready to own their market in AI search.</p>
              <ul className="space-y-3 mb-8">
                {["Everything in Growth", "Multi-location optimization", "Custom AI visibility dashboard", "PR & authority building", "Service area page strategy", "Emergency service query optimization", "Revenue attribution reporting", "Dedicated account manager"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-primary"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-white border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all">Book a Free Strategy Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Free AI Search Test", desc: "Book a strategy call. We run a live AI search test on your business and show you exactly what ChatGPT, Perplexity, and Google AI say -- in real time." },
              { step: "02", title: "Full AI Audit", desc: "We conduct a comprehensive audit across all major AI platforms, testing your visibility for every service you offer against your top competitors." },
              { step: "03", title: "Implementation", desc: "We fix everything -- schema markup, content structure, GBP optimization, review strategy, AI crawler access. You focus on jobs. We handle the tech." },
              { step: "04", title: "Monitor & Grow", desc: "Monthly tracking across all AI platforms with regular reporting. Your visibility improves. Your competitors fall behind. You get more calls." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-white">{item.step}</span></div>
                <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Optimize For */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">AI Visibility for Every Home Service</h2>
            <p className="mt-4 text-text-muted leading-relaxed">We optimize your AI presence for the specific services and queries your customers search for.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["HVAC Repair & Install", "Plumbing", "Roofing", "Electrical", "Garage Door Repair", "Pest Control", "Landscaping", "House Cleaning", "Painting", "Handyman Services", "Water Damage Restoration", "Foundation Repair", "Fencing", "Pool Service", "Solar Installation", "Appliance Repair"].map((service) => (
              <div key={service} className="flex items-center gap-2 bg-bg-alt rounded-lg px-4 py-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-secondary">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Avante Visibility */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Home Service Companies Choose Avante Visibility</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Brain, title: "AI Search Specialists", description: "We specialize exclusively in AI search visibility. This is not a side service bolted onto traditional SEO -- it is all we do, and we do it better than anyone." },
              { icon: Wrench, title: "Home Services Expertise", description: "We understand the home services industry -- licensing requirements, emergency search behavior, seasonal demand patterns, and the customer decision journey specific to contractors." },
              { icon: Users, title: "20+ Years Marketing Experience", description: "Founded by a Google Partner with two decades of digital marketing experience. We bring enterprise-level expertise to home service businesses of every size." },
              { icon: BarChart3, title: "Data-Driven, No Fluff", description: "Every recommendation is backed by data. Every report shows real AI search results. No jargon, no 60-page PDFs. Just clear findings and exactly what to do about them." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-primary-light" /></div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto"><FAQAccordion items={faqItems} /></div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">Related Services for Home Service Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/ai-visibility-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">AI Visibility Audit</h3>
              <p className="mt-2 text-sm text-text-muted">Full AI platform testing and competitive benchmarking for your home services business.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link href="/review-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Review Intelligence Audit</h3>
              <p className="mt-2 text-sm text-text-muted">Analyze how your reviews on Angi, HomeAdvisor, Thumbtack, and Google impact AI recommendations.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link href="/gbp-audit" className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Google Business Profile Audit</h3>
              <p className="mt-2 text-sm text-text-muted">Google Maps now uses AI to answer questions about your business. Is it accurate?</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Find Out If AI Recommends Your Business?"
        description="Book a free strategy call and we will run a live AI search test on your home services business. You will see exactly what ChatGPT, Perplexity, and Google AI say -- in real time. No obligation."
        buttonText="Get Your Free AI Visibility Score"
        buttonHref="/ai-score"
        secondaryButtonText="Book a Free Strategy Call"
        showContact
      />
    </>
  );
}
