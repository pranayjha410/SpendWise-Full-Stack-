// src/components/layouts/LandingNav.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

const navLinks = [
  { label: "Home",         path: "/" },
  { label: "Features",     path: "/features" },
  { label: "How it works", path: "/how-it-works" },
];

const LandingNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-8 sm:px-12 py-4 border-b border-slate-100 sticky top-0 bg-white z-10">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
        <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
          <FaWallet className="text-white text-xs" />
        </div>
        <span className="text-sm font-semibold text-slate-900">SpendWise</span>
      </div>

      <div className="hidden md:flex gap-6">
        {navLinks.map((l) => (
          <span
            key={l.path}
            onClick={() => navigate(l.path)}
            className={`text-sm cursor-pointer transition
              ${location.pathname === l.path
                ? "text-orange-500 font-medium"
                : "text-slate-500 hover:text-orange-500"
              }`}
          >
            {l.label}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <button onClick={() => navigate("/login")}
          className="px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition">
          Sign in
        </button>
        <button onClick={() => navigate("/signup")}
          className="px-4 py-2 rounded-lg bg-orange-500 text-sm text-white hover:bg-orange-600 transition">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default LandingNav;