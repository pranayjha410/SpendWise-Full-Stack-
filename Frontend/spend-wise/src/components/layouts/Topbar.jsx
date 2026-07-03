import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FaBars } from "react-icons/fa";

const Topbar = ({ onMenuClick }) => {
  const { user } = useContext(UserContext);
  console.log("user:", user);       
  console.log("profilePic:", user?.profilePic);
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">

      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuClick}
        className="md:hidden text-gray-600 hover:text-gray-800"
      >
        <FaBars size={20} />
      </button>

      {/* Welcome text */}
      <h2 className="text-gray-700 font-semibold text-base md:text-lg">
        Welcome back, {user?.fullName || "User"} 👋
      </h2>

      {/* Profile pic — desktop only (already in sidebar) */}
      <img
  src={user?.profilePic || ""}
  alt="profile"
  onError={(e) => {
    e.target.onerror = null; // prevent infinite loop
    e.target.src = `https://ui-avatars.com/api/?name=${user?.fullName || "U"}&background=f97316&color=fff&size=40`;
  }}
  className="w-9 h-9 rounded-full object-cover border"
/>
    </div>
  );
};

export default Topbar;