import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        console.log("user stored", storedUser);
        const token = user?.token || storedUser?.token;
        console.log("Token being used:", token);
        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch(
          "http://localhost:5000/api/user/userprofile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("fail to fetch user data", err);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  //----------------------------deletFunction----------------
  const handleDelete = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = user?.token || storedUser?.token;

      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch("http://localhost:5000/api/user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      localStorage.removeItem("user");
      //dispatch({ type: "LOGOUT" });
      navigate("/signup");
    } catch (err) {
      console.error("Fail to delete user", err);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold text-center mb-4">
          User Profile
        </h1>
        {userData ? (
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="font-semibold px-4 py-2 text-600">Name</td>
                <td className="px-4 py-2 ">{userData.name}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-2">Email</td>
                <td className="px-4 py-2">{userData.email}</td>
              </tr>

              <tr>
                <td className="font-semibold px-4 py-2">Address</td>
                <td className="px-4 py-2">{userData.address}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No user data found in display</p>
        )}
      </div>
      <div className="flex justify-center gap-8 mb-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/updateaddress")}
        >
          {" "}
          Edit Address
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default UserProfile;
