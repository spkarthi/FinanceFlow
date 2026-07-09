import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import Dashboard from "./routes/Dashboard";
import Transactions from "./routes/Transactions";
import Budgets from "./routes/Budgets";
import Reports from "./routes/Reports";
import Settings from "./routes/Settings";
import NotFound from "./routes/NotFound";

export default function App() {
  return (

      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

  );
}