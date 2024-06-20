import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-400 px-5">
      <div className="w-full max-w-md mx-auto">
        <div className="p-6 rounded-lg bg-white text-gray-900">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <form className="mt-8 space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block mb-2 text-gray-700 font-bold">
                Email Address
              </label>
              <input
                className="w-full px-5 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none bg-gray-100 border-gray-300 text-black focus:border-black"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-bold">
                Enter Password
              </label>
              <input
                className="w-full px-5 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none bg-gray-100 border-gray-300 text-black focus:border-black"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              disabled={isLoading}
              className="w-full py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mt-4 flex items-center w-full text-center">
              <Link to="/signup">
                Do not have an account yet?{" "}
                <span className="text-blue-700">Sign Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
