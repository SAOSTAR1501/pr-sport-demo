// src/components/payment/StripeCheckoutButton.tsx
"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Thay thế bằng Stripe public key của bạn
const stripePromise = loadStripe("your_stripe_public_key");

interface StripeCheckoutButtonProps {
  amount: number;
  currency?: string;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({
  amount,
  currency = "vnd",
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to load");

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, currency }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
    >
      {isLoading ? "Đang xử lý..." : "Thanh toán với Stripe"}
    </button>
  );
};

export default StripeCheckoutButton;
