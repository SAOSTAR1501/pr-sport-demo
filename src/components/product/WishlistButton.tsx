// src/components/product/WishlistButton.tsx
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";

interface WishlistButtonProps {
  productId: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ productId }) => {
  const { user, token, wishlist, addToWishlist, removeFromWishlist } =
    useAuth();
  const [isLoading, setIsLoading] = useState(false);

  if (!user || !token) return null;

  const isInWishlist = wishlist.includes(productId);

  const handleToggleWishlist = async () => {
    setIsLoading(true);
    try {
      if (isInWishlist) {
        await removeFromWishlist(productId);
      } else {
        await addToWishlist(productId);
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
      alert("Không thể cập nhật wishlist. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggleWishlist}
      disabled={isLoading}
      className={`px-4 py-2 rounded ${
        isInWishlist ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
      } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isLoading
        ? "Đang xử lý..."
        : isInWishlist
        ? "Xóa khỏi Wishlist"
        : "Thêm vào Wishlist"}
    </button>
  );
};

export default WishlistButton;
