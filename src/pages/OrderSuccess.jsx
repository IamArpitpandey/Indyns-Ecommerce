import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle, FaDownload, FaTruck } from "react-icons/fa";
import jsPDF from "jspdf";

export default function OrderSuccess() {
  const location = useLocation();
  const paymentMethod = location.state?.paymentMethod || "COD";

  // 🧾 Random Order ID generate
  const orderId = "INDYNS-" + Math.floor(100000 + Math.random() * 900000);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 4);
  const formattedDate = deliveryDate.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // 🧠 PDF Generator
  const handleDownloadInvoice = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Indyns Electricals", 20, 20);
    doc.setFontSize(12);
    doc.text("Powering your home with trust & technology ⚡", 20, 28);

    doc.line(20, 32, 190, 32);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("🧾 Order Invoice", 20, 45);
    doc.text(`Order ID: ${orderId}`, 20, 55);
    doc.text(`Payment Method: ${paymentMethod}`, 20, 65);
    doc.text(`Estimated Delivery: ${formattedDate}`, 20, 75);

    doc.line(20, 80, 190, 80);

    doc.text("Thank you for shopping with Indyns Electricals!", 20, 95);
    doc.text("Visit again at www.indyns.in", 20, 105);

    doc.save(`Invoice_${orderId}.pdf`);
  };

  useEffect(() => {
    console.log("✅ Order Success Data:", location.state);
  }, [location.state]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center px-4">
      <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
      <h1 className="text-4xl font-bold text-[#232f3e] mb-3">
        Order Placed Successfully! 🎉
      </h1>

      <p className="text-gray-600 max-w-md mb-6">
        Thank you for shopping with{" "}
        <span className="text-yellow-500 font-semibold">
          Indyns Electricals
        </span>
        . Your order is being processed and will be delivered soon.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-left border border-yellow-200 mb-6">
        <h2 className="text-xl font-semibold text-[#232f3e] mb-3">
          Order Details
        </h2>
        <p className="text-gray-700">
          <strong>Order ID:</strong>{" "}
          <span className="text-[#232f3e] font-semibold">{orderId}</span>
        </p>
        <p className="text-gray-700">
          <strong>Payment Method:</strong>{" "}
          <span className="font-medium">{paymentMethod}</span>
        </p>
        <p className="text-gray-700 flex items-center gap-2 mt-2">
          <FaTruck className="text-yellow-500" />
          Estimated Delivery:{" "}
          <span className="font-medium text-[#232f3e]">{formattedDate}</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownloadInvoice}
          className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all"
        >
          <FaDownload /> Download Invoice
        </button>

        <Link
          to="/products"
          className="bg-[#232f3e] text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
        >
          Continue Shopping 🛍️
        </Link>
      </div>
    </div>
  );
}
