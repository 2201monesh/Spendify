import React from "react";
import { TbReportMoney } from "react-icons/tb";

function Pots() {
  return (
    <div className="w-[100%] border border-amber-700 p-4 mb-4">
      <div className="flex justify-between">
        <p className="font-bold">Pots</p>
        <p>see details</p>
      </div>
      <div className="flex items-center">
        <div className="mt-4 w-[40%] mr-6 flex items-center p-7 bg-[#F5F6FA]">
          <div className="mr-3">
            <TbReportMoney size={50} />
          </div>
          <div>
            <p className="mb-2">Total Saved</p>
            <p className="font-bold text-xl">Rs.850</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex">
            <div className="mr-6 px-6 border-l-4 border-blue-600 mb-4">
              <p>Savings</p>
              <p>Rs.150</p>
            </div>
            <div className="mr-6 px-6 border-l-4 border-red-600 mb-4">
              <p>Savings</p>
              <p>Rs.150</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 px-6 border-l-4 border-yellow-600">
              <p>Savings</p>
              <p>Rs.150</p>
            </div>
            <div className="mr-6 px-6 border-l-4 border-green-600">
              <p>Savings</p>
              <p>Rs.150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pots;
