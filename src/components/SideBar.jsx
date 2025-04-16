import React from "react";
import SidebarOptions from "./ui/SidebarOptions";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LuDatabaseZap } from "react-icons/lu";
import PersonalInfo from "./PersonalInfo";
import { IoAddCircleOutline } from "react-icons/io5";

function SideBar() {
  return (
    <div className="w-[15%] h-screen p-4 bg-[#FAFAFA] flex flex-col justify-between shadow-md">
      <div>
        <p className="text-xl mb-4 ml-2">Spendify</p>
        <button className="w-[100%] px-2 py-1 cursor-pointer rounded flex mb-2 items-center bg-black text-white text-sm items-center">
          <IoAddCircleOutline size={15} className="mr-2" />
          Add New Expense
        </button>
        <SidebarOptions logo={<MdOutlineDashboard />} text="Dashboard" />
        <SidebarOptions logo={<TbBrandGoogleAnalytics />} text="Analytics" />
        <SidebarOptions logo={<LuDatabaseZap />} text="Data" />
      </div>
      <div>
        <PersonalInfo />
      </div>
    </div>
  );
}

export default SideBar;
