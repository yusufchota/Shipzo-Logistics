// Fake API functions for demo
export function fetchDashboardStats() {
  return Promise.resolve({
    activeTrucks: 24,
    inTransit: 156,
    deliveredToday: 89,
    onTimeRate: 94.5,
  });
}

export function fetchShipments() {
  return Promise.resolve([
    {
      id: "#SHP-2024-001",
      route: "LA → Phoenix",
      driver: "Mike Johnson",
      status: "In Transit",
      progress: "78% Complete",
    },
    {
      id: "#SHP-2024-002",
      route: "Chicago → Detroit",
      driver: "Sarah Wilson",
      status: "Delivered",
      progress: "Completed",
    },
    {
      id: "#SHP-2024-003",
      route: "Dallas → Houston",
      driver: "Robert Chen",
      status: "Pending",
      progress: "Waiting Pickup",
    },
    {
      id: "#SHP-2024-004",
      route: "LA → Phoenix",
      driver: "Mike Johnson",
      status: "In Transit",
      progress: "78% Complete",
    },
    {
      id: "#SHP-2024-005",
      route: "Chicago → Detroit",
      driver: "Sarah Wilson",
      status: "Delivered",
      progress: "Completed",
    },
    {
      id: "#SHP-2024-006",
      route: "Dallas → Houston",
      driver: "Robert Chen",
      status: "Pending",
      progress: "Waiting Pickup",
    },
    {
      id: "#SHP-2024-007",
      route: "LA → Phoenix",
      driver: "Mike Johnson",
      status: "In Transit",
      progress: "78% Complete",
    },
    {
      id: "#SHP-2024-008",
      route: "Chicago → Detroit",
      driver: "Sarah Wilson",
      status: "Delivered",
      progress: "Completed",
    },
    {
      id: "#SHP-2024-009",
      route: "Dallas → Houston",
      driver: "Robert Chen",
      status: "Pending",
      progress: "Waiting Pickup",
    },
    {
      id: "#SHP-2024-010",
      route: "Dallas → Houston",
      driver: "Robert Chen",
      status: "Pending",
      progress: "Waiting Pickup",
    },
  ]);
}
