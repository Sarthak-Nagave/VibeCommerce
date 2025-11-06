import ProductCard from "./ProductCard";
import type { Product } from "@shared/schema";

interface ProductsGridProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
}

export default function ProductsGrid({ products, onAddToCart }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
