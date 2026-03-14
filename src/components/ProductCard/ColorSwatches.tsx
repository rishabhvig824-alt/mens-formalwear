import { Variant } from "@/types/product";

interface ColorSwatchesProps {
  variants: Variant[];
  selectedVariantId: string;
  onSelect: (variant: Variant) => void;
}

// Responsive limits — 5 on desktop, 3 on mobile
const DESKTOP_LIMIT = 5;
const MOBILE_LIMIT = 3;

interface SwatchProps {
  variant: Variant;
  isSelected: boolean;
  onSelect: (variant: Variant) => void;
  hidden?: boolean;
}

function Swatch({ variant, isSelected, onSelect, hidden }: SwatchProps) {
  return (
    <button
      type="button"
      aria-label={`Select color ${variant.color.name}`}
      aria-pressed={isSelected}
      onClick={() => onSelect(variant)}
      className={[
        "w-6 h-6 rounded-full border-2 flex-shrink-0 transition-all",
        isSelected
          ? "border-gray-900 ring-2 ring-offset-1 ring-gray-900"
          : "border-gray-300 hover:border-gray-500",
        !variant.inStock ? "opacity-40" : "",
        hidden ? "md:flex hidden" : "flex",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundColor: variant.color.hex }}
    />
  );
}

export function ColorSwatches({
  variants,
  selectedVariantId,
  onSelect,
}: ColorSwatchesProps) {
  // Single variant — no swatch rail needed
  if (variants.length <= 1) return null;

  const mobileVisible = variants.slice(0, MOBILE_LIMIT);
  const desktopVisible = variants.slice(0, DESKTOP_LIMIT);
  const mobileOverflow = variants.length - MOBILE_LIMIT;
  const desktopOverflow = variants.length - DESKTOP_LIMIT;

  return (
    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
      {/* Mobile: show up to MOBILE_LIMIT */}
      {mobileVisible.map((variant) => (
        <span key={variant.id} className="md:hidden">
          <Swatch
            variant={variant}
            isSelected={variant.id === selectedVariantId}
            onSelect={onSelect}
          />
        </span>
      ))}
      {/* Desktop: show up to DESKTOP_LIMIT */}
      {desktopVisible.map((variant) => (
        <span key={`d-${variant.id}`} className="hidden md:inline-flex">
          <Swatch
            variant={variant}
            isSelected={variant.id === selectedVariantId}
            onSelect={onSelect}
          />
        </span>
      ))}

      {/* Mobile overflow pill */}
      {mobileOverflow > 0 && (
        <span className="md:hidden text-xs text-gray-500 font-medium">
          +{mobileOverflow}
        </span>
      )}
      {/* Desktop overflow pill */}
      {desktopOverflow > 0 && (
        <span className="hidden md:inline text-xs text-gray-500 font-medium">
          +{desktopOverflow}
        </span>
      )}
    </div>
  );
}
