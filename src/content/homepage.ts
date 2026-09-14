import { images } from "@/assets/images";
import type { ServiceGridItem } from "@/components/blocks/ServiceGrid";
import type { PortfolioPreviewItem } from "@/components/blocks/PortfolioPreview";
import type { ProcessStep } from "@/content/types";

export const HOMEPAGE = {
  metaTitle: "Advertising & Creative Marketing Agency Koh Phangan | CreativeLAB",
  metaDescription:
    "CreativeLAB is a creative advertising and marketing agency on Koh Phangan — Google & Meta Ads, social media, photography, video and web for island businesses.",
  heroEyebrow: "Koh Phangan, Thailand",
  h1: "Advertising & Creative Marketing Agency on Koh Phangan",
  heroSupport:
    "Creative advertising, social media, content, photography, video, websites and digital marketing for businesses on Koh Phangan.",
  directAnswer:
    "CreativeLAB is a creative content and advertising agency based on Koh Phangan. We plan and run advertising campaigns, manage social media, produce photography and video, and build websites for villas, restaurants, hospitality brands and local businesses — combining strategy, production and delivery inside one team, on the island.",
  editorialTitle: "One island team, the full marketing stack",
  editorialBody: [
    "Most businesses on Koh Phangan end up piecing together a photographer for one project, a freelancer for social media, and an agency abroad for advertising — three relationships, three time zones, three different visual styles.",
    "CreativeLAB puts strategy, photography, video, design and paid media under one roof, based on the island. That means faster turnarounds, a consistent visual identity across every channel, and a team that already understands local light, locations and customer behavior.",
  ],
  processTitle: "How we work",
  process: [
    {
      title: "Brief",
      description:
        "We start with your business goals, audience and current marketing — not a generic questionnaire.",
    },
    {
      title: "Strategy",
      description:
        "We map the right mix of content, advertising and web work to your budget and timeline.",
    },
    {
      title: "Production",
      description:
        "Shooting, filming, design and campaign build happen on Koh Phangan, on your schedule.",
    },
    {
      title: "Delivery & optimization",
      description:
        "You get finished assets and live campaigns, then ongoing reporting and optimization if you continue with us.",
    },
  ] satisfies ProcessStep[],
  locationText:
    "CreativeLAB is based on Koh Phangan and works with businesses across the island — from Thong Sala and Srithanu to Haad Rin and the north coast — as well as remote clients preparing to open or market a property on Koh Phangan.",
  finalCtaTitle: "Start a Project / Discuss Your Business on Koh Phangan",
  finalCtaDescription:
    "Tell us what you're working on — a single shoot, a campaign, or a full marketing plan — and we'll suggest a realistic next step.",

  // — New H2 sections (after editorial) —
  afterEditorialH2: "Creative Marketing for Businesses on Koh Phangan",
  afterEditorialBody:
    "Koh Phangan is a small, fast-moving market — villas, beach clubs, restaurants and wellness brands compete for the same limited pool of guests, often within a few kilometres of each other. Marketing here works differently than in a big city: word of mouth, Instagram and Google Maps carry more weight than traditional advertising, and visual quality is often the first thing a potential guest judges before they ever read a word of copy. CreativeLAB was built around this reality — a local team that understands the island's seasons, its customer flow, and what actually converts a scroll into a booking, rather than a generic marketing template applied from abroad.",

  // — Intro paragraph before Service Grid —
  serviceGridIntroH2: "Our Creative & Marketing Services",
  serviceGridIntro:
    "CreativeLAB works across eight core disciplines, and most projects combine two or three of them rather than sitting in a single silo. A villa launch, for example, usually needs photography, a website and an advertising push together; a restaurant relaunch usually needs content, local SEO and social media in parallel. Below is what each pillar covers — see the full list for details on scope and typical deliverables.",

  // — Service sections after grid —
  productionH2: "Photography, Video & Content Production",
  productionBody:
    "Production is done in-house rather than outsourced project-by-project, which keeps visual style consistent across a client's photography, video and social content. This covers villa and real estate photography, drone and FPV footage, food and menu photography, brand films, and short-form video for Instagram and TikTok — shot on location on Koh Phangan, with an understanding of local light, tides and seasonal conditions that affect scheduling.",

  advertisingH2: "Advertising & Digital Marketing",
  advertisingBody:
    "Paid media on Koh Phangan needs tighter targeting than most markets — the addressable audience is smaller, and budget wasted on the wrong geography or season is wasted fast. CreativeLAB plans and runs Google Ads and Meta/Facebook advertising campaigns for villas, restaurants and hospitality brands, pairing production (photography, video, creative assets) with campaign setup, tracking and ongoing optimization, so the same team that shoots the content is the one running the numbers on it.",

  webH2: "Web Design, SEO & Local Presence",
  webBody:
    "A website only earns its cost on the island if it's fast, mobile-first (most traffic here is on phones) and set up for local search — Google Business Profile, Maps visibility and technical SEO matter as much as the design itself. CreativeLAB builds and optimizes websites and landing pages alongside local SEO and Google Business Profile management, so a client's site, maps listing and search visibility work as one system rather than separate projects.",

  hospitalityH2: "Creative Marketing for Villas, Restaurants & Hospitality",
  hospitalityBody:
    "These three business types make up most of CreativeLAB's client base and each has different needs: villas and real estate lean on photography, drone footage and property marketing; restaurants need food photography, menu design and local SEO; hospitality brands more broadly need consistent social content and a recognizable visual identity across every booking channel. Work is tailored to which of these a client falls into rather than applying one template across all three.",

  // — Before PortfolioPreview —
  islandsH2: "Creative Agency for Koh Phangan, Koh Samui & Koh Tao",
  islandsBody:
    "CreativeLAB is based on Koh Phangan and most of its work is concentrated there, but the team also takes on projects on Koh Samui and Koh Tao for clients who need the same level of production and campaign management on the neighbouring islands.",

  // — Before LocationBlock —
  localH2: "Why Work With a Local Creative Agency",
  localBody:
    "Working with a team based on the island — rather than a freelancer flying in for a single shoot or an agency managing campaigns remotely from abroad — means shorter turnarounds, easier communication in the same time zone, and a visual style built specifically around how Koh Phangan businesses are actually found and booked: through Instagram, Google Maps and word of mouth rather than billboard or print advertising.",

  // — CTA wrapper —
  ctaWrapperH2: "Start Your Project With CreativeLAB",
} as const;

