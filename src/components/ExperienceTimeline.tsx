/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Briefcase, ChevronRight, GraduationCap, Star, Filter, Sparkles } from "lucide-react";
import { JobExperience } from "../types";

const experiences: (JobExperience & { region: "UAE" | "PH"; initial: string; badgeColor: string })[] = [
  {
    role: "Graphic Designer",
    company: "Dahhan Business Services",
    location: "Dubai, UAE",
    period: "Dec 2025 - June 2026",
    region: "UAE",
    initial: "D",
    badgeColor: "bg-rose-50 text-rose-gold-dark border-rose-100/50",
    highlights: [
      "Designed high-converting multi-platform social media marketing campaigns.",
      "Produced and edited engaging marketing video reels and product explainers using Premiere Pro.",
      "Led the official corporate logo redesign and cohesive brand identity overhaul.",
      "Engineered responsive layouts and updated site architecture inside Webflow."
    ],
    technologies: ["Webflow", "Adobe Premiere Pro", "Illustrator", "Photoshop", "Brand Strategy"]
  },
  {
    role: "UI/UX Designer & Frontend Developer",
    company: "RushMedia Solutions",
    location: "Philippines",
    period: "June 2023 - Oct 2025",
    region: "PH",
    initial: "R",
    badgeColor: "bg-amber-50/60 text-amber-800 border-amber-100/40",
    highlights: [
      "Developed high-fidelity, interactive prototypes and responsive user layouts in Figma.",
      "Coded robust, modular client projects using React.js and utility-first Tailwind CSS.",
      "Iterated on complex user flows to optimize customer journeys and drive product conversion.",
      "Collaborated with cross-functional product and agile development teams for seamless handoffs."
    ],
    technologies: ["React.js", "Tailwind CSS", "Figma", "UI/UX Architecture", "Agile Handoffs"]
  },
  {
    role: "Front-End Web Developer Intern",
    company: "Fligno Software",
    location: "Philippines",
    period: "Aug 2022 - Nov 2022",
    region: "PH",
    initial: "F",
    badgeColor: "bg-zinc-50 text-zinc-700 border-zinc-200/50",
    highlights: [
      "Converted high-fidelity graphic designs and UI mockups into clean, semantic front-end code.",
      "Optimized website load times and localized asset compression for enhanced responsiveness.",
      "Participated in daily standups and utilized standard Git branching and merging workflows."
    ],
    technologies: ["HTML5 / CSS3", "JavaScript ES6", "Git & GitHub", "Performance Audit", "Responsive Design"]
  }
];

