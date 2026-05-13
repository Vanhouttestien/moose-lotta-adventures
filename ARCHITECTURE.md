# Moose Lotta Adventures — Architecture

## Overview

**Moose Lotta Adventures** is a fully client-side, location-based Progressive Web App (PWA) for children (and adults) to discover narrated audio stories by visiting real-world locations in **Hälleforsnäs, Sweden**. Multiple profiles are supported — each with its own name, language, age group, and progress — all stored locally. The app is named after "Moose Lotta", a friendly moose character who guides children through a Nordic forest-themed experience.

There is **no backend, database, or API** — all story content is static TypeScript data, and all state is persisted to `localStorage`. The app is deployable to Netlify or Cloudflare Pages.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript 5.8 |
| UI Framework | React 19 |
| Router | TanStack Router v1.168 (file-based) |
| Data Fetching | TanStack React Query v5 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 + `tw-animate-css` |
| UI Components | shadcn/ui (Radix primitives) |
| Map | Leaflet 1.9 (OpenStreetMap tiles) |
| Geolocation | `navigator.geolocation.watchPosition` |
| Testing | Vitest 3 + Testing Library |
| i18n | Custom (~56 keys per locale: sv/en) |
| Age Groups | `3-4`, `5-6`, `7-9`, `10-12`, `adult` |
| Package Manager | Bun / npm |
| Deployment | Netlify / Cloudflare Workers |

---

## Directory Structure

```
src/
├── main.tsx                  # Bundle entry — ReactDOM.createRoot
├── App.tsx                   # Root component — <AppStateProvider> → <RouterProvider>
├── router.tsx                # TanStack Router setup with QueryClient
├── routeTree.gen.ts          # Auto-generated route tree (do not edit)
├── styles.css                # Global CSS — Tailwind + design tokens
│
├── routes/                   # File-based route definitions
│   ├── __root.tsx            # Root layout — QueryClientProvider, ProfileGate, <Outlet>, 404/error pages
│   ├── index.tsx             # /  — Home page (language/age selectors, start button)
│   ├── map.tsx               # /map  — Interactive map, GPS tracking, compass, story list, unlock popup
│   ├── rewards.tsx           # /rewards  — Progress bar, treasure cards
│   └── story.$storyId.tsx    # /story/:storyId  — Distance gate, audio, missions, completion
│
├── components/               # Reusable UI components
│   ├── AppShell.tsx          # Page wrapper (max-width container + ProfileBadge + BottomNav)
│   ├── BottomNav.tsx         # Fixed bottom nav bar (Home / Map / Rewards)
│   ├── MapView.tsx           # Leaflet map — colored story pins, moose-pointer marker
│   ├── Compass.tsx           # Directional compass pointing to nearest story
│   ├── UnlockPopup.tsx       # Modal shown on auto-unlock with vibration
│   ├── StoryCard.tsx         # Story list item (emoji, title, distance, status)
│   ├── AudioPlayer.tsx       # Play/pause/replay audio controller
│   ├── GpsPermissionCard.tsx # GPS permission prompt/denied/unavailable
│   ├── Selectors.tsx         # LanguageSelector + AgeSelector toggle buttons
│   ├── ProfileBadge.tsx      # Top-bar pill showing active profile name, tappable
│   ├── ProfilePicker.tsx     # Full-screen profile list on app launch
│   ├── CreateProfile.tsx     # Form to create a new profile (name, age, language)
│   ├── ProfileSwitcher.tsx   # Bottom-sheet modal to switch or delete profiles
│   └── ui/                   # shadcn/ui primitives (~50 components)
│
├── hooks/                    # Custom React hooks
│   ├── useAppState.tsx       # Global state — AppStateProvider context + profiles via storage.ts
│   ├── useGeolocation.ts     # GPS watchPosition wrapper — Haversine distance
│   ├── useSmoothPosition.ts  # Low-pass filter for noisy GPS (alpha=0.25)
│   ├── useCompass.ts         # Device orientation / compass heading
│   └── use-mobile.tsx        # Responsive mobile detection (768px breakpoint)
│
├── engine/                   # Business logic
│   └── storyEngine.ts        # Proximity-based DiscoveryTier computation
│
├── services/                 # Service layer
│   └── storage.ts            # localStorage persistence for AppState
│
├── data/                     # Static content
│   ├── stories.ts            # Story/Village types + 8 story definitions
│   └── i18n.ts               # Swedish/English dictionaries + t() lookup
│
├── lib/                      # Utilities
│   ├── utils.ts              # cn() classname merger
│   ├── error-capture.ts      # Global error capture (SSR recovery)
│   └── error-page.ts         # SSR fallback HTML generator
│
└── assets/
    └── moose-lotta-hero.jpg  # Hero image for landing page
```

