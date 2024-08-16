// src/app/wishlist/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getProductById } from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";

export default function WishlistPage() {
  const { user, token, wishlist } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!token) return;
      setIsLoading(true);
      try {
        const fetchedProducts = await Promise.all(
          wishlist.map((id) => getProductById(id))
        );
        setProducts(
          fetchedProducts.filter((p): p is Product => p !== undefined)
        );
      } catch (error) {
        console.error("Error fetching wishlist products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [wishlist, token]);

  if (!user || !token) {
    return (
      <div className="container mx-auto px-4 py-8">
        Vui lòng đăng nhập để xem wishlist.
      </div>
    );
  }

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Đang tải...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wishlist của bạn</h1>
      {products.length === 0 ? (
        <p>Bạn chưa có sản phẩm nào trong wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
