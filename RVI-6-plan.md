# Feature Implementation Plan — RVI-6: Card Subcomponents

**Overall Progress:** `100%`

## TLDR
Build 6 independent, typed React subcomponents for the product card — CardImage, CardPricing, ColorSwatches, CardInfo, PromoMessage, StarRating — each accepting props from the Phase 1 type model and degrading gracefully when data is absent.

## Critical Decisions
- **No local state in subcomponents** — selected variant is passed as a prop; state lives at ProductCard level (Phase 3)
- **Single-variant products** — ColorSwatches renders null (no rail at all)
- **Swatch overflow** — 5 visible on desktop, 3 on mobile via responsive CSS (no JS)
- **listPrice strike-through** — only shown when listPrice exists AND differs from offerPrice
- **Out-of-stock swatches** — visually muted but selectable; full in-stock logic deferred
- **No empty space when hidden** — PromoMessage and StarRating return null when data is absent

## Tasks

- [x] 🟩 **Step 1: CardImage**
  - [x] 🟩 Portrait aspect ratio container (locks dimensions to prevent CLS)
  - [x] 🟩 Render `next/image` when `imageUrl` is not null
  - [x] 🟩 "No image available" gray fallback when `imageUrl` is null or load fails
  - [x] 🟩 Badge overlay (bottom-left): BEST SELLER (blue/teal), NEW (blue), MADE IN USA (dark)

- [x] 🟩 **Step 2: CardPricing**
  - [x] 🟩 Bold offer price formatted to 2 decimal places
  - [x] 🟩 Struck-through list price (only when listPrice exists and differs from offerPrice)
  - [x] 🟩 Optional secondary price line (e.g. "$299.99 for Full Suit")

- [x] 🟩 **Step 3: ColorSwatches**
  - [x] 🟩 Row of circular color swatch buttons with hex background
  - [x] 🟩 Selected swatch gets dark ring/border
  - [x] 🟩 Desktop: show max 5, mobile: show max 3 — "+N" overflow pill for the rest
  - [x] 🟩 Out-of-stock swatches render muted (reduced opacity)
  - [x] 🟩 Returns null when only 1 variant

- [x] 🟩 **Step 4: CardInfo**
  - [x] 🟩 Bold brand name
  - [x] 🟩 Regular-weight product name as a link to variant-specific PDP URL

- [x] 🟩 **Step 5: PromoMessage**
  - [x] 🟩 Blue text + inline info (ⓘ) icon
  - [x] 🟩 Returns null when `promo` is absent

- [x] 🟩 **Step 6: StarRating**
  - [x] 🟩 Filled star icon + numeric average + review count in parentheses
  - [x] 🟩 Returns null when `rating` is absent

- [x] 🟩 **Step 7: Barrel export**
  - [x] 🟩 Create `src/components/ProductCard/index.ts` exporting all 6 components

- [x] 🟩 **Step 8: Commit and push**
  - [x] 🟩 Commit all subcomponents, push to remote
