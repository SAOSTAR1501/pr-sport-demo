// src/app/search/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchProducts } from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";
import SearchForm from "@/components/product/SearchForm";
import { Product } from "@/types/product";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const filters = {
          query: searchParams.get("query") || "",
          category: searchParams.get("category") || undefined,
          minPrice: searchParams.get("minPrice")
            ? Number(searchParams.get("minPrice"))
            : undefined,
          maxPrice: searchParams.get("maxPrice")
            ? Number(searchParams.get("maxPrice"))
            : undefined,
          sortBy: searchParams.get("sortBy") as
            | "price_asc"
            | "price_desc"
            | "name_asc"
            | "name_desc"
            | undefined,
        };
        const results = await searchProducts(filters);
        setProducts(results);
      } catch (error) {
        console.error("Error searching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Kết quả tìm kiếm</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <SearchForm />
        </div>
        <div className="md:col-span-3">
          {isLoading ? (
            <p>Đang tải...</p>
          ) : products.length === 0 ? (
            <p>Không tìm thấy sản phẩm nào phù hợp.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
