import { Link } from "react-router-dom";
import { AlertTriangle, AlertCircle, Info, ChevronRight } from "lucide-react";
import { useAlerts } from "../hooks/useAlerts";

const SEVERITY_CONFIG = {
  critical: { icon: AlertCircle, color: "text-red-600 bg-red-50" },
  warning: { icon: AlertTriangle, color: "text-orange-600 bg-orange-50" },
  info: { icon: Info, color: "text-blue-600 bg-blue-50" },
};

export default function AlertsPanel() {
  const { data, loading, error } = useAlerts();

  if (loading) return <div className="h-64 animate-pulse rounded-lg border bg-gray-100" />;
  if (error) return <p className="text-sm text-red-600">Couldn't load alerts</p>;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex flex-col">
      <div className="mb-4 flex items-center justify-between shrink-0">
        <h2 className="font-medium">Alerts</h2>
        <Link to="/alerts" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View all →
        </Link>
      </div>
      <ul className="divide-y overflow-y-auto flex-1" style={{maxHeight: "160px"}}>
        {data.alerts.map((alert) => {
          const config = SEVERITY_CONFIG[alert.severity] ?? SEVERITY_CONFIG.info;
          const Icon = config.icon;

          return (
            <li key={alert.alertId}>
              <button
                type="button"
                className={`flex w-full items-center gap-3 py-3 text-left ${
                  alert.read ? "opacity-60" : ""
                }`}
                // Chevron link is a placeholder navigation for now —
                // real destination depends on alert.type (e.g. jump to
                // the specific budget/bill/transaction via relatedId)
                // once those detail routes exist.
                onClick={() => console.log("Navigate to", alert.relatedId)}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${config.color}`}>
                  <Icon className="h-4 w-4" />
                </div>

                <p className="flex-1 text-sm text-gray-700">{alert.message}</p>

                <ChevronRight className="h-4 w-4 shrink-0 text-gray-300" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}