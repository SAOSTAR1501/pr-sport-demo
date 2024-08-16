// src/components/product/ProductList.tsx (cập nhật)
"use client";

import { useProductContext } from "@/context/ProductContext";
import ProductCard from "./ProductCard";
import { Toaster } from "react-hot-toast";

const ProductList: React.FC<{ className?: string }> = ({ className }) => {
  const { products, loading } = useProductContext();

  if (loading) {
    return <div className={className}>Đang tải sản phẩm...</div>;
  }

  if (products.length === 0) {
    return <div className={className}>Không tìm thấy sản phẩm phù hợp.</div>;
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default ProductList;
