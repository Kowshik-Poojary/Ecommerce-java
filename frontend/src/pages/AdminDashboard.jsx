import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminDashboard() {
  const [repairs, setRepairs] = useState([]);
  const stages = ["Received", "Diagnosed", "Repairing", "Repaired", "Shipped", "Delivered"];

  useEffect(() => {
    api.adminGetRepairs()
      .then(res => setRepairs(res.data))
      .catch(() => setRepairs([]));
  }, []);

  const updateStatus = (id, status) => {
    api.adminUpdateStatus(id, status).then(res => {
      setRepairs(repairs.map(r => r.id === id ? { ...r, status } : r));
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-purple-600 border-b pb-2">Admin Dashboard — Repair Requests</h2>
      
      {repairs.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-lg">No repair requests yet.</div>
      ) : (
        <div className="space-y-6">
          {repairs.map(r => (
            <div
              key={r.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Repair Info */}
                <div className="space-y-1">
                  <div><strong>ID:</strong> <span className="text-gray-700">{r.id}</span></div>
                  <div><strong>Customer:</strong> <span className="text-gray-700">{r.customerName}</span></div>
                  <div>
                    <strong>Status:</strong> 
                    <span className={`ml-2 px-2 py-1 rounded-full font-semibold text-white ${
                      r.status === "Delivered" ? "bg-green-600" :
                      r.status === "Shipped" ? "bg-blue-500" :
                      r.status === "Repairing" ? "bg-yellow-500" :
                      r.status === "Repaired" ? "bg-indigo-500" :
                      r.status === "Diagnosed" ? "bg-purple-500" :
                      "bg-gray-400"
                    }`}>
                      {r.status}
                    </span>
                  </div>
                </div>

                {/* Stage Buttons */}
                <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
                  {stages.map(s => (
                    <button
                      key={s}
                      onClick={() => updateStatus(r.id, s)}
                      className={`px-3 py-1 rounded-xl font-medium transition ${
                        r.status === s
                          ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
