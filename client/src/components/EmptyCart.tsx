import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyCartProps {
  onContinueShopping: () => void;
}

export default function EmptyCart({ onContinueShopping }: EmptyCartProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="rounded-full bg-muted p-6 mb-4">
        <ShoppingCart className="h-12 w-12 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-semibold mb-2" data-testid="text-empty-cart">
        Your cart is empty
      </h2>
      <p className="text-muted-foreground mb-6">
        Add some products to get started
      </p>
      <Button onClick={onContinueShopping} data-testid="button-continue-shopping">
        Continue Shopping
      </Button>
    </div>
  );
}
