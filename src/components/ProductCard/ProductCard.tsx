"use client";

import { useState } from "react";
import { Product, Variant } from "@/types/product";
import { CardImage } from "./CardImage";
import { CardPricing } from "./CardPricing";
import { ColorSwatches } from "./ColorSwatches";
import { CardInfo } from "./CardInfo";
import { PromoMessage } from "./PromoMessage";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants[0]
  );

  return (
    <article className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col">
      {/* Image links to variant PDP */}
      <a href={selectedVariant.url} tabIndex={-1} aria-hidden="true">
        <CardImage variant={selectedVariant} />
      </a>

      <div className="p-3 flex flex-col flex-1">
        <CardPricing
          variant={selectedVariant}
          secondaryPrice={product.secondaryPrice}
        />

        <ColorSwatches
          variants={product.variants}
          selectedVariantId={selectedVariant.id}
          onSelect={setSelectedVariant}
        />

        <CardInfo
          brand={product.brand}
          name={product.name}
          pdpUrl={selectedVariant.url}
        />

        <PromoMessage promo={product.promo} />

        <StarRating rating={product.rating} />
      </div>
    </article>
  );
}
