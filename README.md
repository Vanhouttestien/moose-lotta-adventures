# Moose Lotta Adventures 🫎

A location-based adventure app where children discover narrated historical stories by visiting real-world places, guided by a friendly moose named Moose Lotta.

Built for **Hälleforsnäs, Sweden** — fully client-side, no backend.

## Quick start

```
npm install
npm run dev       # http://localhost:5173
npm test          # vitest
npm run lint      # eslint
npm run format    # prettier
npm run build     # vite build → dist/
```

## Stack

React 19, TypeScript 5.8, Vite 7, Tailwind CSS v4, TanStack Router, TanStack Query, Leaflet, shadcn/ui.

## How it works

1. Create a profile (name, age group, language)
2. GPS finds your location on the map
3. Walk near a story pin to unlock it
4. Listen to the narrated story, read the transcript, complete the mission
5. Collect rewards and track progress

## Project structure

```
src/
├── routes/          # File-based pages: index, map, story.$storyId, rewards
├── components/      # Reusable: MapView, AudioPlayer, StoryCard, etc.
├── hooks/           # useAppState, useGeolocation, useSmoothPosition
├── engine/          # Proximity-based discovery tier logic
├── data/            # Story definitions, i18n dictionaries (sv/en)
├── services/        # localStorage persistence
├── lib/             # cn(), audio Web API helpers
└── styles.css       # Tailwind + OKLCH design tokens
```

## Data

All story content is static TypeScript. Audio (`public/audio/`) and images (`public/images/stories/`) are static files. State lives in `localStorage` — per-profile progress, language, and age group.

## Deployment

Build produces a static SPA in `dist/`. Deploy to Netlify, Cloudflare Pages, or any static host.
