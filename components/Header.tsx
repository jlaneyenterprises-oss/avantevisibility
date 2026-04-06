"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Star,
  MapPin,
  MousePointerClick,
  Brain,
  Monitor,
  Zap,
  GitBranch,
  Users,
  RotateCcw,
} from "lucide-react";

const BOOKING_URL = "https://cal.com/provemyads/15min";

const localServices = [
  {
    name: "AI Visibility Audit",
    desc: "See if AI recommends your business",
    href: "/ai-visibility-audit",
    icon: Search,
  },
  {
    name: "Review Intelligence Audit",
    desc: "What your reviews signal to AI",
    href: "/review-audit",
    icon: Star,
  },
  {
    name: "Google Business Profile Audit",
    desc: "Optimize your most important listing",
    href: "/gbp-audit",
    icon: MapPin,
  },
  {
    name: "Google Ads & Landing Pages",
    desc: "Make every ad dollar work harder",
    href: "/google-ads",
    icon: MousePointerClick,
  },
];

const growthServices = [
  {
    name: "GEO Audit",
    desc: "Full generative engine optimization",
    href: "/geo-audit",
    icon: Brain,
  },
  {
    name: "Technical SEO Audit",
    desc: "Crawl analysis & technical fixes",
    href: "/technical-seo-audit",
    icon: Monitor,
  },
  {
    name: "Speed & Core Web Vitals",
    desc: "Page speed & performance scoring",
    href: "/speed-audit",
    icon: Zap,
  },
  {
    name: "Conversion Funnel Audit",
    desc: "Landing page to conversion analysis",
    href: "/conversion-audit",
    icon: GitBranch,
  },
  {
    name: "Competitor Intelligence",
    desc: "Deep competitive analysis",
    href: "/competitor-intelligence",
    icon: Users,
  },
  {
    name: "Algorithm Recovery",
    desc: "Pinpoint & recover from updates",
    href: "/algorithm-recovery",
    icon: RotateCcw,
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (href: string) => pathname === href;
  const isServiceActive =
    localServices.some((s) => pathname === s.href) ||
    growthServices.some((s) => pathname === s.href);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-secondary/98 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-secondary/95 backdrop-blur border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="Avante Visibility"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isServiceActive || servicesOpen
                      ? "text-primary-light bg-white/5"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute top-full -left-4 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-secondary-light rounded-xl shadow-2xl shadow-black/30 border border-white/10 p-5 w-[600px]">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Local Business Column */}
                      <div>
                        <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3">
                          Local Business
                        </p>
                        <div className="space-y-1">
                          {localServices.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                                isActive(s.href)
                                  ? "bg-primary/15 text-primary-light"
                                  : "hover:bg-white/5 text-gray-300"
                              }`}
                            >
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                <s.icon className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium group-hover:text-white transition-colors">
                                  {s.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {s.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Growth Column */}
                      <div>
                        <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3">
                          Growth & Performance
                        </p>
                        <div className="space-y-1">
                          {growthServices.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                                isActive(s.href)
                                  ? "bg-primary/15 text-primary-light"
                                  : "hover:bg-white/5 text-gray-300"
                              }`}
                            >
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                <s.icon className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium group-hover:text-white transition-colors">
                                  {s.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {s.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href="/packages"
                        className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                      >
                        View all packages &rarr;
                      </Link>
                      <Link
                        href="/monthly-plans"
                        className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                      >
                        Monthly plans &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top-level Links */}
              {[
                { name: "Pricing", href: "/packages" },
                { name: "Blog", href: "/blog" },
                { name: "Partners", href: "/partners" },
                { name: "About", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "text-primary-light bg-white/5"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Book a Call
              </a>
              <button
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 right-0 bottom-0 z-40 w-full max-w-sm bg-secondary border-l border-white/10 overflow-y-auto transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-1">
          {/* Services Accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-200 rounded-lg hover:bg-white/5 transition-colors"
          >
            Services
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-3 pb-2 space-y-1">
              <p className="px-3 pt-2 pb-1 text-[11px] font-semibold text-primary uppercase tracking-widest">
                Local Business
              </p>
              {localServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive(s.href)
                      ? "bg-primary/15 text-primary-light"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <s.icon className="w-4 h-4 text-primary shrink-0" />
                  {s.name}
                </Link>
              ))}

              <p className="px-3 pt-3 pb-1 text-[11px] font-semibold text-primary uppercase tracking-widest">
                Growth & Performance
              </p>
              {growthServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive(s.href)
                      ? "bg-primary/15 text-primary-light"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <s.icon className="w-4 h-4 text-primary shrink-0" />
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Top-level Mobile Links */}
          {[
            { name: "Pricing", href: "/packages" },
            { name: "Monthly Plans", href: "/monthly-plans" },
            { name: "Blog", href: "/blog" },
            { name: "Partners", href: "/partners" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.href)
                  ? "text-primary-light bg-white/5"
                  : "text-gray-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4 mt-4 border-t border-white/10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
