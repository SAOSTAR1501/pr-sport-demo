// src/components/product/ClientSideProductRating.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import { rateProduct } from "@/lib/api";
import ProductRating from "./ProductRating";

interface ClientSideProductRatingProps {
  productId: string;
  initialRating?: number;
}

const ClientSideProductRating: React.FC<ClientSideProductRatingProps> = ({
  productId,
  initialRating,
}) => {
  const { token } = useAuth();

  const handleRatingSubmit = async (rating: number) => {
    if (token) {
      await rateProduct(productId, rating, token);
      // Có thể thêm logic để cập nhật UI sau khi đánh giá thành công
    }
  };

  return (
    <ProductRating
      productId={productId}
      initialRating={initialRating}
      onRatingSubmit={handleRatingSubmit}
    />
  );
};

export default ClientSideProductRating;
