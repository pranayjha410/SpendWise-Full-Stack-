import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FaChartPie, FaWallet, FaCreditCard, FaSignOutAlt, FaTimes } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const navLinks = [
  { label: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
  { label: "Income",    path: "/income",    icon: <FaWallet /> },
  { label: "Expense",   path: "/expense",   icon: <FaCreditCard /> },
];

const Sidebar = ({ activeMenu, isOpen, onClose }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post(API_PATHS.AUTH.LOGOUT);
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      clearUser();
      navigate("/login");
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    onClose(); // ← close sidebar on mobile after clicking
  };

  return (
    <>
      {/* Overlay — mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
          onClick={onClose} // ← click outside to close
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r z-20 flex flex-col justify-between p-5 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}  
          md:translate-x-0`}  // ← always visible on desktop
      >
        {/* Top section */}
        <div>

          {/* Logo + close button */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-orange-500">💰 ExpenseTracker</h1>
            {/* Close button — mobile only */}
            <button onClick={onClose} className="md:hidden text-gray-500 hover:text-gray-700">
              <FaTimes />
            </button>
          </div>

          {/* User info */}
          <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg">
            <img
  src={user?.profilePic || ""}
  alt="profile"
  onError={(e) => {
    e.target.onerror = null; // prevent infinite loop
    e.target.src = `https://ui-avatars.com/api/?name=${user?.fullName || "U"}&background=f97316&color=fff&size=40`;
  }}
  className="w-9 h-9 rounded-full object-cover border"
/>
            <div>
              <p className="text-sm font-semibold text-gray-700">{user?.fullName}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition
                  ${activeMenu === link.label
                    ? "bg-orange-100 text-orange-500"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;