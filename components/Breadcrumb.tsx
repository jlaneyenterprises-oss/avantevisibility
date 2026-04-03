import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-bg-alt/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <ol className="flex items-center gap-1.5 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3 h-3 text-gray-300" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-text-muted hover:text-primary transition-colors"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-text-primary font-medium truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
