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

## Conventions
- **Imports:** `@/` alias (e.g. `@/hooks/useAppState`, `@/components/Selectors`)
- **Naming:** PascalCase for components/files, camelCase for hooks/services/utils
- **Exports:** named exports for everything; default export for page components
- **State:** single `useAppState` hook with localStorage persistence
- **i18n:** custom `t(lang, key)` with sv/en dictionaries in `src/data/i18n.ts`
- **CSS:** Tailwind utils + custom OKLCH tokens in `src/styles.css`, use `cn()` from `@/lib/utils`
- **Router:** file-based in `src/routes/` — `__root.tsx`, `index.tsx`, `map.tsx`, `rewards.tsx`, `story.$storyId.tsx`
- **Types:** story/village types in `src/data/stories.ts`
- **Components:** shadcn/ui pattern — `cn()`, forwardRef, Radix primitives
- **Testing:** Vitest + `@testing-library/react`, jsdom, jest-dom matchers
- **Deployment:** Netlify SPA (`public/_redirects`)
