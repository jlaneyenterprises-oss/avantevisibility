export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "how-to-check-if-your-business-shows-up-in-chatgpt",
    title: "How to Check If Your Business Shows Up in ChatGPT",
    description:
      "Millions of people now ask ChatGPT for local recommendations instead of Googling. Here's how to check whether your business is being recommended — and what to do if it's not.",
    date: "2026-03-26",
    author: "JoLyn Laney",
    readTime: "6 min read",
    category: "AI Visibility",
    content: `
## The Shift You Can't Ignore

Something has changed in how customers find local businesses.

Instead of typing "best plumber near me" into Google, a growing number of people are opening ChatGPT, Perplexity, or Google's AI Overview and asking: *"Who's the best plumber in Las Vegas?"*

And the answer they get? It's not a list of 10 blue links. It's a direct recommendation — usually 3 to 5 businesses, presented as the AI's top picks.

If your business isn't in that answer, you're invisible to an entirely new channel of customer discovery.

## How to Check Your AI Visibility Right Now

You don't need special tools to do a basic check. Here's how to test your visibility across the three major AI platforms:

### 1. ChatGPT

Go to [chat.openai.com](https://chat.openai.com) and ask questions your customers would ask:

- "Who's the best [your service] in [your city]?"
- "Can you recommend a [your industry] near [your location]?"
- "What are the top-rated [your business type] in [your area]?"

**What to look for:** Does your business appear by name? Is the information accurate? Does it mention your reviews, specialties, or location correctly?

### 2. Perplexity

Go to [perplexity.ai](https://perplexity.ai) and run the same queries. Perplexity searches the live web and cites its sources, so pay attention to:

- Whether your business is mentioned
- Which sources it pulls from (your website, Yelp, Google, directories)
- Whether competitors appear instead of you

### 3. Google AI Overview

Search for your service on Google. If an AI Overview panel appears at the top of results, check whether your business is referenced in the generated answer.

## What It Means If You Don't Show Up

If your business doesn't appear in any of these AI responses, it usually means one or more of these factors:

**Your online footprint is too thin.** AI models pull from the web — your website, review platforms, business directories, news mentions, and social profiles. If your presence across these sources is weak or inconsistent, the AI has nothing to work with.

**Your reviews don't support a recommendation.** AI platforms heavily weight review sentiment and volume when making local recommendations. If you have few reviews, or your reviews mention recurring problems, AI won't recommend you.

**Your website isn't structured for AI consumption.** AI models parse your site differently than humans do. If your content doesn't clearly state what you do, where you do it, and why you're the best choice — in a way that's easy for a machine to extract — you get skipped.

**Your Google Business Profile has gaps.** Your GBP is one of the most important data sources AI platforms reference for local businesses. Missing categories, incomplete descriptions, few photos, or inconsistent NAP (name, address, phone) data all reduce your chances.

## The DIY Checklist

Here's what you can do today to start improving your AI visibility:

### Audit Your Digital Footprint
- [ ] Google your business name — is the information consistent across every result?
- [ ] Check your Google Business Profile — is every field completed?
- [ ] Look at your top review platforms — do you have 20+ reviews with a 4.0+ average?
- [ ] Search for your business on Yelp, Facebook, and Apple Maps — are you listed?

### Optimize Your Website Content
- [ ] Does your homepage clearly state what you do and where?
- [ ] Do you have a dedicated page for each core service?
- [ ] Is your NAP (name, address, phone) in the footer of every page?
- [ ] Do you have schema markup (structured data) on your site?

### Build Citable Authority
- [ ] Are you mentioned on any local news sites or industry blogs?
- [ ] Do you have any partnerships or affiliations listed online?
- [ ] Is your business listed in relevant industry directories?

## Why a Manual Check Isn't Enough

The test you just ran gives you a snapshot — but AI search results are dynamic. They change based on how the models are updated, what new content appears online, and how your competitors improve their own visibility.

A manual check can't tell you:

- **Why** you're not appearing (is it reviews? website structure? missing citations?)
- How you compare to the competitors who **are** appearing
- What specific changes would move you into AI recommendations
- How your visibility is trending over time

That's what a structured AI visibility audit does. It tests your business across all major AI platforms, analyzes every factor that influences recommendations, and gives you a prioritized action plan.

## What an AI Visibility Audit Covers

At Avante Visibility, our AI Visibility Audit tests your business across ChatGPT, Perplexity, Google AI Overview, and other AI platforms using the exact queries your customers are asking. The audit analyzes:

- **AI platform presence** — where you show up and where you don't
- **Competitor benchmarking** — who the AI recommends instead of you
- **Review sentiment analysis** — what your reviews signal to AI models
- **Website structure** — whether your content is optimized for AI extraction
- **Citation consistency** — whether your business data is accurate across the web
- **GBP completeness** — gaps in your Google Business Profile that affect AI visibility

Every finding is ranked by impact so you know exactly what to fix first.

## The Bottom Line

AI search isn't replacing Google — it's adding a new layer of discovery that runs parallel to traditional search. Businesses that show up in both channels have a compounding advantage. Businesses that show up in neither are losing customers they never knew existed.

The first step is checking. The second step is fixing what you find.
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
