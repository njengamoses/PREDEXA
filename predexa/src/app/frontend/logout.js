import { useEffect, useState } from "react";

export default function Logout() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Simulate token removal from localStorage
    localStorage.removeItem("userToken");
    setMessage("You have been logged out!");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Logout</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
