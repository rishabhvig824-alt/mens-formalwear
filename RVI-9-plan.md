# Feature Implementation Plan — RVI-9: Product Card Image Behavior

**Overall Progress:** `83%`

## TLDR
Extend `CardImage` and the `Variant` type to support primary/alt hover swap, mobile lapel shot priority, Big & Tall image logic, lazy loading, and CLS-safe aspect ratio — while architecting for future multi-image swipe/scroll.

## Critical Decisions
- **Type model extended at Variant level** — `altImages[]`, `lapelImageUrl`, `btImageUrl` added to `Variant` (not `Product`)
- **Page context via prop** — `CardImage` receives an optional `pageContext: "default" | "bt"` prop to drive BT image logic; no global context/provider in this phase
- **Hover state in CardImage** — `useState` for hovered image URL, desktop-only via CSS `group-hover` pattern
- **Mobile lapel logic in CardImage** — breakpoint-based only (`< 768px` = mobile); no `useMediaQuery` or pointer detection
- **BT precedence over lapel on mobile** — explicit priority order: btImage > lapelImage > primary
- **Lazy loading** — `loading="lazy"` on `next/image` for cards beyond index 3; first 4 use `priority`
- **Future-proofing** — image container accepts `images[]` array internally, even if only one is shown today

## Tasks

- [x] 🟩 **Step 1: Extend TypeScript types**
  - [x] 🟩 Add `altImages?: string[]` to `Variant`
  - [x] 🟩 Add `lapelImageUrl?: string` to `Variant` (alt10)
  - [x] 🟩 Add `btImageUrl?: string` to `Variant`

- [x] 🟩 **Step 2: Update mock product data**
  - [x] 🟩 Add `altImages`, `lapelImageUrl`, `btImageUrl` to representative mock variants
  - [x] 🟩 Cover cases: has alt, no alt, has lapel, no lapel, has BT image, no BT image

- [x] 🟩 **Step 3: Rebuild CardImage with full image logic**
  - [x] 🟩 Accept `pageContext: "default" | "bt"` prop (default: `"default"`)
  - [x] 🟩 Accept `cardIndex: number` prop for lazy load priority
  - [x] 🟩 Image priority: BT (if bt context) > lapel (if mobile) > primary
  - [x] 🟩 Desktop hover (`md:` and above): swap to `altImages[0]` on mouse enter; restore on mouse leave
  - [x] 🟩 No hover state if `altImages` is absent or empty
  - [x] 🟩 Swatch hover already handled via variant selection — no additional work needed
  - [x] 🟩 Mobile (below `md:`): no hover swap — breakpoint-based, no JS media query
  - [x] 🟩 Lazy load: `priority` for `cardIndex < 4`, `loading="lazy"` for the rest
  - [x] 🟩 CLS: `aspect-[3/4]` container always reserves height before image loads
  - [x] 🟩 Broken image fallback: "No image available" placeholder (already exists — verify still works)
  - [x] 🟩 Internal image array structure for future swipe/scroll extensibility

- [x] 🟩 **Step 4: Update ProductCard to pass new props**
  - [x] 🟩 Pass `cardIndex` from grid position to `ProductCard` → `CardImage`
  - [x] 🟩 Pass `pageContext` down from `page.tsx` → `ProductCard` → `CardImage`

- [x] 🟩 **Step 5: Update page.tsx**
  - [x] 🟩 Pass `cardIndex` to each `ProductCard` in the grid map
  - [x] 🟩 Pass `pageContext="default"` (BT context to be wired in a future story)

- [ ] 🟥 **Step 6: Commit and push**
  - [ ] 🟥 Commit all changes, push to remote
