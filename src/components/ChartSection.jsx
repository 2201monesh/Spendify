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

  const dataMap = {};

  filteredUserAmountList?.forEach((item) => {
    if (!item.date) return;

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

  const chartData = Object.values(dataMap).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // const formattedChartData = chartData.map((d) => {
  //   const [yyyy, mm, dd] = d.date.split("-");
  //   return {
  //     ...d,
  //     date: `${dd}/${mm}/${yyyy}`,
  //   };
  // });

  const formattedChartData = chartData.map((d) => {
    const dateObj = new Date(d.date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "short" }); // e.g. "May"
    return {
      ...d,
      date: `${day} ${month}`,
    };
  });

  return (
    <div className="w-full h-80 bg-white p-6 shadow border border-[#E0E0E0]">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Income vs Expense
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedChartData}
          margin={{ top: 20, right: 20, bottom: 30, left: 0 }}
        >
          <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#71717A"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: "#E0E0E0" }}
          />
          <YAxis
            stroke="#71717A"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: "#E0E0E0" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              borderColor: "#E0E0E0",
              borderRadius: 8,
            }}
            labelStyle={{ color: "#71717A", fontSize: 12 }}
            itemStyle={{ fontSize: 12 }}
            cursor={{ stroke: "#E0E0E0", strokeWidth: 1 }}
          />
          {/* <Legend
            iconType="circle"
            wrapperStyle={{
              fontSize: 12,
              color: "#71717A",
              marginTop: "12px",
            }}
          /> */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4caf50"
            strokeWidth={2}
            name="Income"
            activeDot={{ r: 6 }}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#f44336"
            strokeWidth={2}
            name="Expense"
            activeDot={{ r: 6 }}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartSection;
