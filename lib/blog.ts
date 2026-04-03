export interface Author {
  name: string;
  title: string;
  bio: string;
  url: string;
  sameAs: string[];
}

export const authors: Record<string, Author> = {
  "JoLyn Laney": {
    name: "JoLyn Laney",
    title: "Founder & AI Visibility Strategist, Avante Visibility",
    bio: "JoLyn Laney is the founder of Avante Visibility and has over 20 years of experience in digital marketing, SEO, and paid media. A Google Partner since 2012, she now specializes in helping local businesses and e-commerce brands get found by AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews. She has audited hundreds of businesses for AI visibility and developed the GEO audit framework used by Avante Visibility.",
    url: "https://avantevisibility.com/about",
    sameAs: [
      "https://www.linkedin.com/company/avante-visibility",
      "https://x.com/AvanteVisible",
    ],
  },
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified: string;
  author: string;
  readTime: string;
  category: string;
  keyTakeaways: string[];
  content: string;
}

export function getAuthor(name: string): Author | undefined {
  return authors[name];
}

export const posts: BlogPost[] = [
  {
    slug: "what-is-geo-generative-engine-optimization",
    title: "What Is GEO? Generative Engine Optimization Explained for Business Owners",
    description:
      "GEO is the new SEO. If you want your business to show up when people ask AI for recommendations, you need to understand generative engine optimization and how it works.",
    date: "2026-04-03",
    dateModified: "2026-04-03",
    author: "JoLyn Laney",
    readTime: "7 min read",
    category: "GEO",
    keyTakeaways: [
      "GEO (Generative Engine Optimization) is the practice of optimizing your business so AI systems like ChatGPT and Perplexity recommend you",
      "Unlike SEO which focuses on rankings, GEO focuses on reviews, structured data, citations, and content clarity",
      "AI models evaluate trust signals, review sentiment, schema markup, and citation consistency when making recommendations",
      "GEO doesn't replace SEO -- it adds a new layer that compounds your advantage",
    ],
    content: `
## SEO Got You Here. GEO Gets You What's Next.

For 20 years, SEO (Search Engine Optimization) was the game. You optimized your website so Google's algorithm would rank you higher in search results. It worked. Millions of businesses built their customer pipelines on organic search traffic.

But the game has changed.

Today, a growing percentage of consumers skip Google entirely and ask an AI assistant for recommendations. They open ChatGPT, Perplexity, Google Gemini, or use Google's AI Overview and type things like:

- "Best Italian restaurant in Henderson NV"
- "Who should I hire for a kitchen remodel in Las Vegas?"
- "What's the most reliable HVAC company near me?"

The AI doesn't return a list of 10 links. It gives a direct answer -- usually naming 3 to 5 businesses and explaining why it recommends them.

**GEO (Generative Engine Optimization)** is the practice of optimizing your business so these AI systems can find you, understand you, and recommend you.

## How GEO Is Different from SEO

SEO optimizes for Google's ranking algorithm -- keyword density, backlinks, page speed, meta tags, and hundreds of other signals.

GEO optimizes for how AI models evaluate trustworthiness, relevance, and authority when generating a recommendation. The signals are different:

| Factor | SEO | GEO |
|--------|-----|-----|
| Primary goal | Rank higher in search results | Get recommended in AI answers |
| Key signals | Backlinks, keywords, page speed | Reviews, structured data, citations, content clarity |
| Content format | Blog posts, landing pages | Clear factual statements AI can extract and quote |
| Trust signals | Domain authority, link profile | Review sentiment, directory consistency, brand mentions |
| Measurement | Rankings, organic traffic | AI citation rate, recommendation frequency |

GEO doesn't replace SEO. It adds a new layer. Businesses that optimize for both traditional search and AI-powered search have a compounding advantage.

## What AI Models Look for When Making Recommendations

When someone asks ChatGPT or Perplexity "who's the best dentist in Las Vegas," the AI evaluates several factors:

### 1. Review Volume and Sentiment
AI models heavily weight what customers say about you. It's not just your star rating -- it's the language in your reviews. AI reads and interprets review text to understand what you're known for and whether customers are satisfied.

### 2. Website Content Clarity
Your website needs to clearly answer the questions: What do you do? Where do you do it? What makes you different? AI models extract factual claims from your site. If your homepage is full of vague marketing language ("We deliver excellence!"), the AI has nothing useful to cite.

### 3. Structured Data (Schema Markup)
Schema markup is code on your website that tells machines exactly what your business is, where it's located, what services you offer, your hours, and more. Without it, AI has to guess -- and it often guesses wrong or skips you entirely.

### 4. Citation Consistency
If your business name, address, and phone number are different across Google, Yelp, Facebook, and industry directories, AI models see inconsistency as a trust problem. Consistent information across the web is a strong positive signal.

### 5. Authority Signals
Are you mentioned on local news sites? Industry publications? Business directories? The more credible sources that reference your business, the more confident AI is in recommending you.

### 6. Google Business Profile Completeness
Your GBP is one of the most important data sources for local AI recommendations. Categories, descriptions, photos, Q&A, attributes, and posts all feed into how AI models understand your business.

## A GEO Audit in Plain English

A GEO audit tests your business against all of these factors. At Avante Visibility, our GEO Audit includes:

- **28+ live AI query tests** across ChatGPT, Perplexity, Google AI, and other platforms
- **12-point scoring system** covering every factor that influences AI recommendations
- **Competitive benchmarking** showing who the AI recommends instead of you and why
- **90-day roadmap** with prioritized actions ranked by impact

Every recommendation is explained in plain language. No jargon. No 60-page PDF. Just what's broken and how to fix it.

## What You Can Do Right Now

Even before getting a full GEO audit, there are steps you can take today:

1. **Ask the AI about yourself.** Open ChatGPT and Perplexity and ask the questions your customers ask. See whether you show up.
2. **Check your Google Business Profile.** Is every field complete? Are your categories correct? Do you have recent photos and posts?
3. **Read your reviews.** Not just the star rating -- read the actual text. What are customers saying? What themes repeat?
4. **Google your business name.** Is the information consistent across every result on the first page?
5. **Check your website.** Does your homepage clearly state what you do and where? Can you find your NAP (name, address, phone) on every page?

## The Bottom Line

GEO isn't a buzzword -- it's the next evolution of how businesses get found online. AI search is growing fast, and the businesses that optimize for it now will have a significant advantage over those that wait.

The first step is understanding where you stand. The second step is fixing what the AI can't find.
`,
  },
  {
    slug: "what-is-aeo-answer-engine-optimization",
    title: "What Is AEO? Answer Engine Optimization for Local Businesses",
    description:
      "Answer Engine Optimization (AEO) focuses on getting your business featured as the direct answer when someone asks an AI assistant for a recommendation. Here's what it is and how to do it.",
    date: "2026-04-01",
    dateModified: "2026-04-01",
    author: "JoLyn Laney",
    readTime: "6 min read",
    category: "AI Visibility",
    keyTakeaways: [
      "AEO (Answer Engine Optimization) is about becoming the business AI names as the direct answer to a user's question",
      "AI decides who gets the answer based on relevance, authority, recency, and specificity",
      "Make your website citable with specific facts, FAQ sections, and schema markup",
      "Build review strength with 50+ reviews on Google at 4.5+ average with owner responses",
    ],
    content: `
## When the Answer Is the Search Result

Traditional search gives you a page of links. You click one, browse, and decide.

AI-powered search gives you a direct answer. No clicking required.

When someone asks Google's AI Overview, ChatGPT, or Perplexity "who's the best emergency plumber in Henderson," the AI doesn't say "here are some websites to check." It says: *"Based on reviews and service offerings, I'd recommend XYZ Plumbing. They have 4.8 stars across 300+ reviews, offer 24/7 emergency service, and are frequently praised for fast response times."*

**Answer Engine Optimization (AEO)** is the practice of making your business the one that gets named in that answer.

## AEO vs. SEO vs. GEO -- What's the Difference?

These three acronyms overlap, but they have different focus areas:

- **SEO** (Search Engine Optimization): Getting your website ranked in traditional search results (Google's blue links)
- **GEO** (Generative Engine Optimization): Optimizing your entire online presence so AI platforms can find and recommend you
- **AEO** (Answer Engine Optimization): Specifically focused on becoming the direct answer to a user's question

Think of it this way: GEO is the broad strategy. AEO is the specific goal within that strategy -- being the business the AI names when asked.

## How AI Decides Who Gets the Answer

When an AI platform needs to recommend a local business, it evaluates:

### Relevance
Does your business actually match what the person is asking about? This seems obvious, but many businesses lose here because their website doesn't clearly describe their services. If you're a dentist who specializes in cosmetic dentistry, but your website mostly talks about general cleanings, the AI won't recommend you for "best cosmetic dentist."

### Authority
How many credible sources confirm that your business is good at what it does? This includes review platforms, business directories, industry publications, news mentions, and your own website content. The more places that independently confirm your quality, the more confident the AI is.

### Recency
AI models pay attention to how current your information is. A Google Business Profile that hasn't been updated in two years sends a signal. Recent reviews, fresh content, and updated business information all contribute to AEO.

### Specificity
AI platforms prefer businesses that give them specific, factual information to cite. "We've been serving Las Vegas for 15 years with over 500 5-star reviews" is far more citable than "We provide excellent service."

## The AEO Checklist for Local Businesses

Here's what you can do to improve your chances of being the AI's answer:

### Make Your Website Citable
- State your services clearly on dedicated pages (one page per core service)
- Include specific facts: years in business, number of customers served, areas served
- Use FAQ sections that directly answer common customer questions
- Add schema markup so AI can easily extract your business information

### Build Review Strength
- Aim for 50+ reviews on Google with a 4.5+ average
- Respond to every review -- positive and negative
- Encourage customers to mention specific services in their reviews
- Maintain active profiles on Yelp, Facebook, and industry-specific platforms

### Keep Your Information Consistent
- Same business name, address, and phone number everywhere
- Same categories and service descriptions across all platforms
- Updated hours, especially holiday hours
- Current photos on every platform where you're listed

### Create Content That AI Can Quote
- Write in clear, factual statements rather than marketing fluff
- Answer the questions customers actually ask (use your FAQ section)
- Publish content that demonstrates expertise in your field
- Keep content updated -- outdated information hurts your credibility

## Why This Matters Now

The shift from "search and browse" to "ask and get an answer" is accelerating. Gartner predicts 25% of traditional search volume will move to AI by the end of 2026. Google's own AI Overviews now appear in over 50% of search results.

For local businesses, this means a new competitive landscape. The businesses that optimize for AEO now are building an advantage that will compound over time. Those that wait will find themselves playing catch-up in a game where the early movers have already locked in their position.

## Getting Started

The most effective way to improve your AEO is to start with data. Find out where you currently stand:

1. Test your visibility across AI platforms (ChatGPT, Perplexity, Google AI)
2. Identify the specific queries where competitors appear instead of you
3. Analyze the gaps in your online presence that are preventing AI recommendations
4. Prioritize fixes by impact and implement them systematically

That's exactly what an AI Visibility Audit does. It gives you the data, the analysis, and the action plan -- so you can stop guessing and start showing up.
`,
  },
  {
    slug: "google-business-profile-mistakes-killing-your-visibility",
    title: "7 Google Business Profile Mistakes That Are Killing Your Visibility",
    description:
      "Your Google Business Profile might be the most important page about your business that you didn't write. Here are 7 common mistakes that are costing you customers in both Google and AI search.",
    date: "2026-03-30",
    dateModified: "2026-03-30",
    author: "JoLyn Laney",
    readTime: "8 min read",
    category: "Google Business Profile",
    keyTakeaways: [
      "Your GBP is one of the primary data sources AI platforms use to recommend local businesses",
      "Wrong primary category is the #1 mistake -- be as specific as possible from Google's 4,000+ categories",
      "Post at least weekly, add 25+ photos, and pre-populate your Q&A with 10-15 common questions",
      "Respond to every review within 24-48 hours -- AI platforms interpret response patterns as a trust signal",
    ],
    content: `
## Your GBP Is Doing More Work Than You Think

Your Google Business Profile isn't just a listing. It's one of the primary data sources that AI platforms use to understand and recommend local businesses.

When ChatGPT, Perplexity, or Google's AI Overview needs to recommend a restaurant, plumber, or dentist, your GBP is one of the first places it looks. Your categories, description, reviews, photos, Q&A, and attributes all feed into how AI models evaluate your business.

A well-optimized GBP helps you rank in Google Maps, appear in local search results, and get recommended by AI assistants. A poorly optimized one does the opposite -- it actively hurts you.

Here are the 7 most common GBP mistakes we see in our audits, and how to fix them.

## Mistake #1: Wrong Primary Category

Your primary category is the single most important field in your GBP. It tells Google (and every AI system that reads your profile) what your business fundamentally is.

**The problem:** Many businesses choose a category that's too broad or not quite right. A cosmetic dentist listed under "Dentist" instead of "Cosmetic Dentist." A Thai restaurant listed under "Asian Restaurant" instead of "Thai Restaurant." A personal injury attorney listed under "Law Firm" instead of "Personal Injury Attorney."

**The fix:** Search for your main service on Google Maps. What category do the top-ranking competitors use? That's likely the right category for you. Be as specific as possible -- Google has over 4,000 categories.

## Mistake #2: Incomplete or Generic Description

Google gives you 750 characters for your business description. Many businesses either leave it blank, write one sentence, or fill it with generic marketing language.

**The problem:** AI models use your description to understand what makes your business unique. "We provide quality service at affordable prices" tells the AI nothing useful. It can't cite that. It can't use it to differentiate you from competitors.

**The fix:** Use all 750 characters. Include: what you do, who you serve, where you're located, how long you've been in business, what specialties you're known for, and any unique differentiators. Write in clear, factual language -- not marketing speak.

## Mistake #3: Missing Secondary Categories

Your primary category is the most important, but secondary categories expand your visibility for related searches.

**The problem:** Many businesses only set one or two categories when they could use five or more. A restaurant might only list "Italian Restaurant" when they should also have "Pizza Restaurant," "Catering Service," and "Event Venue."

**The fix:** Add every category that legitimately applies to your business. Don't add categories for services you don't actually offer -- that will hurt you. But if you offer it, claim it.

## Mistake #4: No Google Posts

Google Posts are updates you publish directly to your GBP. They appear in your profile and signal to Google (and AI) that your business is active and current.

**The problem:** Most businesses either don't know about Google Posts or publish one and forget about them. An inactive GBP sends a signal that the business may not be active.

**The fix:** Post at least once a week. Share promotions, events, tips, new services, or seasonal updates. Each post gives Google and AI systems fresh content about your business.

## Mistake #5: Few or No Photos

Google reports that businesses with photos receive 42% more requests for directions and 35% more clicks to their website. But many businesses have fewer than 10 photos -- or none at all.

**The problem:** Photos are a trust signal. AI platforms that pull GBP data factor in photo count and quality when evaluating business legitimacy and appeal. A business with 3 blurry photos looks less credible than one with 50 professional images.

**The fix:** Add at least 25-30 photos covering your storefront, interior, team, products or services, and happy customers (with permission). Update photos regularly -- at least monthly.

## Mistake #6: Ignoring Q&A

The Q&A section of your GBP is publicly visible and editable by anyone. That means customers (and competitors) can ask questions -- and anyone can answer them.

**The problem:** Many businesses don't monitor their Q&A section. This leads to unanswered questions (which looks bad) or incorrect answers posted by random people. AI platforms also read Q&A content, so inaccurate answers can affect what AI says about you.

**The fix:** Check your Q&A weekly. Answer every question promptly and accurately. Better yet, pre-populate it yourself: write 10 to 15 common questions and provide detailed answers. This gives AI models more factual content about your business.

## Mistake #7: Not Responding to Reviews

We see this constantly in audits: businesses with dozens of reviews and zero responses from the owner.

**The problem:** Responding to reviews signals that you care about customer experience. AI platforms factor in response patterns when evaluating business quality. A business that responds to every review -- especially negative ones -- looks more trustworthy than one that stays silent.

**The fix:** Respond to every review within 24 to 48 hours. Thank positive reviewers specifically (mention what they praised). For negative reviews, acknowledge the concern, explain how you're addressing it, and take the conversation offline if needed.

## The Compound Effect

None of these fixes alone will transform your business. But together, they create a compounding effect. A complete, active, well-maintained GBP sends strong signals across every platform -- Google Search, Google Maps, and the AI assistants that pull from Google's data.

## How a GBP Audit Helps

A professional GBP audit goes beyond these 7 common mistakes. Our Google Business Profile Audit examines every field, every signal, and every optimization opportunity in your profile. We compare your GBP against your top local competitors and deliver a prioritized list of exactly what to fix and why.

Every recommendation comes with clear instructions. No jargon. No guesswork. Just the specific changes that will improve your visibility in both traditional search and AI-powered recommendations.
`,
  },
  {
    slug: "why-online-reviews-matter-more-than-ever-for-ai-search",
    title: "Why Your Online Reviews Matter More Than Ever in the Age of AI Search",
    description:
      "AI platforms read your reviews to decide whether to recommend you. Star ratings are just the start -- here's what AI actually looks for in your review profile and how to improve it.",
    date: "2026-03-28",
    dateModified: "2026-03-28",
    author: "JoLyn Laney",
    readTime: "7 min read",
    category: "Reviews",
    keyTakeaways: [
      "AI reads the actual text of your reviews, not just star ratings, to form opinions about your business",
      "50+ reviews on Google is the minimum to be competitive for AI recommendations",
      "Detailed reviews mentioning specific services are far more valuable than generic 5-star reviews",
      "Respond to every review -- AI platforms interpret review responses as a positive trust signal",
    ],
    content: `
## AI Reads Your Reviews. All of Them.

When ChatGPT recommends a local business, it doesn't just check your star rating. It reads the actual text of your reviews -- what customers are saying, how they're saying it, and what themes come up repeatedly.

This is a fundamental shift from how reviews worked in the old Google search model. In traditional SEO, reviews contributed to your local pack ranking, but the actual content of the reviews was mostly for human eyes. Now, AI models parse review text to form opinions about your business, and those opinions directly determine whether you get recommended.

Understanding what AI looks for in reviews -- and optimizing for it -- is one of the highest-impact things a local business can do for AI visibility.

## What AI Looks for in Your Reviews

### Volume
More reviews mean more data for the AI to work with. A business with 200 reviews gives the AI much more confidence than one with 15. There's no magic number, but in most local industries, 50+ reviews on Google is the minimum to be competitive for AI recommendations.

### Recency
A flood of great reviews from 2023 followed by silence in 2025 and 2026 raises a flag. AI platforms weight recent reviews more heavily because they're a better indicator of current quality. A steady stream of new reviews -- even just 2 to 4 per month -- signals an active, healthy business.

### Sentiment and Specificity
AI doesn't just measure positive vs. negative. It reads the language. Reviews that mention specific services, outcomes, and experiences are far more valuable than generic "Great service!" reviews.

Compare these two reviews:
- *"Great dentist! Highly recommend!"*
- *"Dr. Martinez did my Invisalign treatment over 8 months and the results were amazing. The staff was always on time, explained everything clearly, and my insurance was handled without any issues."*

The second review gives AI specific, citable information: the doctor's name, a specific service (Invisalign), a timeframe, and multiple quality indicators. This is the kind of review that gets your business recommended.

### Consistency Across Platforms
AI models don't just look at Google reviews. They cross-reference Yelp, Facebook, industry-specific platforms (Healthgrades, Avvo, TripAdvisor, etc.), and others. If your Google reviews are great but your Yelp page has complaints, the AI sees the inconsistency.

### Owner Responses
When a business responds to reviews -- especially negative ones -- it signals accountability. AI platforms interpret review responses as a positive trust signal. Businesses that ignore all reviews appear less engaged.

## The Review Patterns That Hurt You

Even businesses with good star ratings can have review patterns that work against them in AI recommendations:

**Complaint clusters around specific issues.** If 8 out of your last 30 reviews mention long wait times, AI will pick up on that pattern and may mention it as a caveat or skip you entirely.

**Fake-looking review patterns.** A sudden burst of 20 five-star reviews in one week, all from accounts with no other review history, looks suspicious. AI models are trained to detect inauthentic patterns.

**No reviews on secondary platforms.** If you have 100 Google reviews but zero on Yelp and Facebook, you look less established across the web. AI prefers businesses with a presence across multiple credible sources.

**Outdated information in reviews.** If customers from 2024 mention services or features you've since changed, and no recent reviews reflect the update, AI may reference outdated information.

## How to Build a Review Profile AI Will Recommend

### 1. Ask at the Right Moment
The best time to ask for a review is right after a positive experience -- when the customer is happiest. Send a follow-up text or email within 24 hours with a direct link to your Google review page.

### 2. Make It Easy
Don't ask customers to "find you on Google and leave a review." Send them a direct link. Google provides a shortcut URL for every business -- use it.

### 3. Guide Without Scripting
You can't (and shouldn't) tell customers what to write. But you can say: "If you have a moment to leave a review, it really helps other people find us. Mentioning what service you came in for is especially helpful." This naturally encourages specific, detailed reviews.

### 4. Respond to Everything
Every review deserves a response. For positive reviews, be specific in your thanks -- reference what they mentioned. For negative reviews, acknowledge the concern, explain what you're doing about it, and offer to resolve it offline.

### 5. Diversify Your Platforms
Don't put all your eggs in Google's basket. Encourage some reviews on Yelp, Facebook, and any industry-specific platform relevant to your business. A broad review presence builds stronger AI trust signals.

### 6. Keep It Steady
Don't run a review campaign once and forget about it. Build review collection into your regular business operations so new reviews come in steadily month over month.

## What a Review Intelligence Audit Reveals

A professional review audit goes far beyond counting stars. Our Review Intelligence Audit analyzes:

- **Sentiment patterns** across all your reviews using AI-powered analysis
- **Keyword and theme extraction** -- what customers consistently praise or complain about
- **Competitor comparison** -- how your review profile stacks up against local competitors
- **Platform coverage gaps** -- where you're missing reviews that AI platforms check
- **Response rate analysis** -- how your engagement compares to industry standards
- **Specific language recommendations** -- review response templates optimized for AI signals

The audit identifies exactly what's working in your review profile, what's hurting you, and what to prioritize for the biggest improvement in AI recommendations.
`,
  },
  {
    slug: "ai-search-is-replacing-google-for-local-business-discovery",
    title: "AI Search Is Replacing Google for Local Business Discovery -- Here's What That Means",
    description:
      "The way people find local businesses is changing faster than most business owners realize. AI search is creating winners and losers, and most businesses don't even know they're in the game.",
    date: "2026-03-24",
    dateModified: "2026-04-01",
    author: "JoLyn Laney",
    readTime: "5 min read",
    category: "AI Visibility",
    keyTakeaways: [
      "44% of consumers now use AI chat as their primary search method vs. 31% who start with Google",
      "In AI search, if you're not in the top 3-5 recommendations, you get nothing -- there is no page 2",
      "AI rewards trust signals across multiple data sources over raw website traffic",
      "Most local businesses haven't optimized for AI search yet, creating a real first-mover opportunity",
    ],
    content: `
## The Numbers Don't Lie

The shift from traditional search to AI-powered search isn't theoretical. It's happening right now, and the data is clear:

- **Gartner predicts 25% of traditional search volume will decline by 2026** as users move to AI assistants
- **Google's AI Overviews now appear in over 50% of search results**, fundamentally changing how users interact with search
- **44% of consumers now use AI chat as their primary search method**, compared to 31% who start with Google
- **88% of consumers who search for a local business on mobile visit or call within 24 hours**

For local businesses, these numbers tell a story: the way customers find you is changing, and if you're not visible in the new channels, you're losing business you'll never know about.

## What Changed and Why

For 20 years, the path was simple: customer searches Google, clicks a result, visits your website (or your Google Business Profile), and contacts you. Businesses could optimize for this path with SEO, Google Ads, and local search best practices.

AI search works differently. The customer asks a question and gets a direct answer. There's no browsing. No comparing 10 results. The AI picks the winner and presents it.

This changes the competitive dynamics in three important ways:

### 1. Winner-Take-Most
In traditional search, being #4 on the page still gets you clicks. In AI search, if you're not in the AI's recommended list (usually 3 to 5 businesses), you get nothing. There's no page 2. There's no "next result." You're either in the answer or you're invisible.

### 2. Trust Over Traffic
Google rewarded websites that attracted the most backlinks and traffic. AI rewards businesses that appear trustworthy across multiple data sources -- reviews, directories, website content, brand mentions. A business with a mediocre website but excellent reviews and consistent directory listings can outperform a business with a great website but weak external signals.

### 3. Content Clarity Matters
AI models need to extract factual information from your online presence. Vague marketing language ("We deliver results!") gives the AI nothing to work with. Clear, specific statements ("We've served over 2,000 families in the Henderson area since 2008") give the AI exactly what it needs to make a recommendation.

## Who's Winning Right Now

The businesses currently winning in AI search share common traits:

- **Strong review profiles** -- 50+ reviews on Google, 4.5+ average, with recent reviews
- **Complete Google Business Profiles** -- every field filled, correct categories, regular posts
- **Clear website content** -- specific service pages, FAQ sections, location-specific information
- **Consistent citations** -- same NAP (name, address, phone) across every directory and platform
- **Structured data** -- schema markup that helps AI extract business information accurately
- **Authority signals** -- mentions on local news sites, industry directories, partner websites

Most of these aren't expensive or technically difficult. They just require knowing what to optimize and doing it consistently.

## Who's Losing

The businesses losing in AI search typically fall into one pattern: they relied on one channel (usually Google Ads or word-of-mouth) and neglected their broader digital presence.

If your Google Business Profile hasn't been updated in months, your website doesn't mention your location or services clearly, you have fewer than 20 reviews, and you're not listed in relevant directories -- AI has no reason to recommend you. And increasingly, it won't.

## What to Do About It

The good news: you're not too late. AI search is still early enough that most local businesses haven't optimized for it. That means there's a real opportunity to get ahead of your competitors.

Here's where to start:

1. **Test your current visibility.** Ask ChatGPT, Perplexity, and Google AI the questions your customers ask. See who gets recommended.
2. **Fix your Google Business Profile.** Complete every field, update your categories, and start posting regularly.
3. **Get more reviews.** Build a simple system for asking every customer for a review after a positive experience.
4. **Clean up your website.** Make sure it clearly states what you do, where you do it, and why you're the right choice.
5. **Check your directory listings.** Ensure your business information is consistent across Google, Yelp, Facebook, Apple Maps, and any industry-specific directories.

Or, if you want to skip the guesswork: get a professional AI Visibility Audit that tests everything, benchmarks you against competitors, and gives you a prioritized action plan.

The businesses that act now will have a significant head start. The ones that wait will find a much harder hill to climb.
`,
  },
  {
    slug: "schema-markup-for-local-businesses-what-you-need-to-know",
    title: "Schema Markup for Local Businesses: What It Is and Why AI Needs It",
    description:
      "Schema markup helps AI understand your business. Without it, you're making AI guess who you are, what you do, and where you're located. Here's a plain-English guide to what matters.",
    date: "2026-03-22",
    dateModified: "2026-03-22",
    author: "JoLyn Laney",
    readTime: "6 min read",
    category: "Technical SEO",
    keyTakeaways: [
      "Schema markup is invisible code that tells AI exactly what your business is, does, and where it's located",
      "The most impactful schema types for local businesses are LocalBusiness, Service, FAQ, and AggregateRating",
      "Without schema markup, AI has to guess your business details -- and it often gets them wrong or skips you",
      "Most local businesses don't have comprehensive schema, creating a competitive advantage for those who do",
    ],
    content: `
## Speaking the AI's Language

When a human visits your website, they can quickly understand what your business does by reading your homepage, looking at your photos, and browsing your services page. They use context and common sense.

AI doesn't work that way. AI models parse your website's code and content to extract structured information. And while they're getting better at understanding unstructured text, they work best when you give them data in a format they're designed to read.

That format is **schema markup** -- a standardized vocabulary that tells search engines and AI models exactly what your business is, what you do, and where you're located.

## What Schema Markup Actually Is

Schema markup (also called structured data) is a set of tags you add to your website's code. These tags don't change how your site looks to visitors -- they're invisible on the page. But they communicate directly with Google, Bing, ChatGPT, Perplexity, and every other AI system that reads your site.

Think of it as a machine-readable business card embedded in your website. Instead of making the AI figure out from a paragraph of text that you're a dentist in Henderson who's been open since 2010, schema markup tells it directly:

- Business type: Dentist
- Location: Henderson, NV
- Founded: 2010
- Rating: 4.8 (based on 247 reviews)
- Services: General Dentistry, Cosmetic Dentistry, Invisalign, Dental Implants
- Hours: Monday-Friday 8am-5pm

## Why It Matters for AI Visibility

Without schema markup, AI has to infer this information from your website content. And it often gets it wrong or skips details entirely. With schema markup, you're giving AI platforms explicit, reliable data they can use confidently.

This matters for three reasons:

### 1. Accuracy
When AI recommends your business, the information it provides is more likely to be correct if it comes from your schema markup rather than extracted from a paragraph.

### 2. Completeness
Schema lets you communicate details that might not naturally appear in your website copy -- like specific service areas, accepted insurance providers, or languages spoken.

### 3. Competitive Advantage
Most local businesses don't have schema markup, or they have a bare minimum. Adding comprehensive schema gives AI more to work with when deciding between you and a competitor.

## The Schema Types That Matter Most for Local Businesses

You don't need to implement every schema type. Here are the ones that have the biggest impact on local business visibility:

### LocalBusiness (or a more specific subtype)
This is the foundation. It tells AI that you're a local business and includes your name, address, phone, hours, and other basic information. Use the most specific subtype available -- "Dentist" instead of "LocalBusiness," "ItalianRestaurant" instead of "Restaurant."

### Service
If you offer multiple services, each one should have its own schema entry. This helps AI understand exactly what you provide and match you to specific customer queries.

### Review / AggregateRating
This embeds your review data directly into your website's schema, making it easy for AI to access without having to check external platforms.

### FAQ
If you have an FAQ section on your site (and you should), FAQ schema makes each question and answer directly extractable by AI platforms. This is one of the highest-impact schema types for AI visibility because it provides ready-made answers to customer questions.

### Organization
This provides broader context about your business -- your founding date, social media profiles, logos, and other brand-level information.

### BreadcrumbList
This helps AI understand your site structure and navigate between your pages, which improves how confidently it can extract and cite information from your site.

## How to Check If You Have Schema Markup

The easiest way to check is Google's free Rich Results Test (search.google.com/test/rich-results). Enter your URL and it'll show you what schema Google can detect on your page.

If the result shows no structured data -- or only basic metadata -- you're leaving AI visibility on the table.

## Do I Need to Hire a Developer?

Not necessarily. Many website platforms (WordPress, Squarespace, Wix) have plugins or built-in tools for adding basic schema markup. For more comprehensive schema implementation, a web developer or technical SEO specialist can help.

The key is getting it right. Incorrect schema markup can actually hurt you -- if you claim to be a 5-star restaurant when Google shows you at 3.8 stars, that inconsistency is a negative signal.

## How a Technical SEO Audit Helps

Our Technical SEO Audit examines your existing schema markup, identifies gaps, validates what's there for accuracy, and provides ready-to-implement schema code for your developer. We check not just whether schema exists, but whether it's comprehensive enough to give AI models everything they need to recommend you confidently.

Schema markup is one piece of the puzzle. Combined with clean website structure, fast page speed, proper indexing, and AI-friendly content, it creates the technical foundation that makes all your other optimization efforts more effective.
`,
  },
  {
    slug: "complete-guide-to-ai-visibility-for-local-businesses",
    title: "The Complete Guide to AI Visibility for Local Businesses in 2026",
    description:
      "Everything a local business owner needs to know about AI visibility in one place. What it is, why it matters, and the step-by-step playbook to get your business recommended by AI.",
    date: "2026-03-20",
    dateModified: "2026-04-03",
    author: "JoLyn Laney",
    readTime: "10 min read",
    category: "AI Visibility",
    keyTakeaways: [
      "AI visibility is whether your business appears when someone asks an AI assistant for a recommendation",
      "The 6 pillars: Google Business Profile, online reviews, website content, schema markup, citation consistency, and brand authority",
      "Start with foundation work (GBP, NAP consistency, reviews) before moving to content and technical optimization",
      "Test your AI visibility monthly by running the same queries across ChatGPT, Perplexity, and Google AI",
    ],
    content: `
## What Is AI Visibility?

AI visibility is whether your business appears when someone asks an AI assistant for a recommendation.

When a customer opens ChatGPT and asks "who's the best family dentist in Henderson," or when Google's AI Overview generates an answer to "top-rated HVAC companies near me," your AI visibility determines whether your business is in that answer.

It's the new version of "being on page one of Google" -- except the stakes are higher because AI search gives fewer results and the recommendation carries more weight.

## Why It Matters for Local Businesses

Local businesses are the most affected by the AI search shift because local recommendations are one of the most common use cases for AI assistants.

People ask AI for restaurant suggestions, contractor referrals, doctor recommendations, and service comparisons constantly. And unlike Google search where users might click through multiple results, AI search typically names 3 to 5 businesses and moves on.

If you're not in that short list, you don't exist to that customer.

## The 6 Pillars of AI Visibility

After auditing hundreds of local businesses, we've identified six factors that determine whether AI recommends your business. Think of them as the six pillars that hold up your AI visibility:

### Pillar 1: Google Business Profile

Your GBP is the single most important asset for local AI visibility. AI platforms pull data from Google's ecosystem first, and your GBP is the primary source.

**What matters:**
- Correct primary and secondary categories
- Complete business description using all 750 characters
- Accurate hours, phone, address, and website URL
- Regular Google Posts (at least weekly)
- 25+ photos covering your business, team, and services
- Active Q&A section with owner-provided answers
- All available attributes filled out

### Pillar 2: Online Reviews

Reviews are the strongest trust signal AI models use for local recommendations. Volume, recency, sentiment, and specificity all matter.

**What matters:**
- 50+ reviews on Google (more is better)
- 4.5+ star average
- Steady flow of new reviews (not just a one-time burst)
- Detailed reviews that mention specific services
- Owner responses to every review
- Reviews on secondary platforms (Yelp, Facebook, industry-specific)

### Pillar 3: Website Content

Your website needs to clearly communicate what you do, where you do it, and why you're the best choice -- in language that AI can easily extract and cite.

**What matters:**
- Clear, specific homepage with service and location information
- Dedicated pages for each core service
- FAQ section answering common customer questions
- Your NAP (name, address, phone) on every page
- Specific, factual claims rather than vague marketing language
- Fresh content (blog posts, updates, case studies)

### Pillar 4: Structured Data (Schema Markup)

Schema markup tells AI exactly what your business is in a machine-readable format. Without it, AI has to guess.

**What matters:**
- LocalBusiness schema (or specific subtype) on your homepage
- Service schema for each service you offer
- FAQ schema on your FAQ page
- Review/AggregateRating schema
- Organization schema with social links and founding information
- BreadcrumbList for site navigation

### Pillar 5: Citation Consistency

Your business information needs to be identical across every platform where you're listed. Inconsistencies confuse AI and reduce trust.

**What matters:**
- Identical NAP across Google, Yelp, Facebook, Apple Maps, Bing
- Consistent business name (including or excluding "LLC," "Inc.," etc.)
- Same categories and descriptions where possible
- Active profiles on all major platforms (not just Google)
- Listings in industry-specific directories

### Pillar 6: Authority and Brand Mentions

AI models trust businesses that are mentioned by credible third-party sources. The more places that independently reference your business, the more confident AI is in recommending you.

**What matters:**
- Mentions on local news sites or community blogs
- Listings in industry associations and directories
- Partner or vendor pages that link to or mention your business
- Social media presence with real engagement
- Any press coverage or features

## The AI Visibility Playbook: Where to Start

If you're starting from scratch, here's the order we recommend:

**Week 1-2: Foundation**
1. Complete your Google Business Profile -- every field, every detail
2. Check your NAP consistency across the top 10 platforms
3. Set up a review collection process for new customers

**Week 3-4: Content**
4. Update your homepage with clear service and location language
5. Create or improve dedicated service pages
6. Add an FAQ section to your website
7. Start writing Google Posts (2 per week)

**Week 5-6: Technical**
8. Add or improve schema markup on your website
9. Check your site speed and fix any critical issues
10. Ensure your site is mobile-friendly

**Week 7-8: Authority**
11. Submit your business to relevant industry directories
12. Reach out to local news or community organizations for features
13. Ask partners and vendors to add you to their websites

**Ongoing:**
- Respond to every review within 48 hours
- Publish Google Posts weekly
- Add new photos monthly
- Update your website content quarterly
- Test your AI visibility monthly (ask the AI platforms about your services)

## How to Measure Progress

AI visibility isn't like SEO where you can track rankings daily. But there are ways to measure improvement:

- **Monthly AI testing:** Run the same queries across ChatGPT, Perplexity, and Google AI each month and track whether you appear
- **Review metrics:** Track total reviews, average rating, and new reviews per month
- **GBP insights:** Monitor views, searches, calls, and direction requests
- **Website traffic:** Track organic traffic trends, especially from AI-referred sources
- **Customer surveys:** Ask new customers how they found you -- "AI recommendation" is becoming a more common answer

## Getting Professional Help

This guide gives you the roadmap, but implementing everything takes time and expertise. If you'd rather have it done professionally:

- **AI Visibility Audit ($297):** Tests your current visibility across all AI platforms and gives you a prioritized action plan
- **Review Intelligence Audit ($197):** Deep analysis of your review profile across all platforms with specific improvement recommendations
- **GBP Audit ($197):** Comprehensive audit of your Google Business Profile against competitors
- **Full Digital Visibility Bundle ($597):** All three audits together at a significant discount

Every audit delivers a clear, plain-English report with specific actions ranked by impact. No jargon. No fluff. Just what's broken and how to fix it.

## The Bottom Line

AI visibility isn't optional anymore. It's not a future trend -- it's happening right now. The businesses that optimize for AI search today will dominate their local markets for years to come. The ones that wait will find themselves invisible to a growing share of their potential customers.

The first step is understanding where you stand. Everything else follows from there.
`,
  },
  {
    slug: "how-to-check-if-your-business-shows-up-in-chatgpt",
    title: "How to Check If Your Business Shows Up in ChatGPT",
    description:
      "Millions of people now ask ChatGPT for local recommendations instead of Googling. Here's how to check whether your business is being recommended — and what to do if it's not.",
    date: "2026-03-26",
    dateModified: "2026-04-01",
    author: "JoLyn Laney",
    readTime: "6 min read",
    category: "AI Visibility",
    keyTakeaways: [
      "Test your AI visibility by asking ChatGPT, Perplexity, and Google AI the questions your customers ask",
      "If you don't show up, it's usually thin online footprint, weak reviews, unstructured website, or incomplete GBP",
      "A manual check gives you a snapshot, but a structured audit reveals the why and the fix",
      "AI search runs parallel to Google -- businesses visible in both channels have a compounding advantage",
    ],
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
