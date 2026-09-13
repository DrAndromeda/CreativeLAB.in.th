import type { NavItem } from "./site";

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Advertising",
    href: "/advertising",
    children: [
      { label: "Google Ads", href: "/advertising/google-ads" },
      { label: "Meta Ads", href: "/advertising/meta-ads" },
      { label: "Campaign Launch", href: "/advertising/campaign-launch" },
      { label: "Performance Marketing", href: "/advertising/performance" },
    ],
  },
  {
    label: "Social Media",
    href: "/social-media",
    children: [
      {
        label: "Instagram Management",
        href: "/social-media/instagram-management",
      },
      { label: "Content Creation", href: "/social-media/content-creation" },
      { label: "Reels", href: "/social-media/reels" },
      {
        label: "Influencer Marketing",
        href: "/social-media/influencer-marketing",
      },
      { label: "Monthly Packages", href: "/social-media/monthly-packages" },
    ],
  },
  {
    label: "Villas & Real Estate",
    href: "/villas-real-estate",
    children: [
      { label: "Villa Photography", href: "/villas-real-estate/villa-photography" },
      {
        label: "Real Estate Photography",
        href: "/villas-real-estate/real-estate-photography",
      },
      { label: "Land Photography", href: "/villas-real-estate/land-photography" },
      {
        label: "Architecture Photography",
        href: "/villas-real-estate/architecture-photography",
      },
      { label: "Drone", href: "/villas-real-estate/drone" },
      { label: "Property Video", href: "/villas-real-estate/property-video" },
      { label: "FPV", href: "/villas-real-estate/fpv" },
      { label: "Virtual Tours", href: "/villas-real-estate/virtual-tours" },
      { label: "Real Estate Marketing", href: "/villas-real-estate/marketing" },
    ],
  },
  {
    label: "Food & Restaurants",
    href: "/food-restaurants",
    children: [
      { label: "Food Photography", href: "/food-restaurants/food-photography" },
      { label: "Menu Photography", href: "/food-restaurants/menu-photography" },
      { label: "Food Styling", href: "/food-restaurants/food-styling" },
      { label: "Menu Design", href: "/food-restaurants/menu-design" },
      { label: "Restaurant Social", href: "/food-restaurants/social" },
      { label: "Restaurant Advertising", href: "/food-restaurants/advertising" },
      { label: "Restaurant Website", href: "/food-restaurants/website" },
    ],
  },
  {
    label: "Business & Local Presence",
    href: "/business-local-presence",
    children: [
      { label: "Local SEO", href: "/business-local-presence/local-seo" },
      {
        label: "Google Business Profile",
        href: "/business-local-presence/google-business-profile",
      },
      { label: "Google Maps", href: "/business-local-presence/google-maps" },
      { label: "Reviews", href: "/business-local-presence/reviews" },
      { label: "Reputation", href: "/business-local-presence/reputation" },
      { label: "Listings", href: "/business-local-presence/listings" },
    ],
  },
  {
    label: "Websites & Digital",
    href: "/websites-digital",
    children: [
      { label: "Web Design", href: "/websites-digital/web-design" },
      { label: "Business Websites", href: "/websites-digital/business-websites" },
      { label: "Landing Pages", href: "/websites-digital/landing-pages" },
      { label: "Restaurant Website", href: "/websites-digital/restaurant-website" },
      { label: "Villa Website", href: "/websites-digital/villa-website" },
      { label: "E-commerce", href: "/websites-digital/ecommerce" },
      { label: "Website Redesign", href: "/websites-digital/redesign" },
      { label: "Technical SEO", href: "/websites-digital/technical-seo" },
      { label: "AI Search / GEO", href: "/websites-digital/ai-search" },
    ],
  },
  {
    label: "Video & Production",
    href: "/video-production",
    children: [
      { label: "Commercial Video", href: "/video-production/commercial" },
      { label: "Social Video", href: "/video-production/social-video" },
      { label: "Drone Video", href: "/video-production/drone-video" },
      { label: "FPV Video", href: "/video-production/fpv-video" },
    ],
  },
  {
    label: "Branding & Creative",
    href: "/branding-creative",
    children: [
      { label: "Branding", href: "/branding-creative/branding" },
      { label: "Graphic Design", href: "/branding-creative/graphic-design" },
      { label: "Creative Direction", href: "/branding-creative/creative-direction" },
      { label: "Menu Design", href: "/branding-creative/menu-design" },
    ],
  },
  {
    label: "More",
    href: "/portfolio",
    children: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_COLUMNS: { title: string; links: NavItem["children"] }[] = [
  {
    title: "Services",
    links: [
      { label: "Advertising", href: "/advertising" },
      { label: "Social Media", href: "/social-media" },
      { label: "Villas & Real Estate", href: "/villas-real-estate" },
      { label: "Food & Restaurants", href: "/food-restaurants" },
    ],
  },
  {
    title: "More Services",
    links: [
      { label: "Business & Local Presence", href: "/business-local-presence" },
      { label: "Websites & Digital", href: "/websites-digital" },
      { label: "Video & Production", href: "/video-production" },
      { label: "Branding & Creative", href: "/branding-creative" },
    ],
  },
  {
    title: "Agency",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Start a Project", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
