# Piyush Bisht — Personal Engineering Portfolio

A production-quality personal portfolio website designed for **Piyush Bisht**, a software engineering student at SRM Institute of Science and Technology graduating in 2027.

Built with **React**, **Vite**, **TypeScript**, and **Modern CSS** with reusable design tokens (no Tailwind CSS, no generic templates). Designed to impress technical recruiters at top technology companies (Google, Microsoft, Amazon, Visa) by emphasizing systems thinking, defensive security, and honest engineering execution.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

---

## 🎨 Design & Aesthetic System

- **Palette**: Deep charcoal and near-black surfaces (`#090b0e`, `#0d1017`, `#131722`) with subtle atmospheric lighting.
- **Accents**: Acid lime (`#a3e635`) used deliberately for focal points, telemetry indicators, and active states.
- **Typography**: Editorial scale using `Inter` for clean readability and `JetBrains Mono` for code, architectural schemas, and data metrics.
- **Micro-interactions**: Interactive 60fps HTML5 canvas node visualization, live telemetry data pulses, smooth scroll spy, and responsive modals.
- **Accessibility**: Keyboard navigable (ESC closes modals, tab indexes on interactive elements), focus visible rings, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```
portolioo/
├── index.html                 # Semantic HTML, PB monogram favicon, OpenGraph metadata
├── package.json               # React 18, Vite 6, TypeScript, Lucide React
├── tsconfig.json              # Strict TypeScript configuration
├── vite.config.ts             # Vite configuration
├── src/
│   ├── main.tsx               # Application entry point
│   ├── App.tsx                # Layout orchestrator, active section spy & modals
│   ├── types/
│   │   └── index.ts           # Strict TypeScript interfaces
│   ├── data/
│   │   └── portfolioData.ts   # Central configuration file for all portfolio data
│   ├── styles/
│   │   ├── variables.css      # Design tokens, colors, radii, shadows, fonts
│   │   ├── global.css         # Reset, typography, background grid, buttons
│   │   └── components.css     # Navbar, hero, cards, previews, modals, timeline
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky header, PB monogram, active spy, mobile drawer
│   │   ├── InteractiveSystemVisual.tsx # Live technical canvas node architecture
│   │   ├── ProjectPreviews.tsx # Custom CSS/SVG mockups for all 10 projects
│   │   ├── ProjectModal.tsx   # Deep architectural specification dialog
│   │   ├── ResumeModal.tsx    # Resume credentials and contact snapshot
│   │   ├── TechBadge.tsx      # Reusable monospace tech tag
│   │   └── Footer.tsx         # Year, engineered credits, back-to-top button
│   └── sections/
│       ├── HeroSection.tsx    # Impactful headline, status pill, CTAs, social links
│       ├── AboutSection.tsx   # Honest positioning, education, CGPA 8.5/10, pillars
│       ├── ProjectsSection.tsx# Filterable catalogue (All, Blockchain, DevOps, etc.)
│       ├── SkillsSection.tsx  # Grouped capabilities with verified context
│       ├── JourneySection.tsx # Chronological engineering timeline (2023 - 2027)
│       └── ContactSection.tsx # Direct email CTA, copy-to-clipboard, social cards
```

---

## 🛠️ Personalization Guide

All data is centrally configured in:
👉 [`src/data/portfolioData.ts`](src/data/portfolioData.ts)

You can customize anything without altering UI components:
1. **Personal Information**: Name, headline, editorial bio, CGPA, graduation year.
2. **Contact Email**: Update `socialLinks.email` (copy-to-clipboard button and mailto link will update instantly).
3. **Projects**: Edit or add projects to `projectsData`. Each project supports title, slug, category, description, architecture, key features, personal contribution, challenges, lessons learned, and GitHub/demo links.
4. **Resume**: When your updated resume is ready, drop `resume.pdf` into the `public/` directory and toggle `isAvailable: true` in `personalInfo.resume`.
5. **Skills**: Add or remove technologies from `skillGroups` based on what you want to highlight in upcoming interviews.
