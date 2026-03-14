import { Rating } from "@/types/product";

interface StarRatingProps {
  rating?: Rating;
}

export function StarRating({ rating }: StarRatingProps) {
  if (!rating) return null;

  return (
    <div className="flex items-center gap-1 mt-1.5">
      {/* Filled star */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.401Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-xs text-gray-700">
        {rating.average.toFixed(1)}{" "}
        <span className="text-gray-400">({rating.count})</span>
      </span>
    </div>
  );
}
