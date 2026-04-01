import React from "react";
import Login_img from "../../assets/images/img1.jpg";
import { GoGraph } from "react-icons/go";

const InfoIcon = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-md">
      <div className="text-xl">{icon}</div>
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">

      {/* LEFT */}
      <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-8">
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Spend Wise
        </h2>

        {children}
      </div>

      {/* RIGHT */}
      <div className="relative hidden md:flex md:w-[45%] lg:w-[40%] bg-linear-to-br from-orange-100 to-orange-200 items-center justify-center overflow-hidden">

        {/* Shapes */}
        <div className="absolute w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-orange-500 rounded-[30px] -top-5 -left-5 opacity-80"></div>

        <div className="absolute w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 border-4 border-green-500 rounded-[30px] top-20 right-6 opacity-70"></div>

        <div className="absolute w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-amber-400 rounded-[30px] bottom-6 left-6 opacity-80"></div>

        {/* Info */}
        <div className="absolute top-10 left-6 z-20">
          <div className="transition-transform duration-300 hover:scale-110">
            <InfoIcon
              icon={<GoGraph />}
              label="Track your income & expenses smartly"
            />
          </div>
        </div>

        {/* Image */}
        <img
          src={Login_img}
          alt="visual"
          className="w-[60%] sm:w-[65%] lg:w-[70%] max-w-md object-contain absolute bottom-6 sm:bottom-10 z-10 drop-shadow-xl"
        />
      </div>

      {/* MOBILE EXTRA */}
      <div className="md:hidden px-4 pb-6 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
        <GoGraph />
        <span>Manage your expenses efficiently</span>
      </div>
    </div>
  );
};

export default AuthLayout;