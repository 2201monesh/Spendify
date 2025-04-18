// components/AmountTable.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";

function AmountTable() {
  const { userAmountList } = useAppContext();

  return (
    <div className="overflow-x-auto bg-white shadow border border-[#E0E0E0] rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-[#f5f5f5] text-gray-700">
          <tr>
            <th className="py-2 px-4">Type</th>
            <th className="py-2 px-4">Amount (₹)</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Category</th>
          </tr>
        </thead>
        <tbody>
          {userAmountList.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-4 text-center text-gray-500">
                No records found
              </td>
            </tr>
          ) : (
            userAmountList.map((item, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-all duration-150"
              >
                <td
                  className={`py-2 px-4 font-medium ${
                    item.amountType === "Income"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.amountType}
                </td>
                <td className="py-2 px-4">₹{item.amount}</td>
                <td className="py-2 px-4">
                  {new Date(item.date).toLocaleDateString("en-GB")}
                </td>
                <td className="py-2 px-4">{item.spendType}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AmountTable;
