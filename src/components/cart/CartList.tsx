// src/components/cart/CartList.tsx
import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

interface CartListProps {
  className?: string;
}

const CartList: React.FC<CartListProps> = ({ className }) => {
  const { items, updateQuantity, removeItem } = useCart();

  return (
    <div className={className}>
      {items.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="flex items-center border-b py-4">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="ml-4 flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">
                {item.price.toLocaleString("vi-VN")} đ
              </p>
            </div>
            <div className="flex items-center">
              <Button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                variant="outline"
                className="px-2 py-1"
              >
                -
              </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                variant="outline"
                className="px-2 py-1"
              >
                +
              </Button>
            </div>
            <Button
              onClick={() => removeItem(item.id)}
              variant="outline"
              className="ml-4 text-red-500"
            >
              Xóa
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
