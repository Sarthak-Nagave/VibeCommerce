import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-product-${product.id}`}>
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            data-testid={`img-product-${product.id}`}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 p-4">
        <div className="w-full space-y-1">
          <h3 className="font-medium text-lg text-foreground" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-xl font-semibold text-foreground" data-testid={`text-product-price-${product.id}`}>
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>
        <Button
          className="w-full"
          onClick={() => onAddToCart(product.id)}
          data-testid={`button-add-to-cart-${product.id}`}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
