/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, Check, Copy, Linkedin, ExternalLink, Sparkles, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", service: "general" });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "", service: "general" });
      }, 4000);
    }
  };

  const services = [
    { id: "general", label: "General Query" },
    { id: "webflow", label: "Webflow / No-Code build" },
    { id: "react", label: "React.js / Custom Frontend" },
    { id: "graphic", label: "Graphic Design / branding" },
    { id: "video", label: "Creative Video Reels" },
  ];

  return (
    <section id="contact-section" className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-zinc-100 overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-widest text-rose-gold uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
            Initiate Collaboration
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mt-2 mb-4 font-bold tracking-tight">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-gold-light to-rose-gold mx-auto rounded-full mb-4" />
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
            Interested in starting a project or discussing corporate opportunities? Drop a line directly below, and let's bring your concepts to life.
          </p>
        </div>

        {/* Form and info Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Coordinates (Bento widgets) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-2">
              Corporate Coordinates
            </h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed mb-6">
              Connect directly via mail, secure cellular lines, or external professional portals. Click to launch external portals or copy credentials immediately.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              {/* Email Widget Card */}
              <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-xs hover:border-zinc-200 transition-colors flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-rose-50/50 flex items-center justify-center shrink-0 text-rose-gold group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden w-full">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                    Direct Email
                  </span>
                  <a 
                    href={`mailto:${contactDetails.email}`}
                    className="text-sm font-medium text-brand-charcoal hover:text-rose-gold transition-colors block truncate"
                  >
                    {contactDetails.email}
                  </a>
                  <button 
                    onClick={() => handleCopy(contactDetails.email, "email")}
                    className="mt-2 text-[10px] font-mono text-zinc-400 hover:text-rose-gold inline-flex items-center gap-1 cursor-pointer"
                  >
                    {copiedType === "email" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Widget Card */}
              <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-xs hover:border-zinc-200 transition-colors flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-rose-50/50 flex items-center justify-center shrink-0 text-rose-gold group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="overflow-hidden w-full">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                    WhatsApp & Cellular
                  </span>
                  <a 
                    href={`tel:${contactDetails.phone}`}
                    className="text-sm font-medium text-brand-charcoal hover:text-rose-gold transition-colors block"
                  >
                    {contactDetails.phone}
                  </a>
                  <button 
                    onClick={() => handleCopy(contactDetails.phone, "phone")}
                    className="mt-2 text-[10px] font-mono text-zinc-400 hover:text-rose-gold inline-flex items-center gap-1 cursor-pointer"
                  >
                    {copiedType === "phone" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-xs flex items-start gap-4 group sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-rose-50/50 flex items-center justify-center shrink-0 text-rose-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                    Primary Office Hub
                  </span>
                  <p className="text-sm font-medium text-brand-charcoal">
                    {contactDetails.location}
                  </p>
                  <span className="text-[10px] text-zinc-400 font-light mt-1 block">
                    Available for onsite roles in Dubai and remote projects globally.
                  </span>
                </div>
              </div>

              {/* Professional Portals Card */}
              <div className="bg-[#FAF8F5] rounded-2xl border border-dashed border-zinc-200 p-5 sm:col-span-2 lg:col-span-1 space-y-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">
                  Professional Channels
                </span>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={contactDetails.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-white hover:bg-zinc-50 border border-zinc-100 p-3 rounded-xl flex items-center justify-between text-xs font-semibold text-brand-charcoal transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                  <a 
                    href={contactDetails.canvaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-white hover:bg-zinc-50 border border-zinc-100 p-3 rounded-xl flex items-center justify-between text-xs font-semibold text-brand-charcoal transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-rose-gold" />
                      Canva Site
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: High-Impact Contact Form (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-100 p-6 md:p-10 shadow-sm relative overflow-hidden">
            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-gold/20 via-rose-gold to-transparent" />
            
            <h3 className="font-serif font-bold text-2xl text-brand-charcoal mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-8">
              Fill out the particulars below. I aim to review and respond to all project proposals and professional inquiries within 24 hours.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 text-emerald-600 mb-4 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif text-brand-charcoal font-bold mb-2">
                    Message Dispatched!
                  </h4>
                  <p className="text-zinc-500 text-xs md:text-sm max-w-sm font-light leading-relaxed">
                    Thank you for reaching out, <strong>{formData.name}</strong>. Your message regarding our <strong>{services.find(s => s.id === formData.service)?.label}</strong> service has been submitted successfully.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="form-name" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-zinc-50 border border-zinc-100 hover:border-zinc-200 focus:border-rose-gold focus:bg-white px-4 py-3 rounded-xl text-xs md:text-sm text-brand-charcoal outline-none transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="form-email" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-50 border border-zinc-100 hover:border-zinc-200 focus:border-rose-gold focus:bg-white px-4 py-3 rounded-xl text-xs md:text-sm text-brand-charcoal outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service request selector */}
                  <div>
                    <label htmlFor="form-service" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1.5">
                      Subject / Service Category
                    </label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-100 hover:border-zinc-200 focus:border-rose-gold focus:bg-white px-4 py-3 rounded-xl text-xs md:text-sm text-brand-charcoal outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label htmlFor="form-message" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, requirements, or proposed timeline..."
                      className="w-full bg-zinc-50 border border-zinc-100 hover:border-zinc-200 focus:border-rose-gold focus:bg-white px-4 py-3 rounded-xl text-xs md:text-sm text-brand-charcoal outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-rose-gold text-white font-semibold text-xs uppercase tracking-widest py-4 px-6 rounded-xl transition-colors shadow-xs group cursor-pointer"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
