import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

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
    <div className="p-4">
      <div className="flex justify-between items-center mt-6">
        <div className="border w-[30%] p-4 rounded">
          <p className="text-sm mb-2">Current Balance</p>
          <p className="text-2xl font-bold">Rs.500</p>
        </div>
        <div className="border w-[30%] p-4 rounded">
          <p className="text-sm mb-2">Income</p>
          <p className="text-2xl font-bold">Rs.15000</p>
        </div>
        <div className="border w-[30%] p-4 rounded">
          <p className="text-sm mb-2">Current Balance</p>
          <p className="text-2xl font-bold">Rs.14500</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
