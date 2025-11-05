import React, { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = (product) => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/login"); return; }
    const username = localStorage.getItem("username");
    api.addToCart({ productId: product.id, quantity: 1, username })
      .then(() => alert("Added to cart"))
      .catch(() => alert("Failed to add"));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 border-b pb-2">
        Products
      </h2>
      
      {products.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-lg">
          No products available.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div
              key={p.id}
              className="animate-fadeIn"
            >
              <ProductCard product={p} onAdd={handleAdd} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
