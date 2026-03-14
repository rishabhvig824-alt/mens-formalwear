# Feature Implementation Plan — RVI-8: Skeleton Loaders and Loading States

**Overall Progress:** `67%`

## TLDR
Build `SkeletonCard` with shimmer animation mirroring the real card dimensions, then integrate progressive skeleton-to-card reveal with crossfade transitions and accessibility announcements into the PGP page.

## Critical Decisions
- **SkeletonCard takes no props** — it mirrors fixed card dimensions, purely presentational
- **Shimmer via `animate-pulse`** — Tailwind built-in, no custom keyframes needed
- **Progressive reveal via staggered setTimeout** — each card reveals individually with a 50ms per-card delay
- **Crossfade via `transition-opacity duration-200`** — skeleton and real card swap opacity in place
- **Loading simulation on page.tsx** — requires `"use client"` + `useState` + `useEffect` with ~800ms delay
- **Skeleton count = real card count** — renders `products.length` skeletons to lock grid dimensions

## Tasks

- [x] 🟩 **Step 1: SkeletonCard component**
  - [x] 🟩 Portrait image placeholder: `aspect-[3/4]` with `animate-pulse bg-gray-200`
  - [x] 🟩 Price row placeholders (2 rows: offer price + secondary price)
  - [x] 🟩 Swatch rail placeholder (row of 3 small circles)
  - [x] 🟩 Text row placeholders (2 rows: brand + product name)
  - [x] 🟩 Promo row placeholder
  - [x] 🟩 Rating row placeholder
  - [x] 🟩 Add to barrel export in `index.ts`

- [x] 🟩 **Step 2: Integrate loading states into page.tsx**
  - [x] 🟩 Convert page to `"use client"` component
  - [x] 🟩 `loadingIds` state: tracks which product IDs have resolved (empty = all loading)
  - [x] 🟩 On mount: simulate 800ms load delay, then reveal cards progressively (50ms stagger per card)
  - [x] 🟩 Grid region: `aria-busy="true"` while any cards are loading
  - [x] 🟩 `aria-live="polite"` visually-hidden region announces loading / loaded states
  - [x] 🟩 Each card slot: render `SkeletonCard` → crossfade to `ProductCard` when its ID resolves

- [ ] 🟥 **Step 3: Commit and push**
  - [ ] 🟥 Commit SkeletonCard + updated page, push to remote
