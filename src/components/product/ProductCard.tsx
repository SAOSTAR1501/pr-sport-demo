// src/components/products/ProductCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import { toast } from "react-hot-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.name} đã được thêm vào giỏ hàng`);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <div className="flex justify-between">
          <Button
            href={`/products/${product.id}`}
            variant="primary"
            className="flex-grow mr-2"
          >
            Xem chi tiết
          </Button>
          <Button
            variant="secondary"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? "Đang thêm..." : "Thêm vào giỏ"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
