import React, { useState } from "react";
import { FaUserCircle, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-cyan-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl w-96 p-8 border border-cyan-200">
        <div className="text-center mb-6">
          <FaUserCircle className="text-5xl text-cyan-500 mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:scale-105 transition-transform"
          >
            {isLogin ? (
              <>
                <FaSignInAlt className="inline mr-2" /> Login
              </>
            ) : (
              <>
                <FaUserPlus className="inline mr-2" /> Register
              </>
            )}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-cyan-500 font-semibold cursor-pointer hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
