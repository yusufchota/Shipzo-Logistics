// import React, { useEffect, useRef } from "react";
// import { Chart, registerables } from "chart.js";

// Chart.register(...registerables);

// function Analytics() {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     chartInstance.current = new Chart(chartRef.current, {
//       type: "bar",
//       data: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//           {
//             label: "Shipments",
//             data: [320, 410, 390, 450, 520, 610],
//             backgroundColor: "rgba(37, 99, 235, 0.7)",
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: { legend: { display: false } },
//       },
//     });

//     return () => chartInstance.current?.destroy();
//   }, []);

//   return (
//     <div>
//       <h3 className="fw-bold mb-3">Analytics Dashboard</h3>
//       <p className="text-muted mb-4">
//         Track performance metrics, trends, and shipment stats over time.
//       </p>

//       <div className="chart-container">
//         <h5 className="fw-bold mb-3">Shipment Growth</h5>
//         <canvas ref={chartRef} height="200"></canvas>
//       </div>
//     </div>
//   );
// }

// export default Analytics;


import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function Analytics() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(37,99,235,0.8)");
    gradient.addColorStop(1, "rgba(37,99,235,0.2)");

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Shipments",
            data: [320, 410, 390, 450, 520, 610],
            backgroundColor: gradient,
            borderRadius: 8,
            borderWidth: 0,
          }
        ],
      },
      options: {
        responsive: true,
        animation: { duration: 1200, easing: "easeOutQuart" },
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "#555" } },
          y: { ticks: { color: "#555" } },
        }
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="animate-fadeIn lg:ms-52">
      {/* HEADER */}
      <h3 className="fw-bold text-2xl mb-2">📊 Analytics Overview</h3>
      <p className="text-muted mb-6">
        Track performance, weekly shipment activity, growth & insights.
      </p>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        
        {/* Card 1 */}
        <div className="p-4 rounded-2xl shadow-lg bg-white/60 backdrop-blur-lg border border-gray-200 hover:scale-[1.03] duration-300 cursor-pointer">
          <h4 className="text-gray-600 text-sm">Total Shipments</h4>
          <p className="text-3xl font-bold text-blue-600 mt-2">12,480</p>
        </div>

        {/* Card 2 */}
        <div className="p-4 rounded-2xl shadow-lg bg-white/60 backdrop-blur-lg border border-gray-200 hover:scale-[1.03] duration-300 cursor-pointer">
          <h4 className="text-gray-600 text-sm">Active Vehicles</h4>
          <p className="text-3xl font-bold text-green-600 mt-2">340</p>
        </div>

        {/* Card 3 */}
        <div className="p-4 rounded-2xl shadow-lg bg-white/60 backdrop-blur-lg border border-gray-200 hover:scale-[1.03] duration-300 cursor-pointer">
          <h4 className="text-gray-600 text-sm">Delivered Today</h4>
          <p className="text-3xl font-bold text-purple-600 mt-2">980</p>
        </div>

        {/* Card 4 */}
        <div className="p-4 rounded-2xl shadow-lg bg-white/60 backdrop-blur-lg border border-gray-200 hover:scale-[1.03] duration-300 cursor-pointer">
          <h4 className="text-gray-600 text-sm">Pending Orders</h4>
          <p className="text-3xl font-bold text-red-600 mt-2">112</p>
        </div>

      </div>

      {/* CHART */}
      <div className="p-6 rounded-2xl shadow-xl bg-white/70 backdrop-blur-xl border mb-8">
        <h5 className="fw-bold text-lg mb-4">📈 Shipment Growth (Jan - Jun)</h5>
        <canvas ref={chartRef} height="120"></canvas>
      </div>

      {/* TABLE */}
      <div className="p-6 w-full rounded-2xl bg-white/80 border backdrop-blur-xl shadow-xl">
        <h5 className="fw-bold text-lg mb-4">🚚 Recent Shipments</h5>

        <table className="w-full border border-gray-200 table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-3">Shipment ID</th>
              <th className="p-3">Destination</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            <tr className="border-b">
              <td className="p-3">#SH-1201</td>
              <td className="p-3">Delhi</td>
              <td className="p-3">28 Nov 2025</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  Delivered
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-3">#SH-1202</td>
              <td className="p-3">Mumbai</td>
              <td className="p-3">28 Nov 2025</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                  In Transit
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-3">#SH-1203</td>
              <td className="p-3">Hyderabad</td>
              <td className="p-3">27 Nov 2025</td>
              <td className="p-3">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                  Pending
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
