import React, { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

const userArray = [
  {
    amountType: "Income",
    amount: "20712",
    category: "freelance",
    date: "2025-03-31",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "401",
    category: "food",
    date: "2025-03-22",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "15012",
    category: "gift",
    date: "2025-04-25",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "11782",
    category: "freelance",
    date: "2025-03-28",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "6542",
    category: "bonus",
    date: "2025-03-08",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1343",
    category: "transport",
    date: "2025-03-02",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "20070",
    category: "salary",
    date: "2025-03-05",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "15675",
    category: "gift",
    date: "2025-03-24",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "4765",
    category: "entertainment",
    date: "2025-04-25",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "4014",
    category: "entertainment",
    date: "2025-04-23",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1453",
    category: "rent",
    date: "2025-03-30",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "29898",
    category: "bonus",
    date: "2025-04-02",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "29858",
    category: "gift",
    date: "2025-03-15",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "10211",
    category: "bonus",
    date: "2025-03-13",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1780",
    category: "entertainment",
    date: "2025-03-04",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "27740",
    category: "bonus",
    date: "2025-04-23",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1509",
    category: "entertainment",
    date: "2025-04-13",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "23673",
    category: "bonus",
    date: "2025-03-14",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "23248",
    category: "gift",
    date: "2025-03-25",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1287",
    category: "entertainment",
    date: "2025-04-02",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "3006",
    category: "transport",
    date: "2025-04-03",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "4355",
    category: "shopping",
    date: "2025-03-07",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "17935",
    category: "gift",
    date: "2025-03-06",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1101",
    category: "transport",
    date: "2025-03-02",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1173",
    category: "utilities",
    date: "2025-03-18",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "2696",
    category: "food",
    date: "2025-03-14",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "3197",
    category: "food",
    date: "2025-03-17",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "28693",
    category: "salary",
    date: "2025-04-25",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "15089",
    category: "salary",
    date: "2025-03-10",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "3600",
    category: "rent",
    date: "2025-03-19",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "177",
    category: "transport",
    date: "2025-03-11",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "6273",
    category: "gift",
    date: "2025-03-14",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "28376",
    category: "gift",
    date: "2025-03-19",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "4136",
    category: "utilities",
    date: "2025-03-20",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "11848",
    category: "gift",
    date: "2025-03-24",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "10168",
    category: "gift",
    date: "2025-03-01",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "15062",
    category: "gift",
    date: "2025-04-08",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "7866",
    category: "bonus",
    date: "2025-04-14",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "13687",
    category: "freelance",
    date: "2025-03-31",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "7213",
    category: "freelance",
    date: "2025-03-15",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "24103",
    category: "salary",
    date: "2025-03-18",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "4232",
    category: "transport",
    date: "2025-03-29",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "5287",
    category: "gift",
    date: "2025-04-24",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "318",
    category: "utilities",
    date: "2025-04-07",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "2995",
    category: "food",
    date: "2025-04-12",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "16389",
    category: "gift",
    date: "2025-03-16",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "541",
    category: "shopping",
    date: "2025-03-31",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "29939",
    category: "freelance",
    date: "2025-04-02",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "18705",
    category: "gift",
    date: "2025-04-18",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "6941",
    category: "salary",
    date: "2025-03-29",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "23232",
    category: "freelance",
    date: "2025-04-03",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1141",
    category: "rent",
    date: "2025-03-01",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "1814",
    category: "entertainment",
    date: "2025-03-23",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "13467",
    category: "salary",
    date: "2025-03-17",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "24283",
    category: "freelance",
    date: "2025-04-04",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "7240",
    category: "salary",
    date: "2025-04-01",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "2342",
    category: "utilities",
    date: "2025-03-29",
    remarks: "remarks",
  },
  {
    amountType: "Income",
    amount: "5581",
    category: "salary",
    date: "2025-04-11",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "2527",
    category: "entertainment",
    date: "2025-04-08",
    remarks: "remarks",
  },
  {
    amountType: "Expense",
    amount: "2498",
    category: "transport",
    date: "2025-04-24",
    remarks: "remarks",
  },
];

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAmountList, setUserAmountList] = useState(userArray);
  const [selectedTimeRange, setSelectedTimeRange] = useState("All Time");
  const [statsCardModal, setStatsCardModal] = useState({
    flag: false,
    type: "",
  });

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

  const calculatePreviousPeriodData = () => {
    const now = new Date();
    let fromDate, previousFromDate, previousToDate;

    switch (selectedTimeRange) {
      case "7 Days":
        previousToDate = new Date(now.setDate(now.getDate() - 7));
        previousFromDate = new Date(now.setDate(now.getDate() - 7));
        fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - 7);
        break;
      case "1 Month":
        previousToDate = new Date(now.setMonth(now.getMonth() - 1));
        previousFromDate = new Date(now.setMonth(now.getMonth() - 1));
        fromDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - 1);
        break;
      case "3 Months":
        previousToDate = new Date(now.setMonth(now.getMonth() - 3));
        previousFromDate = new Date(now.setMonth(now.getMonth() - 3));
        fromDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - 3);
        break;
      default:
        return { prevIncome: 0, prevExpense: 0, prevBalance: 0 };
    }

    const previousData = userAmountList.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= previousFromDate && itemDate <= previousToDate;
    });

    const prevIncome = previousData
      .filter((item) => item.amountType === "Income")
      .reduce((acc, curr) => acc + Number(curr.amount), 0);

    const prevExpense = previousData
      .filter((item) => item.amountType === "Expense")
      .reduce((acc, curr) => acc + Number(curr.amount), 0);

    const prevBalance = prevIncome - prevExpense;

    return { prevIncome, prevExpense, prevBalance };
  };

  const { prevIncome, prevExpense, prevBalance } = useMemo(
    () => calculatePreviousPeriodData(),
    [selectedTimeRange, userAmountList]
  );

  const percentageChange = (current, previous) => {
    if (previous === 0) return current === 0 ? 0 : 100; // Prevent divide by 0
    return ((current - previous) / previous) * 100;
  };

  const percentageIncomeChange = useMemo(
    () => percentageChange(totalIncome, prevIncome),
    [totalIncome, prevIncome]
  );
  const percentageExpenseChange = useMemo(
    () => percentageChange(totalExpenses, prevExpense),
    [totalExpenses, prevExpense]
  );
  const percentageBalanceChange = useMemo(
    () => percentageChange(currentBalance, prevBalance),
    [currentBalance, prevBalance]
  );

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
        percentageIncomeChange,
        percentageExpenseChange,
        percentageBalanceChange,
        statsCardModal,
        setStatsCardModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
