import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
  
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <aside className="absolute left-0 top-0 h-full w-72 bg-[#8BC43D]">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 cursor-pointer"
              aria-label="Close sidebar"
            >
              <FiX size={26} className="text-white" />
            </button>

            <Sidebar />
          </aside>
        </div>
      )}

      <div className="flex flex-col flex-1">

        <div className="hidden lg:block">
          <Topbar />
        </div>

        <div className="flex items-center p-6 bg-[#8BC43D] shadow lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            aria-label="Open sidebar"
          >
            <FiMenu size={26} />
          </button>
        </div>

        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