export const HOMEPAGE_PILLARS: ServiceGridItem[] = [
  {
    title: "Advertising",
    description:
      "Google Ads, Meta Ads, campaign launch and performance marketing.",
    href: "/advertising",
  },
  {
    title: "Social Media",
    description:
      "Instagram management, content, Reels, strategy and community.",
    href: "/social-media",
  },
  {
    title: "Villas & Real Estate",
    description:
      "Villa and property photography, drone, video and property marketing.",
    href: "/villas-real-estate",
  },
  {
    title: "Food & Restaurants",
    description:
      "Food and menu photography, styling, design, content and advertising.",
    href: "/food-restaurants",
  },
  {
    title: "Business & Local Presence",
    description: "Google Business Profile, Maps, local SEO and reputation.",
    href: "/business-local-presence",
  },
  {
    title: "Websites & Digital",
    description:
      "Websites, landing pages, SEO, technical SEO and AI search visibility.",
    href: "/websites-digital",
  },
  {
    title: "Video & Production",
    description: "Commercial video, Reels, drone, FPV and brand films.",
    href: "/video-production",
  },
  {
    title: "Branding & Creative",
    description: "Brand identity, graphic and menu design, creative direction.",
    href: "/branding-creative",
  },
];

export const HOMEPAGE_PORTFOLIO: PortfolioPreviewItem[] = [
  {
    image: images.team,
    alt: "CreativeLAB crew preparing equipment for a production shoot",
    caption: "On-island production team",
  },
  {
    image: images.food,
    alt: "Styled plate of food photographed for a restaurant menu",
    caption: "Food photography & styling",
  },
  {
    image: images.social,
    alt: "Behind-the-scenes of a social media content shoot",
    caption: "Social content production",
  },
  {
    image: images.video,
    alt: "Camera operator filming a commercial video shoot",
    caption: "Commercial & brand video",
  },
  {
    image: images.photoshoot,
    alt: "Photographer directing a shoot on location",
    caption: "On-location photography",
  },
  {
    image: images.studio,
    alt: "Creative studio workspace with design work in progress",
    caption: "Branding & design studio",
  },
];
