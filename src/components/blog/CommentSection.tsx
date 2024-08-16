// src/components/blog/CommentSection.tsx
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext"; // Giả sử bạn có AuthContext
import { getComments, postComment } from "@/lib/api"; // Thêm các hàm này vào api.ts

interface Comment {
  id: number;
  text: string;
  author: string;
  createdAt: string;
}

interface CommentSectionProps {
  postSlug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postSlug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth(); // Sử dụng context để lấy thông tin người dùng

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const fetchedComments = await getComments(postSlug);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
      setIsLoading(false);
    };

    fetchComments();
  }, [postSlug]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Vui lòng đăng nhập để bình luận.");
      return;
    }
    if (!newComment.trim()) return;

    try {
      const comment = await postComment(postSlug, newComment, user.name);
      setComments([comment, ...comments]);
      setNewComment("");
    } catch (error) {
      console.error("Failed to post comment:", error);
      alert("Có lỗi xảy ra khi đăng bình luận. Vui lòng thử lại.");
    }
  };

  if (isLoading) return <div>Đang tải bình luận...</div>;

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Bình luận</h3>
      {user ? (
        <form onSubmit={handleSubmitComment} className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="Viết bình luận của bạn..."
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            Gửi bình luận
          </button>
        </form>
      ) : (
        <p className="mb-4">
          Vui lòng{" "}
          <a href="/login" className="text-primary hover:underline">
            đăng nhập
          </a>{" "}
          để bình luận.
        </p>
      )}
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded">
              <p>{comment.text}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                <span>Bởi: {comment.author}</span>
                <span>{new Date(comment.createdAt).toLocaleString()}</span>
              </div>
            </div>
          ))
        ) : (
          <p>Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
