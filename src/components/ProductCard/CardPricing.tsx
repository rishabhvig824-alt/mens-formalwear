import { Product, Variant } from "@/types/product";

interface CardPricingProps {
  variant: Variant;
  secondaryPrice?: Product["secondaryPrice"];
}

function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function CardPricing({ variant, secondaryPrice }: CardPricingProps) {
  const { offerPrice, listPrice } = variant;
  const hasDiscount = listPrice !== undefined && listPrice !== offerPrice;

  return (
    <div className="mt-2">
      <div className="flex items-baseline gap-1.5 flex-wrap">
        <span className="text-sm font-bold text-gray-900">
          {formatPrice(offerPrice)}
        </span>
        {hasDiscount && (
          <span className="text-xs text-gray-400 line-through">
            {formatPrice(listPrice!)}
          </span>
        )}
      </div>
      {secondaryPrice && (
        <p className="text-xs text-gray-500 mt-0.5">
          {formatPrice(secondaryPrice.amount)}{" "}
          <span>{secondaryPrice.label}</span>
        </p>
      )}
    </div>
  );
}
