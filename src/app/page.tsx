"use client";

import { useEffect, useRef, useState } from "react";
import { products } from "@/data/products";
import { ProductCard, SkeletonCard } from "@/components/ProductCard";

const LOAD_DELAY_MS = 800;
const STAGGER_MS = 50;

export default function Home() {
  // Set of product IDs that have finished "loading" — empty means all skeletons showing
  const [resolvedIds, setResolvedIds] = useState<Set<string>>(new Set());
  const [isGridBusy, setIsGridBusy] = useState(true);
  const [statusMessage, setStatusMessage] = useState("Loading products…");
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setIsGridBusy(true);
    setResolvedIds(new Set());
    setStatusMessage("Loading products…");

    // Simulate network: after LOAD_DELAY_MS, progressively reveal each card
    const initialDelay = setTimeout(() => {
      products.forEach((product, index) => {
        const t = setTimeout(() => {
          setResolvedIds((prev) => {
            const next = new Set(prev);
            next.add(product.id);
            // When the last card resolves, mark grid as no longer busy
            if (next.size === products.length) {
              setIsGridBusy(false);
              setStatusMessage("Products loaded.");
            }
            return next;
          });
        }, index * STAGGER_MS);
        timeoutsRef.current.push(t);
      });
    }, LOAD_DELAY_MS);

    timeoutsRef.current.push(initialDelay);

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Visually hidden live region — announces loading state to assistive tech */}
      <div
        role="status"
        aria-live="polite"
        className="sr-only"
      >
        {statusMessage}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          Men&apos;s Formal Wear
        </h1>

        {/* Grid region: aria-busy signals loading state to screen readers */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          aria-label="Product grid"
          aria-busy={isGridBusy}
        >
          {products.map((product, index) => {
            const isResolved = resolvedIds.has(product.id);
            return (
              // Wrapper holds dimensions stable during crossfade — prevents CLS
              <div key={product.id} className="relative">
                {/* Skeleton: fades out as card resolves */}
                <div
                  className={`transition-opacity duration-200 ${
                    isResolved ? "opacity-0 pointer-events-none absolute inset-0" : "opacity-100"
                  }`}
                  aria-hidden="true"
                >
                  <SkeletonCard />
                </div>

                {/* Real card: fades in once resolved */}
                <div
                  className={`transition-opacity duration-200 ${
                    isResolved ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
                  }`}
                >
                  <ProductCard
                    product={product}
                    cardIndex={index}
                    pageContext="default"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
