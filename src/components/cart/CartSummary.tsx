// src/components/cart/CartSummary.tsx
import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

interface CartSummaryProps {
  className?: string;
}

const CartSummary: React.FC<CartSummaryProps> = ({ className }) => {
  const { totalItems, totalPrice } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className={`${className} bg-white p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold mb-4">Tổng quan đơn hàng</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>Tổng sản phẩm:</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tạm tính:</span>
          <span>{totalPrice.toLocaleString("vi-VN")} đ</span>
        </div>
      </div>
      <Button className="w-full" onClick={handleCheckout}>
        Tiến hành thanh toán
      </Button>
    </div>
  );
};

export default CartSummary;
