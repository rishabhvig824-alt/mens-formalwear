# Feature Implementation Plan — RVI-5: Project Scaffolding, Types, and Mock Data

**Overall Progress:** `100%`

## TLDR
Scaffold a Next.js 14 + Tailwind + TypeScript project in the `mens-formalwear` repo and create the typed data layer with 8-10 mock products so component development can begin in Phase 2.

## Critical Decisions
- **Badges at variant level** — each variant can have its own badge (or none), not product-level
- **Prices as dollar floats** — stored as `number` (e.g., `999.99`), formatted to 2 decimals at render time
- **Mock images from Unsplash** — external URLs for men's formal wear, no local image files
- **Font: Inter** — via `next/font/google`, closest match to the Figma design

## Tasks

- [x] 🟩 **Step 1: Scaffold Next.js project**
  - [x] 🟩 Run `create-next-app` with App Router, TypeScript, Tailwind, ESLint
  - [x] 🟩 Verify dev server starts cleanly

- [x] 🟩 **Step 2: Configure folder structure**
  - [x] 🟩 Create `src/types/`, `src/data/`, `src/components/ProductCard/` directories
  - [x] 🟩 Clean out boilerplate from `page.tsx`

- [x] 🟩 **Step 3: Set up root layout and global styles**
  - [x] 🟩 Configure Inter font via `next/font/google` in `layout.tsx`
  - [x] 🟩 Set page metadata (title, description)
  - [x] 🟩 Confirm Tailwind directives in `globals.css`

- [x] 🟩 **Step 4: Define TypeScript interfaces**
  - [x] 🟩 `Product` — id, brand, name, slug, rating?, promo?, secondaryPrice?, variants[]
  - [x] 🟩 `Variant` — id, color (name + hex), imageUrl (string | null), offerPrice, listPrice?, url, inStock, badge?
  - [x] 🟩 `Badge` — union type: "BEST SELLER" | "NEW" | "MADE IN USA"
  - [x] 🟩 `Rating` — average (number), count (number)

- [x] 🟩 **Step 5: Create mock product dataset**
  - [x] 🟩 Product with no image (null imageUrl on default variant)
  - [x] 🟩 Product with "BEST SELLER" badge variant
  - [x] 🟩 Product with "NEW" badge variant
  - [x] 🟩 Product with "MADE IN USA" badge variant
  - [x] 🟩 Product with no badge
  - [x] 🟩 Product with 1 color variant
  - [x] 🟩 Product with 3 color variants
  - [x] 🟩 Product with 6+ color variants (tests "+N" overflow)
  - [x] 🟩 Product with promo message
  - [x] 🟩 Product without promo and without rating

- [x] 🟩 **Step 6: Initial commit and push**
  - [x] 🟩 Add `.gitignore`, commit all scaffolding, push to `mens-formalwear` remote
