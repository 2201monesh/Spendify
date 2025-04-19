import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ExpenseModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    amount: "",
    spendType: "",
    date: "",
    remarks: "",
  });

  const [isInvalid, setIsInvalid] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    const errors = {};
    e.preventDefault();

    const { amountType, amount, category, date } = formData;

    if (!amountType) errors.amountType = "Amount type is required";
    if (!amount) errors.amount = "Amount is required";
    if (!category) errors.category = "Category is required";
    if (!date) errors.date = "Date is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsInvalid(true);
      setTimeout(() => setIsInvalid(false), 500); // reset shake
      return;
    }

    // if (!amountType || !amount || !category || !date) {
    //   setIsInvalid(true);
    //   setTimeout(() => setIsInvalid(false), 500); // Reset shake after animation
    //   return;
    // }

    onSubmit(formData);
    setFormData({
      amountType: "",
      amount: "",
      category: "",
      date: "",
      remarks: "",
    });
    onClose(); // Close after submit
  };

  const handleClose = () => {
    setFormData({
      amountType: "",
      amount: "",
      category: "",
      date: "",
      remarks: "",
    });
    setFormErrors({});
    setIsInvalid(false);
    onClose(); // Call the actual parent close
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 w-96"
        animate={isInvalid ? { x: [-10, 10, -6, 6, -2, 2, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amountType" className="text-xs">
              Amount Type
            </label>
            <select
              name="amountType"
              value={formData.amountType}
              onChange={handleChange}
              className="w-full border border-gray-400 outline-none rounded px-2 py-1 cursor-pointer text-[#71717A]"
            >
              <option value="">Select Amount Type</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            {formErrors.amountType && (
              <p className="text-red-500 text-xs mt-1">
                {formErrors.amountType}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="amount" className="text-xs">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border border-gray-400 outline-none rounded px-2 py-1 text-[#71717A]"
            />
            {formErrors.amount && (
              <p className="text-red-500 text-xs mt-1">{formErrors.amount}</p>
            )}
          </div>
          <div>
            <label htmlFor="category" className="text-xs">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-400 outline-none rounded px-2 py-1 text-[#71717A]"
            />
            {formErrors.category && (
              <p className="text-red-500 text-xs mt-1">{formErrors.category}</p>
            )}
          </div>
          <div>
            <label htmlFor="date" className="text-xs">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-400 outline-none rounded px-2 py-1 text-[#71717A]"
            />
            {formErrors.date && (
              <p className="text-red-500 text-xs mt-1">{formErrors.date}</p>
            )}
          </div>
          <label htmlFor="remarks" className="text-xs">
            Remarks
          </label>
          <input
            type="text"
            name="remarks"
            placeholder="Remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full border border-gray-400 outline-none rounded px-2 py-1 text-[#71717A]"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="text-gray-600 px-4 py-1 rounded cursor-pointer"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-1 rounded cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
