import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, User, LayoutDashboard } from "lucide-react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarLayout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AuthContextProvider, useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
];

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AuthContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SidebarLayout />}>
                <Route index element={<Index />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </Router>
        </AuthContextProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;