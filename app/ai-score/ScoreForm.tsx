"use client";

import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  MinusCircle,
} from "lucide-react";

interface PlatformResult {
  platform: string;
  found: boolean;
  details: string;
}

interface ScoreResult {
  score: number;
  level: "critical" | "needs-work" | "good";
  platformResults: PlatformResult[];
  recommendations: string[];
  businessName: string;
}

const BOOKING_URL = "https://cal.com/provemyads/15min";

const industries = [
  "Med Spa",
  "Dentist",
  "Law Firm",
  "HVAC",
  "Plumbing",
  "Roofing",
  "Electrical",
  "Restaurant",
  "Real Estate",
  "Veterinarian",
  "Chiropractor",
  "Auto Repair",
  "Salon / Barbershop",
  "Fitness / Gym",
  "Home Services",
  "Other",
];

function ScoreGauge({ score, level }: { score: number; level: string }) {
  const color =
    level === "critical"
      ? "text-red-500"
      : level === "needs-work"
        ? "text-yellow-500"
        : "text-green-500";
  const bgColor =
    level === "critical"
      ? "bg-red-500"
      : level === "needs-work"
        ? "bg-yellow-500"
        : "bg-green-500";
  const label =
    level === "critical"
      ? "Critical"
      : level === "needs-work"
        ? "Needs Work"
        : "Good";

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg className="w-40 h-40 -rotate-90" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            className="text-gray-200"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray={`${(score / 100) * 440} 440`}
            strokeLinecap="round"
            className={color}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${color}`}>{score}</span>
          <span className="text-sm text-text-muted">/100</span>
        </div>
      </div>
      <span
        className={`mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${bgColor}`}
      >
        {label}
      </span>
    </div>
  );
}

export default function ScoreForm() {
  const [state, setState] = useState<
    "idle" | "loading" | "results" | "error" | "rate-limited"
  >("idle");
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      businessName: (form.elements.namedItem("businessName") as HTMLInputElement)
        .value,
      websiteUrl: (form.elements.namedItem("websiteUrl") as HTMLInputElement)
        .value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLSelectElement)
        .value,
    };

    try {
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 429) {
        setState("rate-limited");
        return;
      }

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong.");
      }

      const json: ScoreResult = await res.json();
      setResult(json);
      setState("results");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setState("error");
    }
  }

  if (state === "rate-limited") {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8 text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <MinusCircle className="w-8 h-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">
          Already Checked
        </h3>
        <p className="text-text-muted mb-6">
          You have already run an AI visibility check recently. For a
          comprehensive analysis, book a free strategy call with our team.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
        >
          Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  if (state === "results" && result) {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Score Display */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            AI Visibility Score for {result.businessName}
          </h3>
          <ScoreGauge score={result.score} level={result.level} />
        </div>

        {/* Platform Results */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h4 className="text-lg font-bold text-secondary mb-4">
            AI Visibility Breakdown
          </h4>
          <div className="space-y-4">
            {result.platformResults.map((pr) => (
              <div
                key={pr.platform}
                className="flex items-start gap-3 p-4 bg-bg-alt rounded-lg"
              >
                {pr.found ? (
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-medium text-secondary">{pr.platform}</p>
                  <p className="text-sm text-text-muted mt-1">{pr.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h4 className="text-lg font-bold text-secondary mb-4">
            Recommendations
          </h4>
          <ul className="space-y-3">
            {result.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                </span>
                <span className="text-text-muted leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-secondary to-secondary-light rounded-xl p-8 text-center">
          <h4 className="text-xl font-bold text-white mb-2">
            Want the Full Picture?
          </h4>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            This is a quick snapshot. A full AI Visibility Audit tests your
            business across 28+ queries on every major AI platform, benchmarks
            you against competitors, and gives you a prioritized action plan.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-8 max-w-xl mx-auto"
    >
      {state === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-sm rounded-lg mb-5">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="Your Business Name"
            disabled={state === "loading"}
          />
        </div>

        <div>
          <label
            htmlFor="websiteUrl"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Website URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="websiteUrl"
            name="websiteUrl"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="https://yourbusiness.com"
            disabled={state === "loading"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              placeholder="Las Vegas"
              disabled={state === "loading"}
            />
          </div>
          <div>
            <label
              htmlFor="industry"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              id="industry"
              name="industry"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
              disabled={state === "loading"}
            >
              <option value="">Select your industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
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
            disabled={state === "loading"}
          />
          <p className="mt-1 text-xs text-text-muted">
            We will send your results here. No spam.
          </p>
        </div>

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {state === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Checking AI Platforms...
            </>
          ) : (
            "Check My AI Visibility Score"
          )}
        </button>
      </div>

      <p className="mt-4 text-xs text-text-muted text-center">
        Takes about 15 seconds. We test brand recognition, commercial discovery, and AI recommendations in real time.
      </p>
    </form>
  );
}
