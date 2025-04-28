import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import Pots from "../components/Pots";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      // Example: Store user ID and email in sessionStorage
      const userData = {
        id: user.id,
        email: user.primaryEmailAddress.emailAddress,
        name: `${user.firstName} ${user.lastName}`,
      };

      sessionStorage.setItem("user", JSON.stringify(userData));
    } else {
      // Clear user data on sign out
      sessionStorage.removeItem("user");
    }
  }, [isSignedIn, user]);

  return (
    <div className="w-screen h-screen flex">
      <SideBar />
      {/* <Main /> */}
      <div className="flex-1 h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
