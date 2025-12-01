import React from "react";
import { motion } from "framer-motion";
import { MapPin, Route, Navigation, Clock } from "lucide-react";

const ROUTES = [
  { id: "RT-001", from: "Chennai", to: "Mumbai", distance: "1337 km", eta: "20 hrs" },
  { id: "RT-002", from: "Delhi", to: "Jaipur", distance: "280 km", eta: "5 hrs" },
  { id: "RT-003", from: "Bangalore", to: "Hyderabad", distance: "570 km", eta: "8 hrs" },
  { id: "RT-004", from: "Mumbai", to: "Delhi", distance: "1337 km", eta: "20 hrs" },
  { id: "RT-005", from: "Delhi", to: "Jaipur", distance: "280 km", eta: "5 hrs" },
  { id: "RT-006", from: "Bangalore", to: "Tuticorin", distance: "770 km", eta: "12 hrs" },
];

const badgeColor = {
  short: "bg-green-50 text-green-700 border border-green-200",
  medium: "bg-blue-50 text-blue-700 border border-blue-200",
  long: "bg-amber-50 text-amber-700 border border-amber-200",
};

function RoutesPage() {
  const getBadge = (km) => {
    const n = parseInt(km);
    if (n < 400) return badgeColor.short;
    if (n < 900) return badgeColor.medium;
    return badgeColor.long;
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      {/* Page Heading */}
      <div className="lg:ms-52 mt-24 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <Route className="h-6 w-6 text-blue-600" />
          Routes & Planning
        </h1>
        <p className="text-sm text-slate-500">
          Manage and optimize delivery routes to improve delivery times and efficiency.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Routes", value: ROUTES.length, icon: <Navigation className="h-5 w-5" />, color: "bg-blue-500" },
          { label: "Shortest Route", value: "280 km", icon: <Clock className="h-5 w-5" />, color: "bg-green-500" },
          { label: "Longest Route", value: "1337 km", icon: <MapPin className="h-5 w-5" />, color: "bg-amber-500" },
          { label: "Avg ETA", value: "11 hrs", icon: <Clock className="h-5 w-5" />, color: "bg-purple-500" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -3, boxShadow: "0 18px 40px rgba(0,0,0,0.07)" }}
            className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold">{item.label}</p>
              <p className="text-lg font-semibold text-slate-900">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MAP (Embedded Google Map) */}
      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="border-b border-slate-100 px-4 py-3">
          <h2 className="text-sm font-semibold text-slate-900">Route Map</h2>
          <p className="text-xs text-slate-500">Live route overview with planning markers</p>
        </div>

        <div className="h-80 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.22590314155!2d78.07836498642884!3d17.41207787363984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1764321335856!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>

      {/* TABLE */}
      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="border-b border-slate-100 px-4 py-3">
          <h2 className="text-sm font-semibold text-slate-900">Available Routes</h2>
          <p className="text-xs text-slate-500">All planned delivery routes with distance & time.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100 text-xs">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Route ID</th>
                <th className="px-4 py-3 font-semibold">Origin → Destination</th>
                <th className="px-4 py-3 font-semibold">Distance</th>
                <th className="px-4 py-3 font-semibold">ETA</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">
              {ROUTES.map((r, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ backgroundColor: "rgba(241,245,249,0.7)" }}
                  className="cursor-pointer"
                >
                  <td className="px-4 py-3 font-semibold text-slate-900">{r.id}</td>

                  <td className="px-4 py-3 text-slate-700 flex items-center gap-2">
                    <span>{r.from}</span>
                    <span className="text-slate-400">→</span>
                    <span>{r.to}</span>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide ${getBadge(
                        r.distance
                      )}`}
                    >
                      {r.distance}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-slate-700">{r.eta}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export default RoutesPage;
