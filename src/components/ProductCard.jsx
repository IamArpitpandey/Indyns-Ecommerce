import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain p-4 bg-gray-50"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-indigo-600 text-xl font-bold mt-2">₹{product.price}</p>
        <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
