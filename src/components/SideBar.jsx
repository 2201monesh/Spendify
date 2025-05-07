import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LuDatabaseZap } from "react-icons/lu";
import ExpenseModal from "./ExpenseModal";
import PersonalInfo from "./PersonalInfo";
import { useAppContext } from "../context/AppContext";

function SideBar() {
  const { isModalOpen, setIsModalOpen, setUserAmountList } = useAppContext();

  const handleFormSubmit = (data) => {
    setUserAmountList((prev) => [...prev, { ...data, id: Date.now() }]);
  };

  return (
    <div className="w-[15%] h-screen p-4 bg-[#FAFAFA] flex flex-col justify-between border-r border-[#E5E5E5]">
      <div>
        <p className="text-xl mb-4 ml-2">Spendify</p>

        <ExpenseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
        />

        <div className="flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 ${
                isActive ? "bg-[#FFFFFF] border border-[#E5E5E5]" : ""
              }`
            }
          >
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/dashboard/analytics"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 ${
                isActive ? "bg-[#FFFFFF] border border-[#E5E5E5]" : ""
              }`
            }
          >
            <TbBrandGoogleAnalytics />
            <span>Analytics</span>
          </NavLink>

          <button
            onClick={() => alert("Data button clicked")}
            className="flex items-center gap-2 p-2 cursor-pointer"
          >
            <LuDatabaseZap />
            <span>Data</span>
          </button>
        </div>
      </div>

      <div>
        <PersonalInfo />
      </div>
    </div>
  );
}

export default SideBar;
