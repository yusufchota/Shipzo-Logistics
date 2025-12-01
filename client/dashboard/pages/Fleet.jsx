import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  MapPin,
  Search,
  Filter,
  GaugeCircle,
  AlertTriangle,
} from "lucide-react";

const FLEET_DATA = [
  { id: "TRK-001", driver: "Michael Doe", status: "Active",      fuel: 78, location: "Los Angeles" },
  { id: "TRK-002", driver: "Sarah Wilson", status: "In Transit", fuel: 52, location: "Phoenix" },
  { id: "TRK-003", driver: "John Carter",  status: "Maintenance", fuel: null, location: "Workshop" },
  { id: "TRK-004", driver: "Maria Chen",   status: "Idle",       fuel: 90, location: "Dallas" },
  { id: "TRK-005", driver: "Michael Doe",  status: "Active",     fuel: 78, location: "Los Angeles" },
  { id: "TRK-006", driver: "Sarah Wilson", status: "In Transit", fuel: 52, location: "Phoenix" },
  { id: "TRK-007", driver: "John Carter",  status: "Maintenance", fuel: null, location: "Workshop" },
  { id: "TRK-008", driver: "Maria Chen",   status: "Idle",       fuel: 90, location: "Dallas" },
  { id: "TRK-009", driver: "Michael Doe",  status: "Active",     fuel: 78, location: "Los Angeles" },
  { id: "TRK-010", driver: "Sarah Wilson", status: "In Transit", fuel: 52, location: "Phoenix" },
  { id: "TRK-011", driver: "John Carter",  status: "Maintenance", fuel: null, location: "Workshop" },
  { id: "TRK-012", driver: "Maria Chen",   status: "Idle",       fuel: 90, location: "Dallas" },
  { id: "TRK-013", driver: "Sarah Wilson", status: "In Transit", fuel: 52, location: "Phoenix" },
  { id: "TRK-014", driver: "John Carter",  status: "Maintenance", fuel: null, location: "Workshop" },
  { id: "TRK-015", driver: "Maria Chen",   status: "Idle",       fuel: 90, location: "Dallas" },
  { id: "TRK-016", driver: "Sarah Wilson", status: "In Transit", fuel: 52, location: "Phoenix" },
  { id: "TRK-017", driver: "John Carter",  status: "Maintenance", fuel: null, location: "Workshop" },
  { id: "TRK-018", driver: "Maria Chen",   status: "Idle",       fuel: 90, location: "Dallas" },
  { id: "TRK-019", driver: "Sarah Wilson", status: "In Transit", fuel: 52, location: "Phoenix" },
  { id: "TRK-020", driver: "John Carter",  status: "Maintenance", fuel: null, location: "Workshop" },
  { id: "TRK-021", driver: "Maria Chen",   status: "Idle",       fuel: 90, location: "Dallas" },
];

const STATUS_STYLES = {
  Active:
    "bg-emerald-50 text-emerald-700 border border-emerald-200",
  "In Transit":
    "bg-amber-50 text-amber-700 border border-amber-200",
  Maintenance:
    "bg-rose-50 text-rose-700 border border-rose-200",
  Idle:
    "bg-slate-50 text-slate-700 border border-slate-200",
};

function Fleet() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const stats = useMemo(() => {
    const total = FLEET_DATA.length;
    const active = FLEET_DATA.filter((t) => t.status === "Active").length;
    const transit = FLEET_DATA.filter((t) => t.status === "In Transit").length;
    const maintenance = FLEET_DATA.filter((t) => t.status === "Maintenance").length;
    const idle = FLEET_DATA.filter((t) => t.status === "Idle").length;

    return { total, active, transit, maintenance, idle };
  }, []);

  const filteredData = useMemo(() => {
    return FLEET_DATA.filter((truck) => {
      if (
        statusFilter !== "All" &&
        truck.status.toLowerCase() !== statusFilter.toLowerCase()
      ) {
        return false;
      }

      if (!search.trim()) return true;

      const term = search.toLowerCase();
      return (
        truck.id.toLowerCase().includes(term) ||
        truck.driver.toLowerCase().includes(term) ||
        truck.location.toLowerCase().includes(term)
      );
    });
  }, [statusFilter, search]);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="lg:ms-52 mt-20 flex flex-col gap-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Fleet Management
          </h1>
          <p className="text-sm text-slate-500">
            View real-time status of trucks, fuel levels, and current driver
            assignments.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <GaugeCircle className="h-4 w-4 text-blue-500" />
          <span>Fleet utilization: </span>
          <span className="font-semibold text-slate-800">82%</span>
        </div>
      </div>

      {/* Top stats cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <motion.div
          className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100"
          whileHover={{ y: -2, boxShadow: "0 18px 40px rgba(15,23,42,0.08)" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
            <Truck className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase text-slate-500">
              Total Fleet
            </span>
            <span className="text-xl font-semibold text-slate-900">
              {stats.total}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100"
          whileHover={{ y: -2, boxShadow: "0 18px 40px rgba(15,23,42,0.08)" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
            <Truck className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase text-slate-500">
              Active
            </span>
            <span className="text-xl font-semibold text-slate-900">
              {stats.active}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100"
          whileHover={{ y: -2, boxShadow: "0 18px 40px rgba(15,23,42,0.08)" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase text-slate-500">
              In Transit
            </span>
            <span className="text-xl font-semibold text-slate-900">
              {stats.transit}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100"
          whileHover={{ y: -2, boxShadow: "0 18px 40px rgba(15,23,42,0.08)" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase text-slate-500">
              Maintenance
            </span>
            <span className="text-xl font-semibold text-slate-900">
              {stats.maintenance}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Filters + search */}
      <div className="flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Filter className="h-4 w-4 text-slate-400" />
          <span className="font-medium">Filter by status:</span>
          <div className="flex flex-wrap gap-2">
            {["All", "Active", "In Transit", "Idle", "Maintenance"].map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={[
                    "rounded-full px-3 py-1 text-xs font-medium border",
                    statusFilter === status
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 shadow-sm">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by truck, driver or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-56 bg-transparent text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        <div className="border-b border-slate-100 px-4 py-3">
          <h2 className="text-sm font-semibold text-slate-900">
            Fleet Overview
          </h2>
          <p className="text-xs text-slate-500">
            {filteredData.length} vehicles match current filters.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100 text-left text-xs">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Truck ID</th>
                <th className="px-4 py-3 font-semibold">Driver</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Fuel Level</th>
                <th className="px-4 py-3 font-semibold">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredData.map((truck) => (
                <motion.tr
                  key={truck.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="hover:bg-slate-50/80"
                >
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {truck.id}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{truck.driver}</td>
                  <td className="px-4 py-3">
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                        STATUS_STYLES[truck.status],
                      ].join(" ")}
                    >
                      {truck.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    {truck.fuel === null ? "—" : `${truck.fuel}%`}
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    <div className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      <span>{truck.location}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-xs text-slate-400"
                  >
                    No vehicles match your search or filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export default Fleet;
