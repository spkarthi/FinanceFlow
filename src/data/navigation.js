import {
  LayoutDashboard,
  Receipt,
  Wallet,
  CreditCard,
  Target,
  BarChart3,
  Landmark,
  Bell,
  Settings,
} from "lucide-react";

// Single source of truth for sidebar links.
// Keeping this separate from Sidebar.jsx makes it easy to reorder,
// add badges, or drive it from a future API without touching the component.
export const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Transactions", path: "/transactions", icon: Receipt },
  { label: "Budgets", path: "/budgets", icon: Wallet },
  { label: "Subscriptions", path: "/subscriptions", icon: CreditCard },
  { label: "Goals", path: "/goals", icon: Target },
  { label: "Reports", path: "/reports", icon: BarChart3 },
  { label: "Accounts", path: "/accounts", icon: Landmark },
  { label: "Alerts", path: "/alerts", icon: Bell },
  { label: "Settings", path: "/settings", icon: Settings },
];
