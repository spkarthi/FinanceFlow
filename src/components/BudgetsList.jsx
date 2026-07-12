import { Link } from "react-router-dom";
import { useBudgets } from "../hooks/useBudgets";
import BudgetProgressBar from "./BudgetProgressBar";

export default function BudgetsList() {
  const { data, loading, error } = useBudgets();

  if (loading) return <div className="h-64 animate-pulse rounded-lg border bg-gray-100" />;
  if (error) return <p className="text-sm text-red-600">Couldn't load budgets</p>;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex flex-col" style={{height: "424px"}}>
      <div className="mb-4 flex items-center justify-between shrink-0">
        <h2 className="font-medium">Budgets</h2>
        <Link to="/budgets" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View all →
        </Link>
      </div>
      <div className="space-y-4 overflow-y-auto flex-1">
        {data.budgets.map((b) => (
          <BudgetProgressBar
            key={b.budgetId}
            category={b.category}
            spent={b.spent}
            limit={b.limit}
            percentUsed={b.percentUsed}
          />
        ))}
      </div>
    </div>
  );
}