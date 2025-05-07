import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import Pots from "../components/Pots";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import { Outlet, useLocation } from "react-router-dom";
import ComboBox from "../components/ui/ComboBox";

function Dashboard() {
  const { isSignedIn, user } = useUser();
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1] || "dashboard";

  // Format title
  const pageTitle =
    currentPage.charAt(0).toUpperCase() +
    currentPage.slice(1).replace(/-/g, " ");

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
        <div className="flex p-4 items-center justify-between">
          <p className="text-2xl font-semibold">{pageTitle}</p>
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-2 py-2.5 w-[140px] h-[40px] cursor-pointer flex items-center justify-center bg-black text-white text-sm"
            >
              {/* <IoAddCircleOutline size={15} className="mr-2" /> */}
              Add New
            </button>
            <ComboBox />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
