import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Advanced from "./pages/Advanced";
import NotFound from "./pages/NotFound";

// Dashboard layout + pages
import Layout from "./dashboard/components/Layout.jsx";
import ProtectedRoute from "./dashboard/components/ProtectedRoute.jsx";
import DashboardHome from "./dashboard/pages/Dashboard.jsx";
import Tracking from "./dashboard/pages/Tracking.jsx";
import Fleet from "./dashboard/pages/Fleet.jsx";
import RoutesPage from "./dashboard/pages/RoutesPage.jsx";
import Analytics from "./dashboard/pages/Analytics.jsx";
import Drivers from "./dashboard/pages/Drivers.jsx";
import Reports from "./dashboard/pages/Reports.jsx";
import Settings from "./dashboard/pages/Settings.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/advanced" element={<Advanced />} />

          {/* Protected dashboard routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="tracking" element={<Tracking />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="routes" element={<RoutesPage />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
