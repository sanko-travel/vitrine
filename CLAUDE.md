# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sanko** (anciennement Sankofa) — site vitrine / landing page pour une agence de voyage qui permet aux créateurs de contenu d'organiser des voyages de groupe avec leurs communautés. Built with React 18, Vite, and Tailwind CSS. Deployed on Cloudflare Workers.

**Tagline** : "Sanko — catalyseur de rencontres". Ne plus être perçue comme une agence de voyage responsable, mais comme une marque qui rassemble des communautés autour d'expériences qui ont du sens.

**Domaine** : withsanko.com

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (Vite)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npx wrangler dev   # Run Cloudflare Worker locally (forms API)
npx wrangler deploy # Deploy to Cloudflare Workers
```

No testing or linting tools are configured.

## Architecture

### Routing (React Router DOM v6, BrowserRouter in `App.jsx`)
- `/` → `Home.jsx`
- `/notre-equipe` → `Manifeste.jsx`
- `/contact` → `Contact.jsx`
- `/creer-mon-voyage` → `CreerMonVoyage.jsx`
- `*` → fallback to Home

Note : le site est protégé par un mot de passe temporaire (`PasswordGate` dans `App.jsx`, mot de passe = `samsam`). À supprimer avant le lancement.

### Structure des fichiers

```
src/
├── components/       # Sections UI réutilisables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── VideoHero.jsx
│   ├── IntroBlock.jsx
│   ├── HowItWorks.jsx
│   ├── DestinationsGrid.jsx
│   ├── StatsBanner.jsx
│   ├── ProfileSelector.jsx
│   ├── PartnersBanner.jsx
│   ├── Testimonials.jsx
│   ├── LeadCaptureForm.jsx
│   ├── StickerLabel.jsx      # Composant sticker/pill badge de marque
│   └── TripsGallery.jsx
├── hooks/
│   ├── useTurnstile.js       # Intégration Cloudflare Turnstile (captcha)
│   └── useScrollReveal.js    # IntersectionObserver pour animations scroll
├── pages/
│   ├── Home.jsx              # Compose les sections de la page d'accueil
│   ├── Manifeste.jsx         # Page "Notre équipe" / manifeste
│   ├── Contact.jsx           # Formulaire de contact
│   └── CreerMonVoyage.jsx    # Page créateurs avec FAQ
├── App.jsx                   # Router + PasswordGate
├── main.jsx                  # Entry point
└── index.css                 # Tailwind + animations custom
```

**Pages** (`src/pages/`) composent plusieurs section components. **Components** (`src/components/`) sont des sections UI autonomes.

**State management** : React hooks uniquement (`useState`, `useEffect`, `useRef`). Pas de state library externe.

### Home.jsx — Ordre des sections

```
VideoHero      → fond dark (vidéo + gradient teal)
IntroBlock     → fond beige
StatsBanner    → fond teal
DestinationsGrid → fond beige (scroll horizontal)
HowItWorks     → fond beige
ProfileSelector → fond teal
PartnersBanner  → fond beige
Testimonials    → fond gray-50
LeadCaptureForm → fond teal
```

Règle : ne JAMAIS empiler deux sections avec le même fond. Alterner light/dark.

### Backend — Cloudflare Worker

`worker/index.js` — API serverless qui gère les soumissions de formulaires :
- **Endpoint** : `POST /api/send-mail`
- **Anti-spam** : Honeypot fields (website, number, newsletter) + Cloudflare Turnstile
- **Email** : Envoi via Resend API (`env.RESEND_API_KEY`)
- **Formulaires gérés** : `lead-capture`, `contact`, `creer-mon-voyage`
- **Turnstile site key** : `0x4AAAAAAEB9384p5Vu3VKRL` (dans `useTurnstile.js`)
- **Secrets Cloudflare** : `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`

`wrangler.toml` — config Cloudflare Workers avec static assets (SPA fallback).

---

## Charte Graphique — Identité de Marque

### Qui est Sanko ?

Sanko est une **marque communautaire de voyage** pour créateurs de contenu. L'identité visuelle est : **chaleureuse, authentique, communautaire, fun mais premium**. Penser "aventure entre amis" — jamais corporate, jamais froid.

Le nom "Sanko" vient du mot Akan signifiant "retourner en arrière pour mieux avancer" (symbole adinkra Sankofa).

### Éléments de marque signature

1. **Sticker labels** (SIGNATURE ELEMENT — voir charte "London")
   - Badges pill arrondis avec couleurs de marque, disposés autour des titres avec rotations
   - 3 stickers récurrents : **"Impact"** (fond teal), **"Voyage"** (fond yellow), **"Influence"** (fond coral)
   - Autres mots possibles : "Aventure", "Pour tous", "Créateurs", "Notre histoire"
   - Font : `font-accent` (Bricolage Grotesque), `font-semibold`, `text-sm`
   - Rotation légère (-2deg à +3deg), positionnés de façon "collée" autour du titre principal
   - Composant : `<StickerLabel text="Impact" color="teal" />`
   - Utiliser sur les hero sections, au-dessus des titres de section, sur les visuels clés
   - Référence charte : sur le visuel "London", les 3 stickers sont dispersés autour du mot géant, créant un effet playful et identitaire

2. **Oiseau Sanko / symbole adinkra** (voir charte "Des histoires à vivre")
   - Symbole oiseau stylisé (adinkra Sankofa) — l'élément graphique le plus identitaire de la marque
   - Utilisé en **watermark semi-transparent blanc** par-dessus les photos (grande taille, centré)
   - Sur fond sombre/photo : blanc avec opacité ~30-40%
   - Sur fond clair : teal avec opacité ~10-20%
   - Visible sur les visuels de la charte comme overlay dominant au-dessus des photos de groupe

3. **Logo "sanko®"**
   - Typographie : texte "sanko" en minuscules, font bold, avec symbole ® en exposant
   - Couleurs : blanc sur fond teal, ou teal sur fond clair
   - Toujours positionné en bas à droite des visuels de marque
   - Bande teal en bas des visuels hero avec le logo

4. **Phrase signature**
   - "Des histoires à vivre" — utilisée sur les affiches/flyers
   - Texte blanc bold en grosses lettres sur photo avec overlay teal
   - Accompagnée des 3 stickers (Impact, Influence, Voyage)

### Style photographique (Iconographie — voir charte)

La charte définit un moodboard précis. Les photos doivent refléter :

**Sujets obligatoires :**
- **Groupes diversifiés** (ethniquement, culturellement) — c'est NON NÉGOCIABLE
- **Moments de partage** : repas collectifs autour d'une table locale, selfies de groupe, rires partagés
- **Aventure outdoor** : randonnées, rochers, montagnes, silhouettes au coucher de soleil
- **Couples/duos** qui rient ensemble, moments de complicité naturelle
- **Vues spectaculaires** : Petra (Jordanie), désert, côtes, monuments

**Style visuel :**
- **Candide** — jamais posé, jamais mis en scène. Pris sur le vif.
- **Éclairage naturel chaud** — golden hour, lumière du jour, pas de flash
- **Couleurs chaudes** — tons terre, ciel bleu, végétation
- **Diversité visible** — chaque image de groupe doit montrer une mixité ethnique
- **Énergie positive** — sourires, rires, énergie du groupe

**JAMAIS :**
- Photos stock génériques / poses corporate
- Un seul type ethnique dans un groupe
- Photos sombres/froides/mélancoliques
- Tourisme de masse / resorts / piscines d'hôtel
- Photos posées avec sourires forcés

### Composition des visuels de marque (référence charte)

Le visuel "London" de la charte montre le pattern standard pour les visuels hero de destination :
1. **Photo de destination** en plein écran (ici Big Ben / Parlement de Westminster)
2. **Nom de destination en TRÈS GRAND** — typo blanche extra-bold, taille massive (style `text-8xl`+), centrée
3. **3 stickers** (Impact, Voyage, Influence) disposés autour du titre avec rotations variées
4. **Oiseau Sanko** en overlay blanc semi-transparent, positionné en haut à droite
5. **Bande teal en bas** avec le logo "sanko®" aligné à droite

Le visuel "Des histoires à vivre" montre le pattern pour les affiches/supports :
1. **Photo de groupe diversifié** en fond
2. **Oiseau Sanko** en watermark blanc géant centré
3. **Texte bold blanc** "Des histoires à vivre" en overlay sur la photo
4. **Stickers** dispersés autour du texte
5. **Bande teal en bas** avec logo

### Sites de référence

Le design s'inspire de 5 sites :
- **Copines de Voyage** — tonalité chaleureuse, communauté féminine
- **WeRoad** — voyages de groupe millennials, design moderne
- **Evaneos** — premium, sur-mesure, visuels immersifs
- **MeetPe** — communauté, rencontres, couleurs vives
- **ByNativ** — authenticité, local, impact positif

---

## Design System — RÈGLES STRICTES (OBLIGATOIRES)

### Palette de couleurs

| Nom | Hex | Classe Tailwind | Usage |
|-----|-----|-----------------|-------|
| Teal | `#025961` | `text-teal`, `bg-teal` | Couleur principale. Titres, fonds de section, navbar |
| Coral | `#ea573d` | `text-coral`, `bg-coral` | Accent principal. CTA, boutons, badges. JAMAIS en fond de section |
| Yellow | `#f8a009` | `text-yellow`, `bg-yellow` | Accent secondaire. Stats, badges. JAMAIS en fond de section |
| Beige | `#f7fafa` | `bg-beige` | Fond clair principal (quasi-blanc) |
| Mint | `#d4eeeb` | `bg-mint` | Fond clair alternatif |
| Green-light | `#b3e0dc` | `bg-green-light` | Fond clair / cartes |
| Salmon | `#f4a99a` | `bg-salmon` | Accent décoratif (grilles) |
| Yellow-light | `#fde5a0` | `bg-yellow-light` | Fond clair accent (ex: carte "temps de réponse") |
| Blue-gray | `#a8d5d1` | `bg-blue-gray` | Accent décoratif (grilles) |
| Gray-light | `#e5e7eb` | `bg-gray-light` | Fond d'input, séparateurs |

