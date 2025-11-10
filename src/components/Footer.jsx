import React from "react";
import { FaBolt } from "react-icons/fa6"; // 🧠 Updated import (new version)
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-yellow-400 py-6 mt-auto">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* ⚡ Title */}
        <h2 className="text-xl font-bold flex justify-center items-center gap-2 mb-1">
          <FaBolt className="text-yellow-500" />
          Indyns Electricals
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-3">
          Powering your home with trust & technology.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 text-lg hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 text-lg hover:scale-110 transition-transform duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="mailto:support@indyns.com"
            className="text-gray-300 text-lg hover:text-yellow-400 hover:scale-110 transition-transform duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Indyns. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
