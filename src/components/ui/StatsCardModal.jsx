import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useAppContext } from "../../context/AppContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CF1"];

function StatsCardModal() {
  const { statsCardModal, setStatsCardModal, filteredUserAmountList } =
    useAppContext();

  const { chartData, total } = useMemo(() => {
    const type = statsCardModal.type === "Income" ? "Income" : "Expense";

    const filtered = filteredUserAmountList?.filter(
      (item) => item.amountType === type
    );

    const categoryMap = {};
    filtered?.forEach(({ category, amount }) => {
      const amt = parseFloat(amount);
      if (!categoryMap[category]) {
        categoryMap[category] = { name: category, value: 0, count: 0 };
      }
      categoryMap[category].value += amt;
      categoryMap[category].count += 1;
    });

    const grouped = Object.values(categoryMap);
    const top5 = grouped.sort((a, b) => b.count - a.count).slice(0, 5);

    const total = top5.reduce((acc, cur) => acc + cur.value, 0);
    const chartData = top5.map((item) => ({
      ...item,
      percentage: ((item.value / total) * 100).toFixed(1),
    }));

    return { chartData, total };
  }, [filteredUserAmountList, statsCardModal]);

  if (!statsCardModal.flag) return null;

  const closeModal = () => setStatsCardModal({ flag: false, type: "" });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex justify-center items-center z-50">
      <div className="bg-white w-[450px] h-[500px] p-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">
            {statsCardModal.type === "Income" && <p>Income Overview</p>}
            {statsCardModal.type === "Expenses" && <p>Expenses Overview</p>}
            {statsCardModal.type === "Current Balance" && (
              <p>Financial Manager</p>
            )}
          </div>
          <button
            onClick={closeModal}
            className="text-sm text-white bg-black px-4 py-1.5 cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Pie Chart + Legend */}
        {chartData.length === 0 ? (
          <div className="flex-grow flex justify-center items-center text-gray-500">
            No data available
          </div>
        ) : (
          <div className="flex flex-grow items-center justify-around">
            {/* Pie Chart */}
            <div className="relative">
              <PieChart width={220} height={220}>
                <Pie
                  data={chartData}
                  nameKey="name"
                  innerRadius={80}
                  outerRadius={110}
                  dataKey="value"
                  paddingAngle={3}
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
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="font-semibold text-sm text-center leading-tight">
                  <span className="text-gray-600">{statsCardModal.type}</span>
                  <br />₹{total.toFixed(2)} <br />
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col text-sm">
              {chartData.map((entry, index) => (
                <div className="mb-3" key={entry.name}>
                  <div className="flex items-center mb-1">
                    <div
                      className="w-3.5 h-3.5 mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <p className="font-medium">{entry.name}</p>
                  </div>
                  <p className="ml-5 text-gray-600">
                    ₹{entry.value.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatsCardModal;
