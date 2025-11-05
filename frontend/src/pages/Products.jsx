import React, { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Products(){
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    api.getProducts().then(res => setProducts(res.data)).catch(err => console.error(err));
  },[]);

  const handleAdd = (product) => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/login"); return; }
    const username = localStorage.getItem("username");
    api.addToCart({ productId: product.id, quantity: 1, username })
      .then(()=> alert("Added to cart"))
      .catch(()=> alert("Failed to add"));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(p => <ProductCard key={p.id} product={p} onAdd={handleAdd} />)}
      </div>
    </div>
  );
}
