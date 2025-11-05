import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyRepairShop</h1>
      <p className="mb-6">Best repair services & spare parts for your devices.</p>
      <div className="flex justify-center gap-4">
        <Link to="/products" className="bg-indigo-600 text-white px-4 py-2 rounded">View Products</Link>
        <Link to="/submit-repair" className="bg-green-600 text-white px-4 py-2 rounded">Submit Repair</Link>
      </div>
    </div>
  );
}
