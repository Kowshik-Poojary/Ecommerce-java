import React, { useState } from "react";
import api from "../services/api";

export default function SubmitRepair(){
  const [form, setForm] = useState({ customerName:"", phone:"", deviceModel:"", problemDescription:"" });
  const [repairId, setRepairId] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const username = localStorage.getItem("username");
      const payload = {...form, username};
      const res = await api.submitRepair(payload);
      setRepairId(res.data.id);
      alert("Repair submitted. Repair ID: " + res.data.id);
    } catch (err) {
      alert("Failed to submit");
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Submit Repair</h2>
      <form onSubmit={submit} className="space-y-3">
        <input required value={form.customerName} onChange={e=>setForm({...form, customerName:e.target.value})} placeholder="Your name" className="w-full p-2 border rounded"/>
        <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="w-full p-2 border rounded"/>
        <input required value={form.deviceModel} onChange={e=>setForm({...form, deviceModel:e.target.value})} placeholder="Device model" className="w-full p-2 border rounded"/>
        <textarea required value={form.problemDescription} onChange={e=>setForm({...form, problemDescription:e.target.value})} placeholder="Describe problem" className="w-full p-2 border rounded"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>

      {repairId && (
        <div className="mt-4 p-3 bg-green-50 border rounded">
          Submitted! Your Repair ID: <strong>{repairId}</strong>
        </div>
      )}
    </div>
  );
}
