import { useBudgets } from "../hooks/useBudgets";
import BudgetProgressBar from "./BudgetProgressBar";

export default function BudgetsList() {
  const { data, loading, error } = useBudgets();

  if (loading) return <div className="h-64 animate-pulse rounded-lg border bg-gray-100" />;
  if (error) return <p className="text-sm text-red-600">Couldn't load budgets</p>;

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="mb-4 font-medium">Budgets</h2>
      <div className="space-y-4">
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