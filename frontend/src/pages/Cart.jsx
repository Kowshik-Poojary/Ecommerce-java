import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Cart(){
  const [items, setItems] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(()=>{
    if (!username) return;
    api.getCart(username).then(res => setItems(res.data)).catch(()=> setItems([]));
  },[username]);

  const removeItem = (id) => {
    api.removeCartItem(id).then(()=> setItems(items.filter(i=>i.id!==id)));
  };

  if (!username) return <div>Please login to view cart.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length===0 ? <div>No items</div> : (
        <div className="space-y-4">
          {items.map(it => (
            <div key={it.id} className="flex justify-between items-center border p-3 rounded">
              <div>
                <div className="font-bold">{it.productName || `Product ${it.productId}`}</div>
                <div>Qty: {it.quantity}</div>
              </div>
              <div>
                <button onClick={() => removeItem(it.id)} className="text-red-500">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