---

## Application Flow

### 1. Entry & Initialization

```
index.html
  └─ <script src="/src/main.tsx">
       └─ ReactDOM.createRoot(#root)
            └─ <App />  ──>  <AppStateProvider>
                               ├── <CreateProfile />   (no profiles)
                               ├── <ProfilePicker />   (no active profile)
                               └── <RouterProvider />  (profile active)
```

The `App` component wraps `AppStateProvider` around an `AppGate` component (not a route). `AppGate` reads the profile state and shows either the profile picker, the create-profile form, or the `RouterProvider`. The router is created in `router.tsx` using the auto-generated `routeTree.gen.ts`. A `QueryClient` is provided via context in `__root.tsx`.

### 2. Profile Selection (App Launch)

On every app launch, an **AppGate** in `App.tsx` checks for an active profile:

- **No profiles exist** → shows `CreateProfile` (enter name, pick language & age group)
- **Profiles exist but none active** → shows `ProfilePicker` (list of saved profiles to tap)
- **Profile active** → renders normal route content

After selecting or creating a profile, the user's name, age group, and language are used throughout the session.

### 3. Route Navigation Map

```
/  (HomePage)
├── Select language & age group (saved to active profile)
├── Click "Starta äventryet" ──> navigates to /map
└── Link to /rewards

/map  (MapPage)
├── GPS auto-starts
├── Leaflet map with story pins (colored by discovery tier)
├── Compass overlay pointing to nearest story
├── Story discovery list (sorted: unlocked > uncompleted > nearest)
├── Auto-unlock popup when within range
├── Click story card or pin ──> /story/$storyId
└── Bottom nav to / (Home) and /rewards

/rewards  (RewardsPage)
├── Progress bar (% complete)
├── Grid of reward cards (collected vs locked)
├── Link to /map if no rewards yet
└── Bottom nav to / and /map

/story/$storyId  (StoryPage)
├── Checks GPS proximity (200m radius + manual override)
├── If locked: shows distance + "Jag är här" button
├── If unlocked: shows audio player, story text, missions, reward
├── "Markera som klart" button ──> updates localStorage
└── Link back to /map
```

### 4. State Management

State uses a **profile-based model** with React Context:

```
src/services/storage.ts                # Raw localStorage read/write (key: "moose-lotta:profiles")
       ↕
src/hooks/useAppState.tsx              # AppStateProvider context — loads profiles, manages active
       ↕
(consumed by all route components)
```

**Storage types:**

```typescript
interface ProfileData {
  language: "sv" | "en";
  ageGroup: "3-4" | "5-6" | "7-9" | "10-12" | "adult";
  completedStoryIds: string[];
  rewards: string[];
  onboarded: boolean;
}

interface Profile {
  name: string;            // unique, set by user
  data: ProfileData;       // per-profile progress and settings
  createdAt: string;       // ISO date
}
```

