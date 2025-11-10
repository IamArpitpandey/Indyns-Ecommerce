import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaUsers,
  FaClipboardList,
  FaSignOutAlt,
  FaPlus,
  FaTrashAlt,
} from "react-icons/fa";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminAuth");
    if (!loggedIn) navigate("/admin-login");
    else setAuth(true);

    const savedProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];
    setProducts(savedProducts);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin-login");
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) {
      alert("Please fill product details!");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: form.name,
      category: form.category || "General",
      price: parseFloat(form.price),
      stock: form.stock || "Available",
    };
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("adminProducts", JSON.stringify(updated));
    setForm({ name: "", category: "", price: "", stock: "" });
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("adminProducts", JSON.stringify(updated));
  };

  if (!auth) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* 🔹 Header */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-2">
          <FaClipboardList /> Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* 🔹 Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <FaBoxOpen className="text-4xl mb-3" />
          <h3 className="text-lg font-semibold">Products</h3>
          <p className="text-sm">{products.length} Active Listings</p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <FaUsers className="text-4xl mb-3" />
          <h3 className="text-lg font-semibold">Users</h3>
          <p className="text-sm">12 Registered Accounts</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <FaClipboardList className="text-4xl mb-3" />
          <h3 className="text-lg font-semibold">Orders</h3>
          <p className="text-sm">8 Pending Orders</p>
        </div>
      </div>

      {/* 🔹 Add Product Form */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
          <FaPlus /> Add New Product
        </h2>
        <form
          onSubmit={handleAddProduct}
          className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
        >
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Price (₹)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Stock (Available / Out of Stock)"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="col-span-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* 🔹 Product Table */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Product Inventory
        </h2>
        {products.length === 0 ? (
          <p className="text-gray-500 text-center">No products added yet 😕</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Product Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Stock</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={p.id} className="text-center border-b hover:bg-gray-50">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{p.name}</td>
                  <td className="p-2 border">{p.category}</td>
                  <td className="p-2 border">₹{p.price}</td>
                  <td className="p-2 border">{p.stock}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
