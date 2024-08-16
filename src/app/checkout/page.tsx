// src/app/checkout/page.tsx
"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import Image from "next/image";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaUniversity,
  FaMobile,
} from "react-icons/fa";

const paymentMethods = [
  { id: "credit_card", name: "Thẻ tín dụng/ghi nợ", icon: <FaCreditCard /> },
  { id: "cod", name: "Thanh toán khi nhận hàng", icon: <FaMoneyBillWave /> },
  {
    id: "bank_transfer",
    name: "Chuyển khoản ngân hàng",
    icon: <FaUniversity />,
  },
  { id: "e_wallet", name: "Ví điện tử", icon: <FaMobile /> },
];

const banks = [
  { id: "vcb", name: "Vietcombank", logo: "/images/banks/vcb.png" },
  { id: "tcb", name: "Techcombank", logo: "/images/banks/tcb.png" },
  { id: "acb", name: "ACB", logo: "/images/banks/acb.png" },
  { id: "bidv", name: "BIDV", logo: "/images/banks/bidv.png" },
];

const CheckoutPage = () => {
  const { items, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted", {
      items,
      totalPrice,
      formData,
      paymentMethod,
      selectedBank,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
              Thanh toán
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Thông tin giao hàng
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key}>
                      <label
                        htmlFor={key}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        type={key === "email" ? "email" : "text"}
                        id={key}
                        name={key}
                        value={value}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                  ))}

                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-6">
                    Phương thức thanh toán
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                          paymentMethod === method.id
                            ? "border-primary bg-primary bg-opacity-10"
                            : "border-gray-200 hover:border-primary"
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <div className="flex items-center">
                          <div className="text-2xl mr-3">{method.icon}</div>
                          <span className="text-sm font-medium">
                            {method.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {paymentMethod === "bank_transfer" && (
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Chọn ngân hàng
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {banks.map((bank) => (
                          <div
                            key={bank.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                              selectedBank === bank.id
                                ? "border-primary bg-primary bg-opacity-10"
                                : "border-gray-200 hover:border-primary"
                            }`}
                            onClick={() => setSelectedBank(bank.id)}
                          >
                            <Image
                              src={bank.logo}
                              alt={bank.name}
                              width={80}
                              height={40}
                              className="mx-auto"
                            />
                            <p className="text-center mt-2 text-sm">
                              {bank.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full mt-8">
                    Hoàn tất đặt hàng
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Đơn hàng của bạn
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between py-3 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded-md mr-4"
                        />
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Số lượng: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                      </span>
                    </div>
                  ))}
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div className="flex justify-between">
                      <span className="text-base font-medium text-gray-900">
                        Tổng cộng
                      </span>
                      <span className="text-xl font-semibold text-primary">
                        {totalPrice.toLocaleString("vi-VN")} đ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
