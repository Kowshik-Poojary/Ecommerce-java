import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminDashboard(){
  const [repairs, setRepairs] = useState([]);
  const stages = ["Received","Diagnosed","Repairing","Repaired","Shipped","Delivered"];

  useEffect(()=>{
    api.adminGetRepairs().then(res=>setRepairs(res.data)).catch(()=>setRepairs([]));
  },[]);

  const updateStatus = (id, status) => {
    api.adminUpdateStatus(id, status).then(res=>{
      setRepairs(repairs.map(r => r.id===id ? {...r, status} : r));
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard — Repair Requests</h2>
      <div className="space-y-3">
        {repairs.map(r => (
          <div key={r.id} className="border p-3 rounded">
            <div className="flex justify-between items-center">
              <div>
                <div><strong>ID:</strong> {r.id}</div>
                <div><strong>Customer:</strong> {r.customerName}</div>
                <div><strong>Status:</strong> {r.status}</div>
              </div>
              <div className="flex gap-2">
                {stages.map(s => (
                  <button key={s} onClick={()=>updateStatus(r.id, s)} className={`px-2 py-1 rounded ${r.status===s ? "bg-green-600 text-white" : "bg-gray-100"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
