import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Header() {
  return (
    <div className="w-screen h-[60px] border-b border-dashed flex items-center justify-center">
      <div className="w-[75%] h-[60px] border-l border-r border-dashed flex items-center justify-between px-4">
        <div>
          <p className="">Spendify</p>
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;
