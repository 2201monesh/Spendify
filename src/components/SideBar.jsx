import React from "react";
import SidebarOptions from "./ui/SidebarOptions";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LuDatabaseZap } from "react-icons/lu";
import PersonalInfo from "./PersonalInfo";

function SideBar() {
  return (
    <div className="w-[15%] h-screen p-4 bg-[#FAFAFA] flex flex-col justify-between">
      <div>
        <p className="text-xl mb-4 ml-2">Spendify</p>
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
