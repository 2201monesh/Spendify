import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";

function PersonalInfo() {
  const { user } = useUser();

  return (
    <div className="w-[100%] rounded hover:bg-[#F4F4F5] px-2 py-1 cursor-pointer flex items-center">
      <div className="mr-4 flex items-center justify-center">
        <UserButton />
      </div>
      <div>
        <p className="text-xs">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-[10px]">{user.primaryEmailAddress.emailAddress}</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
