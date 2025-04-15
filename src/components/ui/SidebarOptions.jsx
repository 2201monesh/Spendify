import React from "react";

function SidebarOptions({ logo, text }) {
  return (
    <div className="w-[100%] px-2 py-1 cursor-pointer rounded flex mb-2 items-center hover:bg-[#F4F4F5]">
      <p className="mr-2">{logo}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default SidebarOptions;
