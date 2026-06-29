========================================================================
✨ Rio Gwyneth Soliva — Professional Portfolio Setup Guide
========================================================================

An elegant, high-performance, component-based single-page portfolio 
application built using React 19, TypeScript, and Tailwind CSS v4.


------------------------------------------------------------------------
🚀 Overview
------------------------------------------------------------------------
This repository hosts the official personal branding platform and 
corporate portfolio for Rio Gwyneth Soliva, showcasing over 3+ years 
of dual-track experience bridging pixel-perfect visual design with 
modern frontend development. 

Core Tracks:
* UI/UX Architecture: High-fidelity interactive wireframes, component 
  design systems, and seamless conversion from Figma mockups to 
  semantic code layouts.
* Frontend Engineering: Modern development utilizing state hooks, fluid 
  micro-interactions, and reactive motion design components.
* Creative Assets: High-impact social media marketing campaigns, video 
  explainer productions, and complete brand identity design portfolios.


------------------------------------------------------------------------
🛠️ Technical Tech Stack
------------------------------------------------------------------------
* Framework Core: React 19 & TypeScript
* Build Engine: Vite v6 (Supercharged Hot Module Replacement)
* Styling Architecture: Tailwind CSS v4 
* Motion Framework: Motion (formerly Framer Motion v12+)
* Iconography Matrix: Lucide React


------------------------------------------------------------------------
🔧 Step-by-Step Installation & Local Setup
------------------------------------------------------------------------
Follow these steps to get the development environment running locally 
on your machine.

Prerequisites:
Ensure that you have Node.js (v18.x or above recommended) and npm 
installed. You can check your versions by running:
  node -v
  npm -v

1. Clone the Repository:
   Clone this repository to your local machine using terminal or 
   command prompt, then navigate into the project directory:
     git clone <your-repository-url>
     cd portfolio-website

2. Install Project Dependencies:
   Run the installation script to safely assemble all production 
   assets and compiler dev-dependencies:
     npm install

3. Setup Environment Variables:
   The repository is wired to adapt seamlessly between local machines 
   and cloud runtimes. Create a local environment variables file by 
   copying the template:
     cp .env.example .env.local

   Open the newly created .env.local file in your code editor and 
   substitute the runtime variables (if applicable):
     GEMINI_API_KEY="YOUR_ACTUAL_API_KEY_HERE"
     APP_URL="http://localhost:3000"

4. Boot Up the Development Server:
   Run the local development web server instantly:
     npm run dev

   Once the compilation finishes, open your browser and navigate to the 
   local link provided in your terminal, typically:
   👉 http://localhost:3000


------------------------------------------------------------------------
⚙️ Available Script Commands
------------------------------------------------------------------------
All workflows are pre-packaged into simple npm script shortcuts 
defined inside package.json:

* npm run dev      : Boots up the local development server on port 3000.
* npm run build    : Compiles a production-ready optimized build output 
                     inside the /dist bundle directory.
* npm run preview  : Spins up a local static server previewing the final 
                     compiled production code bundle.
* npm run lint     : Triggers a rigid TypeScript diagnostic test 
                     compilation loop to verify zero type regressions.
* npm run clean    : Instantly deletes local build artifacts (dist) 
                     to guarantee clean, deterministic builds.


------------------------------------------------------------------------
🌐 Production Deployment Guide
------------------------------------------------------------------------
When you are ready to launch the website live on production hosting 
services (such as Vercel, Netlify, or Cloudflare Pages):

1. Build the Application:
   Run the build script to compile and minimize the code:
     npm run build

2. Deploying Assets:
   The output files will be structured neatly inside the generated 
   /dist folder. 
   * For Vercel / Netlify: You can link the GitHub repository directly 
     to their dashboard. They will auto-detect the Vite configuration, 
     run 'npm run build' automatically, and set the publish directory 
     to 'dist'.
   * For Static Servers: Drag and drop or upload the entire contents of 
     the /dist folder directly onto your static hosting root file 
     directory.
========================================================================