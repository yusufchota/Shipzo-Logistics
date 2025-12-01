import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { fetchDashboardStats, fetchShipments } from "../api.js";

Chart.register(...registerables);

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [shipments, setShipments] = useState([]);

  const perfRef = useRef(null);
  const perfChart = useRef(null);

  // Load data
  useEffect(() => {
    fetchDashboardStats().then(setStats);
    fetchShipments().then(setShipments);
  }, []);

  // Chart
  useEffect(() => {
    if (!perfRef.current) return;

    perfChart.current = new Chart(perfRef.current, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Deliveries",
            data: [12, 19, 15, 17, 22, 18, 20],
            borderColor: "rgba(37, 99, 235, 1)",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            tension: 0.4,
            borderWidth: 2,
            fill: true,
          },
          {
            label: "Delays",
            data: [2, 3, 1, 4, 2, 1, 3],
            borderColor: "rgba(239, 68, 68, 1)",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            tension: 0.4,
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "#4b5563",
              font: { size: 11 },
            },
          },
        },
        scales: {
          x: {
            ticks: { color: "#6b7280" },
            grid: { color: "rgba(229, 231, 235, 0.7)" },
          },
          y: {
            ticks: { color: "#6b7280" },
            grid: { color: "rgba(229, 231, 235, 0.7)" },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      perfChart.current?.destroy();
    };
  }, []);

  const kpi = [
    {
      label: "Active Trucks",
      value: stats?.activeTrucks ?? 24,
      delta: "+12%",
      color: "bg-blue-500",
    },
    {
      label: "In Transit",
      value: stats?.inTransit ?? 156,
      delta: "+8%",
      color: "bg-amber-500",
    },
    {
      label: "Delivered Today",
      value: stats?.deliveredToday ?? 89,
      delta: "+15%",
      color: "bg-emerald-500",
    },
    {
      label: "On-Time Rate",
      value: stats ? `${stats.onTimeRate}%` : "94.5%",
      delta: "+2.3%",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="space-y-6 mt-20 lg:ms-48 p-6 bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Top section: greeting + weather */}
      <section className="flex flex-col gap-4 md:flex-row md:items-stretch md:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">
            Good Morning, Mohammed Yusuf! <span className="ml-1">👋</span>
          </h1>
          <p className="text-sm text-slate-500">
            Here&apos;s what&apos;s happening with your logistics today
          </p>
        </div>

        {/* Weather card */}
        <div className="flex w-full max-w-xs items-center justify-between rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 px-5 py-4 text-white shadow-md md:self-start">
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-100/90">
              Chennai Hub
            </p>
            <p className="mt-1 text-2xl font-semibold leading-none">24°C</p>
            <p className="text-xs text-blue-100/90">Clear sky • Live weather</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs">
            <span>Next ETA: 18 min</span>
            <span>On-time: 94.5%</span>
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl">
              ☀️
            </div>
          </div>
        </div>
      </section>

      {/* KPI cards */}
      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {kpi.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} text-white`}>
              {/* simple icon placeholder */}
              <span className="text-xl">🚚</span>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {item.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-slate-900">
                {item.value}
              </p>
              <p className="text-xs text-emerald-500">{item.delta}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Middle: chart + recent shipments */}
      <section className="grid gap-4 lg:grid-cols-3">
        {/* Chart */}
        <div className="lg:col-span-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">
              Weekly Performance
            </h2>
            <span className="text-xs text-slate-500">Deliveries vs Delays</span>
          </div>
          <div className="h-64">
            <canvas ref={perfRef} />
          </div>
        </div>

        {/* Recent Shipments */}
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">
              Recent Shipments
            </h2>
            <span className="text-xs text-slate-500">Last 24 hours</span>
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto pr-1 text-xs">
            {shipments.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">
                    {s.id}
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                    {s.status}
                  </span>
                </div>
                <p className="mb-1 text-slate-500">{s.route}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Driver: {s.driver}</span>
                  <span className="font-semibold text-emerald-600">
                    {s.progress}
                  </span>
                </div>
              </div>
            ))}

            {shipments.length === 0 && (
              <p className="text-xs text-slate-400">
                No shipments loaded yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Bottom: Fleet overview placeholder */}
      <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
        <h2 className="text-sm font-semibold text-slate-900 mb-1">
          Fleet Overview
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          Real-time truck locations &amp; routes (map placeholder).
        </p>
        <div className="flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 text-xs font-medium text-slate-500">
          Interactive Fleet Map (coming soon)
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
