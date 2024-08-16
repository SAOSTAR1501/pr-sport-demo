// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Không tìm thấy sản phẩm</h1>
      <p className="text-xl mb-8">
        Xin lỗi, chúng tôi không thể tìm thấy sản phẩm bạn đang tìm kiếm.
      </p>
      <Link
        href="/"
        className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
}
