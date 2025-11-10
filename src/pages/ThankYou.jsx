import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYou() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 text-center">
      <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
      <h1 className="text-4xl font-bold text-[#232f3e] mb-3">
        Thank You for Your Purchase! 🎉
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Your order has been successfully placed and will be delivered soon.
      </p>

      <Link
        to="/products"
        className="bg-[#febd69] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all"
      >
        Continue Shopping 🛍️
      </Link>
    </div>
  );
}
