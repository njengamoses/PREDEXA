"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Reports() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [reports, setReports] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      router.push("/login"); // redirect if not logged in
    } else {
      setLoggedIn(true);
      fetchReports();
    }
  }, [router]);

  const fetchReports = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/reports");
      const data = await res.json();
      setReports(data);
    } catch (err) {
      console.error("Error fetching reports:", err);
    }
  };

  if (!loggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Reports</h1>

        {reports.length === 0 ? (
          <p className="text-center text-gray-600">No reports available yet.</p>
        ) : (
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Result</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, i) => (
                <tr key={i} className="text-center">
                  <td className="p-2 border">{report.date}</td>
                  <td className="p-2 border">{report.type}</td>
                  <td className="p-2 border">{report.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-6 flex justify-between">
          <a
            href="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Dashboard
          </a>
          <a
            href="/logout"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
