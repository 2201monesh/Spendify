import React, { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAmountList, setUserAmountList] = useState([]);

  const totalExpenses = useMemo(() => {
    return userAmountList
      .filter((item) => item.amountType === "Expense")
      .reduce((acc, curr) => acc + Number(curr.amount), 0);
  }, [userAmountList]);

  const totalIncome = useMemo(() => {
    return userAmountList
      .filter((item) => item.amountType === "Income")
      .reduce((acc, curr) => acc + Number(curr.amount), 0);
  }, [userAmountList]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
