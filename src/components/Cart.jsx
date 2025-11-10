import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-28 p-10 text-center bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your Cart is Empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="pt-28 p-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-black">
        Your <span className="text-yellow-500">Cart</span>
      </h2>

      {/* 🛍️ Cart Items */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition-shadow"
          >
            {/* Image + Details */}
            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md border border-gray-200"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.name}
                </h3>
                <p className="text-gray-600 font-medium">₹{item.price}</p>
              </div>
            </div>

            {/* Quantity + Remove */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.qty - 1)}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-lg font-bold"
              >
                −
              </button>
              <span className="text-lg font-semibold">{item.qty}</span>
              <button
                onClick={() => updateQuantity(item.id, item.qty + 1)}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-lg font-bold"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 💰 Total + Clear Button */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800">
          Total: <span className="text-yellow-600">₹{total}</span>
        </h3>
        <button
          onClick={clearCart}
          className="mt-6 bg-black text-yellow-400 px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-black font-semibold transition-all"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
