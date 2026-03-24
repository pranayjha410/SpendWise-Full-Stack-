import React from "react";
import Login_img from "../../assets/images/img1.jpg";
import { GoGraph } from "react-icons/go";

// Small reusable component
const InfoIcon = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md">
      <div className="text-xl">{icon}</div>
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* LEFT SIDE */}
       <div className="w-full md:w-[60%] flex flex-col justify-center px-8 lg:px-16">
        <h2 className="text-xl font-semibold mb-6">Spend Wise</h2>
        {children}
      </div>

      {/* RIGHT SIDE */}
       <div className="hidden md:flex w-[40%] bg-orange-100 items-center justify-center relative overflow-hidden">
        {/* Decorative boxes */}
        <div className="w-40 h-40 rounded-[40px]  bg-orange-500 absolute -top-10 -left-10"></div>
        <div className="w-40 h-40 rounded-[40px] border-4 border-green-500 absolute top-20 right-10"></div>
        <div className="w-40 h-40 rounded-[40px] bg-amber-400 absolute bottom-10 left-10"></div>

        {/* Info card */}
        <div className="absolute top-10 left-10 z-20">
          <div className="transition-transform duration-200 hover:scale-110">
            <InfoIcon icon={<GoGraph />} label="Know Your Expense And Income" />
          </div>
        </div>
        {/* Image */}
        <img
          src={Login_img}
          alt="login"
          className="w-[70%] max-w-md absolute bottom-10 rounded-xl shadow-lg z-10"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
