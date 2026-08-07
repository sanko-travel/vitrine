# Sanko - Site vitrine

Site vitrine de **Sanko**, marque communautaire de voyage qui permet aux créateurs de contenu d'organiser des voyages de groupe avec leurs communautés.

**URL** : https://withsanko.com

## Stack technique

- **Frontend** : React 19, Vite, Tailwind CSS 3
- **Backend** : Cloudflare Workers (API formulaires)
- **Email** : Resend API
- **Anti-spam** : Cloudflare Turnstile
- **Analytics** : Cloudflare Web Analytics + Microsoft Clarity
- **Cartes** : Leaflet + React Leaflet
- **Hébergement** : Cloudflare Workers (static assets + SPA fallback)

## Installation

### Prérequis

- Node.js 18+
- npm

### Lancer le projet

```bash
# 1. Cloner le repo
git clone <url-du-repo>
cd vitrine

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

> Le site est protégé par un mot de passe temporaire : `samsam`. À supprimer avant le lancement.

### Build de production

```bash
npm run build     # Génère le dossier dist/
npm run preview   # Prévisualiser le build localement
```

### Déployer sur Cloudflare

```bash
npx wrangler deploy
```

Secrets Cloudflare nécessaires (à configurer via `wrangler secret put`) :
- `RESEND_API_KEY` — clé API Resend pour l'envoi d'emails
- `TURNSTILE_SECRET_KEY` — clé secrète Cloudflare Turnstile

## Structure du projet

```
src/
├── components/          # Composants UI réutilisables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── VideoHero.jsx
│   ├── DestinationsGrid.jsx
│   ├── Testimonials.jsx
│   ├── StatsBanner.jsx
│   ├── LeadCaptureForm.jsx
│   ├── CookieBanner.jsx
│   ├── JsonLd.jsx
│   ├── StickerLabel.jsx
│   └── voyage/          # Composants page voyage
├── pages/               # Pages (composent les sections)
│   ├── Home.jsx
│   ├── Manifeste.jsx
│   ├── CreerMonVoyage.jsx
│   ├── Marques.jsx
│   ├── Contact.jsx
│   ├── Voyage.jsx
│   └── MainLayout.jsx
├── hooks/
│   ├── useScrollReveal.js
│   ├── useTurnstile.js
│   └── usePageMeta.js
├── data/
│   └── voyages/         # Données des voyages (itinéraires, prix, etc.)
├── App.jsx              # Router + PasswordGate
├── main.jsx             # Entry point + Clarity init
└── index.css            # Tailwind + animations custom

worker/
└── index.js             # API Cloudflare Worker (formulaires → Resend)

public/
├── images/              # Photos, logos, assets
├── videos/              # Vidéos hero par page
├── robots.txt
├── sitemap.xml
└── llms.txt
```

## Routes

| URL | Page | Description |
|-----|------|-------------|
| `/` | Home | Page d'accueil |
| `/notre-concept` | Manifeste | Concept, valeurs, vision |
| `/creer-mon-voyage` | CreerMonVoyage | Page créateurs + formulaire |
| `/marques` | Marques | Page partenariats marques |
| `/contact` | Contact | Formulaire de contact |
| `/voyage/:slug` | Voyage | Page individuelle d'un voyage |
| `/mentions-legales` | MentionsLegales | Mentions légales |
| `/politique-de-confidentialite` | PolitiqueConfidentialite | RGPD |
| `/conditions-generales-de-vente` | CGV | CGV |

## Dépendances

| Package | Usage |
|---------|-------|
| `react` / `react-dom` | Framework UI |
| `react-router-dom` | Routing SPA |
| `leaflet` / `react-leaflet` | Cartes interactives (itinéraires voyage) |
| `@microsoft/clarity` | Analytics comportemental (heatmaps, recordings) |
| `tailwindcss` | Utility-first CSS |
| `vite` | Build tool + dev server |
| `@vitejs/plugin-react` | Support JSX/React dans Vite |
