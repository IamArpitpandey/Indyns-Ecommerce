import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative text-center overflow-hidden pt-32 pb-20 bg-gradient-to-r from-yellow-100 via-gray-100 to-yellow-50">
      {/* ⚡ Glowing Bolt */}
      <div className="text-yellow-400 text-6xl animate-pulse mb-6 drop-shadow-[0_0_20px_#facc15]">
        ⚡
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        Power Your World with{" "}
        <span className="text-yellow-500 drop-shadow-[0_0_10px_#facc15]">
          Indyns Electricals
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
        Reliable, Durable & Affordable Electrical Products — LEDs, Fans, Boards,
        and More!
      </p>

      {/* 🛍️ Shop Now Button */}
      <Link
        to="/products"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        🛍️ Shop Now
      </Link>

     {/* 🏷️ Premium Offer Box (Dark + Neon Style) */}
{/* 🏷️ Fixed Premium Offer Box (No hiding issue) */}
<div className="relative mt-32 bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] text-white rounded-2xl shadow-[0_0_25px_rgba(0,255,200,0.3)] max-w-3xl mx-auto py-16 px-8 border border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,255,200,0.6)]">

  {/* 💫 Background Light Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-10 blur-3xl animate-pulse rounded-2xl"></div>

  {/* 🌟 Offer Content */}
  <div className="relative z-10 text-center">
    <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,255,200,0.3)]">
      Mega Festive Sale 🎉
    </h2>
    <p className="text-lg text-gray-200 mb-2">
      Enjoy <span className="font-bold text-cyan-400">25% OFF</span> on all premium electricals!
    </p>
    <p className="text-sm text-gray-400">
      Use Code:{" "}
      <span className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-2 py-1 rounded-md font-semibold tracking-wider">
        INDYNS25
      </span>{" "}
      — Limited Time Offer ⏰
    </p>

    {/* 🚀 CTA Button */}
    <button className="mt-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:from-blue-500 hover:to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
      Shop Now 🚀
    </button>
  </div>

  {/* 🔹 Bottom Neon Border */}
  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse rounded-b-2xl"></div>
</div>
    </section>
  );
}
