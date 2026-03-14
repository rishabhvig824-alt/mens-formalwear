# Changelog

All notable changes to this project are documented here.

## [Unreleased]

---

## [0.5.0] — RVI-9: Product Card Image Behavior

### Added
- `Variant` type extended with `altImages?: string[]`, `lapelImageUrl?: string`, `btImageUrl?: string`
- Desktop hover: swaps to `altImages[0]` on `md+`; no hover triggered if alt image is absent
- Mobile primary image: lapel shot (`lapelImageUrl`) used if available, falls back to primary
- Big & Tall context: `btImageUrl` takes precedence over lapel and primary when `pageContext="bt"`
- `cardIndex` prop on `ProductCard` / `CardImage` — first 4 cards load with `priority`, rest lazy load
- `pageContext` prop on `ProductCard` / `CardImage` for BT image logic (wired as `"default"` in page)
- Mock data updated with alt/lapel/BT image variants covering all image resolution paths

### Changed
- `CardImage` rebuilt with full image resolution logic and breakpoint-based mobile/desktop split

---

## [0.4.0] — RVI-8: Skeleton Loaders + Loading States

### Added
- `SkeletonCard` — shimmer placeholders matching exact `ProductCard` dimensions (image, price, swatches, brand, name, promo, rating)
- Progressive reveal: 800ms simulated load delay, 50ms per-card stagger
- Crossfade transition (200ms opacity) from skeleton to real card — no layout shift
- `aria-busy` on grid region during loading
- `aria-live="polite"` visually-hidden region announces "Loading products…" / "Products loaded."

---

## [0.3.0] — RVI-7: ProductCard Assembly + Responsive Grid

### Added
- `ProductCard` container component with `useState` for selected variant (initialized to `variants[0]`)
- Image and product name both link to the selected variant's PDP URL
- Responsive PGP grid on `page.tsx`: 2-col mobile, 4-col desktop via Tailwind CSS
- `ProductCard` added to barrel export in `index.ts`

---

## [0.2.0] — RVI-6: Card Subcomponents

### Added
- `CardImage` — portrait aspect-ratio image, badge overlay (BEST SELLER / NEW / MADE IN USA), "No image available" fallback
- `CardPricing` — offer price, conditional struck-through list price, optional secondary price line
- `ColorSwatches` — hex swatch buttons, selected ring, responsive overflow (+N), out-of-stock muting, returns null for single-variant products
- `CardInfo` — bold brand name + linked product name to variant PDP URL
- `PromoMessage` — blue promo text + ⓘ icon, returns null when absent
- `StarRating` — filled star + numeric average + review count, returns null when absent
- Barrel export at `src/components/ProductCard/index.ts`

---

## [0.1.1] — Bug Fixes

### Fixed
- Package name corrected from `mens-formalwear-temp` to `mens-formalwear`
- Added Unsplash to `next.config.mjs` `remotePatterns` — required for `next/image` to load product photos

---

## [0.1.0] — RVI-5: Project Scaffolding + Types + Mock Data

### Added
- Next.js 14 (App Router) + Tailwind CSS + TypeScript project scaffolded
- Inter font configured via `next/font/google` with CSS variable
- Page metadata: title and description set for Men's Wearhouse
- `src/types/product.ts` — `Product`, `Variant`, `Badge`, `Rating`, `Color` TypeScript interfaces
- `src/data/products.ts` — 10 mock products covering: no image, all 3 badge types, no badge, 1/3/7 color variants, promo, no promo + no rating
- Folder structure: `src/types/`, `src/data/`, `src/components/ProductCard/`
