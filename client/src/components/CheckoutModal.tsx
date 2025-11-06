import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import type { CartItem, Order } from "@shared/schema";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onSubmit: (name: string, email: string) => void;
  order?: Order | null;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onSubmit,
  order,
}: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(name, email);
    setName("");
    setEmail("");
    setErrors({});
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setErrors({});
    onClose();
  };

  if (order) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent data-testid="modal-receipt">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Order Confirmed!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Order ID: <span className="font-mono" data-testid="text-order-id">{order.id}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Date: {new Date(order.timestamp).toLocaleString()}
              </p>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span data-testid="text-order-total">₹{order.total.toLocaleString('en-IN')}</span>
            </div>
            
            <Button className="w-full" onClick={handleClose} data-testid="button-continue-shopping-receipt">
              Continue Shopping
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent data-testid="modal-checkout">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                data-testid="input-name"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                data-testid="input-email"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>
                  <span>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total</span>
              <span data-testid="text-checkout-total">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" data-testid="button-submit-checkout">
            Complete Order
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
