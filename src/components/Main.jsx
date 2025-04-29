import React from "react";
import StatsCard from "./StatsCard";
import ChartSection from "./ChartSection";
import { useAppContext } from "../context/AppContext";
import AmountTable from "./AmountTable";
import ComboBox from "./ui/ComboBox";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { BiImport } from "react-icons/bi";
import { TbReportMoney } from "react-icons/tb";

const timeOptions = ["All Time", "7 Days", "1 Month", "3 Months"];

function Main() {
  const {
    totalExpenses,
    totalIncome,
    currentBalance,
    isModalOpen,
    setIsModalOpen,
    setUserAmountList,
    percentageIncomeChange,
    percentageExpenseChange,
    percentageBalanceChange,
  } = useAppContext();

  return (
    <div className="w-[100%] h-screen overflow-auto bg-[#FAFAFA]">
      <div className="w-[100%] h-[5%] border-b border-[#E0E0E0]"></div>
      <div className="flex p-4 items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-2 py-2.5 w-[140px] h-[40px] cursor-pointer rounded flex items-center justify-center bg-black text-white text-sm"
        >
          <IoAddCircleOutline size={15} className="mr-2" />
          Add New
        </button>
        <ComboBox />
      </div>

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
