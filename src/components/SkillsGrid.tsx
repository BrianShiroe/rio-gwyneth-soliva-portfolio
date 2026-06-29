/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Layers, 
  Palette, 
  CheckCircle, 
  Sparkles, 
  Figma, 
  Code, 
  Paintbrush, 
  Layout, 
  GitBranch, 
  Video, 
  Cpu, 
  Laptop, 
  Eye 
} from "lucide-react";

interface SkillItemDetail {
  name: string;
  description: string;
  proficiency: number; // percentage out of 100
  icon?: React.ComponentType<{ className?: string }>; // Dynamic lucide icon wrapper
}

interface SkillPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: SkillItemDetail[];
  colorTheme: {
    badge: string;
    bg: string;
    border: string;
    icon: string;
    accent: string;
  };
}

const pillarsData: SkillPillar[] = [
  {
    id: "uiux-frontend",
    title: "UI/UX & Frontend Development",
    tagline: "Bridging code & interactive user design.",
    description: "Creating highly intuitive, wireframed user experiences that translate beautifully into lightweight, modern, semantic web applications.",
    skills: [
      { name: "Figma Prototyping", description: "Design systems, auto-layout, wireframes, and collaborative specs", proficiency: 95, icon: Figma },
      { name: "React.js Framework", description: "State management, hook lifecycle optimization, modular logic", proficiency: 90, icon: Code },
      { name: "Tailwind CSS", description: "Utility-first custom design tokens, layout grids, elegant spacing", proficiency: 95, icon: Paintbrush },
      { name: "Webflow Site Architecture", description: "Structured visually-sound builds, lightweight integrations", proficiency: 85, icon: Laptop },
      { name: "Wireframing & Flows", description: "High-fidelity mapping, user testing, interactive mockups", proficiency: 92, icon: Layout },
    ],
    colorTheme: {
      badge: "bg-amber-50 text-amber-800 border-amber-100",
      bg: "bg-white",
      border: "border-zinc-100",
      icon: "text-amber-600 bg-amber-50/50",
      accent: "from-[#F5E6D3] to-transparent",
    },
  },
  {
    id: "creative-design",
    title: "Creative & Graphic Design",
    tagline: "Expressive branding & visual storytelling.",
    description: "Developing consistent brand identities, high-impact social media assets, and professional digital videography across industry campaigns.",
    skills: [
      { name: "Adobe Creative Suite", description: "Photoshop, Illustrator, InDesign vector and raster branding", proficiency: 92, icon: Palette },
      { name: "Premiere Pro Videography", description: "Video reels, timing edits, audio synchronizations, color correction", proficiency: 88, icon: Video },
      { name: "Brand Design Strategy", description: "Logo redesigns, mood boards, official corporate guidelines", proficiency: 90, icon: Eye },
      { name: "AI-Assisted Ideation", description: "Prompt engineering, generative assets, workflow automation", proficiency: 85, icon: Cpu },
    ],
    colorTheme: {
      badge: "bg-rose-50 text-rose-800 border-rose-100",
      bg: "bg-white",
      border: "border-zinc-100",
      icon: "text-rose-500 bg-rose-50/50",
      accent: "from-[#FADCD9] to-transparent",
    },
  },
];

export function SkillCard({ pillar }: { pillar: SkillPillar; key?: React.Key }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "uiux-frontend":
        return <Layers className="w-5 h-5 text-rose-gold" />;
      case "creative-design":
        return <Palette className="w-5 h-5 text-rose-gold" />;
      default:
        return <Sparkles className="w-5 h-5 text-rose-gold" />;
    }
  };

  return (
    <motion.div
      id={`skill-card-${pillar.id}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative bg-white rounded-3xl border ${pillar.colorTheme.border} p-6 md:p-8 shadow-xs hover:shadow-md transition-shadow overflow-hidden group`}
    >
      {/* Soft color blush in the corner */}
      <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${pillar.colorTheme.accent} rounded-bl-full opacity-40 group-hover:scale-110 transition-transform duration-500 pointer-events-none`} />

      <div className="relative z-10">
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-2xl ${pillar.colorTheme.icon} border border-zinc-100`}>
            {getPillarIcon(pillar.id)}
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">
              Professional Pillar
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-charcoal mt-0.5">
              {pillar.title}
            </h3>
          </div>
        </div>

        <p className="text-sm font-medium text-rose-gold-dark font-sans tracking-wide mb-3">
          {pillar.tagline}
        </p>

        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-8">
          {pillar.description}
        </p>

        {/* Skill Bars with Details */}
        <div className="space-y-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 border-b border-zinc-100 pb-2 font-semibold">
            Core Toolkit & Methodologies
          </p>
          {pillar.skills.map((skill, index) => {
            // Determine if a specific icon exists, fallback to CheckCircle
            const SkillIcon = skill.icon || CheckCircle;

            return (
              <div
                key={skill.name}
                className="group/item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex justify-between items-start mb-1.5">
                  <div>
                    <span className="text-xs font-semibold text-brand-charcoal group-hover/item:text-rose-gold transition-colors flex items-center gap-2">
                      <SkillIcon className="w-3.5 h-3.5 text-rose-gold opacity-80 group-hover/item:scale-110 transition-transform" />
                      {skill.name}
                    </span>
                    <p className="text-[11px] text-zinc-400 font-light mt-0.5 ml-5:// layout align fixes">
                      {skill.description}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 bg-zinc-50 border border-zinc-100 px-1.5 py-0.5 rounded-md">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden ml-5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-rose-gold-light to-rose-gold rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsGrid() {
  // Map icons for bottom ecosystem line item context
  const getBottomBadgeIcon = (tech: string) => {
    switch (tech) {
      case "GitHub & Version Control":
        return <GitBranch className="w-3 h-3 text-zinc-400" />;
      case "Adobe Premiere Pro":
        return <Video className="w-3 h-3 text-zinc-400" />;
      default:
        return <CheckCircle className="w-3 h-3 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAFAFA] relative border-y border-zinc-100">
      {/* Soft warm gradients */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-50/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-widest text-rose-gold uppercase font-bold">
            Skillsets & Expertises
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mt-2 mb-4 font-bold tracking-tight">
            Balanced Engineering, Intentional Design.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-gold-light to-rose-gold mx-auto rounded-full mb-4" />
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
            Proficient in blending standard corporate requirements with unique, creative structural accents. Here is how my core pillars drive scalable digital solutions.
          </p>
        </div>

        {/* Structural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {pillarsData.map((pillar) => (
            <SkillCard key={pillar.id} pillar={pillar} />
          ))}
        </div>

        {/* Bottom Interactive Toolkit Badge Line */}
        <div className="mt-16 bg-white border border-zinc-100 p-6 rounded-2xl shadow-xs text-center">
          <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-4">
            Additional Ecosystem & Integrations
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "GitHub & Version Control", 
              "Adobe Premiere Pro", 
              "Brand & Corporate Guideline Systems", 
              "Agile Handoff Workflows", 
              "Wireframing / User Flows", 
              "Semantic Responsive Coding"
            ].map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium text-brand-charcoal bg-zinc-50 hover:bg-rose-50 hover:text-rose-gold-dark border border-zinc-100 hover:border-rose-100/55 px-3 py-1.5 rounded-lg transition-colors cursor-default flex items-center gap-1.5"
              >
                {getBottomBadgeIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}