import React, { useEffect } from "react";
import StatsCard from "./StatsCard";
import ChartSection from "./ChartSection";
import { useAppContext } from "../context/AppContext";
import AmountTable from "./AmountTable";
import ComboBox from "./ui/ComboBox";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { BiImport } from "react-icons/bi";
import { TbReportMoney } from "react-icons/tb";
import StatsCardModal from "./ui/StatsCardModal";

const timeOptions = ["All Time", "7 Days", "1 Month", "3 Months"];

function Main() {
  const {
    totalExpenses,
    totalIncome,
    currentBalance,
    setIsModalOpen,
    setUserAmountList,
    percentageIncomeChange,
    percentageExpenseChange,
    percentageBalanceChange,
    isStatsCardModalOpen,
    setIsStatsCardModalOpen,
  } = useAppContext();

  useEffect(() => {
    console.log("Hello from stats card modal", isStatsCardModalOpen);
  }, [isStatsCardModalOpen]);

  const handleClose = () => {
    const newState = {
      flag: !isStatsCardModalOpen.flag,
      ...isStatsCardModalOpen,
    };

    setIsStatsCardModalOpen(newState);
    console.log("Updated state (monesh):", newState);
  };

  return (
    <div className="w-[100%] overflow-auto">
      <div className="p-4 flex">
        <StatsCard
          text="Current Balance"
          amount={currentBalance}
          percentageChange={percentageBalanceChange}
          logo={<TbReportMoney />}
        />

        <StatsCard
          text="Income"
          amount={totalIncome}
          percentageChange={percentageIncomeChange}
          logo={<BiImport className="text-green-500" />}
        />
        <StatsCard
          text="Expenses"
          amount={totalExpenses}
          percentageChange={percentageExpenseChange}
          logo={<BiExport className="text-red-500" />}
        />
      </div>
      <StatsCardModal />
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
