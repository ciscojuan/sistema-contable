"use client";
import { SideBar } from "@/components";
import { BienContext } from "@/context/BienContext";
import { useState } from "react";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div
        className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
          toggleMenu ? "w-21" : "w-64"
        }`}
      >
        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
          <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>
      </div>
      <div className="flex-1 overflow-auto relative z-10 my-2">
        <BienContext>
          <Toaster richColors={true} theme="dark" />
          <main className="">{children}</main>
          <p className="text-center text-gray-500 text-xs">
            &copy; 2025 COD_ Corp. All rights reserved.
          </p>
        </BienContext>
      </div>
    </div>
  );
}
