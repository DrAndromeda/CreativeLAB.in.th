import { images } from "@/assets/images";
import type { HubPage } from "@/content/types";

export const socialMediaHub: HubPage = {
  slug: "social-media",
  navLabel: "Social Media",
  order: 2,
  priority: "P0",
  h1: "Social Media Agency on Koh Phangan",
  primaryKeyword: "social media agency Koh Phangan",
  metaTitle: "Social Media Agency Koh Phangan | Instagram & Content",
  metaDescription:
    "CreativeLAB manages Instagram accounts, produces content and Reels, and runs social strategy for businesses on Koh Phangan.",
  directAnswer:
    "CreativeLAB manages social media for businesses on Koh Phangan — Instagram account management, content production, Reels, influencer collaborations and monthly content packages, built around a strategy rather than posting for its own sake.",
  heroSupport:
    "Instagram management, content production, Reels and monthly packages for island businesses that want social media to actually convert.",
  heroImage: images.social,
  heroImageAlt: "Content creator filming a social media video on location",
  editorialTitle: "Social media that fits how people discover Koh Phangan",
  editorialBody: [
    "Most visitors and locals find villas, restaurants and experiences on Koh Phangan through Instagram and TikTok before they ever search Google. A weak or inconsistent account is a real cost, not a minor gap.",
    "We treat social media as production plus strategy: a consistent visual identity, a content calendar tied to your business goals, and formats — Reels, carousels, Stories — chosen because they work for your audience, not because they're trending.",
  ],
  faqs: [
    {
      q: "Do you only manage the account, or do you also create the content?",
      a: "Both — we can shoot and produce content, or work with content you already have, depending on the package.",
    },
    {
      q: "How many posts per month is typical?",
      a: "It depends on the package, but most active accounts post 3–5 times a week across feed and Stories, plus regular Reels.",
    },
    {
      q: "Can you manage TikTok as well as Instagram?",
      a: "Yes — our content production and short-form video work translates directly to TikTok when it's part of your strategy.",
    },
    {
      q: "Do you handle replying to comments and DMs?",
      a: "Community management can be included in monthly packages — we'll agree response expectations upfront.",
    },
    {
      q: "Will you use influencers to promote my business?",
      a: "Only where it fits your strategy and budget — we run this as a distinct service (Influencer Marketing) rather than bundling it by default.",
    },
    {
      q: "Can social media work alongside paid advertising?",
      a: "Yes — our Advertising team runs Meta Ads using the same content and brand voice for a consistent presence.",
    },
  ],
  finalCtaLabel: "Start a Project",
  services: [
    {
      slug: "instagram-management",
      hubSlug: "social-media",
      navLabel: "Instagram Management",
      h1: "Instagram Management on Koh Phangan",
      primaryKeyword: "Instagram management Koh Phangan",
      secondaryTopics: ["Instagram marketing", "account management"],
      metaTitle: "Instagram Management Koh Phangan | CreativeLAB",
      metaDescription:
        "Instagram account management for Koh Phangan businesses — content planning, publishing, community management and analytics.",
      directAnswer:
        "We manage Instagram accounts for Koh Phangan businesses end to end: planning a content calendar, publishing feed posts, Stories and Reels, engaging with your community, and reporting on what's actually growing the account.",
      heroSupport:
        "Planning, publishing and community management for an Instagram account that actually grows.",
      heroImage: images.social,
      heroImageAlt: "Phone screen showing an Instagram business profile",
      scope: [
        { title: "Content calendar", description: "A planned posting schedule tied to your business goals and seasonality." },
        { title: "Publishing", description: "Feed posts, Stories and Reels published on schedule across the month." },
        { title: "Community management", description: "Responding to comments and DMs in your brand voice." },
        { title: "Analytics & reporting", description: "Monthly reporting on growth, reach and engagement that matters." },
      ],
      benefits: [
        { title: "Consistent presence", description: "No more gaps of silence between posts that hurt momentum." },
        { title: "On-brand every time", description: "A consistent visual identity across every post, not ad hoc uploads." },
        { title: "Time back", description: "You stop having to plan and post yourself between running the business." },
        { title: "Data-informed adjustments", description: "Content decisions based on what your audience actually engages with." },
      ],
      process: [
        { title: "Audit", description: "Review your current account, audience and competitors." },
        { title: "Plan", description: "Build a content calendar and posting cadence." },
        { title: "Produce & publish", description: "Content is created or sourced and published on schedule." },
        { title: "Review", description: "Monthly check-in on performance and the plan for next month." },
      ],
      pricing: [
        { service: "Instagram management (light)", range: "THB 12,000 – 20,000 / month", note: "3 posts/week, Stories, basic reporting" },
        { service: "Instagram management (full)", range: "THB 22,000 – 40,000 / month", note: "5+ posts/week, Reels, community management" },
      ],
      useCases: [
        { title: "Restaurants & cafés", description: "Keep a consistent feed of dishes, events and offers." },
        { title: "Villas & accommodation", description: "Showcase the property and guest experience consistently." },
        { title: "Service businesses", description: "Build trust and visibility with a professional, active profile." },
      ],
      faqs: [
        { q: "Do I need to approve posts before they go live?", a: "Most clients review a monthly content calendar in advance rather than approving each individual post, but we can adjust the workflow to your preference." },
        { q: "What do you need from me to get started?", a: "Access to your Instagram business account, brand assets if you have them, and a short brief on your goals." },
        { q: "Can you grow my follower count?", a: "We focus on engagement and business outcomes over follower count alone — vanity growth without engagement rarely helps a business." },
        { q: "Do you provide the photography and video, or do I?", a: "We can produce it through our Content Creation service, or work with assets you already have." },
        { q: "How is success measured?", a: "Against agreed goals — reach, engagement, saves, DMs or website clicks — reported monthly." },
        { q: "Can I cancel or pause the service?", a: "Yes, management is billed monthly with no long-term lock-in required." },
      ],
      related: [
        { label: "Content Creation", href: "/social-media/content-creation", description: "Photo and video production for your feed." },
        { label: "Reels", href: "/social-media/reels", description: "Short-form video built for reach." },
        { label: "Monthly Packages", href: "/social-media/monthly-packages", description: "Bundle management with production at a fixed monthly rate." },
      ],
      finalCtaLabel: "Request a Quote",
    },
    {
      slug: "content-creation",
      hubSlug: "social-media",
      navLabel: "Content Creation",
      h1: "Social Content Creation on Koh Phangan",
      primaryKeyword: "content creation Koh Phangan",
      secondaryTopics: ["social content", "branded content"],
      metaTitle: "Content Creation Koh Phangan | Social Photo & Video",
      metaDescription:
        "Photo and video content production for social media — planned shoots, creative direction and platform-ready formats for Koh Phangan brands.",
      directAnswer:
        "We produce the photo and video content behind a strong social presence — planned shoots, creative direction and edits delivered in the formats each platform actually needs, from square feed posts to vertical Reels.",
      heroSupport:
        "Planned photo and video shoots that give you a month (or more) of platform-ready social content.",
      heroImage: images.photoshoot,
      heroImageAlt: "Content creator setting up a shot for a branded social post",
      scope: [
        { title: "Shoot planning", description: "A shot list built around your content calendar and goals." },
        { title: "Photography", description: "Product, lifestyle and behind-the-scenes photography." },
        { title: "Video production", description: "Short clips shot and edited specifically for social formats." },
        { title: "Creative direction", description: "Consistent visual style, color grading and framing across every asset." },
      ],
      benefits: [
        { title: "A content backlog", description: "One planned shoot day can supply weeks of posts, reducing scramble." },
        { title: "Consistent visual identity", description: "Every asset looks like it belongs to the same brand." },
        { title: "Formats that fit the platform", description: "Content is cut and cropped correctly for feed, Stories and Reels from the start." },
        { title: "Less time on your side", description: "You don't need to shoot content yourself between running the business." },
      ],
      process: [
        { title: "Brief", description: "Agree goals, themes and the shot list." },
        { title: "Shoot day", description: "On-location photography and video production." },
        { title: "Edit", description: "Selects, retouching and video editing across all formats needed." },
        { title: "Deliver", description: "Platform-ready files delivered, organized and ready to schedule." },
      ],
      pricing: [
        { service: "Half-day content shoot", range: "THB 10,000 – 20,000", note: "Photo + short video, edited" },
        { service: "Full-day content shoot", range: "THB 18,000 – 35,000", note: "Extended shot list, multiple setups" },
        { service: "Social media content pack (15 photos)", range: "THB 8,000 – 20,000", note: "Edited, ready to post" },
      ],
      useCases: [
        { title: "Restaurants", description: "A season's worth of dish, ambiance and event content." },
        { title: "Villas", description: "Lifestyle and property content for listings and social." },
        { title: "Retail & services", description: "Product and behind-the-scenes content that builds trust." },
      ],
      faqs: [
        { q: "How much content comes out of one shoot day?", a: "Typically enough for 2–4 weeks of consistent posting, depending on your posting frequency." },
        { q: "Do you supply models or talent?", a: "We can arrange this on request; otherwise content features your team, space or product directly." },
        { q: "Can you match my existing visual style?", a: "Yes — we'll review any existing content and match tone, color grading and framing." },
        { q: "Is video included, or is this photo-only?", a: "Both are available; most packages combine photo and short-form video in one shoot." },
        { q: "How quickly do I receive the final files?", a: "Typical turnaround is 3–7 business days depending on volume." },
        { q: "Do you handle the scheduling and posting too?", a: "That's covered by Instagram Management or Monthly Packages — Content Creation is the production itself." },
      ],
      related: [
        { label: "Instagram Management", href: "/social-media/instagram-management", description: "Publishing and community management for this content." },
        { label: "Reels", href: "/social-media/reels", description: "Short-form video, produced and edited for reach." },
        { label: "Food Photography", href: "/food-restaurants/food-photography", description: "Specialized photography if you run a restaurant." },
      ],
      finalCtaLabel: "Request a Quote",
    },
    {
      slug: "reels",
      hubSlug: "social-media",
      navLabel: "Reels",
      h1: "Instagram Reels Production on Koh Phangan",
      primaryKeyword: "Instagram Reels agency Koh Phangan",
      secondaryTopics: ["short-form video", "social video"],
      metaTitle: "Instagram Reels Agency Koh Phangan | Short-Form Video",
      metaDescription:
        "Reels concept, filming and editing for Koh Phangan businesses — short-form video built for reach on Instagram and TikTok.",
      directAnswer:
        "We concept, shoot and edit Instagram Reels for Koh Phangan businesses — short-form video built around hooks, pacing and trends that actually fit your brand, rather than generic templates.",
      heroSupport:
        "Concept, filming and editing for short-form video built to be watched, not scrolled past.",
      heroImage: images.video,
      heroImageAlt: "Vertical video being filmed for an Instagram Reel",
      scope: [
        { title: "Concept development", description: "Hooks and formats matched to your brand and audience." },
        { title: "Filming", description: "On-location vertical video production." },
        { title: "Editing", description: "Pacing, captions, sound and effects edited for retention." },
        { title: "Format variations", description: "Cutdowns adapted for TikTok and Stories where useful." },
      ],
      benefits: [
        { title: "Reach beyond your followers", description: "Reels are Instagram's main tool for reaching new audiences." },
        { title: "Higher engagement per post", description: "Well-made short video consistently outperforms static posts." },
        { title: "Repurposable across platforms", description: "The same production works for TikTok and Stories with light edits." },
        { title: "Trend-aware, brand-safe", description: "We use formats that fit your business rather than chasing every trend." },
      ],
      process: [
        { title: "Concept", description: "Agree the hook, structure and goal for each Reel." },
        { title: "Film", description: "On-location shooting, often batched across several Reels in one session." },
        { title: "Edit", description: "Cutting, captions, sound design and pacing." },
        { title: "Deliver & post", description: "Files delivered ready to post, or published directly if bundled with management." },
      ],
      pricing: [
        { service: "Single Reel (concept to delivery)", range: "THB 3,500 – 8,000", note: "Per finished video" },
        { service: "Reels batch (4 Reels)", range: "THB 12,000 – 25,000", note: "Filmed in one session, edited separately" },
      ],
      useCases: [
        { title: "Restaurants & bars", description: "Menu highlights, event recaps and atmosphere clips." },
        { title: "Villas & tours", description: "Walkthroughs and lifestyle clips that drive inquiries." },
        { title: "Wellness & activities", description: "Short, engaging clips showing the experience itself." },
      ],
      faqs: [
        { q: "How long should a Reel be?", a: "Usually 7–20 seconds for the strongest retention, longer only when the content genuinely earns it." },
        { q: "Do you write the concept, or do I provide ideas?", a: "We propose concepts based on what's working in your category, and welcome your input too." },
        { q: "Can you use trending audio?", a: "Yes, where it fits — we track relevant trends without forcing them onto unrelated content." },
        { q: "How many Reels should I post per week?", a: "Most active accounts benefit from 2–4 per week; we'll recommend a realistic cadence for your goals." },
        { q: "Do you appear on camera, or does my team?", a: "Usually your team, space or product — we can discuss on-camera talent if relevant." },
        { q: "Can Reels be used in paid ads too?", a: "Yes — strong-performing organic Reels often make effective Meta Ads creative." },
      ],
      related: [
        { label: "Content Creation", href: "/social-media/content-creation", description: "The broader photo and video production behind your content." },
        { label: "Social Video", href: "/video-production/social-video", description: "Longer-form social video production." },
        { label: "Meta Ads", href: "/advertising/meta-ads", description: "Turn strong Reels into paid creative." },
      ],
      finalCtaLabel: "Request a Quote",
    },
    {
      slug: "influencer-marketing",
      hubSlug: "social-media",
      navLabel: "Influencer Marketing",
      h1: "Influencer Marketing on Koh Phangan",
      primaryKeyword: "influencer marketing Koh Phangan",
      secondaryTopics: ["creator marketing", "collaborations"],
      metaTitle: "Influencer Marketing Koh Phangan | Creator Collaborations",
      metaDescription:
        "Influencer and creator collaborations for Koh Phangan businesses — selection, campaign management, content and tracking.",
      directAnswer:
        "We find and manage creator collaborations for Koh Phangan businesses — selecting the right local or travel creators, briefing the campaign, coordinating content, and tracking whether it actually drove bookings or visits.",
      heroSupport:
        "Creator selection, campaign coordination and tracking for collaborations that reach real, relevant audiences.",
      heroImage: images.social,
      heroImageAlt: "Content creator collaborating on a branded shoot",
      scope: [
        { title: "Creator selection", description: "Vetted local and travel creators matched to your audience, not just follower count." },
        { title: "Campaign brief", description: "Clear deliverables, messaging guardrails and timeline for each collaboration." },
        { title: "Coordination", description: "Managing logistics, content approval and posting schedule." },
        { title: "Tracking", description: "Measuring reach, engagement and, where possible, referral traffic or bookings." },
      ],
      benefits: [
        { title: "Authentic reach", description: "Creator content often earns trust that branded ads can't." },
        { title: "Access to niche audiences", description: "Reach specific traveller or local segments through the right creator." },
        { title: "Content you can reuse", description: "Collaboration content can be repurposed across your own channels with permission." },
        { title: "Managed, not ad hoc", description: "One coordinated campaign instead of scattered individual outreach." },
      ],
      process: [
        { title: "Define goals", description: "Clarify what the collaboration needs to achieve." },
        { title: "Shortlist creators", description: "Identify relevant creators matched to audience and budget." },
        { title: "Brief & coordinate", description: "Manage the brief, logistics and content approval." },
        { title: "Track results", description: "Report on reach, engagement and any measurable referral impact." },
      ],
      pricing: [
        { service: "Single creator collaboration", range: "THB 8,000 – 25,000", note: "Coordination fee, excludes creator fees/gifting" },
        { service: "Multi-creator campaign", range: "THB 20,000 – 50,000", note: "3–5 creators, coordinated campaign" },
      ],
      useCases: [
        { title: "New restaurant or venue openings", description: "Build initial buzz through a coordinated set of visits." },
        { title: "Villas & retreats", description: "Reach long-stay travellers through trusted creator recommendations." },
        { title: "Experience & activity providers", description: "Showcase the experience through authentic first-person content." },
      ],
      faqs: [
        { q: "Do you pay creators, or do I?", a: "Creator fees or gifting are typically paid directly by you; we manage the coordination and can advise on typical rates." },
        { q: "How do you choose creators?", a: "By audience relevance and engagement quality, not just follower count — we review their actual content and audience fit." },
        { q: "Can this be barter-only (no cash fee)?", a: "For some smaller creators, yes; for larger or professional creators, a fee is usually expected." },
        { q: "How do you measure whether it worked?", a: "Reach, engagement and, where trackable, referral clicks, promo code use or direct bookings." },
        { q: "Do you write the content, or does the creator?", a: "Creators produce their own authentic content within an agreed brief — that authenticity is the point." },
        { q: "Can I combine this with paid ads?", a: "Yes — creator content often performs well as paid ad creative when usage rights are agreed upfront." },
      ],
      related: [
        { label: "Content Creation", href: "/social-media/content-creation", description: "In-house content alongside creator collaborations." },
        { label: "Meta Ads", href: "/advertising/meta-ads", description: "Amplify strong creator content with paid reach." },
        { label: "Monthly Packages", href: "/social-media/monthly-packages", description: "Fold influencer work into an ongoing social program." },
      ],
      finalCtaLabel: "Discuss Your Project",
    },
    {
      slug: "monthly-packages",
      hubSlug: "social-media",
      navLabel: "Monthly Packages",
      h1: "Monthly Social Media Packages on Koh Phangan",
      primaryKeyword: "social media management Koh Phangan",
      secondaryTopics: ["monthly content", "social media packages"],
      metaTitle: "Social Media Management Koh Phangan | Monthly Packages",
      metaDescription:
        "Monthly social media packages for Koh Phangan businesses — planning, production, publishing and optimization in one retainer.",
      directAnswer:
        "Our monthly social media packages combine content planning, production, publishing and optimization into one fixed retainer — the simplest way for a Koh Phangan business to keep a consistent, professional social presence without managing multiple vendors.",
      heroSupport:
        "Planning, production, publishing and optimization bundled into one predictable monthly retainer.",
      heroImage: images.social,
      heroImageAlt: "Monthly content calendar laid out for review",
      scope: [
        { title: "Monthly planning", description: "A content calendar agreed each month, tied to your goals and seasonality." },
        { title: "Production", description: "Photo and video content produced as part of the package." },
        { title: "Publishing & community", description: "Scheduled posting and community management across the month." },
        { title: "Optimization", description: "Monthly review of what worked, adjusted into the next month's plan." },
      ],
      benefits: [
        { title: "One predictable cost", description: "A fixed monthly rate instead of piecing together separate services." },
        { title: "Nothing falls through the cracks", description: "Planning, production and posting run as one coordinated process." },
        { title: "Improves over time", description: "Each month's results inform the next month's content decisions." },
        { title: "One point of contact", description: "A single team accountable for the whole social presence." },
      ],
      process: [
        { title: "Onboarding", description: "Brand review, goal-setting and first month's content plan." },
        { title: "Production", description: "Monthly shoot or content batch produced." },
        { title: "Publishing", description: "Scheduled posting and community management throughout the month." },
        { title: "Monthly review", description: "Performance review and plan adjustment for the following month." },
      ],
      pricing: [
        { service: "Starter package", range: "THB 18,000 – 28,000 / month", note: "Management + light content production" },
        { service: "Growth package", range: "THB 30,000 – 55,000 / month", note: "Full production, Reels, community management" },
      ],
      useCases: [
        { title: "Restaurants & hospitality", description: "A consistent, professional presence without an in-house team." },
        { title: "Villas & property managers", description: "Ongoing content across multiple properties or listings." },
        { title: "Growing local brands", description: "Businesses ready to move from ad hoc posting to a real strategy." },
      ],
      faqs: [
        { q: "What's included in the base package vs. add-ons?", a: "Base packages cover planning, publishing and community management; content production volume and Reels scale with the package tier." },
        { q: "Is there a minimum commitment?", a: "We recommend a 3-month initial period to let strategy and content find their footing, but packages are billed monthly." },
        { q: "Can I upgrade or downgrade later?", a: "Yes — packages adjust as your needs and budget change." },
        { q: "Does this include paid advertising?", a: "No — advertising is a separate service, though we coordinate closely if you run both." },
        { q: "How do you report results?", a: "A monthly report covering growth, engagement and content performance, in plain language." },
        { q: "What if I already have some content?", a: "We're happy to work with existing assets and fill gaps with new production." },
      ],
      related: [
        { label: "Instagram Management", href: "/social-media/instagram-management", description: "The core service inside every package." },
        { label: "Content Creation", href: "/social-media/content-creation", description: "The production behind each month's content." },
        { label: "Meta Ads", href: "/advertising/meta-ads", description: "Add paid reach on top of your organic package." },
      ],
      finalCtaLabel: "Request a Quote",
    },
  ],
};
