"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/avantevisibility";

const services = [
  { name: "AI Visibility Audit", href: "/ai-visibility-audit" },
  { name: "Review Intelligence Audit", href: "/review-audit" },
  { name: "Google Business Profile Audit", href: "/gbp-audit" },
  { name: "Google Ads & Landing Pages", href: "/google-ads" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
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
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[260px]">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-text-primary hover:bg-bg-alt hover:text-primary transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/packages"
              className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
            >
              Packages
            </Link>
            <Link
              href="/partners"
              className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
            >
              Partners
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Book a Call
            </a>
            <button
              className="md:hidden p-2"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block py-2 text-sm text-text-primary hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <Link
              href="/packages"
              className="block py-2 text-sm text-text-primary hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/partners"
              className="block py-2 text-sm text-text-primary hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm text-text-primary hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
