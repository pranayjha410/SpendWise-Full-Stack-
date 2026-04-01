import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
      //loading (for login)
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", "123");
      setLoading(false);
      navigate("/dashboard");
    }, 800);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-between h-full">

        {/* FORM */}
        <div className="flex flex-1 items-center justify-center">
          <form onSubmit={handleLogin} className="auth-card">

            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Welcome Back 👋
            </h3>

            <p className="text-gray-500 mb-6">
              Login to continue managing your finances
            </p>

            {error && <div className="error-box">{error}</div>}

            {/* Email */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary ${loading ? "btn-disabled" : ""}`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            New user?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-orange-500 font-semibold cursor-pointer hover:underline"
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;