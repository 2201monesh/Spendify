import React, { useMemo } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useAppContext } from "../../context/AppContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CF1"];

function PieChartComponent() {
  const { filteredUserAmountList } = useAppContext();

  const chartData = useMemo(() => {
    // Step 1: Filter only expenses
    const expenses = filteredUserAmountList?.filter(
      (item) => item.amountType === "Expense"
    );

    // Step 2: Group by category and calculate totals
    const categoryMap = {};
    expenses?.forEach(({ category, amount }) => {
      const amt = parseFloat(amount);
      if (!categoryMap[category]) {
        categoryMap[category] = { name: category, value: 0, count: 0 };
      }
      categoryMap[category].value += amt;
      categoryMap[category].count += 1;
    });

    const grouped = Object.values(categoryMap);

    // Step 3: Sort by count (or value) and take top 5
    const top5 = grouped.sort((a, b) => b.count - a.count).slice(0, 5);

    // Step 4: Calculate % of total
    const total = top5.reduce((acc, cur) => acc + cur.value, 0);
    return top5.map((item) => ({
      ...item,
      percentage: ((item.value / total) * 100).toFixed(1),
    }));
  }, [filteredUserAmountList]);

  return (
    <div className="w-[30%] h-[320px] border border-[#E0E0E0] shadow flex items-center flex-col p-4 mt-2">
      <p className="font-bold mb-2">Top Spending Categories</p>

      {chartData.length === 0 ? (
        <div className="flex justify-center items-center h-full text-black text-lg">
          No data available
        </div>
      ) : (
        <div className="flex items-center">
          <PieChart width={200} height={250} className="mr-8">
            <Pie
              data={chartData}
              nameKey="name"
              innerRadius={80}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name, props) => [
                `₹${value} (${props.payload.percentage}%)`,
                name,
              ]}
            />
          </PieChart>

          {/* Dynamic Legend */}
          <div className="flex flex-col items-start text-sm">
            {chartData.map((entry, index) => (
              <div className="flex items-center mb-1" key={entry.name}>
                <div
                  className="w-3.5 h-3.5 mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <p>
                  {entry.name} ({entry.percentage}%)
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PieChartComponent;