export function JobCard({ 
  job, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  job: typeof experiences[0]; 
  index: number; 
  isExpanded: boolean; 
  onToggle: () => void;
  key?: React.Key;
}) {
  return (
    <motion.div
      id={`job-card-${index}`}
      layout="position"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative md:grid md:grid-cols-12 md:gap-8 group"
    >
      {/* 1. Date column on Desktop (Cols 1-3) */}
      <div className="hidden md:flex md:col-span-3 flex-col items-end text-right pt-2 pr-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
          {job.period}
        </span>
        <span className="text-xs text-rose-gold-dark font-medium flex items-center gap-1.5 mt-1">
          <MapPin className="w-3.5 h-3.5 text-rose-gold shrink-0" />
          {job.location}
        </span>
        <span className="text-[10px] text-zinc-400 font-mono mt-1 px-2 py-0.5 rounded bg-zinc-50 border border-zinc-100">
          {job.region === "UAE" ? "Dubai Hub 🇦🇪" : "APAC Hub 🇵🇭"}
        </span>
      </div>

      {/* 2. Timeline Axis Line Column (Col 4) */}
      <div className="hidden md:flex md:col-span-1 justify-center relative">
        <div className="w-[1.5px] bg-zinc-100 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 group-last:bottom-auto group-last:h-8" />
        <div className="w-6 h-6 rounded-full bg-white border-[2.5px] border-rose-gold shadow-sm flex items-center justify-center relative z-10 top-1.5 group-hover:scale-110 group-hover:border-brand-charcoal transition-transform duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-rose-gold group-hover:bg-brand-charcoal transition-colors" />
        </div>
      </div>

      {/* 3. Card Details Column (Col 5-12) */}
      <div className="md:col-span-8 relative pl-6 md:pl-0">
        {/* Mobile-only timeline support line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-zinc-100 md:hidden" />
        <div className="absolute left-[-4px] top-2.5 w-2 h-2 rounded-full bg-rose-gold md:hidden" />

        <div 
          onClick={onToggle}
          className="bg-white rounded-3xl border border-zinc-100 p-6 md:p-8 shadow-xs hover:shadow-md hover:border-zinc-200/80 transition-all duration-300 relative overflow-hidden cursor-pointer group/card"
        >
          {/* Subtle elegant gradient backdrop inside the card on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Rose-Gold top glowing border */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-rose-gold/20 via-rose-gold to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

          {/* Mobile-only badge details container */}
          <div className="flex md:hidden flex-wrap gap-2 mb-3 items-center">
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded">
              {job.period}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-rose-gold-dark bg-rose-50/50 border border-rose-100/30 px-2 py-0.5 rounded flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5" />
              {job.location}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-4">
              {/* Company Logo Letter Badge */}
              <div className={`w-12 h-12 rounded-2xl border ${job.badgeColor} flex items-center justify-center shrink-0 shadow-xs font-serif font-bold text-lg select-none`}>
                {job.initial}
              </div>

              <div>
                <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-bold">
                  Corporate Track
                </span>
                <h3 className="text-lg md:text-xl font-serif font-bold text-brand-charcoal group-hover/card:text-rose-gold transition-colors mt-0.5">
                  {job.role}
                </h3>
                <p className="text-xs font-semibold text-brand-muted/90 mt-0.5">
                  {job.company}
                </p>
              </div>
            </div>

            <span className="hidden sm:inline-flex text-[10px] font-mono font-bold text-zinc-400 uppercase bg-zinc-50 border border-zinc-100/80 px-2.5 py-1 rounded-md">
              {job.region} HUB
            </span>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-50 pb-2">
              Core Responsibilities & Impact
            </p>
            <ul className="space-y-2.5 text-zinc-500 text-xs md:text-sm font-light leading-relaxed">
              {job.highlights.slice(0, isExpanded ? undefined : 2).map((highlight, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="flex items-start gap-2.5"
                >
                  <ChevronRight className="w-4 h-4 text-rose-gold shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>

            {/* Expand / Collapse Indicator */}
            {job.highlights.length > 2 && (
              <div className="pt-2 text-right">
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-gold hover:text-brand-charcoal font-semibold transition-colors inline-flex items-center gap-1">
                  <span>{isExpanded ? "Show Fewer Highlights" : "View All Highlights"}</span>
                  <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>▼</motion.span>
                </span>
              </div>
            )}
          </div>

          {/* Tech/Skills Used */}
          <div className="flex flex-wrap gap-1.5 border-t border-zinc-100/60 pt-4 mt-5">
            {job.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[9px] text-zinc-500 bg-zinc-50 border border-zinc-100/60 px-2.5 py-1 rounded-md group-hover/card:bg-rose-50/20 group-hover/card:text-rose-gold-dark group-hover/card:border-rose-100/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const handleToggleExpand = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-white relative">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-50/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-rose-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-widest text-rose-gold uppercase font-bold">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mt-2 mb-4 font-bold tracking-tight">
            Professional Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-gold-light to-rose-gold mx-auto rounded-full mb-4" />
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
            3+ years of dual-track experience building pixel-perfect graphic designs and clean frontend codebases across Dubai, UAE and the Philippines.
          </p>
        </div>

        {/* Chronological Vertical Feed */}
        <div className="space-y-12 relative">
          <AnimatePresence mode="popLayout">
            {experiences.map((job, index) => (
              <JobCard
                key={`${job.company}-${index}`}
                job={job}
                index={index}
                isExpanded={expandedIndices.includes(index)}
                onToggle={() => handleToggleExpand(index)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Academic Degree Highlight (BS Information Technology) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:grid md:grid-cols-12 md:gap-8 group"
        >
          <div className="hidden md:block md:col-span-3 text-right pt-2 pr-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
              Formal Education
            </span>
            <p className="text-xs text-rose-gold-dark font-medium mt-1">Graduate Credentials</p>
          </div>

          <div className="hidden md:flex md:col-span-1 justify-center relative">
            <div className="w-[1.5px] bg-zinc-100 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-8" />
            <div className="w-6 h-6 rounded-full bg-rose-50 border-[2.5px] border-rose-gold shadow-xs flex items-center justify-center relative z-10 top-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-rose-gold" />
            </div>
          </div>

          <div className="md:col-span-8 pl-6 md:pl-0">
            <div className="bg-[#FAF8F5] rounded-3xl border border-dashed border-zinc-200/80 p-6 text-center max-w-xl mx-auto hover:border-rose-200 transition-colors">
              <GraduationCap className="w-8 h-8 text-rose-gold mx-auto mb-3.5" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 font-bold">
                Undergraduate Degree
              </span>
              <h3 className="font-serif font-bold text-brand-charcoal text-base md:text-lg mt-1">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-xs text-brand-muted/90 mt-1 max-w-sm mx-auto font-light leading-relaxed">
                Major in Web Development & Interactive Graphic Design • Specialized in converting visual concepts to responsive interface structures.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

