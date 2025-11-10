import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-28 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart 🛒</h2>
        <p className="text-gray-500">Your cart is empty. Add some products!</p>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.qty - 1)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQuantity(item.id, item.qty + 1)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold">Total: ₹{total}</h3>
        <button
          onClick={clearCart}
          className="mt-5 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
