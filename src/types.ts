/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Intermediate"
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  color: string;
}

export interface JobExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  portfolioUrl: string;
  linkedinUrl: string;
}
