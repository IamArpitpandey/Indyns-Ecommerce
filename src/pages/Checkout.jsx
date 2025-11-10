import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaMoneyBill, FaMobileAlt } from "react-icons/fa";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    pin: "",
    fullAddress: "",
  });
  const [payment, setPayment] = useState("COD");

  const handlePlaceOrder = () => {
    if (!address.name || !address.phone || !address.pin || !address.fullAddress) {
      alert("⚠️ Please fill in all address details!");
      return;
    }

    clearCart();
    navigate("/ordersuccess", { state: { paymentMethod: payment } });
  };

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your cart is empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen pt-28">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#232f3e]">
        🧾 Checkout
      </h2>

        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8 border border-yellow-200 grid md:grid-cols-2 gap-10">
        {/* 🏠 Delivery Address */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#232f3e]">
            Delivery Address
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="text"
              placeholder="PIN Code"
              value={address.pin}
              onChange={(e) => setAddress({ ...address, pin: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <textarea
              placeholder="Full Address (House No, Area, City, State)"
              rows="3"
              value={address.fullAddress}
              onChange={(e) =>
                setAddress({ ...address, fullAddress: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>
        </div>

        {/* 💳 Order Summary + Payment */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#232f3e]">
            Order Summary
          </h3>
          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3"
              >
                <span className="text-gray-800">
                  {item.name} × {item.qty}
                </span>
                <span className="text-gray-600 font-medium">
                  ₹{item.price * item.qty}
                </span>
              </div>
            ))}
          </div>

          {/* 💛 Total Amount */}
          <div className="text-right mt-6">
            <div className="inline-block bg-gradient-to-r from-yellow-400 via-[#febd69] to-yellow-500 px-6 py-3 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#232f3e]">
                Total: ₹{total}
              </h3>
            </div>
          </div>

          {/* 💰 Payment Options */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Payment Method
            </h4>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={payment === "COD"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                <FaMoneyBill className="text-green-500" />
                Cash on Delivery (COD)
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={payment === "UPI"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                <FaMobileAlt className="text-blue-500" />
                UPI / Wallet (PhonePe, GPay)
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="Card"
                  checked={payment === "Card"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                <FaCreditCard className="text-purple-500" />
                Credit / Debit Card
              </label>
            </div>
          </div>

          {/* 🟩 Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-8 w-full bg-[#232f3e] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Place Order 💳
          </button>
        </div>
      </div>
    </div>
  );
}
