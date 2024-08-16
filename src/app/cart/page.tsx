// src/app/cart/page.tsx
"use client";

import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>
      {items.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <CartList className="lg:w-2/3" />
          <CartSummary className="lg:w-1/3" />
        </div>
      )}
    </div>
  );
}
