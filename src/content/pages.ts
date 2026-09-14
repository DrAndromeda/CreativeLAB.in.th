import { images } from "@/assets/images";
import { SITE } from "@/content/site";

export const ABOUT_PAGE = {
  metaTitle: "About CreativeLAB | Creative Agency Koh Phangan",
  metaDescription:
    "CreativeLAB is a creative content and advertising agency based on Koh Phangan, Thailand — our approach, principles and local presence.",
  h1: "About CreativeLAB",
  heroSupport:
    "A creative content and advertising agency based on Koh Phangan, built around one team covering strategy, production and delivery.",
  directAnswer:
    "CreativeLAB is a creative content and advertising agency based on Koh Phangan, Thailand. We work with villas, restaurants, hospitality brands and local businesses across advertising, social media, photography, video, web and branding — combining strategy, production and delivery inside one team, on the island.",
  storyTitle: "Why we started on the island",
  storyBody: [
    "Koh Phangan businesses have historically had to choose between a local photographer for one-off shoots, a freelancer for social media, and a marketing agency abroad that's never actually seen the island — three relationships, three visual styles, and no one accountable for the whole picture.",
    "CreativeLAB exists to put strategy, production and delivery under one roof, physically based on Koh Phangan, so a villa owner, restaurant or local service business can work with one team that understands the island's market and produces consistent, professional work across every channel.",
  ],
  approachTitle: "How we approach a project",
  approachBody: [
    "We start from your business goal, not a generic package — a project is scoped around what will actually move the needle, whether that's a single photography shoot, a campaign launch, or a full monthly marketing program.",
    "We never invent facts to make a page or a pitch look better: no fabricated clients, awards, reviews or results. Where something isn't yet verified — a price, a claim, a statistic — we either qualify it clearly or leave it out.",
  ],
  principles: [
    {
      title: "Honesty over hype",
      description: "We don't fabricate clients, results, reviews or credentials — on this site or in client conversations.",
    },
    {
      title: "One team, full accountability",
      description: "Strategy, production and delivery come from the same team, not a chain of subcontractors.",
    },
    {
      title: "Built for the island market",
      description: "Local seasonality, customer behavior and locations shape every plan we make.",
    },
    {
      title: "Measured, not just delivered",
      description: "Where we can track results, we do — and we report them plainly.",
    },
  ],
  heroImage: images.team,
  heroImageAlt: "CreativeLAB team on location on Koh Phangan",
} as const;

export const CONTACT_PAGE = {
  metaTitle: "Contact CreativeLAB | Koh Phangan Creative Agency",
  metaDescription:
    "Get in touch with CreativeLAB for a project on Koh Phangan — advertising, content, photography, video, web or branding.",
  h1: "Start a Project",
  heroSupport:
    "Tell us about your business on Koh Phangan and what you're working on — we'll suggest a realistic next step.",
  directAnswer:
    "Contact CreativeLAB to discuss a project on Koh Phangan — a single photography or video shoot, an advertising campaign, a new website, or a full monthly marketing program. Use the form below, or reach us directly by email.",
  optionsTitle: "Other ways to reach us",
  location: SITE.location,
  email: SITE.email,
  phone: SITE.phone,
  whatsapp: SITE.whatsapp,
  telegram: SITE.telegram,
} as const;

export const PORTFOLIO_PAGE = {
  metaTitle: "Portfolio | CreativeLAB Koh Phangan",
  metaDescription:
    "The kind of creative, advertising and production work CreativeLAB does on Koh Phangan — real project work is added as it's delivered.",
  h1: "Portfolio",
  heroSupport:
    "The kind of work we make for businesses on Koh Phangan — real client projects are added here as they're completed and approved for publication.",
  directAnswer:
    "This page will showcase real CreativeLAB projects — villas, restaurants and local businesses across Koh Phangan — as they're delivered and approved for publication. In the meantime, the reference imagery below shows the style and craft our team works in.",
  heroImage: images.studio,
  heroImageAlt: "Creative studio workspace on Koh Phangan",
} as const;

export const CASE_STUDIES_PAGE = {
  metaTitle: "Case Studies | CreativeLAB Koh Phangan",
  metaDescription:
    "Detailed case studies from CreativeLAB's work with businesses on Koh Phangan — published as real projects are completed.",
  h1: "Case Studies",
  heroSupport:
    "In-depth looks at real projects — challenge, approach, execution and results — published as they're completed and approved.",
  directAnswer:
    "Case studies go beyond a portfolio image to show the actual brief, approach and outcome behind a project. We publish these only for real, completed CreativeLAB work — none are invented, and this page will fill in as projects are delivered.",
  heroImage: images.team,
  heroImageAlt: "Team reviewing a completed project",
} as const;

export const JOURNAL_PAGE = {
  metaTitle: "Journal | CreativeLAB Koh Phangan",
  metaDescription:
    "Notes on creative marketing, advertising and production for businesses on Koh Phangan, Thailand.",
  h1: "Journal",
  heroSupport:
    "Notes on marketing, advertising and production for businesses on Koh Phangan — articles are published here as they're written.",
  directAnswer:
    "The CreativeLAB Journal will cover practical marketing, advertising and production topics relevant to Koh Phangan businesses. Articles are published as they're researched and written — none are backdated or fabricated to fill the page.",
  heroImage: images.studio,
  heroImageAlt: "Notebook and laptop set up for writing",
} as const;
