import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const logout = ()=>{ localStorage.clear(); navigate("/"); };

  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="font-bold text-xl">MyRepairShop</Link>
          <Link to="/products" className="text-sm">Products</Link>
          <Link to="/submit-repair" className="text-sm">Submit Repair</Link>
          <Link to="/track-repair" className="text-sm">Track Repair</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-sm">Cart</Link>
          {username ? (
            <>
              <span className="text-sm">Hi, {username}</span>
              <button onClick={logout} className="text-sm underline">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-sm">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
