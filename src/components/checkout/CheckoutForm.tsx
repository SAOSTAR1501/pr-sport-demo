// src/components/checkout/CheckoutForm.tsx
import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface CheckoutFormProps {
  className?: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} bg-white p-6 rounded-lg shadow-md`}
    >
      <h2 className="text-2xl font-bold mb-6">Thông tin thanh toán</h2>
      <Input label="Họ và tên" type="text" required />
      <Input label="Email" type="email" required />
      <Input label="Số điện thoại" type="tel" required />
      <Input label="Địa chỉ" type="text" required />
      <Input label="Thành phố" type="text" required />
      <Button type="submit" className="w-full">
        Đặt hàng
      </Button>
    </form>
  );
};

export default CheckoutForm;
