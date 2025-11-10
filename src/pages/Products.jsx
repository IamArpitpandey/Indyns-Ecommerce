import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

// 🖼️ Import product images
import blower from "../assets/Blower.jpg";
import cooler from "../assets/Cooler.jpg";
import fan from "../assets/Fan.png";
import iron from "../assets/iron.png";
import bulb from "../assets/LED Bulb.png";

export default function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "LED Bulb", category: "Bulbs", price: 150, image: bulb },
    { id: 2, name: "BLDC Fan", category: "Fans", price: 1299, image: fan },
    { id: 3, name: "Electric Iron", category: "Irons", price: 999, image: iron },
    { id: 4, name: "Air Cooler", category: "Coolers", price: 1999, image: cooler },
    { id: 5, name: "Room Blower", category: "Heaters", price: 799, image: blower },
  ];

  const filteredProducts = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBuyNow = (product) => {
    addToCart(product); // product cart me daal do
    navigate("/checkout"); // direct checkout page pe le jao
  };

  return (
    <div className="p-5 sm:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#232f3e]">
        🛍️ Shop Products
      </h2>

      {/* 🔍 Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        >
          <option value="All">All Categories</option>
          <option value="Bulbs">Bulbs</option>
          <option value="Fans">Fans</option>
          <option value="Irons">Irons</option>
          <option value="Coolers">Coolers</option>
          <option value="Heaters">Heaters</option>
        </select>

        <input
          type="text"
          placeholder="Search your product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />
      </div>

      {/* 🧱 Product Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-between hover:shadow-yellow-300/40 hover:scale-105 transition-all duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 sm:w-44 sm:h-44 object-cover rounded-lg mb-4"
              />

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#232f3e]">{product.name}</h3>
                <p className="text-gray-600 font-medium mt-1">₹{product.price}</p>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 shadow-md transition-all"
                >
                  Add 🛒
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-[#232f3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 shadow-md transition-all"
                >
                  Buy ⚡
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full">
            No products found 😕
          </p>
        )}
      </div>
    </div>
  );
}
