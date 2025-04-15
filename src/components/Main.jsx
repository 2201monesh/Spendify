import React from "react";
import StatsCard from "./StatsCard";

function Main() {
  return (
    <div className="w-[100%] h-screen">
      <div className="w-[100%] h-[5%] shadow"></div>
      <div className="p-4 flex">
        <StatsCard text="Current Balance" amount="$550" />
        <StatsCard text="Income" amount="$1500" />
        <StatsCard text="Expenses" amount="$1050" />
      </div>
    </div>
  );
}

export default Main;
