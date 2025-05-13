import React from "react";
import { useAppContext } from "../../context/AppContext";

function StatsCardModal() {
  const { statsCardModal, setStatsCardModal } = useAppContext();

  if (!statsCardModal.flag) return null;

  const closeModal = () => setStatsCardModal({ flag: false, type: "" });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex justify-center items-center z-50">
      {/* Modal Box */}
      <div className="bg-white w-[400px] h-[450px] rounded-lg shadow-lg p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
        >
          Close
        </button>

        {statsCardModal.type === "Income" && <p>Showing income details...</p>}
        {statsCardModal.type === "Expenses" && (
          <p>Showing expenses details...</p>
        )}
        {statsCardModal.type === "Current Balance" && (
          <p>Showing savings details...</p>
        )}
      </div>
    </div>
  );
}

export default StatsCardModal;
