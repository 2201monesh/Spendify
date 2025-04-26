import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

function AmountTable() {
  const { filteredUserAmountList } = useAppContext();

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = filteredUserAmountList?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = filteredUserAmountList?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // reset to first page
  };

  // Calculate visible page numbers (show 3 at a time)
  const visiblePages = [];
  const maxVisible = 3;
  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(startPage + maxVisible - 1, totalPages);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(endPage - maxVisible + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <div className="overflow-x-auto bg-white shadow border border-[#E0E0E0] rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Transaction History</h2>
        <div className="flex items-center space-x-2">
          <label htmlFor="itemsPerPage" className="text-sm">
            Show
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border rounded px-2 py-1 text-sm cursor-pointer"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

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
          {!paginatedData || paginatedData.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-4 text-center text-gray-500">
                No records found
              </td>
            </tr>
          ) : (
            paginatedData.map((item, index) => (
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
                <td className="py-2 px-4">
                  ₹{Number(item.amount).toLocaleString("en-IN")}
                </td>
                <td className="py-2 px-4">
                  {new Date(item.date).toLocaleDateString("en-GB")}
                </td>
                <td className="py-2 px-4">{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 rounded-md text-sm border bg-white text-gray-700 disabled:opacity-50 cursor-pointer"
              disabled={currentPage === 1}
            >
              ←
            </button>
            {visiblePages.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md text-sm border cursor-pointer ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 rounded-md text-sm border bg-white text-gray-700 disabled:opacity-50 cursor-pointer"
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AmountTable;
