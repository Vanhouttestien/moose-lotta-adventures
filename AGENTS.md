# moose-lotta-adventures — Agent Guide

## Stack
- React 19, TypeScript 5.8, Vite 7, Tailwind CSS v4, TanStack Router, TanStack Query
- shadcn/ui (New York), lucide-react, Leaflet
- Vitest + Testing Library, ESLint 9 + Prettier

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run format` — Prettier
- `npm test` — Vitest

## Project structure
- `src/hooks/useAppState.tsx` — `AppStateProvider` context + profile system
- `src/services/storage.ts` — localStorage persistence for profiles
- `src/data/stories.ts` — `AgeGroup`, `Language`, `Story`, `Village` types & data
- `src/data/i18n.ts` — sv/en dictionaries, `t()` lookup

## Conventions
- **Imports:** `@/` alias (e.g. `@/hooks/useAppState`, `@/components/Selectors`)
- **Naming:** PascalCase for components/files, camelCase for hooks/services/utils
- **Exports:** named exports for everything; default export for page components
- **State:** `AppStateProvider` context with per-profile localStorage persistence
- **Profiles:** each profile stores name, ageGroup, language, and progress. App shows picker/create on launch via `ProfileGate` in `__root.tsx`. Switch via `ProfileBadge` → `ProfileSwitcher`.
- **i18n:** custom `t(lang, key)` with sv/en dictionaries in `src/data/i18n.ts`
- **CSS:** Tailwind utils + custom OKLCH tokens in `src/styles.css`, use `cn()` from `@/lib/utils`
- **Router:** file-based in `src/routes/` — `__root.tsx`, `index.tsx`, `map.tsx`, `rewards.tsx`, `story.$storyId.tsx`
- **Types:** story/village types in `src/data/stories.ts`
- **Components:** shadcn/ui pattern — `cn()`, forwardRef, Radix primitives
- **Testing:** Vitest + `@testing-library/react`, jsdom, jest-dom matchers
- **Deployment:** Netlify SPA (`public/_redirects`)
