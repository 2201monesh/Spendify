import React from "react";
import PieChart from "../components/ui/PieChartComponent";
import RecentActivity from "../components/RecentActivity";

function Analytics() {
  return (
    <div className="p-4">
      <div className="flex items-center">
        <PieChart />
        <RecentActivity />
      </div>
    </div>
  );
}

export default Analytics;
