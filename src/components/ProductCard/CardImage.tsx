"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge, Variant } from "@/types/product";

export type PageContext = "default" | "bt";

interface CardImageProps {
  variant: Variant;
  /** Grid position — first 4 cards use priority loading, rest are lazy */
  cardIndex: number;
  pageContext?: PageContext;
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

/** Resolves which image URL to show based on context and breakpoint.
 *  Priority order: BT image (bt context) > lapel (mobile) > primary
 *  Breakpoint distinction is handled via CSS — this function returns both
 *  mobile and desktop resolved URLs for use in responsive rendering. */
function resolveImages(variant: Variant, pageContext: PageContext) {
  const { imageUrl, lapelImageUrl, btImageUrl, altImages } = variant;

  // Desktop primary: BT image on bt context, else primary
  const desktopPrimary =
    pageContext === "bt" && btImageUrl ? btImageUrl : imageUrl ?? null;

  // Mobile primary: BT takes precedence, then lapel, then primary
  const mobilePrimary =
    pageContext === "bt" && btImageUrl
      ? btImageUrl
      : lapelImageUrl ?? imageUrl ?? null;

  // Alt image for desktop hover (only first alt used)
  const hoverImage =
    altImages && altImages.length > 0 ? altImages[0] : null;

  return { desktopPrimary, mobilePrimary, hoverImage };
}

export function CardImage({
  variant,
  cardIndex,
  pageContext = "default",
}: CardImageProps) {
  const { badge } = variant;
  const { desktopPrimary, mobilePrimary, hoverImage } = resolveImages(
    variant,
    pageContext
  );

  // Hover state — only relevant on desktop (md+), where hoverImage exists
  const [isHovered, setIsHovered] = useState(false);
  const canHover = hoverImage !== null;

  // First 4 cards load eagerly; rest lazy load to reduce initial page weight
  const isPriority = cardIndex < 4;

  // Active image URL: on desktop hover show alt, otherwise show desktop primary
  const activeDesktopUrl = canHover && isHovered ? hoverImage : desktopPrimary;

  return (
    // Aspect ratio container always reserves height — CLS budget: 0
    <div
      className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100"
      onMouseEnter={() => canHover && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile image (below md): lapel > primary, no hover */}
      {mobilePrimary ? (
        <Image
          src={mobilePrimary}
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-top md:hidden"
          priority={isPriority}
          {...(!isPriority && { loading: "lazy" })}
        />
      ) : (
        <div className="md:hidden absolute inset-0">
          <NoImageFallback />
        </div>
      )}

      {/* Desktop image (md+): BT/primary with optional hover swap */}
      {activeDesktopUrl ? (
        <Image
          src={activeDesktopUrl}
          alt=""
          fill
          sizes="25vw"
          className="hidden md:block object-cover object-top transition-opacity duration-150"
          priority={isPriority}
          {...(!isPriority && { loading: "lazy" })}
        />
      ) : (
        <div className="hidden md:flex absolute inset-0">
          <NoImageFallback />
        </div>
      )}

      {badge && <BadgeOverlay badge={badge} />}
    </div>
  );
}
