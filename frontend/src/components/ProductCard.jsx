import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-20 transition duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-4">
          <div className="font-bold text-gray-900 text-lg">₹{product.price}</div>
          <button
            onClick={() => onAdd(product)}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
