import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const logout = () => { localStorage.clear(); navigate("/"); };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-2xl py-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Links */}
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className="font-extrabold text-4xl text-white hover:scale-110 transform transition duration-300"
          >
            Ecommerce
          </Link>
          {["products", "submit-repair", "track-repair"].map((path, i) => (
            <Link
              key={i}
              to={`/${path}`}
              className="text-white text-lg font-semibold relative group px-2 py-1 hover:bg-white/20 rounded-lg transition"
            >
              {path.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all group-hover:w-full rounded"></span>
            </Link>
          ))}
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-8">
          <Link className="text-white text-lg font-medium relative group px-2 py-1 hover:bg-white/20 rounded-lg transition" to="/cart">
            Cart
            <span className="absolute -top-3 -right-4 bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded-full animate-pulse">
              3
            </span>
          </Link>

          {username ? (
            <>
              <span className="text-white text-lg font-semibold animate-bounce px-2 py-1">
                Hi, {username}
              </span>
              <button
                onClick={logout}
                className="text-white text-lg underline hover:text-yellow-300 transition px-2 py-1"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-white text-lg font-medium hover:text-yellow-300 transition px-2 py-1"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