**AppStateProvider** (in `App.tsx`) wraps the whole app with context:
- `profiles: Profile[]` — all saved profiles
- `activeProfile: Profile | null` — currently selected profile
- `selectProfile(name)` — switch active profile
- `createProfile(name, ageGroup, language)` — add new profile and select it
- `deleteProfile(name)` — remove profile and its progress
- `updateProfileData(patch)` — update active profile's settings/progress
- `state: ProfileData` — active profile's data (backward-compat with old single-profile API)
- `update(patch)` — shorthand for `updateProfileData`
- `completeStory(story)` — mark story as done on active profile

Per-profile progress is separated: switching profiles changes which completed stories and rewards are shown. Old single-profile data (`moose-lotta:v1`) is auto-migrated to a nameless profile on first load.

### 5. GPS & Location Pipeline (Core Experience)

This is the heart of the app — the data flow on `/map`:

```
navigator.geolocation.watchPosition()
  │  { enableHighAccuracy: true, maximumAge: 5000 }
  ▼
useGeolocation(gpsEnabled)        # Raw GPS position + status (watching/denied/etc)
  │
  ▼
useSmoothPosition(rawPosition)    # Low-pass filter (alpha=0.25, snap on >200m jump)
  │
  ▼
getStoryStatuses(stories, position, completedIds)
  │  Computes per story: distance, tier, unlocked, completed
  ▼
StoryStatus[] → drives everything:
  ├── MapView — story pin colors (hidden=hides, hint=fuzzy coords, visible, warm, unlocked)
  ├── Compass — bearing to nearest non-completed story
  ├── StoryCard list — sorted by unlock status + distance
  └── UnlockPopup — fires once per story on unlock transition
```

### 6. Discovery Engine (`storyEngine.ts`)

Each story's **DiscoveryTier** is determined by distance from the user's GPS position:

| Tier | Distance | Map Behavior | List Behavior |
|---|---|---|---|
| `hidden` | >3,000 m | Not shown | Not listed |
| `hint` | 300–3,000 m | Fuzzy pin (coords rounded) | Teaser card ("något väntar...") |
| `visible` | 100–300 m | Normal pin | Full StoryCard |
| `warm` | 50–100 m | Highlighted pin | Full StoryCard |
| `unlocked` | <50 m (or < story.radius) | Glowing pin + interaction | Full StoryCard + auto-popup |

The actual unlock radius is `max(story.location.radius, 50)` meters.

### 7. Story Page Proximity Gate

On `/story/:storyId`, a second proximity check enforces **200 meters**:

```
distance = distanceMeters(userPos, story.location)
unlocked = distance <= 200 || manualHere (override button)
```

If locked, only the distance + override button is shown. All content (audio, text, missions, reward) is gated behind `unlocked`.

### 8. Auto-Unlock Popup

On `/map`, a `useEffect` watches for stories that transition to `unlocked`:

```
statuses.find(s => s.unlocked && !s.completed && not yet seen)
  ──> setUnlockedStory(story)
       ──> UnlockPopup modal with vibration + "Lyssna nu" navigation
```

Each story triggers this popup only once per session via a `useRef<Set<string>>`.

### 9. Completion & Rewards

When a user completes a story on a profile:

1. `completeStory(story)` on `useAppState`:
   - Adds `story.id` to the active profile's `completedStoryIds[]`
   - Adds `story.reward` to the active profile's `rewards[]` (deduplicated)
2. `localStorage` is updated via `useEffect` in the provider
3. Per-profile progress: each profile has its own completion data
4. `/rewards` page shows stories filtered by the active profile's age group — completed ones display "✨"
5. Progress bar shows `done / total * 100%`

### 10. Internationalization

Custom i18n module (`data/i18n.ts`) with two dictionaries:

```
sv (48 keys) ←→ en (48 keys)

Usage:  t(language, "key")  →  returns translated string
```

Language selection persists per-profile in `ProfileData.language` and filters stories via `getStories({ language })`.

### 11. Design System

