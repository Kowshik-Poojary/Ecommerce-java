import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
        Welcome to MyRepairShop
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-600">
        Best repair services & spare parts for your devices.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/products"
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transform transition duration-300 text-white px-6 py-3 rounded-2xl shadow-lg"
        >
          View Products
        </Link>
        <Link
          to="/submit-repair"
          className="bg-gradient-to-r from-green-500 to-lime-400 hover:scale-105 transform transition duration-300 text-white px-6 py-3 rounded-2xl shadow-lg"
        >
          Submit Repair
        </Link>
      </div>
    </div>
  );
}