**Aliases legacy** : `orange` → coral, `blue-dark` → teal, `green-dark` → teal

### Typographie

Chargées via Google Fonts dans `index.html` :

| Font | Classe Tailwind | Usage |
|------|-----------------|-------|
| Lexend | `font-heading`, `font-display` | Titres, headings, nombres |
| DM Sans | `font-body` | Corps de texte, paragraphes, labels |
| Bricolage Grotesque | `font-sticker`, `font-accent` | Sticker labels, badges pill |

Hiérarchie :
- **Hero headlines** : `text-5xl md:text-6xl lg:text-7xl font-bold font-display` (Lexend)
- **Titres de section** : `text-3xl md:text-4xl lg:text-5xl font-bold font-display` — teal sur fond clair, blanc sur fond sombre
- **Sous-titres** : `text-lg md:text-xl text-gray-600` (DM Sans)
- **Corps de texte** : `text-base text-gray-700 leading-relaxed` (DM Sans)
- **Sticker text** : `font-accent font-semibold text-sm` dans les badges pill

### RÈGLES DE CONTRASTE — TOLÉRANCE ZÉRO

**JAMAIS de texte clair sur fond clair. JAMAIS de texte sombre sur fond sombre. Chaque texte doit avoir un contraste suffisant (WCAG AA minimum, ratio 4.5:1).**

