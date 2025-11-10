import React from "react";

export default function Contact() {
  return (
    <div className="pt-28 min-h-screen bg-gray-50 flex flex-col items-center px-5">
      <h2 className="text-4xl font-bold mb-10">
        Contact <span className="text-yellow-500">Us ⚡</span>
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>📞 91+ 7037999914</p>
          <p>📧 jitnovate@gmail.com</p>
          <p>📍 Nodia UP, India</p>
        </div>
      </div>
    </div>
  );
}