Defined in `src/styles.css` using OKLCH color space:

| Token | Usage |
|---|---|
| `--moss` | Primary green accent |
| `--bark` | Brown accent (Folkets Hus) |
| `--ember` | Warm orange accent (Kolhuset) |
| `--forest-deep` | Dark text |
| `--forest-mist` | Light backgrounds |
| `--gradient-sky` | Home page sky gradient |
| `--shadow-soft` | Diffuse shadow |
| `--shadow-cozy` | Warm, colored shadow |
| `font-display` | "Fraunces" serif (headings) |
| `font-body` | "Nunito" sans-serif (body) |

Accent colors are per-story (`story.accent`: `"moss" | "ember" | "bark"`) and drive story page backgrounds.

---

## Key Data Structures

### Profile

```typescript
interface Profile {
  name: string;            // unique display name chosen by the user
  data: ProfileData;       // settings and progress for this profile
  createdAt: string;       // ISO timestamp
}

interface ProfileData {
  language: Language;
  ageGroup: AgeGroup;
  completedStoryIds: string[];
  rewards: string[];
  onboarded: boolean;
}
```

### Story

```typescript
interface Story {
  id: string;
  villageId: string;
  language: Language;
  ageGroups: AgeGroup[];
  title: string;
  subtitle: string;
  location: { lat: number; lng: number; radius: number; label: string };
  audio: string;          // path to MP3, empty if none
  text: string;           // full story narrative
  mission: string[];      // numbered steps
  reward: string;         // earned on completion
  emoji: string;
  accent: "moss" | "ember" | "bark";
}
```

### StoryStatus (computed by engine)

```typescript
interface StoryStatus {
  story: Story;
  distance: number | null;
  unlocked: boolean;
  completed: boolean;
  tier: DiscoveryTier;  // "hidden" | "hint" | "visible" | "warm" | "unlocked"
}
```

---

## Component Tree

```
<App>
  <AppStateProvider>               (in App.tsx)
    <AppGate>                      selects one of:
      ├── <ProfilePicker />        (profiles exist, none active)
      ├── <CreateProfile />        (no profiles at all)
      └── <RouterProvider>
            <QueryClientProvider>     (in __root.tsx)
              <AppShell>              (in every route)
                <ProfileBadge />     top bar — tap → <ProfileSwitcher>
                <BottomNav />        Home / Map / Rewards
                <Outlet />           page content

        -- HomePage (/) --

        -- MapPage (/map) --
        <MapView />               Leaflet map
        <Compass />               direction overlay
        <GpsPermissionCard />     conditional
        <StoryCard /> × N         discovery list
        <UnlockPopup />           conditional modal

        -- StoryPage (/story/:id) --
        <AudioPlayer />           conditional
        <article> story text      conditional
        <section> missions        conditional
        <section> reward          conditional
        <button> complete         conditional

        -- RewardsPage (/rewards) --
        progress bar
        treasure cards grid
```

---

## Static Content

All 8 story definitions are hardcoded in `src/data/stories.ts`:

| ID | Location | Language |
|---|---|---|
| `folketshus_sv_5_6` | Folkets Hus | Swedish |
| `folketshus_en_5_6` | Folkets Hus | English |
| `dinosaurieskogen_sv_5_6` | Dinosaur Forest | Swedish |
| `dinosaurieskogen_en_5_6` | Dinosaur Forest | English |
| `kolhuset_sv_5_6` | Kolhuset | Swedish |
| `kolhuset_en_5_6` | Kolhuset | English |
| `test_forest_1` | Test Forest | English |

Audio files exist for: `folketshus_swedish.mp3`, `dino_swedish.mp3` (stored in `/public/audio/`).

---

## Deployment

- **Netlify**: SPA hosted via `_redirects` rule (`/* /index.html 200`)
- **Cloudflare**: Configured via `wrangler.jsonc` (vestigial server.ts reference not implemented)
