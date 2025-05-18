import React, { useState, useEffect, useRef } from "react";
import FilterDropdown from "./FilterDateRangeDropdown";
import { useAppContext } from "../../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

function ComboBox() {
  const [showFilter, setShowFilter] = useState(false);
  const [buttonText, setButtonText] = useState("Select Range");
  const dropdownRef = useRef(null);

  const { selectedTimeRange, setSelectedTimeRange } = useAppContext();

  const toggleShowFilter = () => {
    setShowFilter((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    }

    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  const handleButtonText = (value) => {
    setButtonText(value);
    console.log("jhgfdfghjkl", value);
    setSelectedTimeRange(value);
  };

  return (
    <div className="relative m-3" ref={dropdownRef}>
      <button
        className="btn position-sticky w-[150px] h-[40px] border border-[#E0E0E0] shadow cursor-pointer bg-white"
        onClick={toggleShowFilter}
        value={selectedTimeRange}
      >
        {buttonText}
      </button>
      <AnimatePresence>
        {showFilter && (
          <div className="absolute top-14 left-0 z-50 mt-1 bg-white shadow-lg">
            <FilterDropdown
              handleButtonText={(value) => {
                handleButtonText(value);
                setShowFilter(false);
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ComboBox;
