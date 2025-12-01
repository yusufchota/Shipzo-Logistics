import React, { useState } from "react";
import { FileText, Download, Search, Filter } from "lucide-react";

function Reports() {
  const reportsData = [
    { title: "Monthly Performance Report", date: "Nov 2024", size: "2.1 MB", category: "Performance" },
    { title: "Driver Activity Summary", date: "Nov 2024", size: "1.1 MB", category: "Drivers" },
    { title: "Fleet Maintenance Report", date: "Oct 2024", size: "2.7 MB", category: "Fleet" },
    { title: "Logistics Overview Report", date: "Sep 2024", size: "3.4 MB", category: "Overview" },
    { title: "Delivery Timeline Report", date: "Aug 2024", size: "1.9 MB", category: "Delivery" },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [toast, setToast] = useState(false); // for download popup

  const badgeColors = {
    Performance: "bg-blue-100 text-blue-700",
    Drivers: "bg-green-100 text-green-700",
    Fleet: "bg-yellow-100 text-yellow-700",
    Overview: "bg-purple-100 text-purple-700",
    Delivery: "bg-red-100 text-red-700",
  };

  const filteredReports = reportsData
    .filter((r) => (category === "All" ? true : r.category === category))
    .filter((r) => r.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "newest") return new Date(b.date) - new Date(a.date);
      if (sort === "oldest") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  const downloadReport = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="lg:ms-52 mt-16 p-6 animate-fadeIn">

      {/* Page Header */}
      <h3 className="text-3xl font-bold text-gray-800 mb-2">Reports</h3>
      <p className="text-gray-500 mb-6">Download insights and performance analytics.</p>

      {/* Filters */}
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-wrap gap-4 mb-6 items-center">

        {/* Search */}
        <div className="flex items-center gap-2 px-3 py-2 border rounded-lg">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search reports..."
            className="outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Performance">Performance</option>
          <option value="Drivers">Drivers</option>
          <option value="Fleet">Fleet</option>
          <option value="Overview">Overview</option>
          <option value="Delivery">Delivery</option>
        </select>

        {/* Sort */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Reports List */}
      <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {filteredReports.map((r, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-5 hover:bg-blue-50 transition cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:scale-110 transition">
                  <FileText className="text-blue-700" size={22} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold group-hover:text-blue-700 transition">
                    {r.title}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {r.date} • {r.size}
                  </p>

                  <span
                    className={`mt-1 inline-block px-3 py-1 text-xs rounded-full ${badgeColors[r.category]}`}
                  >
                    {r.category}
                  </span>
                </div>
              </div>

              <button
                onClick={downloadReport}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 shadow hover:bg-blue-700 transition active:scale-95"
              >
                <Download size={16} /> Download
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Download Toast Popup */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg animate-slideIn">
          ✔ Report Downloaded Successfully
        </div>
      )}
    </div>
  );
}

export default Reports;
