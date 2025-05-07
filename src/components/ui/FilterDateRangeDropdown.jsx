import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";

function FilterDropdown({ handleButtonText }) {
  const statuses = ["All Time", "7 Days", "1 Month", "3 Months"];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStatuses = statuses.filter((status) =>
    status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      className="w-[180px] max-h-[200px] overflow-y-auto border mt-1 border-[#E0E0E0] shadow flex flex-col hide-scrollbar"
      // initial={{ opacity: 0, scale: 0 }}
      // animate={{ opacity: 1, scale: 1 }}
      // exit={{ opacity: 0, scale: 0 }}
      // transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="w-[100%] h-[40px] border border-[#E0E0E0] flex items-center px-3">
        <IoIosSearch className="mr-2" size={20} />
        <input
          className="w-[80%] outline-none"
          placeholder="Filter Range..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      {filteredStatuses.length > 0 ? (
        filteredStatuses.map((status, index) => (
          <p
            key={status}
            onClick={() => handleButtonText(status)}
            className={`w-[100%] h-[40px] flex items-center px-3 hover:bg-[#F4F4F5] hover:cursor-pointer 
              ${index === filteredStatuses.length - 1 ? "" : ""}`}
          >
            {status}
          </p>
        ))
      ) : (
        <p className="w-[100%] h-[40px] flex items-center px-3 text-gray-500">
          No results found
        </p>
      )}
    </motion.div>
  );
}

export default FilterDropdown;
