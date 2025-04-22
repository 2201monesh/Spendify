import React, { useState, useEffect, useRef } from "react";
import FilterDropdown from "./FilterDateRangeDropdown";
import { useAppContext } from "../../context/AppContext";

function ComboBox() {
  const [showFilter, setShowFilter] = useState(false);
  const [buttonText, setButtonText] = useState("Set Range");
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
    <div className="relative p-4" ref={dropdownRef}>
      <button
        className="btn position-sticky w-[150px] h-[40px] border border-[#E0E0E0] shadow rounded-[6px] cursor-pointer"
        onClick={toggleShowFilter}
        value={selectedTimeRange}
      >
        {buttonText}
      </button>
      {showFilter && (
        <div className="absolute top-14 left-3 z-50 mt-1 bg-white shadow-lg">
          <FilterDropdown
            handleButtonText={(value) => {
              handleButtonText(value);
              setShowFilter(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ComboBox;
