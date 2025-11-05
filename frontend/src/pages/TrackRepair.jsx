import React, { useState } from "react";
import api from "../services/api";

export default function TrackRepair(){
  const [id, setId] = useState("");
  const [info, setInfo] = useState(null);

  const track = async () => {
    try {
      const res = await api.getRepair(id);
      setInfo(res.data);
    } catch (err) {
      alert("Not found");
      setInfo(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Track Repair</h2>
      <div className="flex gap-2">
        <input value={id} onChange={e=>setId(e.target.value)} placeholder="Enter repair ID" className="flex-1 p-2 border rounded"/>
        <button onClick={track} className="bg-indigo-600 text-white px-3 rounded">Track</button>
      </div>

      {info && (
        <div className="mt-4 p-4 border rounded">
          <div><strong>Repair ID:</strong> {info.id}</div>
          <div><strong>Status:</strong> {info.status}</div>
          <div><strong>Customer:</strong> {info.customerName}</div>
          <div><strong>Device:</strong> {info.deviceModel}</div>
          <div><strong>Problem:</strong> {info.problemDescription}</div>
        </div>
      )}
    </div>
  );
}
