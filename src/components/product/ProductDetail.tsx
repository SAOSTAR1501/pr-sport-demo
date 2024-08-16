// src/components/products/ProductDetail.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import WishlistButton from "./WishlistButton";

import { Product } from "@/types/product";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addItem } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(isNaN(newQuantity) ? 1 : Math.max(1, newQuantity));
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity, selectedColor, selectedSize });
    // TODO: Add a toast notification here
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl font-semibold text-primary mb-4">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div className="mb-4">
          <p className="font-semibold">Thương hiệu: {product.brand}</p>
          <p>SKU: {product.sku}</p>
          <p>Còn lại: {product.stock} sản phẩm</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Màu sắc:</p>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Kích cỡ:</p>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded ${
                  selectedSize === size
                    ? "bg-primary text-white"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2">
            Số lượng:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max={product.stock}
            className="border rounded px-2 py-1 w-16 text-center"
          />
        </div>
        <div className="mt-4">
          <WishlistButton productId={product.id} />
        </div>
        <Button variant="primary" className="w-full" onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </Button>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Đặc điểm nổi bật:</h3>
          <ul className="list-disc list-inside">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
