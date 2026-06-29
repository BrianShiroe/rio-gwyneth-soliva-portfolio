/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import SkillsGrid from "./components/SkillsGrid";
import PortfolioGrid from "./components/PortfolioGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    const element = document.getElementById("contact-section");
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
    } else {
      setIsContactOpen(true);
    }
  };

  return (
    <Layout
      onContactClick={handleContactClick}
      isContactOpen={isContactOpen}
      setIsContactOpen={setIsContactOpen}
    >
      {/* 1. Hero Section: Rich intro & credentials */}
      <Hero onContactClick={handleContactClick} />

      {/* 2. Skills Grid: Visual pillars (Design vs Development) */}
      <SkillsGrid />

      {/* 3. Portfolio Showcase: Beautiful Graphics and Web Designs */}
      <PortfolioGrid />

      {/* 4. Experience Timeline: Exact CV tracker */}
      <ExperienceTimeline />

      {/* 5. Contact Section: Elegant form and details */}
      <ContactSection />
    </Layout>
  );
}
