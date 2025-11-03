import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [data] = useState([
    { name: "Jan", value: 40 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 20 },
    { name: "Apr", value: 27 },
    { name: "May", value: 18 },
    { name: "Jun", value: 23 },
    { name: "Jul", value: 34 }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white p-4 rounded-2xl shadow-md flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Predexa Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">Logout</button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Churn Rate</h2>
          <p className="text-3xl font-bold text-red-500">5.3%</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Threat Alerts</h2>
          <p className="text-3xl font-bold text-yellow-500">12</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
