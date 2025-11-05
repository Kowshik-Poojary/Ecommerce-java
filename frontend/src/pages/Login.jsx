import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [form,setForm] = useState({ username:"", password:"" });
  const navigate = useNavigate();

  const doLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.login(form.username, form.password);
      const { token, username, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);
      if (role === "ADMIN") navigate("/admin");
      else navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={doLogin} className="space-y-3">
        <input required value={form.username} onChange={e=>setForm({...form, username:e.target.value})} placeholder="Username" className="w-full p-2 border rounded"/>
        <input required type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} placeholder="Password" className="w-full p-2 border rounded"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
      <div className="text-sm text-gray-500 mt-2">Admin: admin / Admin@123</div>
    </div>
  );
}
