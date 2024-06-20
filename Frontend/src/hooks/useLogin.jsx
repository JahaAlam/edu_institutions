import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    console.log("Login successfull, user data:", data);

    if (response.ok) {
      const userWithToken = {
        ...data.user,
        token: data.token,
      };
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(userWithToken));

      // update the auth context
      dispatch({
        type: "LOGIN",
        payload: userWithToken,
      });

      // update loading state
      setIsLoading(false);
      navigate("/");
    }
  };

  return { login, isLoading, error };
};
