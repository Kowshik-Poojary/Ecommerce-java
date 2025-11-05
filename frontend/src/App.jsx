import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SubmitRepair from "./pages/SubmitRepair";
import TrackRepair from "./pages/TrackRepair";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

function App(){
  const token = localStorage.getItem("token");
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/submit-repair" element={<SubmitRepair/>} />
          <Route path="/track-repair" element={<TrackRepair/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={ token ? <AdminDashboard/> : <Navigate to="/login" /> } />
        </Routes>
      </div>
      
    </div>
  );
}
export default App;
