// Mirrors ProductCard layout exactly to prevent CLS during loading
export function SkeletonCard() {
  return (
    <div
      className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col"
      aria-hidden="true"
    >
      {/* Image placeholder — matches aspect-[3/4] from CardImage */}
      <div className="w-full aspect-[3/4] bg-gray-200 animate-pulse" />

      <div className="p-3 flex flex-col flex-1 gap-2">
        {/* Price row — offer price + list price */}
        <div className="flex items-center gap-1.5 mt-1">
          <div className="h-3.5 w-16 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Secondary price line */}
        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />

        {/* Swatch rail — 3 circles */}
        <div className="flex items-center gap-1.5 mt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-gray-200 animate-pulse"
            />
          ))}
        </div>

        {/* Brand row */}
        <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />

        {/* Product name row */}
        <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />

        {/* Promo row */}
        <div className="h-3 w-28 bg-gray-200 rounded animate-pulse" />

        {/* Rating row */}
        <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mt-auto" />
      </div>
    </div>
  );
}
