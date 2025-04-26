import React from "react";

function StatsCard({ text, amount, logo }) {
  return (
    <div className="border border-[#E0E0E0] shadow w-[25%] p-4 rounded mr-4 bg-white">
      <div className="flex">
        <p className="mr-2">{logo}</p>
        <p className="text-sm mb-1 text-[#71717A]">{text}</p>
      </div>
      <p className="text-2xl">₹ {Number(amount).toLocaleString("en-IN")}</p>
    </div>
  );
}

export default StatsCard;
