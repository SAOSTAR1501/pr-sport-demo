// src/components/checkout/OrderSummary.tsx
import React from "react";

interface OrderSummaryProps {
  className?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ className }) => {
  // Giả lập dữ liệu đơn hàng, trong thực tế sẽ lấy từ giỏ hàng
  const orderItems = [
    { id: 1, name: "Giày chạy bộ XYZ", price: 1500000, quantity: 1 },
    { id: 2, name: "Áo thun chạy bộ", price: 300000, quantity: 2 },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 30000;
  const total = subtotal + shipping;

  return (
    <div className={`${className} bg-white p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold mb-6">Tổng quan đơn hàng</h2>
      {orderItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>{(item.price * item.quantity).toLocaleString("vi-VN")} đ</span>
        </div>
      ))}
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between mb-2">
          <span>Tạm tính</span>
          <span>{subtotal.toLocaleString("vi-VN")} đ</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Phí vận chuyển</span>
          <span>{shipping.toLocaleString("vi-VN")} đ</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Tổng cộng</span>
          <span>{total.toLocaleString("vi-VN")} đ</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
