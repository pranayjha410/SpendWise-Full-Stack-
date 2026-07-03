import { useNavigate } from "react-router-dom";
import LandingNav from "./LandingNav";
import { FaWallet } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LandingNav />

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-8 sm:px-12 py-24 text-center bg-slate-50">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full border border-orange-200 mb-6">
          Smart personal finance tracker
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight mb-5 max-w-xl">
          Take control of your<br />
          <span className="text-orange-500">personal finances</span>
        </h1>

        <p className="text-sm text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
          Track your income, manage expenses, and visualise your financial health — all in one clean, simple dashboard.
        </p>

        <div className="flex gap-3 justify-center mb-16">
          <button onClick={() => navigate("/signup")}
            className="px-7 py-3 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
            Get started
          </button>
          <button onClick={() => navigate("/login")}
            className="px-7 py-3 rounded-lg border border-slate-200 text-slate-700 text-sm hover:bg-slate-50 transition">
            Login
          </button>
        </div>

        {/* Chart preview */}
        <div className="bg-[#1e293b] rounded-2xl p-5 w-full max-w-xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-blue-500 to-green-500" />
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-400 text-xs">Income vs expense — last 6 months</span>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-blue-400 text-sm font-medium">₹42,500</p>
                <p className="text-slate-500 text-[10px]">Income</p>
              </div>
              <div className="text-right">
                <p className="text-orange-400 text-sm font-medium">₹18,200</p>
                <p className="text-slate-500 text-[10px]">Expense</p>
              </div>
            </div>
          </div>
          <svg width="100%" viewBox="0 0 440 80" preserveAspectRatio="none">
            <line x1="0" y1="20" x2="440" y2="20" stroke="#1e3a5f" strokeWidth="0.5"/>
            <line x1="0" y1="40" x2="440" y2="40" stroke="#1e3a5f" strokeWidth="0.5"/>
            <line x1="0" y1="60" x2="440" y2="60" stroke="#1e3a5f" strokeWidth="0.5"/>
            <polyline points="0,55 88,42 176,48 264,28 352,35 440,18"
              fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="0,68 88,62 176,65 264,58 352,60 440,54"
              fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {[[0,55],[88,42],[176,48],[264,28],[352,35],[440,18]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#3b82f6"/>
            ))}
            {[[0,68],[88,62],[176,65],[264,58],[352,60],[440,54]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#f97316"/>
            ))}
            {["Jan","Feb","Mar","Apr","May","Jun"].map((m,i) => (
              <text key={i} x={i*88} y="78" fontSize="8" fill="#475569" textAnchor="middle">{m}</text>
            ))}
          </svg>
          <div className="flex gap-3 mt-2">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"/><span className="text-[10px] text-slate-500">Income</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500"/><span className="text-[10px] text-slate-500">Expense</span></div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="border-t border-slate-100 px-8 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => navigate("/")}
  >
    <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
      <FaWallet className="text-white text-[10px]" />
    </div>

    <span className="text-sm font-medium text-slate-800">
      SpendWise
    </span>
  </div>

  <p className="text-xs text-slate-400">
    © 2026 SpendWise. All rights reserved.
  </p>

  <div className="flex items-center gap-5 text-xs">
    <a
      href="https://github.com/pranayjha410"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-slate-700"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/pranayjha41/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-slate-700"
    >
      LinkedIn
    </a>

    <a
      href="mailto:pranayjha410@gmail.com"
      className="text-slate-400 hover:text-slate-700"
    >
      Contact
    </a>
  </div>

</footer>
    </div>
  );
};

export default LandingPage;