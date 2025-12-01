import React from "react";
import { useAuth } from "../AuthContext.jsx";
import { Bell, Moon, Sun } from "lucide-react";

function Topbar() {
  const { user, logout, theme, toggleTheme } = useAuth();
  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 lg:ms-52 left-0 right-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: title */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Logistics Overview
          </span>
          <span className="text-sm font-semibold text-slate-800">
            Control Center
          </span>
        </div>

        {/* Right: controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 shadow-sm hover:bg-slate-100"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Search */}
          <div className="hidden items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500 shadow-sm sm:flex">
            <input
              type="text"
              placeholder="Search shipments..."
              className="w-40 bg-transparent text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none sm:w-56"
            />
          </div>

          {/* Notifications */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50">
            <Bell size={16} />
          </button>

          {/* User pill */}
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 shadow-sm sm:flex">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white">
              {user?.email?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="max-w-[120px] truncate text-[11px] font-medium">
                {user?.email || "admin@gmail.com"}
              </span>
              <span className="text-[10px] uppercase tracking-wide text-slate-500">
                {user?.role?.toUpperCase() || "ADMIN"}
              </span>
            </div>
          </div>

          {/* Logout */}
          <button
            type="button"
            onClick={logout}
            className="rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
