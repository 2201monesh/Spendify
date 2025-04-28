import React from "react";
import { IoTrendingDown } from "react-icons/io5";
import { IoTrendingUp } from "react-icons/io5";

function StatsCard({ text, amount, logo, percentageChange }) {
  return (
    <div className="border border-[#E0E0E0] shadow w-[25%] p-4 rounded mr-4 bg-white">
      <div className="flex">
        <p className="mr-2">{logo}</p>
        <p className="text-sm mb-1 text-[#71717A]">{text}</p>
      </div>
      <p className="text-2xl mt-2">
        ₹ {Number(amount).toLocaleString("en-IN")}
      </p>
      <div
        className={`text-sm mt-2 flex items-center ${
          percentageChange >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {percentageChange >= 0 ? (
          <IoTrendingUp className="mr-1" />
        ) : (
          <IoTrendingDown className="mr-1" />
        )}
        {percentageChange >= 0 ? "+" : ""}
        {percentageChange.toFixed(2)}%
      </div>
    </div>
  );
}

export default StatsCard;
