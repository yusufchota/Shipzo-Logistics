import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../Image/Y-Logo (1).png"
import {
  LayoutDashboard,
  MapPin,
  Truck,
  Route,
  BarChart3,
  Users,
  FileText,
  Settings,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { to: "/dashboard/tracking", label: "Tracking", icon: <MapPin size={18} /> },
  { to: "/dashboard/fleet", label: "Fleet", icon: <Truck size={18} /> },
  { to: "/dashboard/routes", label: "Routes", icon: <Route size={18} /> },
  { to: "/dashboard/analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
  { to: "/dashboard/drivers", label: "Drivers", icon: <Users size={18} /> },
  { to: "/dashboard/reports", label: "Reports", icon: <FileText size={18} /> },
  { to: "/dashboard/settings", label: "Settings", icon: <Settings size={18} /> },
];

function Sidebar() {
  return (
    <aside className="hidden fixed top-0 left-0 bottom-0 w-52 flex-shrink-0 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-700 text-white shadow-xl lg:flex ">
      <div className="flex h-full flex-col">
        {/* Brand */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl">
            <img src={image} alt="logo" />
          </div>
          <div>
            <p className="text-sm font-semibold">Shipzo Logistics</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4">
          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-blue-100/80">
            Navigation
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/dashboard"}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all",
                    isActive
                      ? "bg-white text-blue-700 shadow-md"
                      : "text-blue-100/90 hover:bg-white/15",
                  ].join(" ")
                }
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-4 py-4 text-[11px] text-blue-100/80">
          <p className="truncate">© {new Date().getFullYear()}Shipzo Logistics</p>
          <p className="truncate text-blue-100/70">Smart logistics dashboard</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
