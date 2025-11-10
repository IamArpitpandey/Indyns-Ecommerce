import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaLock } from "react-icons/fa";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "indyns123") {
      localStorage.setItem("adminAuth", true);
      navigate("/admin");
    } else {
      alert("❌ Invalid Credentials! Use: admin / indyns123");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 border border-cyan-200">
        <div className="text-center mb-6">
          <FaUserShield className="text-5xl text-cyan-500 mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-gray-500 text-sm mt-1">Access your dashboard securely</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-700 text-sm">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter admin username"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:scale-105 transition-transform flex justify-center items-center gap-2"
          >
            <FaLock /> Login
          </button>
        </form>
      </div>
    </div>
  );
}
