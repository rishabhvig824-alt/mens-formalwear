import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          Men&apos;s Formal Wear
        </h1>

        {/* Responsive grid: 2-col mobile, 4-col desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          aria-label="Product grid"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
