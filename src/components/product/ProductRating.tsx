// src/components/product/ProductRating.tsx
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";

interface ProductRatingProps {
  productId: string;
  initialRating?: number;
  onRatingSubmit: (rating: number) => Promise<void>;
}

const ProductRating: React.FC<ProductRatingProps> = ({
  productId,
  initialRating = 0,
  onRatingSubmit,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const { user } = useAuth();

  const handleRatingClick = async (selectedRating: number) => {
    if (!user) {
      alert("Vui lòng đăng nhập để đánh giá sản phẩm.");
      return;
    }
    setRating(selectedRating);
    try {
      await onRatingSubmit(selectedRating);
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert("Có lỗi xảy ra khi gửi đánh giá. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            className={`text-3xl ${
              ratingValue <= (hover || rating)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
            onClick={() => handleRatingClick(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};

export default ProductRating;
