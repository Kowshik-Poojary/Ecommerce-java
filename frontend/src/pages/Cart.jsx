import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Cart() {
  const [items, setItems] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!username) return;
    api.getCart(username)
      .then(res => setItems(res.data))
      .catch(() => setItems([]));
  }, [username]);

  const removeItem = (id) => {
    api.removeCartItem(id).then(() => setItems(items.filter(i => i.id !== id)));
  };

  if (!username) return (
    <div className="min-h-[60vh] flex items-center justify-center text-gray-700 text-lg">
      Please login to view your cart.
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-purple-600 border-b pb-2">Your Cart</h2>
      
      {items.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-lg">
          🛒 Your cart is empty.
        </div>
      ) : (
        <div className="space-y-6">
          {items.map(it => (
            <div
              key={it.id}
              className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                  <img
                    src={it.imageUrl || "https://via.placeholder.com/60"}
                    alt={it.productName || `Product ${it.productId}`}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg">{it.productName || `Product ${it.productId}`}</div>
                  <div className="text-gray-500">Qty: {it.quantity}</div>
                  <div className="text-gray-700 font-semibold mt-1">₹{it.price * it.quantity}</div>
                </div>
              </div>
              <button
                onClick={() => removeItem(it.id)}
                className="text-red-500 font-semibold px-3 py-1 rounded-lg hover:bg-red-100 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
