import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

function RecentActivity() {
  const { filteredUserAmountList } = useAppContext();

  useEffect(() => {
    console.log(filteredUserAmountList);
  }, []);

  const sortedTransactions = filteredUserAmountList
    ?.slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="h-[460px] border border-[#E0E0E0] shadow mt-2 w-[60%] mr-4 p-4 bg-white">
      <p className="text-xl font-semibold text-gray-800">
        Recent Transaction Activity
      </p>
      <div className="overflow-x-auto mt-4 overflow-y-scroll h-[90%]">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions?.length > 0 ? (
              sortedTransactions
                .slice() // Copy array
                .reverse() // Most recent first
                .map((txn, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2 text-sm text-gray-800">
                      {txn.amountType}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                      ₹{txn.amount}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                      {new Date(txn.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                      {txn.category}
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-4 text-center text-sm text-gray-500"
                >
                  No recent transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentActivity;
