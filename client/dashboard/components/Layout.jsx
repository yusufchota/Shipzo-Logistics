import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 ">
      <div className="flex min-h-screen">
        {/* Left sidebar */}
        <Sidebar />

        {/* Right content area */}
        <div className="flex flex-1 flex-col">
          <Topbar />

          <main className="flex-1 overflow-y-auto bg-white text-black dark:bg-gray-900 dark:text-white">
            {/* <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8"> */}
            <div className="mx-auto w-full px-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
