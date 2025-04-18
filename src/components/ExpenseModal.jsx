import React, { useState } from "react";

export default function ExpenseModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    amount: "",
    spendType: "",
    date: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      amountType: "",
      amount: "",
      spendType: "",
      date: "",
      remarks: "",
    });
    onClose(); // Close after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="amountType"
            value={formData.amountType}
            onChange={handleChange}
            className="w-full border rounded p-2 cursor-pointer"
            required
          >
            <option value="">Select Amount Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
          <select
            name="spendType"
            value={formData.spendType}
            onChange={handleChange}
            className="w-full border rounded p-2 cursor-pointer"
            required
          >
            <option value="">Select Type</option>
            <option value="Salary">Salary</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
          <input
            type="text"
            name="remarks"
            placeholder="Remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="text-gray-600 cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
