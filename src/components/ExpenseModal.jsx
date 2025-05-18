import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { RiArrowLeftDownLine, RiArrowRightUpLine } from "react-icons/ri";
import { MdOutlineDescription } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdCheckmark } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

import {
  FaHome,
  FaShoppingCart,
  FaBolt,
  FaWater,
  FaTools,
  FaCoffee,
  FaPlane,
  FaUtensils,
  FaFilm,
  FaGamepad,
  FaHeartbeat,
  FaShieldAlt,
  FaBook,
  FaGift,
} from "react-icons/fa";

import { FaMoneyBillWave } from "react-icons/fa";
import { BsFillCarFrontFill } from "react-icons/bs";

function ExpenseCard({ isOpen, onClose, onSubmit }) {
  const [isRecurring, setIsRecurring] = useState(false);
  const [rawValue, setRawValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [amountType, setAmountType] = useState("Income");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState({ name: "", icon: null });
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false); // State for Snackbar
  const [categories, setCategories] = useState({
    HOME: ["Rent", "Groceries", "Electricity", "Maintenance"],
    LEISURE: ["Coffee", "Travel", "Dining", "Movies", "Games"],
    OTHERS: ["Health", "Insurance", "Education", "Gifts"],
  });

  const handleChange = (e) => {
    const value = e.target.value.replace(/,/g, "").replace(/₹/g, "").trim();
    if (/^\d{0,8}$/.test(value)) {
      setRawValue(value);
    }
  };

  const formatIndianNumber = (numStr) => {
    if (!numStr) return "";
    return `₹${Number(numStr).toLocaleString("en-IN")}`;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const selectToday = () => {
    const today = new Date();
    handleDateSelect(today);
  };

  const handleTypeSelect = (type) => {
    setAmountType(type);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategorySelect = (cat) => {
    setCategory({ name: cat, icon: categoryIcons[cat] || null });
    setShowCategoryDropdown(false);
    setSearchTerm(""); // reset search
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCustomCategory = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      // Add to Others
      setCategories((prev) => ({
        ...prev,
        OTHERS: [...prev.OTHERS, searchTerm.trim()],
      }));
      handleCategorySelect(searchTerm.trim());
    }
  };

  const handleAddTransaction = () => {
    const formattedDate = selectedDate
      ? `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`
      : null;

    const transaction = {
      amount: rawValue ? Number(rawValue) : 0,
      amountType: amountType,
      description: description.trim(),
      category: category.name,
      date: formattedDate,
    };

    console.log("Amount", transaction);

    onSubmit(transaction);

    onClose();
    setAmountType("Income");
    setCategory({ name: "", icon: null });
    setRawValue("");
    setDescription("");
    setSelectedDate(null);

    console.log("New Transaction:", transaction);
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 1500);
  };

  const categoryIcons = {
    Rent: <FaHome className="text-purple-500" />,
    Groceries: <FaShoppingCart className="text-green-500" />,
    Electricity: <FaBolt className="text-yellow-500" />,
    Water: <FaWater className="text-blue-400" />,
    Maintenance: <FaTools className="text-gray-500" />,

    Coffee: <FaCoffee className="text-amber-700" />,
    Travel: <FaPlane className="text-sky-500" />,
    Dining: <FaUtensils className="text-rose-500" />,
    Movies: <FaFilm className="text-indigo-500" />,
    Games: <FaGamepad className="text-pink-500" />,

    Health: <FaHeartbeat className="text-red-500" />,
    Insurance: <FaShieldAlt className="text-blue-600" />,
    Education: <FaBook className="text-cyan-600" />,
    Gifts: <FaGift className="text-yellow-400" />,
  };

  // Flatten all categories to filter easily
  const filteredCategories = Object.entries(categories).map(
    ([section, items]) => {
      const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return [section, filteredItems];
    }
  );

  const handleClose = () => {
    setAmountType("Income");
    setCategory({ name: "", icon: null });
    setRawValue("");
    setDescription("");
    setSelectedDate(null);
    onClose(); // Call the actual parent close
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex justify-center items-center z-50">
      <div className="w-96 bg-white px-4 py-2 relative">
        {/* Heading */}
        <div className="flex items-center">
          <p className="w-[95%] flex justify-center text-lg">New Transaction</p>
          <p className="w-[5%] cursor-pointer" onClick={handleClose}>
            <MdClose size={20} />
          </p>
        </div>
        {/* Amount Input */}
        <div className="flex justify-center items-center mt-4">
          <input
            type="text"
            inputMode="numeric"
            value={formatIndianNumber(rawValue)}
            onChange={handleChange}
            className="text-4xl text-center w-full bg-transparent focus:outline-none border-none"
            placeholder="₹0"
          />
        </div>
        {/* Date Input */}
        <div className="mt-6 text-center relative">
          <div
            className="border py-2 px-4 cursor-pointer text-gray-600 flex items-center justify-between"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div className="flex flex-col items-start">
              <p className="text-xs">Date</p>
              <p>
                {selectedDate ? selectedDate.toDateString() : "Select Date"}
              </p>
            </div>
            <p>
              <CiCalendarDate size={20} />
            </p>
          </div>

          {showCalendar && (
            <div className="absolute top-full left-0 mt-1 bg-white shadow-lg z-10 p-2">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateSelect}
                inline
              />
              <div className="text-center mt-2">
                <button
                  className="border border-gray-400 text-gray-600 px-3 py-1 cursor-pointer w-full"
                  onClick={selectToday}
                >
                  Select Today
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Amount Type Toggle */}
        <div className="mt-6 flex justify-between bg-gray-100 p-1">
          <div
            className={`w-1/2 text-center py-2 cursor-pointer font-medium transition-all flex items-center justify-center ${
              amountType === "Income"
                ? "bg-white text-black shadow-sm mx-1"
                : "text-gray-500"
            }`}
            onClick={() => handleTypeSelect("Income")}
          >
            <p className="mr-1 text-green-500">
              <RiArrowLeftDownLine />
            </p>
            Income
          </div>
          <div
            className={`w-1/2 text-center py-2 cursor-pointer font-medium transition-all flex items-center justify-center ${
              amountType === "Expense"
                ? "bg-white text-black shadow-sm mx-1"
                : "text-gray-500"
            }`}
            onClick={() => handleTypeSelect("Expense")}
          >
            <p className="mr-1 text-red-500">
              <RiArrowRightUpLine />
            </p>
            Expense
          </div>
        </div>
        {/* Description Input */}
        <div className="mt-6 relative">
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full bg-gray-100 py-2 pr-10 pl-4 text-gray-700 border-none focus:outline-none"
            placeholder="Enter description..."
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MdOutlineDescription size={20} />
          </div>
        </div>
        {/* Category Input */}
        <div className="mt-6 relative">
          <div
            className="w-full bg-gray-100 py-2 px-4 text-gray-700 flex justify-between items-center cursor-pointer"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            <div className="flex items-center gap-2">
              {category.icon && (
                <span className="text-gray-500">{category.icon}</span>
              )}
              <span>{category.name || "Select Category"}</span>
            </div>
            <FaChevronDown size={16} className="text-gray-400" />
          </div>

          {/* Category Dropdown with Animation */}
          <AnimatePresence>
            {showCategoryDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-[-180px] left-20 ml-4 w-80 bg-white shadow-lg p-4 z-20"
              >
                {/* Search Input */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyDown={handleCustomCategory}
                  placeholder="Search or add category..."
                  className="w-full mb-4 px-3 py-2 bg-gray-100 focus:outline-none text-sm"
                />

                {filteredCategories.map(([section, items]) =>
                  items.length > 0 ? (
                    <div key={section} className="mb-4">
                      <p className="text-xs font-semibold text-gray-400 mb-2">
                        {section}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <div
                            key={item}
                            onClick={() => handleCategorySelect(item)}
                            className="bg-gray-100 px-3 py-1 text-sm text-gray-700 cursor-pointer hover:bg-gray-200 flex items-center gap-1"
                          >
                            <span>{categoryIcons[item]}</span> {/* Icon here */}
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* {recurring transaction section} */}
        <div className="mt-6 flex justify-between">
          <div className="flex">
            <span className="mr-1.5">
              <CiCalendar size={20} />
            </span>
            <div>
              <p className="text-sm">Add as recurring</p>
              <p className="text-xs w-[90%] text-gray-600">
                This transaction will be added again the following months at the
                same day as today
              </p>
            </div>
          </div>
          <div
            onClick={() => setIsRecurring(!isRecurring)}
            className={`w-14 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              isRecurring ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isRecurring ? "translate-x-3.5" : "translate-x-0"
              }`}
            />
          </div>
        </div>
        <div className="mt-6 mb-2">
          <div
            className="w-full bg-black text-white p-2 flex items-center justify-center cursor-pointer"
            onClick={handleAddTransaction}
          >
            Add Transaction
          </div>
        </div>
        {/* Snackbar Message */}
        {showSnackbar && (
          <div className="flex items-center fixed bottom-18 left-1/2 transform -translate-x-1/2 w-[250px] h-[40px] bg-green-50 text-green-500 p-4 shadow-lg text-xs border-2 border-green-500">
            <IoMdCheckmark className="text-green-500 mr-2" size={20} />
            <p className="text-center">Transaction added successfully</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpenseCard;
