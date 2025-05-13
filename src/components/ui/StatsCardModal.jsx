// import React from "react";
// import { useAppContext } from "../../context/AppContext";

// function StatsCardModal() {
//   const { statsCardModal, setStatsCardModal } = useAppContext();

//   if (!statsCardModal.flag) return null;

//   const closeModal = () => setStatsCardModal({ flag: false, type: "" });

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex justify-center items-center z-50">
//       <div className="bg-white w-[400px] h-[450px] shadow-lg p-4 flex justify-between">
//         <div className="w-[100%] flex justify-between">
//           <div>
//             {statsCardModal.type === "Income" && (
//               <p>Showing income details...</p>
//             )}
//             {statsCardModal.type === "Expenses" && (
//               <p>Showing expenses details...</p>
//             )}
//             {statsCardModal.type === "Current Balance" && (
//               <p>Showing savings details...</p>
//             )}
//           </div>

//           <button
//             onClick={closeModal}
//             className="text-gray-500 border cursor-pointer w-[60px] h-[40px]"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StatsCardModal;

import React from "react";
import { useAppContext } from "../../context/AppContext";

function StatsCardModal() {
  const { statsCardModal, setStatsCardModal } = useAppContext();

  if (!statsCardModal.flag) return null;

  const closeModal = () => setStatsCardModal({ flag: false, type: "" });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex justify-center items-center z-50">
      <div className="bg-white w-[400px] h-[450px] p-4 flex flex-col">
        {/* Top row: Text and Close Button */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-medium">
            {statsCardModal.type === "Income" && (
              <p>Showing income details...</p>
            )}
            {statsCardModal.type === "Expenses" && (
              <p>Showing expenses details...</p>
            )}
            {statsCardModal.type === "Current Balance" && (
              <p>Financial Manager</p>
            )}
          </div>

          <button
            onClick={closeModal}
            className="text-sm text-white bg-black cursor-pointer px-4 py-2"
          >
            Close
          </button>
        </div>

        {/* Add content here below if needed */}
      </div>
    </div>
  );
}

export default StatsCardModal;
