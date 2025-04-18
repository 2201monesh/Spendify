// components/IncomeExpenseChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppContext } from "../context/AppContext";

function ChartSection() {
  const { userAmountList } = useAppContext();

  // 🔄 Prepare data: convert to date-wise format
  const chartData = [];

  userAmountList.forEach((item) => {
    const date = new Date(item.date).toLocaleDateString("en-GB"); // dd/mm/yyyy
    const existing = chartData.find((d) => d.date === date);
    const amount = Number(item.amount);

    if (existing) {
      if (item.amountType === "Income") existing.income += amount;
      else existing.expense += amount;
    } else {
      chartData.push({
        date,
        income: item.amountType === "Income" ? amount : 0,
        expense: item.amountType === "Expense" ? amount : 0,
      });
    }
  });

  // Optional: sort by date if not already
  chartData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="w-full h-80 bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Income vs Expense</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4caf50"
            strokeWidth={2}
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#f44336"
            strokeWidth={2}
            name="Expense"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartSection;
