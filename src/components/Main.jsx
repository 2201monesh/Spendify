import React from "react";
import StatsCard from "./StatsCard";
import ChartSection from "./ChartSection";
import { useAppContext } from "../context/AppContext";
import AmountTable from "./AmountTable";

function Main() {
  const { totalExpenses, totalIncome, currentBalance } = useAppContext();
  return (
    <div className="w-[100%] h-screen overflow-auto">
      <div className="w-[100%] h-[5%] border-b border-[#E0E0E0]"></div>
      <div className="p-4 flex">
        <StatsCard text="Current Balance" amount={currentBalance} />
        <StatsCard text="Income" amount={totalIncome} />
        <StatsCard text="Expenses" amount={totalExpenses} />
      </div>
      <div className="p-4">
        <ChartSection />
      </div>
      <div className="p-4">
        <AmountTable />
      </div>
    </div>
  );
}

export default Main;
