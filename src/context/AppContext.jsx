import React, { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAmountList, setUserAmountList] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState("All Time");

  const filteredUserAmountList = useMemo(() => {
    if (selectedTimeRange === "All Time") return userAmountList;

    const now = new Date();
    let fromDate;

    switch (selectedTimeRange) {
      case "7 Days":
        fromDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case "1 Month":
        fromDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case "3 Months":
        fromDate = new Date(now.setMonth(now.getMonth() - 3));
        break;
      default:
        return userAmountList;
    }

    return userAmountList.filter((item) => new Date(item.date) >= fromDate);
  }, [selectedTimeRange, userAmountList]);

  const totalExpenses = useMemo(() => {
    return filteredUserAmountList
      .filter((item) => item.amountType === "Expense")
      .reduce((acc, curr) => acc + Number(curr.amount), 0);
  }, [filteredUserAmountList]);

  const totalIncome = useMemo(() => {
    return filteredUserAmountList
      .filter((item) => item.amountType === "Income")
      .reduce((acc, curr) => acc + Number(curr.amount), 0);
  }, [filteredUserAmountList]);

  const currentBalance = useMemo(() => {
    return totalIncome - totalExpenses;
  }, [totalIncome, totalExpenses]);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        userAmountList,
        setUserAmountList,
        totalExpenses,
        totalIncome,
        currentBalance,
        selectedTimeRange,
        setSelectedTimeRange,
        filteredUserAmountList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
