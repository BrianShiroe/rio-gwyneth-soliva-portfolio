/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onContactClick: () => void;
}

export default function Navbar({ activeSection, onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Intro" },
    { id: "skills", label: "Core Pillars" },
    { id: "portfolio-grid", label: "Portfolios" },
    { id: "experience", label: "Career Timeline" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        id="navbar-shell"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-xs py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Brand/Logo Section */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex flex-col select-none group"
          >
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-brand-charcoal group-hover:text-rose-gold transition-colors">
              Rio Gwyneth Soliva
            </span>
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-medium">
              UI/UX & Frontend Developer
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative text-xs font-medium uppercase tracking-wider transition-colors duration-200 py-1 hover:text-rose-gold ${
                      activeSection === item.id ? "text-rose-gold" : "text-brand-charcoal"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-rose-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Accent Contact Trigger */}
            <button
              id="nav-contact-btn"
              onClick={onContactClick}
              className="bg-brand-charcoal text-white hover:bg-rose-gold hover:text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="mobile-contact-trigger"
              onClick={onContactClick}
              className="text-[10px] font-semibold uppercase tracking-widest bg-zinc-50 border border-zinc-100 py-2 px-3 rounded-full hover:bg-zinc-100 active:scale-95 transition-all"
            >
              Contact
            </button>
            <button
              id="mobile-drawer-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full border border-zinc-100 text-brand-charcoal hover:bg-zinc-50 transition-colors"
              aria-label="Toggle Navigation Drawer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              id="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-30 md:hidden"
            />
            <motion.div
              id="mobile-drawer-shell"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white border-l border-zinc-100 z-30 shadow-2xl pt-24 pb-8 px-6 flex flex-col justify-between md:hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-200 to-rose-gold" />

              <div className="flex flex-col gap-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 border-b border-zinc-100 pb-2">
                  Navigation Menu
                </p>
                <ul className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`block text-lg font-serif transition-colors py-1 ${
                          activeSection === item.id ? "text-rose-gold font-semibold" : "text-brand-charcoal"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  id="drawer-contact-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full bg-brand-charcoal text-white hover:bg-rose-gold text-center py-3.5 rounded-xl font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-center font-mono text-[9px] text-zinc-400">
                  Dubai, UAE • +971544318032
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
