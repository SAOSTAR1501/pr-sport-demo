// src/components/home/BestSellers.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/products/bestsellers");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products.slice(0, 4)); // Lấy 4 sản phẩm đầu tiên
      } catch (error) {
        console.error("Error fetching bestsellers:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Có thể thay thế bằng một loading spinner
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Sản phẩm bán chạy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-primary font-bold mb-4">
                {product.price.toLocaleString("vi-VN")}đ
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
                  onClick={() => addItem({ ...product, quantity: 1 })}
                  variant="secondary"
                >
                  Thêm vào giỏ
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
