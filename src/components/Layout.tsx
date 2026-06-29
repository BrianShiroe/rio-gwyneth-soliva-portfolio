/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Mail, Phone, MapPin, Send, Check, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  onContactClick: () => void;
  isContactOpen: boolean;
  setIsContactOpen: (open: boolean) => void;
}

export default function Layout({
  children,
  onContactClick,
  isContactOpen,
  setIsContactOpen,
}: LayoutProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Simple scroll-spy to highlight active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "portfolio-grid", "experience", "contact-section"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setIsContactOpen(false);
        setFormData({ name: "", email: "", message: "" });
      }, 2500);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-brand-charcoal selection:bg-[#F4EAE1] selection:text-[#8C5D3A] overflow-x-hidden font-sans">
      {/* Decorative Warm Top Ambient Light Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-rose-100/20 via-rose-50/5 to-transparent pointer-events-none blur-3xl" />

      {/* Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} onContactClick={onContactClick} />

      {/* Main Page Content Stage */}
      <main className="relative z-10">{children}</main>

      {/* Footer Contact Block */}
      <Footer onContactClick={onContactClick} />

      {/* Global Interactive "Get in Touch" Sliding Drawer / Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {/* Backdrop filter */}
            <motion.div
              id="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              id="contact-modal"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-lg w-full bg-white rounded-2xl border border-zinc-100 shadow-2xl p-6 md:p-8 z-50 overflow-hidden"
            >
              {/* Top ambient color-wash inside card */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative">
                <div>
                  <span className="font-mono text-xs tracking-widest text-rose-gold font-semibold uppercase">
                    Connect With Me
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal mt-1">
                    Get in Touch
                  </h3>
                </div>
                <button
                  id="close-contact-modal"
                  onClick={() => setIsContactOpen(false)}
                  className="p-1.5 rounded-full hover:bg-zinc-50 border border-zinc-100 text-brand-muted hover:text-brand-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-rose-gold"
                  aria-label="Close Contact Dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 text-emerald-600 mb-4 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif text-brand-charcoal mb-2">Message Sent Successfully!</h4>
                  <p className="text-brand-muted text-sm max-w-sm">
                    Thank you for reaching out, Rio Gwyneth Soliva will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-[#FAFAFA] text-sm focus:border-rose-gold focus:bg-white outline-none transition-all placeholder:text-zinc-400"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-[#FAFAFA] text-sm focus:border-rose-gold focus:bg-white outline-none transition-all placeholder:text-zinc-400"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
                      How Can I Help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-[#FAFAFA] text-sm focus:border-rose-gold focus:bg-white outline-none transition-all placeholder:text-zinc-400 resize-none"
                      placeholder="Describe your design, development, or brand project ideas..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="submit-contact"
                      type="submit"
                      className="w-full bg-brand-charcoal text-white font-medium text-sm py-3.5 px-6 rounded-lg hover:bg-rose-gold-dark transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}

              {/* Direct Quick Info Grid */}
              <div className="mt-8 pt-6 border-t border-zinc-100 grid grid-cols-2 gap-4 text-xs">
                <a
                  href="mailto:riogsoliva@gmail.com"
                  className="flex items-center gap-2.5 text-brand-muted hover:text-rose-gold transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100">
                    <Mail className="w-3.5 h-3.5 text-rose-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-[10px] text-zinc-400 uppercase tracking-widest">Email Me</p>
                    <p className="font-medium truncate max-w-[120px]">riogsoliva@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+971544318032"
                  className="flex items-center gap-2.5 text-brand-muted hover:text-rose-gold transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100">
                    <Phone className="w-3.5 h-3.5 text-rose-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-[10px] text-zinc-400 uppercase tracking-widest">Call Me</p>
                    <p className="font-medium truncate">+971544318032</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
