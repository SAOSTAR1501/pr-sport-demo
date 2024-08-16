// src/components/product/ProductReviews.tsx
"use client";
import React, { useState, useEffect } from "react";
import { getProductReviews, postProductReview } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

interface Review {
  id: number;
  rating: number;
  comment: string;
  author: string;
  createdAt: string;
}

const ProductReviews: React.FC<{ productId: string }> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const { user, token } = useAuth();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await getProductReviews(productId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, [productId]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !token) {
      alert("Bạn cần đăng nhập để đánh giá sản phẩm.");
      return;
    }
    try {
      const addedReview = await postProductReview(
        productId,
        newReview.rating,
        newReview.comment,
        token
      );
      setReviews([addedReview, ...reviews]);
      setNewReview({ rating: 5, comment: "" });
    } catch (error) {
      console.error("Error posting review:", error);
      alert("Không thể đăng đánh giá. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Đánh giá sản phẩm</h3>
      {user && (
        <form onSubmit={handleSubmitReview} className="mb-6">
          <div className="mb-4">
            <label className="block mb-2">Đánh giá:</label>
            <select
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: Number(e.target.value) })
              }
              className="w-full p-2 border rounded"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} sao
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Nhận xét:</label>
            <textarea
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Gửi đánh giá
          </button>
        </form>
      )}
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="border-b py-4">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">{review.author}</span>
              <span className="text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
            </div>
            <p>{review.comment}</p>
            <small className="text-gray-500">
              {new Date(review.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
