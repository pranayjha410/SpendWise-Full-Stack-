import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import ProfilePhoto from "../../utils/ProfilePhoto";
import axiosInstance from "../../utils/axiosInstance";
import { UserContext } from "../../context/UserContext";
import { API_PATHS } from "../../utils/apiPaths";
const SignUp = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
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

  const handleSignUp = async (e) => {
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

    // setTimeout(() => {
    //   console.log({
    //     profile,
    //     name,
    //     userName,
    //     email,
    //     password,
    //   });

    //   setLoading(false);
    //   navigate("/dashboard");
    // }, 1000);

    try {
       let profilePicUrl = "";
       // Step 1 — upload image first if user selected one
       
    if (profile) {
  const imageFormData = new FormData();
  imageFormData.append("profilePic", profile);
  console.log("profile instanceof File:", profile instanceof File);
  console.log("profile name:", profile?.name);
  console.log("profile size:", profile?.size);
  console.log("FormData entries:");
  for (let [key, value] of imageFormData.entries()) {
    console.log(key, value);
  }

  const uploadRes = await axiosInstance.post(
    API_PATHS.IMAGE.UPLOAD_IMAGE,
    imageFormData   // ← no headers, browser handles it
  );

  profilePicUrl = uploadRes.data.imageUrl;
}

    const { data } = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
      fullName: name,
      username: userName,
      email,
      password,
      profilePic: profilePicUrl, // ← string URL now
    });

    navigate("/login");
      // const formData = new FormData();
      // formData.append("fullName", name);
      // formData.append("username", userName);
      // formData.append("email", email);
      // formData.append("password", password);
      // if (profile instanceof File) {
      //   formData.append("profilePic", profile);  // ← key must match multer's field name
      // }
      // const { data } = await axiosInstance.post(API_PATHS.AUTH.REGISTER, formData, {
      //   headers: { "Content-Type": "multipart/form-data" }, // important for converting img into json
      // });
      // if (data.data.accessToken) {
      //   localStorage.setItem("token", data.data.accessToken);
      //   updateUser(data.data.user);
      // }
      // //once signup 
      // navigate("/login");
    }
    catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.response?.data);
      setError(err.response?.data?.message || "Signup failed, try again");
    } finally {
      setLoading(false);
    }
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