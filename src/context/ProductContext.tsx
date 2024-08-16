// src/context/ProductContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/api"; // Giả sử bạn có hàm này để fetch sản phẩm
import { Product } from "@/types/product";

interface Filters {
  category: string;
  minPrice: string;
  maxPrice: string;
}

interface ProductContextType {
  products: Product[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  loading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    category: searchParams.get("category") || "",
    minPrice: "",
    maxPrice: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const fetchedProducts = await getProducts(filters);
      setProducts(fetchedProducts);
      setLoading(false);
    };
    fetchProducts();
  }, [filters]);

  return (
    <ProductContext.Provider value={{ products, filters, setFilters, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
