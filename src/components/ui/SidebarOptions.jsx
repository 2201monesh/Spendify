import React, { useRef } from "react";

function SidebarOptions({ logo, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-[100%] px-2 py-1 cursor-pointer rounded flex mb-2 items-center hover:bg-[#F4F4F5]"
    >
      <p className="mr-2 text-[#71717A]">{logo}</p>
      <p className="text-sm text-[#71717A]">{text}</p>
    </div>
  );
}

export default SidebarOptions;
