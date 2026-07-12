import { Link } from "react-router-dom";
import { Home, Zap, Clapperboard, HeartPulse, CreditCard, Receipt } from "lucide-react";
import { useBills } from "../hooks/useBills";

const CATEGORY_ICONS = {
  Housing: Home,
  "Bills and Utilities": Zap,
  Entertainment: Clapperboard,
  "Health and Fitness": HeartPulse,
  "Credit Card": CreditCard,
};

const STATUS_STYLES = {
  overdue: "text-red-600",
  due_soon: "text-orange-600",
  upcoming: "text-gray-500",
};

export default function UpcomingBills() {
  const { data, loading, error } = useBills();

  if (loading) return <div className="h-64 animate-pulse rounded-lg border bg-gray-100" />;
  if (error) return <p className="text-sm text-red-600">Couldn't load bills</p>;

  // Sort by due date ascending — earliest/overdue bills surface first.
  // Sorting a copy (`[...bills]`) rather than mutating the array from
  // the hook, since mutating shared state in place is a classic bug
  // magnet once more components start reading the same data.
  const sortedBills = [...data.bills].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-medium">Upcoming Bills</h2>
        <Link to="/bills" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View all →
        </Link>
      </div>
      <ul className="divide-y overflow-y-auto flex-1" style={{maxHeight: "200px"}}>
        {sortedBills.map((bill) => {
          const Icon = CATEGORY_ICONS[bill.category] ?? Receipt;
          const statusColor = STATUS_STYLES[bill.status] ?? "text-gray-500";

          return (
            <li key={bill.billId} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                  <Icon className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{bill.name}</p>
                  <p className={`text-xs ${statusColor}`}>
                    Due {new Date(bill.dueDate).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                    {bill.status === "overdue" && " · Overdue"}
                    {bill.status === "due_soon" && " · Due soon"}
                  </p>
                </div>
              </div>

              <span className="text-sm font-medium text-gray-900">
                ${bill.amount.toFixed(2)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}