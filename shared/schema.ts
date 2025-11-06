import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string().optional(),
});

export const cartItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  quantity: z.number(),
  product: productSchema,
});

export const orderSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  total: z.number(),
  timestamp: z.string(),
  items: z.array(cartItemSchema),
});

export const insertCartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1),
});

export const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
});

export type Product = z.infer<typeof productSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type Order = z.infer<typeof orderSchema>;
export type InsertCartItem = z.infer<typeof insertCartItemSchema>;
export type CheckoutData = z.infer<typeof checkoutSchema>;
