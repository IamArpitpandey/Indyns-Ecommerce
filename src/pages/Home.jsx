import React from "react";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div className="text-center py-10">
      <Hero />
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Indyns Electrical Store ⚡
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Your one-stop destination for high-quality electrical products — LED bulbs, cables, switches, and more.
      </p>
    </div>
  );
}

