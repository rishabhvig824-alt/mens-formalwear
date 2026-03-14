# mens-formalwear

Product Grid Page (PGP) for Men's Wearhouse — a best-in-class browse experience built with Next.js 14, Tailwind CSS, and TypeScript.

## Getting Started

```powershell
# Set up Node.js (portable install)
$env:PATH = "$env:LOCALAPPDATA\nodejs\node-v22.14.0-win-x64;$env:PATH"

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the product grid.

## Project Structure

```
src/
  app/
    page.tsx          — PGP page: responsive product grid
    layout.tsx        — Root layout with Inter font and metadata
    globals.css       — Tailwind base styles
  components/
    ProductCard/
      ProductCard.tsx  — Card container with variant selection state
      CardImage.tsx    — Product image, badge overlay, no-image fallback
      CardPricing.tsx  — Offer price, struck-through list price, secondary price
      ColorSwatches.tsx — Hex color swatches with responsive overflow
      CardInfo.tsx     — Brand name and product name linking to PDP
      PromoMessage.tsx — Blue promo text with info icon
      StarRating.tsx   — Star rating with average and review count
      index.ts         — Barrel export
  data/
    products.ts        — 10 mock products covering all card visual states
  types/
    product.ts         — TypeScript interfaces: Product, Variant, Badge, Rating
```

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Inter** font via `next/font/google`

## Product Card Features

- Variant-aware: selecting a color swatch updates image, price, badge, and PDP link
- Badge overlays: BEST SELLER (teal), NEW (blue), MADE IN USA (dark)
- No-image fallback when `imageUrl` is null
- Responsive swatch overflow: shows 5 swatches on desktop, 3 on mobile, with +N pill
- Out-of-stock variants shown muted
- Conditional rendering: PromoMessage and StarRating return null when data is absent
- Responsive grid: 2 columns on mobile, 4 on desktop

## Roadmap

| Phase | Issue | Status |
|---|---|---|
| Scaffolding + Types + Mock Data | RVI-5 | Done |
| Card Subcomponents | RVI-6 | Done |
| ProductCard Assembly + Grid | RVI-7 | Done |
| Skeleton Loaders + Loading States | RVI-8 | Pending |
