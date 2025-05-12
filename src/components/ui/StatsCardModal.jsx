import React from "react";
import { useAppContext } from "../../context/AppContext";

function StatsCardModal() {
  const { statsCardModal, setStatsCardModal } = useAppContext();

  if (!statsCardModal.flag) return null;

  const closeModal = () => setStatsCardModal({ flag: false, type: "" });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex justify-center items-center z-50 w-[50px] h-[50px]">
      <button onClick={closeModal}>Close</button>

      {statsCardModal.type === "Income" ? (
        <p>Showing income details...</p>
      ) : (
        <></>
      )}
      {statsCardModal.type === "Expenses" && <p>Showing expenses details...</p>}
      {statsCardModal.type === "Current Balance" && (
        <p>Showing savings details...</p>
      )}
    </div>
  );
}

export default StatsCardModal;
