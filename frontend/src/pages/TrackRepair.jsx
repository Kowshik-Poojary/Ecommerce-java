import React, { useState } from "react";
import api from "../services/api";
import { motion } from "framer-motion";

export default function TrackRepair() {
  const [id, setId] = useState("");
  const [info, setInfo] = useState(null);

  const stages = ["Received", "Diagnosed", "Repairing", "Repaired", "Shipped", "Delivered"];

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
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white/30 backdrop-blur-md shadow-xl border border-white/20 rounded-3xl p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Track Your Repair
        </h2>

        {/* Input Field */}
        <div className="flex gap-3 mb-6">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your Repair ID"
            className="flex-1 p-3 rounded-xl border border-white/30 bg-white/30 backdrop-blur-sm text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            onClick={track}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transform transition duration-300"
          >
            Track
          </button>
        </div>

        {/* Repair Info */}
        {info && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/40 border border-white/30 rounded-2xl p-6 shadow-inner"
          >
            <div className="mb-4">
              <p className="font-semibold text-gray-800"><strong>Repair ID:</strong> {info.id}</p>
              <p className="text-gray-700"><strong>Customer:</strong> {info.customerName}</p>
              <p className="text-gray-700"><strong>Device:</strong> {info.deviceModel}</p>
              <p className="text-gray-700"><strong>Problem:</strong> {info.problemDescription}</p>
            </div>

            {/* Progress Tracker */}
            <div className="relative mt-8">
              <div className="flex justify-between mb-2">
                {stages.map((stage, i) => (
                  <div key={stage} className="flex flex-col items-center w-full">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        backgroundColor:
                          stages.indexOf(info.status) >= i
                            ? "#8B5CF6"
                            : "rgba(255,255,255,0.4)",
                      }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className={`w-8 h-8 rounded-full border border-white/40 flex items-center justify-center font-bold text-white shadow-md`}
                    >
                      {i + 1}
                    </motion.div>
                    <p className="text-xs mt-2 text-gray-700 font-medium">{stage}</p>
                  </div>
                ))}
              </div>

              {/* Progress Line */}
              <div className="absolute top-4 left-0 w-full h-1 bg-white/30 -z-10">
                <motion.div
                  className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{
                    width:
                      ((stages.indexOf(info.status) + 1) / stages.length) * 100 + "%",
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Current Status */}
            <motion.p
              className="text-center mt-6 text-lg font-semibold text-purple-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Current Status: <span className="font-bold">{info.status}</span>
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
