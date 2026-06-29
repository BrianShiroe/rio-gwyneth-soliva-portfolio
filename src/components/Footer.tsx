/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, BookOpen, Copy, Check, Heart } from "lucide-react";

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const contactDetails = {
    email: "riogsoliva@gmail.com",
    phone: "+971544318032",
    location: "Business Bay, Dubai, UAE",
    canvaUrl: "https://riogwynethsoliva.my.canva.site/portfolio-2026",
    linkedinUrl: "https://linkedin.com/in/rio-gwyneth-soliva",
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <footer id="contact" className="bg-[#FAF8F5] border-t border-zinc-100 relative">
      {/* Absolute background accent blobbing */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-10 w-64 h-64 bg-zinc-100/30 rounded-full blur-2xl pointer-events-none" />

      {/* Main Footer Matrix Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 pb-16 border-b border-zinc-200/60">
          
          {/* Column 1: Brand pitch and invitation (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal">
                Rio Gwyneth Soliva
              </span>
              <span className="font-mono text-[10px] tracking-widest text-rose-gold font-bold uppercase mt-1">
                UI/UX Designer & Frontend Developer
              </span>
            </div>

            <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
              Let's build something exceptional. Whether you need a corporate Webflow build, 
              interactive React.js components, high-fidelity Figma design systems, or creative digital video campaigns.
            </p>

            {/* Quick action button */}
            <div>
              <button
                id="footer-action-contact"
                onClick={onContactClick}
                className="inline-flex items-center gap-2.5 bg-brand-charcoal hover:bg-rose-gold text-white font-semibold text-xs uppercase tracking-widest py-3 px-6 rounded-full transition-all duration-300 shadow-xs cursor-pointer"
              >
                <span>Initialize Project Conversation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
              </button>
            </div>
          </div>

          {/* Column 2: Direct Contact Matrix (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-200/50 pb-2">
              Corporate Matrix Details
            </h4>

            <div className="space-y-4">
              {/* Email Block */}
              <div className="group flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-4 h-4 text-rose-gold" />
                </div>
                <div className="overflow-hidden">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 font-bold">
                    Email Address
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-xs font-medium text-brand-charcoal hover:text-rose-gold transition-colors truncate block"
                    >
                      {contactDetails.email}
                    </a>
                    <button
                      onClick={() => handleCopy(contactDetails.email, "email")}
                      className="text-zinc-400 hover:text-rose-gold p-1 rounded-md hover:bg-white border border-transparent hover:border-zinc-100 transition-all"
                      title="Copy Email Address"
                    >
                      {copiedType === "email" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone Block */}
              <div className="group flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-4 h-4 text-rose-gold" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 font-bold">
                    Direct Contact
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`tel:${contactDetails.phone}`}
                      className="text-xs font-medium text-brand-charcoal hover:text-rose-gold transition-colors"
                    >
                      {contactDetails.phone}
                    </a>
                    <button
                      onClick={() => handleCopy(contactDetails.phone, "phone")}
                      className="text-zinc-400 hover:text-rose-gold p-1 rounded-md hover:bg-white border border-transparent hover:border-zinc-100 transition-all"
                      title="Copy Phone Number"
                    >
                      {copiedType === "phone" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4 text-rose-gold" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 font-bold">
                    Primary Office Location
                  </p>
                  <p className="text-xs font-medium text-brand-charcoal mt-0.5">
                    {contactDetails.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Professional Handles (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold border-b border-zinc-200/50 pb-2">
              External Portals
            </h4>

            <div className="flex flex-col gap-3">
              {/* Canva link */}
              <a
                href={contactDetails.canvaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-zinc-100 hover:border-rose-100 hover:bg-rose-50/20 text-brand-charcoal transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-rose-gold" />
                  <span className="text-xs font-medium">Digital Portfolio</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-rose-gold group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={`https://${contactDetails.linkedinUrl}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-zinc-100 hover:border-rose-100 hover:bg-rose-50/20 text-brand-charcoal transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-rose-gold" />
                  <span className="text-xs font-medium">LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-rose-gold group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits Line */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Rio Gwyneth Soliva. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-light">
            <span>Enterprise credible web engineering with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>&amp; creative accents</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
