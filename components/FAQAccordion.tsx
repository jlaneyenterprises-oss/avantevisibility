"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
              isOpen
                ? "border-primary/30 shadow-md shadow-primary/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <h3
                className={`text-base font-semibold transition-colors ${
                  isOpen ? "text-primary" : "text-secondary group-hover:text-primary"
                }`}
              >
                {item.question}
              </h3>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                  isOpen
                    ? "bg-primary/10 rotate-180"
                    : "bg-gray-100 group-hover:bg-primary/10"
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-colors ${
                    isOpen ? "text-primary" : "text-gray-400 group-hover:text-primary"
                  }`}
                />
              </div>
            </button>
            <div
              className="accordion-content"
              data-open={isOpen}
            >
              <div className="accordion-inner">
                <div className="px-6 pb-5">
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
