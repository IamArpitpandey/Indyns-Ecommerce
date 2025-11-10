import React from "react";
import { FaBolt, FaGift, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Offers() {
  const offers = [
    {
      id: 1,
      title: "Mega Festive Sale 🎉",
      desc: "Get 25% OFF on all premium electricals — limited time offer!",
      code: "INDYNS25",
      bg: "from-purple-600 via-pink-500 to-red-500",
      expiry: "Ends in 2 days ⏰",
    },
    {
      id: 2,
      title: "Winter Essentials ❄️",
      desc: "Flat ₹300 OFF on Room Heaters, Blowers, and Geysers!",
      code: "WINTER300",
      bg: "from-blue-500 via-cyan-400 to-green-400",
      expiry: "Hurry, 1 day left!",
    },
    {
      id: 3,
      title: "Fan-tastic Deal 💨",
      desc: "Buy 2 BLDC Fans and get 1 LED Bulb absolutely FREE!",
      code: "FANDEAL",
      bg: "from-yellow-400 via-orange-400 to-red-400",
      expiry: "Limited Stocks Only!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-[#232f3e] mb-10">
        ⚡ Exclusive Offers & Deals
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`p-6 rounded-2xl shadow-lg bg-gradient-to-r ${offer.bg} text-white hover:scale-105 transition-all duration-300 relative`}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-yellow-500 text-2xl p-3 rounded-full shadow-md">
              <FaGift />
            </div>

            <h2 className="text-2xl font-bold text-center mt-6 mb-2">{offer.title}</h2>
            <p className="text-center mb-3">{offer.desc}</p>

            <div className="text-center mb-3">
              <span className="bg-white/20 px-3 py-1 rounded-md font-semibold">
                Code: {offer.code}
              </span>
            </div>

            <p className="text-sm text-center opacity-90 flex justify-center items-center gap-2">
              <FaClock /> {offer.expiry}
            </p>

            <div className="text-center mt-6">
              <Link
                to="/products"
                className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
