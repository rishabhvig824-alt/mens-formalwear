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
