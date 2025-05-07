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
    setCurrentPage(1);
  };

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
    <div className="overflow-x-auto bg-white p-6 shadow border border-[#E0E0E0]">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Transaction History
        </h2>
        <div className="flex items-center space-x-2">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Show
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-gray-300 px-3 py-1 text-sm bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-black"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Amount (₹)</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Category</th>
          </tr>
        </thead>
        <tbody>
          {!paginatedData || paginatedData.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-6 text-center text-gray-500">
                No records found
              </td>
            </tr>
          ) : (
            paginatedData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-150"
              >
                <td
                  className={`py-3 px-4 font-semibold ${
                    item.amountType === "Income"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.amountType}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  ₹{Number(item.amount).toLocaleString("en-IN")}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {new Date(item.date).toLocaleDateString("en-GB")}
                </td>
                <td className="py-3 px-4 text-gray-700 capitalize">
                  {item.category}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 cursor-pointer text-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              ←
            </button>
            {visiblePages.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 text-sm border cursor-pointer ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } transition`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 cursor-pointer text-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
