import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaGift, FaUser, FaBolt } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔥 Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaBolt className="text-yellow-500" />
          <span className="text-yellow-500">Indyns</span>
          <span className="text-gray-800">Electricals</span>
        </Link>

        {/* 🧭 Navigation Links */}
        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "hover:text-yellow-400"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "hover:text-yellow-400"
              }
            >
              Products
            </NavLink>
          </li>

          <li className="flex items-center gap-1">
            <FaGift className="text-pink-500" />
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "hover:text-yellow-400"
              }
            >
              Offers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "hover:text-yellow-400"
              }
            >
              Contact
            </NavLink>
          </li>

          {/* 👤 Account */}
          <li className="flex items-center gap-1">
            <FaUser className="text-blue-500" />
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "hover:text-yellow-400"
              }
            >
              Account
            </NavLink>
          </li>

          {/* 🔑 Admin */}
          <li>
            <NavLink
              to="/admin-login"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-semibold"
                  : "hover:text-cyan-400 transition-colors"
              }
            >
              🔑 Admin
            </NavLink>
          </li>

          {/* 🛒 Cart */}
          <li>
            <NavLink to="/cart">
              <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-semibold flex items-center gap-2 transition">
                <FaShoppingCart />
                Cart
                {cart.length > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
