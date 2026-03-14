export type Badge = "BEST SELLER" | "NEW" | "MADE IN USA";

export interface Rating {
  average: number;
  count: number;
}

export interface Color {
  name: string;
  hex: string;
}

export interface Variant {
  id: string;
  color: Color;
  imageUrl: string | null;
  /** Alternate images for hover/swipe (index 0 used for desktop hover) */
  altImages?: string[];
  /** Lapel/detail shot (alt10) — used as primary on mobile PGP */
  lapelImageUrl?: string;
  /** Big & Tall specific image — takes precedence on BT PGP */
  btImageUrl?: string;
  offerPrice: number;
  listPrice?: number;
  url: string;
  inStock: boolean;
  badge?: Badge;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  slug: string;
  rating?: Rating;
  promo?: { message: string };
  secondaryPrice?: { amount: number; label: string };
  variants: Variant[];
}
