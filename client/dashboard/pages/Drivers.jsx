import React, { useState } from "react";

function Drivers() {
  const driversData = [
    { name: "Michael Doe", id: "DRV-101", status: "Active", rating: 4.8 },
    { name: "Sarah Wilson", id: "DRV-102", status: "On Duty", rating: 4.5 },
    { name: "James Carter", id: "DRV-103", status: "Off Duty", rating: 4.2 },
    { name: "Maria Chen", id: "DRV-104", status: "Maintenance", rating: 4.0 },
    { name: "Sarah Wilson", id: "DRV-105", status: "On Duty", rating: 4.5 },
    { name: "James Carter", id: "DRV-106", status: "Off Duty", rating: 4.2 },
    { name: "Michael Doe", id: "DRV-107", status: "Active", rating: 4.8 },
    { name: "Sarah Wilson", id: "DRV-108", status: "On Duty", rating: 4.5 },
    { name: "James Carter", id: "DRV-109", status: "Off Duty", rating: 4.2 },
    { name: "Sarah Wilson", id: "DRV-110", status: "On Duty", rating: 4.5 },
    { name: "James Carter", id: "DRV-111", status: "Off Duty", rating: 4.2 },
    { name: "Maria Chen", id: "DRV-112", status: "Maintenance", rating: 4.0 },
    { name: "Arun Kumar", id: "DRV-201", status: "Active", rating: 4.9 },
    { name: "Vikram Singh", id: "DRV-202", status: "On Duty", rating: 4.7 },
    { name: "John Mathew", id: "DRV-203", status: "Off Duty", rating: 4.3 },
    { name: "Prakash Rao", id: "DRV-204", status: "Maintenance", rating: 4.1 },
    { name: "Karthik Mohan", id: "DRV-205", status: "Active", rating: 4.8 },
    { name: "Anil Sharma", id: "DRV-206", status: "On Duty", rating: 4.6 },
    { name: "Naveen Kumar", id: "DRV-207", status: "Off Duty", rating: 4.2 },
    { name: "Suresh Babu", id: "DRV-208", status: "Maintenance", rating: 4.0 },
    { name: "Rahul Verma", id: "DRV-209", status: "Active", rating: 4.9 },
    { name: "Deepak Chauhan", id: "DRV-210", status: "On Duty", rating: 4.7 },
    { name: "Imran Ali", id: "DRV-211", status: "Off Duty", rating: 4.3 },
    { name: "Rohit Shetty", id: "DRV-212", status: "Maintenance", rating: 4.1 },
  ];

  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [search, setSearch] = useState("");

  const badge = {
    Active: "bg-green-100 text-green-700",
    "On Duty": "bg-blue-100 text-blue-700",
    "Off Duty": "bg-red-100 text-red-700",
    Maintenance: "bg-yellow-100 text-yellow-800",
  };

  // FILTER + SORT + SEARCH
  const filteredDrivers = driversData
    .filter((d) =>
      filterStatus === "All" ? true : d.status === filterStatus
    )
    .filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "high") return b.rating - a.rating;
      if (sortOrder === "low") return a.rating - b.rating;
      return 0;
    });

  return (
    <div className="lg:ms-52 p-6 mt-16 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Drivers</h3>
      <p className="text-gray-500 mb-6">
        View driver availability, ratings, and work status.
      </p>

      {/* FILTER BAR */}
      <div className="bg-white shadow-lg p-4 rounded-xl mb-6 flex flex-wrap gap-4 items-center">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search driver..."
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter by Status */}
        <select
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active Only</option>
          <option value="On Duty">On Duty</option>
          <option value="Off Duty">Off Duty</option>
          <option value="Maintenance">Maintenance</option>
        </select>

        {/* Sort */}
        <select
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by Rating</option>
          <option value="high">High → Low</option>
          <option value="low">Low → High</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <div className="px-6 py-4 border-b bg-white/80">
          <h6 className="text-lg font-semibold text-gray-700">Driver List</h6>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Driver ID</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Rating</th>
              </tr>
            </thead>

            <tbody>
              {filteredDrivers.map((d, i) => (
                <tr
                  key={i}
                  className="group transition-all hover:bg-blue-50 cursor-pointer"
                >
                  <td className="px-6 py-3 font-medium group-hover:translate-x-1 transition">
                    {d.name}
                  </td>

                  <td className="px-6 py-3 text-gray-600">{d.id}</td>

                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${badge[d.status]}`}
                    >
                      {d.status}
                    </span>
                  </td>

                  <td className="px-6 py-3 font-semibold">⭐ {d.rating}</td>
                </tr>
              ))}

              {filteredDrivers.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No drivers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Drivers;
