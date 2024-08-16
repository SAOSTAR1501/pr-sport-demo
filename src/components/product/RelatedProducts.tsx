// Cập nhật src/components/products/RelatedProducts.tsx
import React from "react";
import ProductCard from "./ProductCard";

interface RelatedProductsProps {
  productId: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  // Giả lập dữ liệu sản phẩm liên quan, trong thực tế sẽ fetch từ API
  const relatedProducts = [
    {
      id: "2",
      name: "Giày chạy bộ ABC",
      price: 1200000,
      image: "/images/product-abc.jpg",
    },
    {
      id: "3",
      name: "Giày chạy bộ DEF",
      price: 1300000,
      image: "/images/product-def.jpg",
    },
    {
      id: "4",
      name: "Giày chạy bộ GHI",
      price: 1400000,
      image: "/images/product-ghi.jpg",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
