import React from "react";
import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    
    <div className="flex min-h-screen flex-col md:flex-row">

      {/* LEFT — form */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 bg-white">
        {/* Logo */}
        <div
  onClick={() => navigate("/")}
  className="flex items-center gap-2 mb-8 cursor-pointer w-fit"
>
  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
    <FaWallet className="text-white text-sm" />
  </div>

  <span className="text-base font-semibold text-gray-800 hover:text-orange-500 transition-colors">
    SpendWise
  </span>
</div>

        {children}
      </div>

      {/* RIGHT — visual */}
      <div className="relative hidden md:flex md:w-[45%] bg-[#1e293b] flex-col justify-center p-9 overflow-hidden">

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-blue-500 to-green-500" />

        <h3 className="text-[#f1f5f9] text-lg font-medium mb-1">
          Your finances, simplified
        </h3>
        <p className="text-[#64748b] text-xs mb-6">
          Track income and expenses effortlessly
        </p>

        {/* Stats */}
        <div className="flex gap-3 mb-5">
          <div className="flex-1 bg-white/5 border border-white/8 rounded-xl p-3">
            <p className="text-[#f1f5f9] text-base font-medium">₹42,500</p>
            <p className="text-[#475569] text-[10px] mt-0.5">Total income</p>
            <p className="text-green-400 text-[10px] mt-1">↑ 12% this month</p>
          </div>
          <div className="flex-1 bg-white/5 border border-white/8 rounded-xl p-3">
            <p className="text-[#f1f5f9] text-base font-medium">₹18,200</p>
            <p className="text-[#475569] text-[10px] mt-0.5">Total spent</p>
            <p className="text-orange-400 text-[10px] mt-1">↑ 4% this month</p>
          </div>
        </div>

        {/* Chart card */}
        <div className="bg-white/4 border border-white/7 rounded-xl p-4">
          <p className="text-[#64748b] text-[11px] mb-3">Income vs expense — last 6 months</p>

          {/* SVG Line Chart */}
          <svg width="100%" viewBox="0 0 260 80" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="20" x2="260" y2="20" stroke="#1e3a5f" strokeWidth="0.5"/>
            <line x1="0" y1="40" x2="260" y2="40" stroke="#1e3a5f" strokeWidth="0.5"/>
            <line x1="0" y1="60" x2="260" y2="60" stroke="#1e3a5f" strokeWidth="0.5"/>

            {/* Income line */}
            <polyline points="0,55 52,42 104,48 156,28 208,35 260,18"
              fill="none" stroke="#3b82f6" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>

            {/* Expense line */}
            <polyline points="0,68 52,62 104,65 156,58 208,60 260,54"
              fill="none" stroke="#f97316" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>

            {/* Income dots */}
            {[[0,55],[52,42],[104,48],[156,28],[208,35],[260,18]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill="#3b82f6"/>
            ))}

            {/* Expense dots */}
            {[[0,68],[52,62],[104,65],[156,58],[208,60],[260,54]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill="#f97316"/>
            ))}

            {/* X labels */}
            {["Jan","Feb","Mar","Apr","May","Jun"].map((m,i) => (
              <text key={i} x={i*52} y="78" fontSize="7" fill="#475569" textAnchor="middle">{m}</text>
            ))}
          </svg>

          {/* Legend */}
          <div className="flex gap-3 mt-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"/>
              <span className="text-[#475569] text-[10px]">Income</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-orange-500"/>
              <span className="text-[#475569] text-[10px]">Expense</span>
            </div>
          </div>
        </div>

      </div>

      {/* MOBILE footer */}
      <div className="md:hidden px-4 pb-6 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
        <FaWallet className="text-orange-500" />
        <span>Manage your finances with SpendWise</span>
      </div>

    </div>
  );
};

export default AuthLayout;