import React from "react";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="w-screen flex justify-center">
        <div
          className="w-[75%] h-screen border-l border-r border-dashed"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <div className="pt-8 p-4 border-b border-dashed flex justify-center items-center flex-col h-[60%]">
            <p className="text-5xl font-bold">
              A smart tracker acting like your
            </p>
            <p className="text-5xl font-bold mt-4">personal finance manager.</p>
            <p className="text-xl mt-4">
              Just the essentials—no clutter, no confusion
            </p>
            <p className="text-xl">just your money, simplified.</p>
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
        </div>
      </div>
    </>
  );
}

export default Home;
