import React, { useState } from "react";
import api from "../services/api";

export default function SubmitRepair() {
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    deviceModel: "",
    problemDescription: ""
  });
  const [repairId, setRepairId] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const username = localStorage.getItem("username");
      const payload = { ...form, username };
      const res = await api.submitRepair(payload);
      setRepairId(res.data.id);
      alert("Repair submitted. Repair ID: " + res.data.id);
    } catch (err) {
      alert("Failed to submit");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full p-8 rounded-3xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Submit Repair</h2>
        <form onSubmit={submit} className="space-y-4">
          <input
            required
            value={form.customerName}
            onChange={e => setForm({ ...form, customerName: e.target.value })}
            placeholder="Your name"
            className="w-full p-3 border border-white/30 rounded-xl bg-white/20 placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            required
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone"
            className="w-full p-3 border border-white/30 rounded-xl bg-white/20 placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            required
            value={form.deviceModel}
            onChange={e => setForm({ ...form, deviceModel: e.target.value })}
            placeholder="Device model"
            className="w-full p-3 border border-white/30 rounded-xl bg-white/20 placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            required
            value={form.problemDescription}
            onChange={e => setForm({ ...form, problemDescription: e.target.value })}
            placeholder="Describe problem"
            className="w-full p-3 border border-white/30 rounded-xl bg-white/20 placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transform transition duration-300"
          >
            Submit
          </button>
        </form>

        {repairId && (
          <div className="mt-6 p-4 bg-white/30 border border-white/20 rounded-xl text-gray-800 font-semibold text-center backdrop-blur-md shadow-inner">
            Submitted! Your Repair ID: <strong>{repairId}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
