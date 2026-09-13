import { images } from "@/assets/images";
import type { HubPage } from "@/content/types";

export const advertisingHub: HubPage = {
  slug: "advertising",
  navLabel: "Advertising",
  order: 1,
  priority: "P0",
  h1: "Advertising Agency on Koh Phangan",
  primaryKeyword: "advertising services Koh Phangan",
  metaTitle: "Advertising Agency Koh Phangan | Google & Meta Ads",
  metaDescription:
    "CreativeLAB runs Google Ads, Meta Ads and full campaign launches for businesses on Koh Phangan — strategy, creative and tracking in one team.",
  directAnswer:
    "CreativeLAB is an advertising agency on Koh Phangan running Google Ads, Meta Ads and complete campaign launches for villas, restaurants, hospitality brands and local businesses. We handle strategy, creative, tracking and ongoing optimization, so you get a working campaign — not just a set of ads.",
  heroSupport:
    "Google Ads, Meta Ads, campaign launch and performance marketing for island businesses that need bookings, not just impressions.",
  heroImage: images.studio,
  heroImageAlt: "Creative team planning an advertising campaign on Koh Phangan",
  editorialTitle: "Advertising that understands the island market",
  editorialBody: [
    "Generic ad agencies run the same playbook everywhere. Koh Phangan has its own seasonality, booking patterns and customer mix — from Full Moon Party traffic to long-stay expats house-hunting for a villa.",
    "We build campaigns around how people actually search for and book things on the island: mobile-first, often last-minute, often comparing a handful of options in one sitting. That shapes keyword strategy, ad creative and landing page structure alike.",
  ],
  faqs: [
    {
      q: "Do you manage the ad accounts, or just design the creative?",
      a: "Both. We set up or take over your Google Ads and Meta Ads accounts, write and design the creative, configure tracking, and manage the budget week to week.",
    },
    {
      q: "What budget do I need to start?",
      a: "It depends on the platform and goal, but most Koh Phangan businesses see a workable test budget starting from a few hundred dollars a month. We'll recommend a realistic number once we know your goals.",
    },
    {
      q: "Can you advertise in Thai, Russian and English at the same time?",
      a: "Yes — we build multilingual campaigns and route each audience to a landing page in their own language rather than a generic translated page.",
    },
    {
      q: "Do you also build the landing page the ads point to?",
      a: "Yes, through our Websites & Digital team — message-matched landing pages convert noticeably better than sending traffic to a generic homepage.",
    },
    {
      q: "How do you report results?",
      a: "You get regular reporting on spend, leads/bookings and cost per result, in plain language rather than a wall of platform metrics.",
    },
    {
      q: "Can you take over an existing ad account that's underperforming?",
      a: "Yes — we regularly audit and rebuild campaigns that were set up but never properly optimized.",
    },
  ],
  finalCtaLabel: "Start a Project",
  services: [
    {
      slug: "google-ads",
      hubSlug: "advertising",
      navLabel: "Google Ads",
      h1: "Google Ads Agency on Koh Phangan",
      primaryKeyword: "Google Ads agency Koh Phangan",
      secondaryTopics: ["Google advertising", "PPC", "search ads", "local PPC"],
      metaTitle: "Google Ads Agency Koh Phangan | Search & Local PPC",
      metaDescription:
        "Google Ads management for Koh Phangan businesses — strategy, campaign setup, conversion tracking and ongoing optimization from a local team.",
      directAnswer:
        "We plan, build and manage Google Ads campaigns for businesses on Koh Phangan — search, local and Google Maps ads that put you in front of people actively searching for what you offer, with conversion tracking so you know exactly what each lead costs.",
      heroSupport:
        "Search ads, local campaigns and conversion tracking built around how people actually search for services on Koh Phangan.",
      heroImage: images.studio,
      heroImageAlt: "Marketer reviewing Google Ads campaign performance",
      scope: [
        {
          title: "Account setup & strategy",
          description:
            "Keyword research, campaign structure and budget planning matched to your booking cycle.",
        },
        {
          title: "Search & local campaigns",
          description:
            "Search ads, Google Maps promoted listings, and local service ads where eligible.",
        },
        {
          title: "Conversion tracking",
          description:
            "Call tracking, form tracking and booking-event tracking so results are measurable, not guessed.",
        },
        {
          title: "Ad creative & extensions",
          description:
            "Headlines, descriptions, sitelinks and assets written for an island audience, not a generic template.",
        },
        {
          title: "Ongoing optimization",
          description:
            "Bid, budget and keyword adjustments based on real performance data, reported on a regular cadence.",
        },
      ],
      benefits: [
        {
          title: "Leads while you sleep",
          description:
            "Search ads reach travellers and locals actively looking for your service, at the moment they're looking.",
        },
        {
          title: "Spend where it works",
          description:
            "Conversion tracking shows which keywords and locations actually produce bookings, not just clicks.",
        },
        {
          title: "No wasted budget on tourists browsing",
          description:
            "Location, language and intent targeting keep spend focused on people likely to convert.",
        },
        {
          title: "One team for ads and landing pages",
          description:
            "Because we also build websites, your ads and landing page stay message-matched.",
        },
      ],
      process: [
        {
          title: "Audit or discovery",
          description:
            "We review any existing account, or start from your goals, competitors and budget.",
        },
        {
          title: "Campaign build",
          description:
            "Keyword research, ad groups, creative and tracking are set up before anything goes live.",
        },
        {
          title: "Launch",
          description: "Campaigns go live with a conservative test budget to gather data safely.",
        },
        {
          title: "Optimize & report",
          description:
            "We adjust based on real results and send you regular, plain-language reporting.",
        },
      ],
      pricing: [
        {
          service: "Google Ads setup (new account)",
          range: "THB 15,000 – 35,000",
          note: "One-time — strategy, structure, tracking setup",
        },
        {
          service: "Monthly management",
          range: "THB 12,000 – 30,000",
          note: "Excludes ad spend, billed directly to Google",
        },
        {
          service: "Campaign audit (existing account)",
          range: "THB 6,000 – 12,000",
          note: "One-time review with a written action plan",
        },
      ],
      useCases: [
        {
          title: "Villa owners",
          description: "Capture high-intent search traffic during booking season.",
        },
        {
          title: "Restaurants",
          description: "Drive reservations and delivery orders for a specific menu or offer.",
        },
        {
          title: "Service businesses",
          description: "Appear for 'near me' and service-specific searches across the island.",
        },
      ],
      faqs: [
        {
          q: "How fast can Google Ads start bringing in leads?",
          a: "Campaigns can go live within a few days of approval; meaningful data usually builds over the first 2–4 weeks as we optimize.",
        },
        {
          q: "Do I need a website to run Google Ads?",
          a: "Yes, at minimum a landing page. We can build one as part of the project if you don't have one that converts well.",
        },
        {
          q: "What's the difference between Google Ads and Local SEO?",
          a: "Google Ads is paid, immediate visibility; Local SEO (Google Business Profile, Maps ranking) is organic and compounds over time. Most businesses benefit from both.",
        },
        {
          q: "Can you target specific areas of Koh Phangan?",
          a: "Yes — campaigns can be geo-targeted down to specific radii around Thong Sala, Srithanu, Haad Rin or wherever your customers are.",
        },
        {
          q: "Will I own the ad account?",
          a: "Yes — the account is created under your business's Google Ads login, so you retain full ownership and history.",
        },
        {
          q: "How is performance reported?",
          a: "A recurring report covering spend, clicks, conversions and cost per lead, plus a short written summary of what changed and why.",
        },
      ],
      related: [
        {
          label: "Meta Ads",
          href: "/advertising/meta-ads",
          description: "Add Facebook and Instagram advertising alongside search.",
        },
        {
          label: "Landing Pages",
          href: "/websites-digital/landing-pages",
          description: "A message-matched page for your ad traffic to land on.",
        },
        {
          label: "Performance Marketing",
          href: "/advertising/performance",
          description: "Ongoing measurement and optimization across every channel.",
        },
      ],
      finalCtaLabel: "Request a Quote",
    },
    {
      slug: "meta-ads",
      hubSlug: "advertising",
      navLabel: "Meta Ads",
      h1: "Meta Ads Agency on Koh Phangan",
      primaryKeyword: "Meta Ads agency Koh Phangan",
      secondaryTopics: ["Facebook ads", "Instagram ads", "social advertising"],
      metaTitle: "Meta Ads Agency Koh Phangan | Facebook & Instagram Ads",
      metaDescription:
        "Facebook and Instagram advertising for Koh Phangan businesses — creative, audience targeting, retargeting and optimization from a local team.",
      directAnswer:
        "We plan, design and run Facebook and Instagram advertising campaigns for businesses on Koh Phangan — from awareness campaigns that build a following to retargeting campaigns that turn website visitors into bookings.",
      heroSupport:
        "Facebook and Instagram campaigns with creative built for scroll-stopping attention and island-specific targeting.",
      heroImage: images.social,
      heroImageAlt: "Reviewing Meta Ads creative on a phone and laptop",
      scope: [
        {
          title: "Campaign strategy",
          description:
            "Objective selection (awareness, traffic, leads, sales) matched to your business stage.",
        },
        {
          title: "Ad creative",
          description:
            "Static, carousel and video ad formats designed specifically for Meta's placements.",
        },
        {
          title: "Audience targeting",
          description:
            "Interest, location and lookalike targeting built around your actual customer profile.",
        },
        {
          title: "Retargeting",
          description:
            "Campaigns that re-engage people who visited your site or engaged with your content but didn't convert.",
        },
        {
          title: "Optimization & reporting",
          description: "Ongoing testing of creative and audiences, with regular performance reports.",
        },
      ],
      benefits: [
        {
          title: "Reach people before they search",
          description:
            "Meta advertising builds demand with travellers and locals who aren't yet actively searching.",
        },
        {
          title: "Visual-first format fits your work",
          description:
            "Photography and video-led creative plays to CreativeLAB's production strengths.",
        },
        {
          title: "Precise local targeting",
          description:
            "Reach specific areas of Koh Phangan, expat communities, or travellers currently on the island.",
        },
        {
          title: "Retarget warm traffic",
          description: "Bring back visitors who almost booked, at a much lower cost than cold traffic.",
        },
      ],
      process: [
        { title: "Strategy", description: "Define the objective, audience and offer for the campaign." },
        {
          title: "Creative production",
          description: "Photography, video or design assets built for the Meta ad formats you'll run.",
        },
        { title: "Launch & test", description: "Multiple creative and audience variants tested against each other." },
        { title: "Scale what works", description: "Budget shifts toward the best-performing combinations, with regular reporting." },
      ],
      pricing: [
        {
          service: "Meta Ads setup",
          range: "THB 12,000 – 28,000",
          note: "One-time — strategy, account structure, pixel/tracking setup",
        },
        {
          service: "Monthly management",
          range: "THB 10,000 – 25,000",
          note: "Excludes ad spend, billed directly to Meta",
        },
        {
          service: "Ad creative pack (5 assets)",
          range: "THB 6,000 – 15,000",
          note: "Static or short-form video, platform-ready",
        },
      ],
      useCases: [
        { title: "Restaurants & bars", description: "Promote events, offers and menu launches to a local audience." },
        { title: "Villas & real estate", description: "Retarget property page visitors with booking or inquiry offers." },
        { title: "Service & wellness brands", description: "Build an audience of interested locals and long-stay travellers." },
      ],
      faqs: [
        {
          q: "Do you write and design the ad creative, or do I need to supply it?",
          a: "We produce it — from photography and video through to copywriting — as part of the service.",
        },
        {
          q: "Instagram or Facebook — which should I run ads on?",
          a: "Usually both, through one Meta campaign; we adjust the split based on where your audience actually is.",
        },
        {
          q: "What's retargeting and do I need it?",
          a: "It's advertising to people who already visited your site or profile. It's usually the highest-return part of a Meta campaign once you have enough traffic.",
        },
        {
          q: "How much creative do I need before launching?",
          a: "We typically start with 3–5 ad variants to test, then double down on what performs.",
        },
        {
          q: "Can this work alongside my organic Instagram content?",
          a: "Yes — paid and organic reinforce each other, and our Social Media team can run both together.",
        },
        {
          q: "How do you measure success?",
          a: "Against the objective we agreed — leads, bookings, traffic or engagement — reported on a regular schedule.",
        },
      ],
      related: [
        { label: "Google Ads", href: "/advertising/google-ads", description: "Capture active search demand alongside social." },
        { label: "Content Creation", href: "/social-media/content-creation", description: "Photo and video assets built for ad creative." },
        { label: "Instagram Management", href: "/social-media/instagram-management", description: "Combine paid campaigns with organic account growth." },
      ],
      finalCtaLabel: "Request a Quote",
    },
    {
      slug: "campaign-launch",
      hubSlug: "advertising",
      navLabel: "Campaign Launch",
      h1: "Advertising Campaign Launch on Koh Phangan",
      primaryKeyword: "advertising campaign Koh Phangan",
      secondaryTopics: ["campaign strategy", "launch", "tracking"],
      metaTitle: "Advertising Campaign Launch Koh Phangan",
      metaDescription:
        "Full campaign launch for Koh Phangan businesses — brief, audience definition, creative production, media setup and measurement in one project.",
      directAnswer:
        "We take a new product, offer or business launch from brief to live advertising campaign — defining the audience, producing the creative, setting up media buying across the right platforms, and putting measurement in place from day one.",
      heroSupport:
        "A single project to plan, produce and launch a new advertising campaign end to end.",
      heroImage: images.team,
      heroImageAlt: "Team planning a campaign launch on a whiteboard",
      scope: [
        { title: "Brief & goal-setting", description: "Clarify what the campaign needs to achieve and by when." },
        { title: "Audience definition", description: "Who you're speaking to, and on which platforms they actually are." },
        { title: "Creative production", description: "Photography, video, copy and design built specifically for this launch." },
        { title: "Media setup", description: "Accounts, budgets and platform configuration for Google, Meta or both." },
        { title: "Measurement", description: "Tracking in place before launch, not added afterward." },
      ],
      benefits: [
        { title: "One coordinated launch", description: "Strategy, creative and media come from a single team, not three vendors." },
        { title: "Nothing shipped untracked", description: "Measurement is built in from day one, so you can judge results with confidence." },
        { title: "Faster time to live", description: "A defined project scope means a clear launch date, not an open-ended retainer." },
        { title: "Built for Koh Phangan's market", description: "Local seasonality and customer behavior shape the plan from the start." },
      ],
      process: [
        { title: "Discovery", description: "Understand the offer, audience and timeline." },
        { title: "Plan", description: "Channel mix, budget allocation and creative direction are agreed before production starts." },
        { title: "Produce", description: "Creative assets are shot, filmed, written and designed." },
        { title: "Launch & monitor", description: "Campaign goes live with tracking active and an early-optimization window." },
      ],
      pricing: [
        {
          service: "Campaign launch (single platform)",
          range: "THB 25,000 – 55,000",
          note: "Strategy, one platform's creative and setup",
        },
        {
          service: "Campaign launch (multi-platform)",
          range: "THB 45,000 – 95,000",
          note: "Google + Meta, coordinated creative and tracking",
        },
      ],
      useCases: [
        { title: "New business opening", description: "A coordinated launch campaign for a new restaurant, shop or service." },
        { title: "Seasonal offer", description: "A time-boxed campaign around a specific promotion or event." },
        { title: "New property listing", description: "Launch advertising for a villa or development coming to market." },
      ],
      faqs: [
        {
          q: "How long does a campaign launch take to plan and produce?",
          a: "Typically 2–4 weeks from brief to going live, depending on how much creative production is involved.",
        },
        {
          q: "Do you handle ongoing management after launch, or just the launch itself?",
          a: "Either — some clients move into an ongoing Performance Marketing or monthly retainer after launch, others just need the initial push.",
        },
        {
          q: "Which platforms do you recommend?",
          a: "It depends on your audience and goal; we'll recommend a mix rather than defaulting to whichever platform is easiest for us.",
        },
        {
          q: "Can this include a landing page?",
          a: "Yes, through our Websites & Digital team, as part of the same project timeline.",
        },
        {
          q: "What do you need from me to start?",
          a: "Your goals, timeline, budget range and any existing brand assets — we can produce the rest.",
        },
        {
          q: "Is there a minimum budget for a campaign launch?",
          a: "We scope each project individually; tell us your budget range and we'll advise what's realistic within it.",
        },
      ],
      related: [
        { label: "Google Ads", href: "/advertising/google-ads", description: "Search advertising as part of your launch mix." },
        { label: "Meta Ads", href: "/advertising/meta-ads", description: "Social advertising as part of your launch mix." },
        { label: "Performance Marketing", href: "/advertising/performance", description: "Ongoing optimization once the campaign is live." },
      ],
      finalCtaLabel: "Discuss Your Project",
    },
    {
      slug: "performance",
      hubSlug: "advertising",
      navLabel: "Performance Marketing",
      h1: "Performance Marketing on Koh Phangan",
      primaryKeyword: "performance marketing Koh Phangan",
      secondaryTopics: ["conversion optimization", "tracking", "ROAS"],
      metaTitle: "Performance Marketing Koh Phangan | Conversion Optimization",
      metaDescription:
        "Ongoing performance marketing for Koh Phangan businesses — measurement, testing, optimization and reporting across your advertising channels.",
      directAnswer:
        "Performance marketing is the ongoing discipline of measuring, testing and improving your advertising results over time — we manage tracking, run structured tests, and optimize spend across Google, Meta and your website so results improve month over month rather than plateauing after launch.",
      heroSupport:
        "Continuous measurement, testing and optimization across your advertising channels — not a one-off campaign.",
      heroImage: images.studio,
      heroImageAlt: "Analyst reviewing performance marketing dashboards",
      scope: [
        { title: "Measurement setup", description: "Analytics, conversion tracking and reporting dashboards kept accurate over time." },
        { title: "Structured testing", description: "Creative, audience and landing page tests run on a regular cadence." },
        { title: "Budget optimization", description: "Spend shifted toward the channels and campaigns producing real results." },
        { title: "Cross-channel reporting", description: "One clear view across Google Ads, Meta Ads and your website." },
      ],
      benefits: [
        { title: "Results that compound", description: "Ongoing testing means performance improves month over month instead of flatlining." },
        { title: "Spend accountability", description: "You always know what a lead or booking actually costs you." },
        { title: "No platform silos", description: "Decisions are made looking at the whole funnel, not one channel in isolation." },
        { title: "Plain-language reporting", description: "Reports focused on business outcomes, not vanity metrics." },
      ],
      process: [
        { title: "Audit", description: "Review current tracking, campaigns and reporting for gaps." },
        { title: "Roadmap", description: "Agree a testing and optimization plan for the coming months." },
        { title: "Execute", description: "Tests run continuously across creative, audiences, budgets and landing pages." },
        { title: "Report & refine", description: "Regular reporting drives the next round of decisions." },
      ],
      pricing: [
        {
          service: "Performance marketing retainer",
          range: "THB 20,000 – 50,000 / month",
          note: "Cross-channel management, excludes ad spend",
        },
        {
          service: "Tracking & analytics audit",
          range: "THB 8,000 – 15,000",
          note: "One-time — identifies measurement gaps",
        },
      ],
      useCases: [
        { title: "Established advertisers", description: "Businesses already running ads who want better results from the same spend." },
        { title: "Multi-location businesses", description: "Coordinating advertising performance across several Koh Phangan locations." },
        { title: "Seasonal operators", description: "Adjusting spend and creative as demand shifts through the year." },
      ],
      faqs: [
        {
          q: "How is this different from just running Google or Meta Ads?",
          a: "Google Ads and Meta Ads services set up and run individual channels; performance marketing manages measurement and optimization across all of them together, continuously.",
        },
        {
          q: "Do I need to already be advertising to start this?",
          a: "It helps, since there's existing data to work from, but we can also set up tracking from scratch.",
        },
        {
          q: "What counts as a 'test' in this context?",
          a: "Anything from a new ad creative variant to a different landing page headline — run in parallel and measured against the current version.",
        },
        {
          q: "How often will I hear from you?",
          a: "Regular reporting on an agreed schedule, plus proactive updates when a test produces a clear result.",
        },
        {
          q: "Can you work alongside our in-house marketing person?",
          a: "Yes — we regularly work as the analytics/optimization layer supporting an in-house team.",
        },
        {
          q: "What tools do you use for tracking?",
          a: "Standard, privacy-conscious analytics and conversion tracking setups — no unsupported or invented tracking IDs.",
        },
      ],
      related: [
        { label: "Google Ads", href: "/advertising/google-ads", description: "One of the channels performance marketing optimizes." },
        { label: "Meta Ads", href: "/advertising/meta-ads", description: "One of the channels performance marketing optimizes." },
        { label: "Technical SEO", href: "/websites-digital/technical-seo", description: "Site-side performance that affects conversion rates." },
      ],
      finalCtaLabel: "Discuss Your Project",
    },
  ],
};
