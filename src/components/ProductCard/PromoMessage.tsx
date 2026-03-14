import { Product } from "@/types/product";

interface PromoMessageProps {
  promo?: Product["promo"];
}

export function PromoMessage({ promo }: PromoMessageProps) {
  if (!promo) return null;

  return (
    <p className="flex items-center gap-1 mt-1.5 text-xs text-blue-600 font-medium">
      {promo.message}
      <span
        aria-label="Promotion info"
        className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-blue-600 text-[9px] font-bold leading-none flex-shrink-0"
      >
        i
      </span>
    </p>
  );
}
