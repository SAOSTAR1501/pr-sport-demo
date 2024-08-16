// src/app/products/page.tsx (không cần thay đổi, nhưng đây là nó để tham khảo)
"use client";

import ProductList from "@/components/product/ProductList";
import FilterSidebar from "@/components/product/FilterSidebar";
import { ProductProvider } from "@/context/ProductContext";

export default function ProductsPage() {
  return (
    <ProductProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Sản phẩm chạy bộ</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar className="w-full md:w-1/4" />
          <ProductList className="w-full md:w-3/4" />
        </div>
      </div>
    </ProductProvider>
  );
}
