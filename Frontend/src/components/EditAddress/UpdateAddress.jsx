import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const UpdateAddress = () => {
  const { user } = useAuthContext();
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = user?.token || storedUser?.token;
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch(
        "http://localhost:5000/api/user/updateaddress",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ address }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update address");
      }

      const data = await response.json();
      // Optionally, update the user context with new data
      // dispatch({ type: 'UPDATE_USER', payload: data });

      navigate("/userprofile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">Edit Address</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter new address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg mb-4"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Address
        </button>
      </form>
    </div>
  );
};

export default UpdateAddress;
