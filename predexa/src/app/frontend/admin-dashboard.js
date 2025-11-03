import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin-login");
    } else {
      setLoggedIn(true);
    }
  }, [router]);

  if (!loggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome Admin! Here you can view system reports.</p>
        <ul className="text-left mt-4">
          <li>• Total Users Logged In: 10 (sample)</li>
          <li>• Active Sessions: 5 (sample)</li>
          <li>• System Status: Running Smoothly</li>
        </ul>
        <a href="/logout" className="text-red-500 mt-3 inline-block">Logout</a>
      </div>
    </div>
  );
}
