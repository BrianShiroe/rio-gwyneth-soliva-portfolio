/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Layers, Palette, Eye, X, Check, ArrowUpRight } from "lucide-react";

// Integrated Import from data file
import { portfolioData, PortfolioItem } from "../data/portfolioData";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<"all" | "web" | "graphic">("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioData.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="portfolio-grid" className="py-24 md:py-32 bg-[#FAF8F5] relative border-b border-zinc-100">
      {/* Decorative ambient color accents */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-rose-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <span className="font-mono text-xs tracking-widest text-rose-gold uppercase font-bold">
              Creative Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mt-2 font-bold tracking-tight">
              Selected Creations
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-gold-light to-rose-gold rounded-full mt-4" />
          </div>

          {/* Section Description */}
          <p className="text-zinc-500 text-sm md:text-base font-light max-w-md leading-relaxed">
            Explore a curation of high-fidelity user interface concepts, clean responsive layouts, and elegant corporate
            graphic identities.
          </p>
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-zinc-200/50 pb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "all"
                ? "bg-brand-charcoal text-white shadow-xs"
                : "bg-white text-zinc-400 hover:text-brand-charcoal border border-zinc-100"
            }`}
          >
            Show All
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "web"
                ? "bg-brand-charcoal text-white shadow-xs"
                : "bg-white text-zinc-400 hover:text-brand-charcoal border border-zinc-100"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Web Design & UI/UX
            </span>
          </button>
          <button
            onClick={() => setFilter("graphic")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "graphic"
                ? "bg-brand-charcoal text-white shadow-xs"
                : "bg-white text-zinc-400 hover:text-brand-charcoal border border-zinc-100"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" />
              Graphic & Creative
            </span>
          </button>
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-xs hover:shadow-md hover:border-zinc-200/80 transition-all duration-300"
              >
                {/* Responsive aspect ratio picture container */}
                <div className="relative aspect-[3/2] overflow-hidden bg-zinc-50 border-b border-zinc-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle dark layout overlay */}
                  <div className="absolute inset-0 bg-brand-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(item)}
                      className="bg-white text-brand-charcoal p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center gap-2 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-rose-gold" />
                      <span>Inspect Piece</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Card Copy text */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-rose-gold font-bold">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono font-medium uppercase">{item.client}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-brand-charcoal leading-snug mb-3">{item.title}</h3>

                  <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] text-zinc-400 bg-zinc-50 border border-zinc-100/60 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {item.tech.length > 3 && (
                      <span className="font-mono text-[9px] text-zinc-400 bg-zinc-50 px-1.5 py-0.5 rounded">
                        +{item.tech.length - 3} More
                      </span>
                    )}
                  </div>

                  {/* Trigger Detail view */}
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="text-xs font-bold text-brand-charcoal hover:text-rose-gold flex items-center gap-1.5 group/link cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Canva Reference Banner */}
        <div className="mt-16 bg-white border border-zinc-100 p-8 rounded-3xl text-center shadow-xs flex flex-col items-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-rose-100/10 rounded-full blur-xl pointer-events-none" />
          <span className="font-mono text-[9px] tracking-widest text-rose-gold uppercase font-bold mb-2">
            Looking for more pieces?
          </span>
          <h3 className="text-xl md:text-2xl font-serif text-brand-charcoal font-bold mb-4">
            Explore Rio's Full Creative Showcase
          </h3>
          <p className="text-zinc-500 text-xs md:text-sm font-light max-w-lg mb-6 leading-relaxed">
            Access her official premium online digital portfolio directly to inspect interactive prototypes, social
            videography campaigns, and corporate branding reels.
          </p>
          <a
            href="https://riogwynethsoliva.my.canva.site/portfolio-2026"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-rose-gold text-white font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-colors group shadow-xs cursor-pointer"
          >
            <span>Launch Live Canva Portfolio</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Project Specifications Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-2xl w-full bg-white rounded-3xl border border-zinc-100 shadow-2xl overflow-hidden z-50 flex flex-col max-h-[90vh]"
            >
              {/* Header Image */}
              <div className="relative aspect-[16/9] w-full shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-brand-charcoal p-2 rounded-full shadow-md transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* Scrollable details wrapper */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rose-gold font-bold">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-brand-charcoal leading-snug mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs mt-1 font-mono uppercase text-zinc-400">
                    CLIENT / PARTNER: {selectedProject.client}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Scope list */}
                <div className="space-y-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-100 pb-2">
                    Scope of Action & Milestones achieved
                  </p>
                  <ul className="space-y-2.5 text-zinc-500 text-xs md:text-sm font-light">
                    {selectedProject.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-rose-gold shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech specifications used */}
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold mb-3">
                    Technologies & Medium
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-zinc-500 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>{" "}
              {/* Close scrollable details wrapper */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
