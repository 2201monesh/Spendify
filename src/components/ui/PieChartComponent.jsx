import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

function PieChartComponent() {
  return (
    <div className="w-[30%] h-[320px] border border-[#E0E0E0] flex items-center flex-col p-4">
      <p className="font-bold">Financial Analytics</p>
      <div className="flex items-center">
        <PieChart width={200} height={250} className="mr-8">
          <Pie
            data={data}
            // cx={120}
            // cy={120}
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1">
            <p className="w-3.5 h-3.5 bg-[#0088FE] mr-2"></p>
            <p>Group A</p>
          </div>
          <div className="flex items-center mb-1">
            <p className="w-3.5 h-3.5 bg-[#00C49F] mr-2"></p>
            <p>Group B</p>
          </div>
          <div className="flex items-center mb-1">
            <p className="w-3.5 h-3.5 bg-[#FFBB28] mr-2"></p>
            <p>Group C</p>
          </div>
          <div className="flex items-center mb-1">
            <p className="w-3.5 h-3.5 bg-[#FF8042] mr-2"></p>
            <p>Group D</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChartComponent;
