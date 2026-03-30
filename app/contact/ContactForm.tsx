"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";
import { CheckCircle, AlertCircle } from "lucide-react";

const initialState: ContactFormState = { success: false, error: null };

const services = [
  "AI Visibility Audit",
  "Review Intelligence Audit",
  "Google Business Profile Audit",
  "Google Ads & Landing Pages",
  "Full Digital Visibility Package",
  "White-Label / Agency Partnership",
  "Other",
];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">
          Message Sent!
        </h3>
        <p className="text-text-muted">
          Thanks for reaching out. JoLyn will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-sm rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-secondary mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your business and what you're looking for..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
