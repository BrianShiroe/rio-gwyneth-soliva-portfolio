/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "web" | "graphic";
  categoryLabel: string;
  image: string;
  description: string;
  details: string[];
  tech: string[];
  link?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "web-showcase-1",
    title: "Luxury Design Studio Landing Page",
    client: "Elysian Designs (Dubai)",
    category: "web",
    categoryLabel: "Web Design & UI/UX",
    image: "/src/assets/images/web_design_showcase_1782748914437.jpg",
    description: "A minimalist, responsive landing page mockup crafted to represent high-end interior and architectural works in Business Bay, Dubai.",
    details: [
      "Designed wireframes and interactive prototypes in Figma with strict visual hierarchy.",
      "Coded the front-end skeleton using React.js and modern custom utility-first classes.",
      "Optimized for core web vitals and fast performance under mobile viewport constraints."
    ],
    tech: ["Figma", "React.js", "Tailwind CSS", "Aesthetics", "Responsive Development"],
    link: "https://riogwynethsoliva.my.canva.site/portfolio-2026"
  },
  {
    id: "graphic-showcase-1",
    title: "BH Sovereign Luxury Brand Identity",
    client: "Sovereign Group (UAE)",
    category: "graphic",
    categoryLabel: "Graphic & Creative Design",
    image: "/src/assets/images/branding_identity_showcase_1782748928214.jpg",
    description: "Comprehensive corporate brand guidelines featuring a premium 'BH' vector logo system, elegant typography pairing, and asset libraries.",
    details: [
      "Crafted custom vector lettermarks and emblem geometry inside Adobe Illustrator.",
      "Established cohesive, high-contrast color codes supporting digital and physical print formats.",
      "Produced formal 30-page PDF brand-book and corporate messaging guidelines."
    ],
    tech: ["Adobe Illustrator", "Corporate Branding", "Vector Typography", "Print Ready Layouts"],
    link: "https://riogwynethsoliva.my.canva.site/portfolio-2026"
  },
  {
    id: "creative-showcase-1",
    title: "L'Aura Premium Social Media Campaign",
    client: "L'Aura Cosmetics",
    category: "graphic",
    categoryLabel: "Graphic & Creative Design",
    image: "/src/assets/images/social_campaign_creative_1782748942694.jpg",
    description: "High-impact social campaign marketing visuals and promotional videography reels showcasing new organic cosmetic items with rose-gold styling.",
    details: [
      "Directed, shot, and edited social media reels with Premiere Pro transitions and syncing.",
      "Generated creative compositions combining high-end product photos with geometric frames.",
      "Boosted organic social engagements by 45% through visually rich cinematic storytelling."
    ],
    tech: ["Adobe Premiere Pro", "Creative Composition", "Social Media Marketing", "Video Reels"],
    link: "https://riogwynethsoliva.my.canva.site/portfolio-2026"
  },
  {
    id: "web-showcase-2",
    title: "E-Commerce User Flow Optimization",
    client: "RushMedia Solutions Project",
    category: "web",
    categoryLabel: "Web Design & UI/UX",
    image: "/src/assets/images/web_design_showcase_1782748914437.jpg",
    description: "A boilerplate UX flow restructuring that simplifies checkouts into a highly structured 3-step conversational layout.",
    details: [
      "Mapped user pain-points and designed clean interaction modals to prevent cart abandonment.",
      "Implemented smooth React states to animate screen transitions on checkout.",
      "A/B tested custom typography layouts, selecting soft Inter fonts with rose gold buttons."
    ],
    tech: ["Figma", "User Journey", "React State Mechanics", "Interaction Design"],
    link: "https://riogwynethsoliva.my.canva.site/portfolio-2026"
  }
];