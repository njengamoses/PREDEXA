"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [churnResult, setChurnResult] = useState<string>("");
  const [threatResult, setThreatResult] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      router.push("/login"); // redirect if no token
    } else {
      setLoggedIn(true);
    }
  }, [router]);

  const runChurnScan = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/churn/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer_id: "12345" }) // sample payload
      });
      const data = await res.json();
      setChurnResult(data.prediction);
    } catch (err) {
      setChurnResult("⚠️ Error contacting churn service.");
    }
  };

  const runThreatScan = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/threat/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ traffic: "sample_network_data" }) // sample payload
      });
      const data = await res.json();
      setThreatResult(data.prediction);
    } catch (err) {
      setThreatResult("⚠️ Error contacting threat service.");
    }
  };

  if (!loggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mb-6">Welcome! You are logged in.</p>

        <button
          onClick={runChurnScan}
          className="w-full bg-blue-600 text-white py-2 rounded mb-3 hover:bg-blue-700"
        >
          Run Churn Scan
        </button>
        {churnResult && (
          <p className="text-gray-700 mb-4">Churn Result: {churnResult}</p>
        )}

        <button
          onClick={runThreatScan}
          className="w-full bg-gray-800 text-white py-2 rounded mb-3 hover:bg-gray-900"
        >
          Run Threat Scan
        </button>
        {threatResult && (
          <p className="text-gray-700 mb-4">Threat Result: {threatResult}</p>
        )}

        <a href="/logout" className="text-blue-500 mt-3 inline-block">
          Logout
        </a>
      </div>
    </div>
  );
}

