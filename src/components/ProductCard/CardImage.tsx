import Image from "next/image";
import { Badge, Variant } from "@/types/product";

interface CardImageProps {
  variant: Variant;
}

const badgeStyles: Record<Badge, string> = {
  "BEST SELLER": "bg-teal-600 text-white",
  "NEW": "bg-blue-600 text-white",
  "MADE IN USA": "bg-gray-900 text-white",
};

function BadgeOverlay({ badge }: { badge: Badge }) {
  return (
    <span
      className={`absolute bottom-2 left-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full ${badgeStyles[badge]}`}
    >
      {badge}
    </span>
  );
}

function NoImageFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      <span className="text-sm text-gray-400">No image available</span>
    </div>
  );
}

export function CardImage({ variant }: CardImageProps) {
  const { imageUrl, badge } = variant;

  return (
    // Aspect ratio container locks dimensions regardless of image load state — prevents CLS
    <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-top"
          onError={() => {
            // next/image handles broken images gracefully; fallback shown via CSS
          }}
        />
      ) : (
        <NoImageFallback />
      )}
      {badge && <BadgeOverlay badge={badge} />}
    </div>
  );
}
