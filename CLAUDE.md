# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sankofa vitrine — landing page for Sanko, a travel agency platform enabling content creators to organize group trips with their communities. Built with React 18, Vite, and Tailwind CSS.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (Vite)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

No testing or linting tools are configured.

## Architecture

**Routing** (React Router DOM v6, BrowserRouter in `App.jsx`):
- `/` → `Home.jsx`
- `/our-team` → `Manifeste.jsx`
- `/contact` → `Contact.jsx`
- `/creer-mon-voyage` → `CreerMonVoyage.jsx`
- `*` → fallback to Home

**Pages** (`src/pages/`) compose multiple section components. **Components** (`src/components/`) are self-contained UI sections (Navbar, Footer, VideoHero, DestinationsGrid, etc.).

**State management**: React hooks only (`useState`, `useEffect`, `useRef`). No external state library.

**Forms**: Client-side only. TODO comments mark where Formspree endpoints should be integrated (`LeadCaptureForm.jsx`, `Contact.jsx`).

## Styling

Tailwind CSS with custom theme in `tailwind.config.js`:
- **Colors**: `orange` (#E67A52), `beige` (#F3F1E7), `blue-dark` (#102C40), `yellow` (#F2DA7E), `green-light` (#AFD9A9), `green-dark` (#0B6863), `salmon` (#F0B6AA), `yellow-light` (#F8EBBA), `mint` (#D1E9DC), `blue-gray` (#B2CFCE), `gray-light` (#C9D4DC)
- **Fonts**: Lexend (headings), DM Sans (body) — loaded via Google Fonts in `index.html`
- Custom animations defined in `src/index.css`: Ken Burns (1–4), fade in/out, marquee

## Assets

- `public/images/` and `public/videos/` — static assets served by Vite
- `ressources/` — brand assets (charte graphique PDF, logos, source images), not deployed
