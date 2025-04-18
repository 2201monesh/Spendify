import React from "react";

function StatsCard({ text, amount }) {
  return (
    <div className="shadow w-[25%] p-4 rounded mr-4">
      <p className="text-sm mb-1">{text}</p>
      <p className="text-2xl">$ {amount}</p>
    </div>
  );
}

export default StatsCard;
