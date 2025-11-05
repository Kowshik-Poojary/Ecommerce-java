import React from "react";

export default function ProductCard({product, onAdd}) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <div className="h-40 bg-gray-100 flex items-center justify-center mb-2">
        {product.imageUrl ? <img src={product.imageUrl} alt={product.name}/> : <span>No Image</span>}
      </div>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-sm">{product.description}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="font-semibold">₹{product.price}</div>
        <button onClick={() => onAdd(product)} className="bg-blue-600 text-white px-3 py-1 rounded">Add to Cart</button>
      </div>
    </div>
  );
}
