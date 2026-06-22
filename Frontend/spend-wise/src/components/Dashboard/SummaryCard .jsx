import React from "react";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

const SummaryCard = ({ title, amount, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${color}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold text-gray-800">
          ₹{(amount || 0).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;