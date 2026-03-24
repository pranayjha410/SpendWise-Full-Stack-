import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import AuthLayout from '../../components/layouts/AuthLayout'

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter valid email");
      return;
    }

    if (!password) {
      setError("Please enter password");
      return;
    }

    // fake login
    localStorage.setItem("token", "123");

    navigate("/dashboard");
  };

  return (
    <AuthLayout>
  <div className="flex flex-col h-full">

   

    {/* Center Content */}
    <div className="flex flex-1 items-center justify-center">
      <form onSubmit={handleLogin} className="w-full max-w-sm">

        <h3 className="text-2xl font-bold mb-2">
          Welcome Back
        </h3>

        <p className="text-gray-500 mb-6">
          Please enter your details to log in
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
         className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-medium"
        >
          Login
        </button>

      </form>
    </div>

    {/* Bottom Center Signup */}
    <div className="text-center mb-8 ">
      <p className="text-sm text-gray-600">
        New user?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-blue-600 font-medium cursor-pointer hover:underline"
        >
          Sign up
        </span>
      </p>
    </div>

  </div>
</AuthLayout>
  )
}

export default Login