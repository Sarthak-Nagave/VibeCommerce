import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import CartView from "@/components/CartView";
import CheckoutModal from "@/components/CheckoutModal";
import type { Product, CartItem, Order } from "@shared/schema";

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const { toast } = useToast();

  const { data: productsData } = useQuery<{ ok: boolean; products: Product[] }>({
    queryKey: ["/api/products"],
  });

  const { data: cartData } = useQuery<{ ok: boolean; cartItems: CartItem[]; total: number }>({
    queryKey: ["/api/cart"],
  });

  const addToCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await apiRequest("POST", "/api/cart", { productId, quantity: 1 });
      return res.json();
    },
    onSuccess: (_, productId) => {
      const product = productsData?.products.find((p) => p.id === productId);
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({
        title: "Added to cart",
        description: product ? `${product.name} has been added to your cart` : "Item added to cart",
      });
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: async ({ cartItemId, quantity }: { cartItemId: string; quantity: number }) => {
      const res = await apiRequest("PATCH", `/api/cart/${cartItemId}`, { quantity });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: async (cartItemId: string) => {
      const res = await apiRequest("DELETE", `/api/cart/${cartItemId}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart",
      });
    },
  });

  const checkoutMutation = useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      const res = await apiRequest("POST", "/api/checkout", { name, email });
      return res.json() as Promise<{ ok: boolean; order: Order }>;
    },
    onSuccess: (data) => {
      if (data.ok && data.order) {
        setOrder(data.order);
        queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      }
    },
  });

  const handleAddToCart = (productId: string) => {
    addToCartMutation.mutate(productId);
  };

  const handleUpdateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) return;
    updateQuantityMutation.mutate({ cartItemId, quantity });
  };

  const handleRemoveItem = (cartItemId: string) => {
    removeItemMutation.mutate(cartItemId);
  };

  const handleCheckout = (name: string, email: string) => {
    checkoutMutation.mutate({ name, email });
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
    setOrder(null);
    setShowCart(false);
  };

  const products = productsData?.products || [];
  const cartItems = cartData?.cartItems || [];
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={cartItemCount} onCartClick={() => setShowCart(!showCart)} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {showCart ? (
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold">Shopping Cart</h1>
            </div>
            <CartView
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onCheckout={() => setShowCheckout(true)}
              onContinueShopping={() => setShowCart(false)}
            />
          </div>
        ) : (
          <div>
            <div className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Discover Our Collection
              </h1>
              <p className="text-muted-foreground text-lg">
                Premium products for your modern lifestyle
              </p>
            </div>
            <ProductsGrid products={products} onAddToCart={handleAddToCart} />
          </div>
        )}
      </main>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={handleCloseCheckout}
        cartItems={cartItems}
        onSubmit={handleCheckout}
        order={order}
      />
    </div>
  );
}
