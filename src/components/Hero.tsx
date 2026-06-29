/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, MapPin, Briefcase, Sparkles, LayoutGrid, User } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white"
    >
      {/* Delicate background aesthetic accents (Semi-Feminine Rose-Gold and Muted Mauve) */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-[#FFF0F2]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-72 h-72 bg-[#FAF5EF]/60 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Accent - very subtle corporate feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbfbfb_1px,transparent_1px),linear-gradient(to_bottom,#fbfbfb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Sparkle badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50/75 border border-rose-100/60 text-xs font-medium text-rose-gold-dark mb-6 tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
              <span className="font-mono text-[10px] uppercase tracking-wider">UI/UX Designer & Frontend Developer</span>
            </motion.div>

            {/* Dynamic Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-brand-charcoal tracking-tight leading-[1.1] font-bold">
                Designing Intuitive Interfaces.<br />
                <span className="bg-gradient-to-r from-rose-gold via-rose-500/80 to-brand-charcoal bg-clip-text text-transparent">
                  Developing Seamless Code.
                </span>
              </h1>
            </motion.div>

            {/* Credentials / Location Cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-brand-muted text-sm w-full"
            >
              {/* Location Badge */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAFAFA] border border-zinc-100/80 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-rose-gold" />
                <span className="font-medium text-brand-charcoal text-xs">Business Bay, Dubai, UAE</span>
              </div>

              {/* Experience Badge */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAFAFA] border border-zinc-100/80 shadow-xs">
                <Briefcase className="w-3.5 h-3.5 text-rose-gold" />
                <span className="font-medium text-brand-charcoal text-xs">3+ Years Dual-Track Experience</span>
              </div>
            </motion.div>

            {/* Paragraph introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-brand-muted text-sm md:text-base max-w-2xl leading-relaxed font-light"
            >
              Specializing in elegant wireframing, high-fidelity responsive web application development, 
              and creative brand design strategy. Bridging human-centered aesthetics with performance-optimized production code across the UAE and the Philippines.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                id="view-portfolio-btn"
                onClick={() => handleScrollToSection("skills")}
                className="w-full sm:w-auto bg-brand-charcoal text-white hover:bg-rose-gold font-medium text-sm py-3.5 px-8 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Portfolio</span>
                <LayoutGrid className="w-4 h-4" />
              </button>

              <button
                id="get-in-touch-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto bg-white hover:bg-zinc-50 border border-zinc-200 text-brand-charcoal hover:border-brand-charcoal font-medium text-sm py-3.5 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get in Touch</span>
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Premium Picture Block (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Elegant outer layout frame accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[340px] md:max-w-[380px]"
            >
              {/* Spinning subtle rose gold aura backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-rose-100 to-rose-gold-light rounded-[32px] blur-xs opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Picture Frame */}
              <div className="relative bg-white p-4 pb-6 rounded-[28px] border border-zinc-100 shadow-xl flex flex-col">
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-rose-50/50 via-zinc-50 to-amber-50/40 border border-zinc-150 relative group flex flex-col items-center justify-center p-6 select-none">
                  {/* Decorative concentric rings */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-45">
                    <div className="w-11/12 h-11/12 rounded-full border border-dashed border-rose-gold/20 animate-[spin_120s_linear_infinite]" />
                    <div className="absolute w-3/4 h-3/4 rounded-full border border-rose-gold/15" />
                    <div className="absolute w-1/2 h-1/2 rounded-full border border-dashed border-rose-gold/10" />
                  </div>

                  {/* Centered Profile Vector Emblem */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white/90 border border-rose-100 shadow-xs flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-500">
                    <User className="w-10 h-10 text-rose-gold" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-rose-gold border-2 border-white flex items-center justify-center text-[10px] text-white shadow-xs">
                      ★
                    </div>
                  </div>

                  {/* Placeholder text info */}
                  <div className="relative z-10 text-center">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-rose-gold-dark font-bold bg-rose-50/70 border border-rose-100/40 px-2.5 py-1 rounded-md">
                      [ Portrait Placeholder ]
                    </span>
                    <p className="text-[10px] text-zinc-400 mt-2.5 max-w-[190px] mx-auto leading-normal font-light">
                      Click 'Inspect' or upload your preferred profile picture in this slot.
                    </p>
                  </div>
                </div>

                {/* Picture Label in JetBrains Mono */}
                <div className="mt-4 flex justify-between items-center px-1">
                  <div>
                    <span className="font-serif text-sm font-bold text-brand-charcoal">
                      Rio Gwyneth Soliva
                    </span>
                    <span className="block font-mono text-[9px] text-zinc-400 mt-0.5">
                      LOC: DUBAI, UAE
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 border border-emerald-100/80 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-mono text-[8px] uppercase font-bold tracking-wider">
                      Active Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Float badge 1: Creative & Tech stamp */}
              <div className="absolute -top-4 -left-4 bg-white border border-zinc-100 p-3 rounded-2xl shadow-md hidden sm:flex items-center gap-2">
                <div className="w-7 h-7 bg-rose-50 rounded-lg flex items-center justify-center border border-rose-100">
                  <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
                </div>
                <div>
                  <p className="font-mono text-[8px] text-zinc-400 uppercase font-bold tracking-widest">Aesthetics</p>
                  <p className="text-[10px] font-bold text-brand-charcoal">Pixel-Perfect UX</p>
                </div>
              </div>

              {/* Float badge 2: UAE stamp */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-zinc-100 py-2.5 px-3.5 rounded-2xl shadow-md hidden sm:flex items-center gap-2">
                <span className="text-lg">🇦🇪</span>
                <div>
                  <p className="font-mono text-[8px] text-zinc-400 uppercase font-bold tracking-widest">Base Hub</p>
                  <p className="text-[10px] font-bold text-brand-charcoal">Business Bay, DXB</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Decorative Down Arrow Indicator */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            onClick={() => handleScrollToSection("skills")}
            className="flex flex-col items-center gap-1.5 cursor-pointer text-zinc-400 hover:text-rose-gold transition-colors"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest">Explore Skills & Experience</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
