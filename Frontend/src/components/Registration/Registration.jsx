import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log("send to the server");

    await signup(name, email, password, address);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-400 px-5">
      <div className=" max-w-md mx-auto">
        <div className="p-6 rounded-lg bg-white text-gray-900">
          <h1 className="text-2xl font-semibold text-center">Registration</h1>
          <form className="mt-8 space-y-4" onSubmit={handleRegistration}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                name="name"
                className="w-full px-5 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none bg-gray-100 border-gray-300 text-black focus:border-black"
                type="text"
                placeholder=" Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <input
              name="email"
              className="w-full px-5 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none bg-gray-100 border-gray-300 text-black focus:border-black"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              name="password"
              className="w-full px-5 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none bg-gray-100 border-gray-300 text-black focus:border-black"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              name="permanentAddress"
              className="w-full px-5 py-3 rounded-lg border-2 placeholder-gray-500 text-sm focus:outline-none bg-gray-100 border-gray-300 text-black focus:border-black"
              type="text"
              placeholder="Permanent Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <button
              disabled={isLoading}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700/90 transition duration-300"
            >
              Register
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <p className="text-center mt-4">
              Already have an account?
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
