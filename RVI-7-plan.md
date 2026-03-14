# Feature Implementation Plan — RVI-7: ProductCard Assembly and Responsive Grid

**Overall Progress:** `67%`

## TLDR
Assemble the full `ProductCard` container from the 6 subcomponents built in Phase 2, wire up variant selection state, and render a responsive 4-col (desktop) / 2-col (mobile) PGP grid on the main page using the mock product dataset.

## Critical Decisions
- **Variant state lives in ProductCard** — `useState` tracks the selected variant; all subcomponents are stateless and receive props
- **Default selected variant** — first variant in the array (`variants[0]`)
- **Image + name are PDP links** — both the card image and product name link to `selectedVariant.url`
- **Graceful degradation** — if a subcomponent throws, card stays visible (no error boundary in this phase; each subcomponent already handles missing data via null returns)
- **Grid uses CSS only** — `grid-cols-2 md:grid-cols-4`, no JS layout logic

## Tasks

- [x] 🟩 **Step 1: ProductCard component**
  - [x] 🟩 `useState` for selected variant, initialized to `variants[0]`
  - [x] 🟩 Wrap `CardImage` in an `<a>` linking to selected variant PDP URL
  - [x] 🟩 Render all 6 subcomponents in correct Figma order: image → pricing → swatches → info → promo → rating
  - [x] 🟩 Pass correct props to each subcomponent
  - [x] 🟩 White background, subtle border, consistent padding

- [x] 🟩 **Step 2: Responsive PGP grid on page.tsx**
  - [x] 🟩 Import `products` from mock data and `ProductCard` from components
  - [x] 🟩 Render 2-col mobile / 4-col desktop grid with appropriate gap
  - [x] 🟩 Lock image aspect ratios to prevent CLS (already handled in CardImage)

- [ ] 🟥 **Step 3: Commit and push**
  - [ ] 🟥 Commit ProductCard + updated page, push to remote
