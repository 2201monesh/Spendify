import React from "react";
import { SignedOut, SignInButton } from "@clerk/clerk-react";

function Home() {
  return (
    <>
      <div className="pt-8 p-4 border-b border-dashed">
        <p className="text-4xl font-bold">
          Track your Expenses like never before.
        </p>
        <p className="text-4xl font-bold mt-4">Get started now.</p>
        <div className="my-4">
          <button className="border py-1 px-4 bg-black text-white">
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className=" border-b border-r border-dashed w-[33%] h-[120px] p-4">
          <p className="font-bold mb-2">Take control of your spending</p>
          <p className="text-sm text-[#737373]">
            Effortlessly track your income and expenses with intelligent
            budgeting tools that adapt to your lifestyle.
          </p>
        </div>
        <div className="border-b border-r border-dashed w-[33%] h-[120px] p-4">
          <p className="font-bold mb-2">Visualize your financial health</p>
          <p className="text-sm text-[#737373]">
            Get clear, easy-to-understand charts and reports to make smarter
            money decisions every day.
          </p>
        </div>
        <div className="border-b border-dashed w-[34%] h-[120px] p-4">
          <p className="font-bold mb-2">Save with purpose</p>
          <p className="text-sm text-[#737373]">
            Set personal financial goals and watch your progress grow with
            automated saving strategies.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
