import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { name: "AI Visibility Audit", href: "/audit" },
  { name: "Reputation Engine", href: "/reputation" },
  { name: "Google Ads", href: "/google-ads" },
  { name: "Partners", href: "/partners" },
  { name: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold">
              Avante <span className="text-primary">Visibility</span>
            </p>
            <p className="mt-3 text-sm text-gray-400">
              AI search visibility agency for local businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Pages
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:jolyn@avantevisibility.com"
                  className="hover:text-white transition-colors"
                >
                  jolyn@avantevisibility.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+17025255958"
                  className="hover:text-white transition-colors"
                >
                  (702) 525-5958
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                Las Vegas, NV
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; 2026 Avante Visibility. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