Combinaisons autorisées :

| Couleur texte | Fonds autorisés |
|---|---|
| Blanc (#FFFFFF) | teal, coral, overlays sombres sur images (rgba(0,0,0,0.5)+), gradients sombres |
| Teal (#025961) | blanc, beige, mint, yellow-light, gray-light |
| Texte sombre (#1a1a1a) | blanc, beige, mint, green-light, salmon, yellow-light, gray-light |
| Coral (#ea573d) | blanc, beige (accents/liens uniquement, pas le body text) |
| `text-gray-600` / `text-gray-700` | blanc, beige, gray-50 (pour body text sur fond clair) |

Combinaisons INTERDITES :
- Blanc sur blanc/beige/mint/green-light/yellow-light/salmon — **JAMAIS**
- Blanc sur yellow (#f8a009) — contraste insuffisant
- Teal sur teal ou coral — **JAMAIS**
- Gris clair sur blanc — **JAMAIS**
- Texte sur image SANS overlay ou text-shadow — **JAMAIS**
- `text-white/50` ou plus faible opacité sur fond sombre — **TROP FAIBLE**, minimum `/80`
- `text-teal/70` sur fond beige pour du body text — utiliser `text-gray-700` à la place
- `bg-white/5` ou `bg-white/10` pour des cartes — **INVISIBLE**, utiliser `bg-white` opaque

Overlay texte sur image — TOUJOURS appliquer l'un de :
1. Gradient sombre : `bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30`
2. Overlay solid : `bg-black/50` ou `bg-teal/80`
3. Text-shadow : `text-shadow: 0 2px 8px rgba(0,0,0,0.6)`
4. Bannière/carte solide derrière le texte

### Layout & Espacement

- **Padding section** : minimum `py-20`, préférer `py-24` ou `py-28`
- **Max-width contenu** : `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (ou `max-w-5xl`, `max-w-6xl`)
- **Rythme sections** : alterner fond clair et fond sombre/coloré. Jamais 2 sections consécutives avec le même fond.
- **Padding mobile** : minimum `px-4` ou `px-6`. Le contenu ne doit JAMAIS toucher les bords de l'écran.
- **Espacement vertical** : chaque section doit sembler être son propre "écran"

### Couleur par type de section

**Sections hero (full-width, immersives) :**
- Image/vidéo plein écran + gradient overlay : `bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30`
- Texte blanc, CTA coral `rounded-full`
- Sticker labels au-dessus du titre

**Sections contenu (fond clair) :**
- Fond : `bg-white`, `bg-beige` ou `bg-gray-50`
- Titre : `text-teal`
- Corps : `text-gray-700`
- Cartes : `bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300`

**Sections colorées (fond teal) :**
- Fond : `bg-teal`, texte blanc
- Sous-titres : `text-white/90` minimum
- JAMAIS `bg-yellow` ou `bg-coral` en fond de section — ce sont des couleurs d'ACCENT

**Sections CTA / formulaire :**
- Fond : `bg-teal`
- Texte blanc, inputs `bg-white text-teal rounded-full`
- Bouton submit : `bg-coral text-white rounded-full`

---

## Composants — Patterns d'implémentation

### Boutons

- **Primary** : `bg-coral text-white rounded-full px-6 py-3 font-semibold hover:bg-coral/90 transition-colors`
- **Secondary** : `border-2 border-white text-white rounded-full px-6 py-3 font-semibold hover:bg-white hover:text-teal transition-colors`
- Toujours `rounded-full` (jamais de coins carrés)
- Toujours `font-semibold`
- Touch target minimum : `py-3 px-6`

### Cartes

- `bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300`
- Avec bordure top colorée pour variante : `border-t-4 border-coral` (ou `border-teal`, `border-yellow`)
- Ring subtile : `ring-1 ring-teal/5`
- Contenu interne : `p-8`
- Titre en `font-bold text-teal`, description en `text-gray-600`

### StickerLabel (composant)

```jsx
<StickerLabel text="Impact" color="teal" />
<StickerLabel text="Voyage" color="coral" />
<StickerLabel text="Aventure" color="yellow" />
```

Props : `text` (string), `color` (`teal` | `coral` | `yellow`), `className` (optionnel)

### Scroll Reveal (hook)

```jsx
import useScrollReveal from '../hooks/useScrollReveal'

function MySection() {
  const ref = useScrollReveal()
  return (
    <section>
      <div ref={ref}>
        <h2 className="reveal">Titre</h2>
        <p className="reveal">Contenu</p>
      </div>
    </section>
  )
}
```

- Le hook observe le conteneur via IntersectionObserver
- Les enfants avec la classe `reveal` sont animés avec un stagger de 100ms
- Animation : fade-in + slide-up (32px → 0, opacity 0 → 1, 700ms ease-out)
- Classes CSS dans `index.css` : `.reveal` et `.reveal.visible`
- NE PAS utiliser sur VideoHero (déjà visible) ni DestinationsGrid (déjà animé)

### Navbar

- Fixed top, transparent par défaut → `bg-teal shadow-lg` au scroll
- Logo "Sanko" en texte (pas d'image pour l'instant)
- CTA fixe `bg-coral text-white rounded-full` (pas de changement de couleur au scroll)
- Menu mobile avec burger

### Footer

- `bg-teal py-16`
- Texte : `text-white/80` pour les liens, `text-white/70` pour le copyright
- Liens sociaux : Instagram, TikTok, YouTube

### Testimonials

- Fond : `bg-gray-50` (sur la home)
- Cartes blanches opaques avec :
  - Guillemet décoratif `"` en `text-coral/30 text-5xl`
  - 5 étoiles jaunes (`text-yellow`)
  - Texte quote en `text-gray-700 italic`
  - Handle en `text-teal font-semibold`

### StatsBanner

- Fond `bg-teal py-20`
- Nombres animés (count-up) avec IntersectionObserver
- Valeurs en `text-yellow font-bold text-5xl`
- Labels en `text-white`
- Séparateurs verticaux entre les stats sur desktop

### DestinationsGrid

- Grille CSS complexe avec scroll horizontal piloté par le scroll vertical
- Labels de destination avec pill badge : `bg-teal/60 backdrop-blur-sm px-3 py-1 rounded-full`
- Badge "14 pays" avec style Bricolage Grotesque : `font-accent`
- Blocs de couleur avec `ring-1 ring-teal/10`

### Formulaires

3 formulaires, tous avec :
- **Honeypot** : champs cachés (website, number, newsletter) pour anti-spam
- **Turnstile** : captcha Cloudflare via hook `useTurnstile()`
- **Envoi** : `POST /api/send-mail` → Worker Cloudflare → Resend API
- Boutons submit : `bg-coral text-white rounded-full`
- Labels : `text-teal font-semibold text-sm`
- Inputs : `bg-gray-light/40 text-teal border-teal/20 rounded-xl`

### Pages secondaires

**Manifeste** (`/notre-equipe`) :
- Hero avec gradient overlay + sticker label
- Section "Pourquoi Sanko" : texte `text-gray-700`
- Cartes valeurs : `bg-white border-t-4` (coral/teal/yellow) + icônes SVG
- Section vision : `bg-teal`, texte `text-white/90 italic`

**CreerMonVoyage** (`/creer-mon-voyage`) :
- Hero avec gradient overlay + sticker label
- "Comment ça marche" : timeline visuelle avec cercles numérotés (`bg-teal`) et ligne verticale
- Cartes avantages : `bg-white border-t-4` + icônes SVG
- Témoignages créateurs : cartes blanches opaques avec guillemets
- FAQ : accordion avec bordure gauche coral sur réponse ouverte

**Contact** (`/contact`) :
- Formulaire dans carte blanche avec hover shadow
- Carte "Infos pratiques" : `bg-teal`
- Carte "Temps de réponse" : `bg-yellow-light` avec texte teal

---

## Animations & Interactions

- **Scroll reveal** : `.reveal` → `.reveal.visible` via `useScrollReveal()`. 700ms ease-out.
- **Hover cartes** : `hover:shadow-xl hover:scale-[1.02] transition-all duration-300`
- **Hover boutons** : changement de couleur uniquement, pas de scale. `transition-colors duration-200`
- **Ken Burns** : zoom lent sur images hero (défini dans `index.css`)
- **Marquee** : défilement horizontal infini pour logos partenaires
- **Count-up** : animation compteur sur StatsBanner (1800ms)
- **Mots cycliques** : VideoHero cycle 3 mots avec fade (2400ms)
- **ÉVITER** : animations brusques, bounce excessif, éléments qui tournent, parallax excessif

---

## Images & Assets

- `public/images/paysages/` — photos de paysages de voyage
- `public/videos/` — vidéos hero (campfire, meadow, village, forest, etc.)
- `public/images/logo/` — logos Sanko (PNG)
- `ressources/` — assets source (charte graphique PDF, logos HD) — PAS déployés
- Toutes les images : `object-cover` pour éviter la distorsion
- Images hero : plein écran avec overlay sombre
- Images dans les cartes : ratio cohérent (`aspect-[3/2]` ou `aspect-[4/3]`)
- Toujours `alt` pour l'accessibilité
- `loading="lazy"` pour images sous le fold

---

## Responsive Design

- Approche mobile-first
- Grilles : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (jamais 4+ colonnes sauf logo banner)
- Tailles de police DOIVENT diminuer sur mobile : `text-5xl` desktop → `text-3xl` mobile
- Masquer les éléments décoratifs sur mobile si encombrants
- Sections plein écran sur mobile, contenues sur desktop

---

## Anti-patterns — NE JAMAIS FAIRE

1. **Texte blanc sur fond blanc/clair** — le pattern #1 interdit
2. **Cartes translucides** (`bg-white/5`, `bg-white/10`) — utiliser `bg-white` opaque
3. **Opacité de texte trop faible** (`/50`, `/40`) — minimum `/80` sur fond sombre
4. **`text-teal/70` pour body text** — utiliser `text-gray-700` à la place
5. **Texte directement sur image busy** sans overlay ou shadow
6. **`bg-coral` ou `bg-yellow` en fond de section** — ce sont des accents uniquement
7. **Boutons `rounded-lg`** — toujours `rounded-full` (pill shape)
8. **CTA qui change de couleur au scroll** — fixer en `bg-coral`
9. **Emojis dans les composants** — utiliser des icônes SVG (style Heroicons outline)
10. **Tiny text** (en dessous de `text-sm` pour body content)
11. **Texte centré** sur paragraphes de plus de 2 lignes — `text-left`
12. **Texte plein écran** sans max-width — toujours contraindre avec `max-w-3xl` ou similaire
13. **Border-radius incohérent** — `rounded-2xl` pour cartes, `rounded-full` pour boutons
14. **Contenu placeholder générique** — chaque section doit être intentionnelle et complète
