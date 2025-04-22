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
  const { filteredUserAmountList } = useAppContext();

  // 🛠️ Transform data for chart
  const dataMap = {};

  filteredUserAmountList?.forEach((item) => {
    if (!item.date) return;

    // Use ISO date string for sorting
    const isoDate = new Date(item.date).toISOString().split("T")[0]; // yyyy-mm-dd
    const amount = Number(item.amount);

    if (!dataMap[isoDate]) {
      dataMap[isoDate] = { date: isoDate, income: 0, expense: 0 };
    }

    if (item.amountType === "Income") {
      dataMap[isoDate].income += amount;
    } else if (item.amountType === "Expense") {
      dataMap[isoDate].expense += amount;
    }
  });

  // 🧾 Convert map to array and sort by date
  const chartData = Object.values(dataMap).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // ✅ Optional: format dates to dd/mm/yyyy for display
  const formattedChartData = chartData.map((d) => {
    const [yyyy, mm, dd] = d.date.split("-");
    return {
      ...d,
      date: `${dd}/${mm}/${yyyy}`,
    };
  });

  return (
    <div className="w-full h-80 bg-white p-4 rounded-2xl shadow border border-[#E0E0E0]">
      <h2 className="text-lg font-bold mb-4">Income vs Expense</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedChartData}>
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
