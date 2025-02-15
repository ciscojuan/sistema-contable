import { SideBar } from "@/components";
import { IoMenuOutline } from "react-icons/io5";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div
        className="relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 w-64"
        style={{ width: "256px", willChange: "auto" }}
      >
        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
          <SideBar />
        </div>
      </div>
      <div className="flex-1 overflow-auto relative z-10">
        <main className="">{children}</main>
      </div>
    </div>
  );
}
