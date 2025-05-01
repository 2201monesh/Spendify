// import React, { useState, useMemo } from "react";
// import { useAppContext } from "../context/AppContext";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import AmountTable from "../components/AmountTable";
// import ComboBox from "../components/ui/ComboBox";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#aa66cc"];

// function Analytics() {
//   const { filteredUserAmountList } = useAppContext();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Extract unique categories
//   const categories = useMemo(() => {
//     const set = new Set(filteredUserAmountList.map((item) => item.category));
//     return ["All", ...Array.from(set)];
//   }, [filteredUserAmountList]);

//   // Filtered data based on selected category
//   const categoryData = useMemo(() => {
//     if (selectedCategory === "All") return filteredUserAmountList;
//     return filteredUserAmountList.filter(
//       (item) => item.category === selectedCategory
//     );
//   }, [filteredUserAmountList, selectedCategory]);

//   // Aggregate spending per category
//   const pieData = useMemo(() => {
//     const map = new Map();
//     filteredUserAmountList.forEach((item) => {
//       if (item.amountType === "Expense") {
//         map.set(
//           item.category,
//           (map.get(item.category) || 0) + Number(item.amount)
//         );
//       }
//     });
//     return Array.from(map, ([name, value]) => ({ name, value }));
//   }, [filteredUserAmountList]);

//   // Find most frequent category
//   const mostRepeatedCategory = useMemo(() => {
//     const freqMap = {};
//     for (let item of filteredUserAmountList) {
//       freqMap[item.category] = (freqMap[item.category] || 0) + 1;
//     }
//     return Object.entries(freqMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
//   }, [filteredUserAmountList]);

//   return (
//     <div className="w-full h-screen overflow-auto bg-[#FAFAFA] p-6">
//       <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>

//       {/* Category Selector */}
//       <div className="mb-4 flex items-center gap-4">
//         <label className="text-sm font-medium">Filter by Category:</label>
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="border px-3 py-1 rounded-md text-sm bg-white"
//         >
//           {categories.map((cat, idx) => (
//             <option key={idx} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Graph & Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Pie Chart */}
//         <div className="bg-white p-4 rounded-2xl shadow border border-[#E0E0E0]">
//           <h3 className="text-md font-semibold mb-2">Category-wise Spend</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 label
//               >
//                 {pieData.map((_, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Most Repeated Category */}
//         <div className="bg-white p-4 rounded-2xl shadow border border-[#E0E0E0] flex flex-col justify-center">
//           <h3 className="text-md font-semibold mb-2">Most Repeated Category</h3>
//           <p className="text-2xl font-bold text-blue-600">
//             {mostRepeatedCategory}
//           </p>
//         </div>
//       </div>

//       {/* Filtered Table */}
//       <div className="bg-white p-4 rounded-2xl shadow border border-[#E0E0E0]">
//         <h3 className="text-md font-semibold mb-2">Transactions</h3>
//         <AmountTable customData={categoryData} />
//       </div>
//     </div>
//   );
// }

// export default Analytics;

import React from "react";
import PieChart from "../components/ui/PieChartComponent";

function Analytics() {
  return (
    <div className="p-4">
      <PieChart />
    </div>
  );
}

export default Analytics;
