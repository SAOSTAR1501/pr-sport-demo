// src/app/profile/page.tsx
"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";

const ProfilePage = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Vui lòng đăng nhập để xem trang này.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Thông tin cá nhân</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <strong>Tên:</strong> {user.name}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {user.email}
        </div>
        <Button
          onClick={() => {
            /* TODO: Implement edit profile */
          }}
        >
          Chỉnh sửa thông tin
        </Button>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Lịch sử đơn hàng</h2>
      {/* TODO: Implement order history component */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <p>Chưa có đơn hàng nào.</p>
      </div>

      <Button onClick={logout} className="mt-8" variant="outline">
        Đăng xuất
      </Button>
    </div>
  );
};

export default ProfilePage;
