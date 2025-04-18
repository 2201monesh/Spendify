import React, { useState } from "react";
import SidebarOptions from "./ui/SidebarOptions";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LuDatabaseZap } from "react-icons/lu";
import PersonalInfo from "./PersonalInfo";
import { IoAddCircleOutline } from "react-icons/io5";
import ExpenseModal from "./ExpenseModal";
import { useAppContext } from "../context/AppContext";

function SideBar() {
  const { isModalOpen, setIsModalOpen, setUserAmountList } = useAppContext();

  const handleClick = () => {
    console.log("jhgfvghjiuhgfghjui");
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted User Amount List:", data);
    setUserAmountList((prev) => {
      const updated = [...prev, { ...data, id: Date.now() }];
      console.log("Updated User Amount List:", updated);
      return updated;
    });
  };

  return (
    <div className="w-[15%] h-screen p-4 bg-[#FAFAFA] flex flex-col justify-between border-r border-[#E0E0E0]">
      <div>
        <p className="text-xl mb-4 ml-2">Spendify</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-[100%] px-2 py-1 cursor-pointer rounded flex mb-2 items-center bg-black text-white text-sm"
        >
          <IoAddCircleOutline size={15} className="mr-2" />
          Add New
        </button>
        <ExpenseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
        />
        <SidebarOptions logo={<MdOutlineDashboard />} text="Dashboard" />
        <SidebarOptions logo={<TbBrandGoogleAnalytics />} text="Analytics" />
        <SidebarOptions
          onClick={handleClick}
          logo={<LuDatabaseZap />}
          text="Data"
        />
      </div>
      <div>
        <PersonalInfo />
      </div>
    </div>
  );
}

export default SideBar;
