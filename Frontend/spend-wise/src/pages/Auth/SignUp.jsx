import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import ProfilePhoto from "../../components/Inputs/ProfilePhoto";

const SignUp = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (!userName.trim()) {
      setError("Username is required");
      return;
    }

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Fake API call
    setLoading(true);

    setTimeout(() => {
      console.log({
        profile,
        name,
        userName,
        email,
        password,
      });

      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-between h-full">

        {/* FORM */}
        <div className="flex flex-1 items-center justify-center">
          <form onSubmit={handleSignUp} className="auth-card">

            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Create Account 🚀
            </h3>

            <p className="text-gray-500 mb-4">
              Sign up to get started
            </p>

            {/* Profile Photo */}
            <ProfilePhoto image={profile} setImage={setProfile} />

            {error && <div className="error-box">{error}</div>}

            {/* Username */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                className="input-field"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter username"
              />
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-5">
              <label className="text-sm text-gray-600">Confirm Password</label>
              <input
                type="password"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary ${loading ? "btn-disabled" : ""}`}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-orange-500 font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;