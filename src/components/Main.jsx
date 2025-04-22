import React from "react";
import StatsCard from "./StatsCard";
import ChartSection from "./ChartSection";
import { useAppContext } from "../context/AppContext";
import AmountTable from "./AmountTable";

const timeOptions = ["All Time", "7 Days", "1 Month", "3 Months"];

function Main() {
  const {
    totalExpenses,
    totalIncome,
    currentBalance,
    selectedTimeRange,
    setSelectedTimeRange,
  } = useAppContext();

  const handleChange = (e) => {
    setSelectedTimeRange(e.target.value);
  };

  return (
    <div className="w-[100%] h-screen overflow-auto">
      <div className="w-[100%] h-[5%] border-b border-[#E0E0E0]"></div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <label className="mr-2 font-medium">Select Time Range:</label>
          <select
            value={selectedTimeRange}
            onChange={handleChange}
            className="border p-1 rounded"
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
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
