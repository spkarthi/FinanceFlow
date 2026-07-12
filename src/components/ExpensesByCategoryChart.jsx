import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Link } from "react-router-dom";
import { useExpensesByCategory } from "../hooks/useExpensesByCategory";

export default function ExpensesByCategoryChart() {
  const { data, loading, error } = useExpensesByCategory();

  if (loading) return <div className="h-80 animate-pulse rounded-lg border bg-gray-100" />;
  if (error) return <p className="text-sm text-red-600">Couldn't load category breakdown</p>;

  const { categories } = data;

  // Computed from the category list itself rather than trusting a separate
  // `totalExpenses` field — guarantees the center label always matches
  // exactly what the donut + legend show, even if they ever drift.
  const total = categories.reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="mb-4 font-medium">Expenses by Category</h2>

      <div className="flex items-center gap-6">
        {/* Donut + center label */}
        <div className="relative h-56 w-56 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categories}
                dataKey="amount"
                nameKey="category"
                innerRadius="65%"
                outerRadius="100%"
                paddingAngle={2}
              >
                {categories.map((c) => (
                  <Cell key={c.category} fill={c.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`$${value.toFixed(2)}`, name]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Recharts has no native center-label support for donuts,
              so this is an absolutely-positioned overlay sitting on
              top of the chart rather than part of the SVG itself. */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-gray-500">Total</span>
            <span className="text-xl font-semibold text-gray-900">
              ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Side legend */}
        <ul className="flex-1 space-y-2">
          {categories.map((c) => (
            <li key={c.category} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
                <span className="text-gray-700">{c.category}</span>
              </div>
              <div className="text-right text-gray-500">
                <span className="font-medium text-gray-900">
                  ${c.amount.toFixed(2)}
                </span>{" "}
                <span>({c.percent.toFixed(1)}%)</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/reports"
        className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        View full report →
      </Link>
    </div>
  );
}