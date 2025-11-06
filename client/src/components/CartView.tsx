import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import type { CartItem } from "@shared/schema";
import EmptyCart from "./EmptyCart";

interface CartViewProps {
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, quantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export default function CartView({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onContinueShopping,
}: CartViewProps) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <EmptyCart onContinueShopping={onContinueShopping} />;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} data-testid={`cart-item-${item.id}`}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 flex-shrink-0 bg-muted rounded-md overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-cart-item-${item.id}`}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-medium text-foreground" data-testid={`text-cart-item-name-${item.id}`}>
                      {item.product.name}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 flex-shrink-0"
                      onClick={() => onRemoveItem(item.id)}
                      data-testid={`button-remove-${item.id}`}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm font-semibold text-foreground mb-3" data-testid={`text-cart-item-price-${item.id}`}>
                    ₹{item.product.price.toLocaleString('en-IN')}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      data-testid={`button-decrease-${item.id}`}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium" data-testid={`text-quantity-${item.id}`}>
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      data-testid={`button-increase-${item.id}`}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="sticky bottom-4">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Total</span>
            <span data-testid="text-total">₹{total.toLocaleString('en-IN')}</span>
          </div>
          <Button
            className="w-full"
            size="lg"
            onClick={onCheckout}
            data-testid="button-checkout"
          >
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
