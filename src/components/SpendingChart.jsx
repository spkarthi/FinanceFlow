import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { useSpendingOverview } from "../hooks/useSpendingOverview";

const MONTH_FILTERS = [
  { label: "Last 3 months", value: 3 },
  { label: "Last 6 months", value: 6 },
  { label: "All", value: "all" },
];

export default function SpendingChart() {
  const { data, loading, error } = useSpendingOverview();
  const [range, setRange] = useState("all");

  if (loading) return <div className="h-80 animate-pulse rounded-lg border bg-gray-100" />;
  if (error) return <p className="text-sm text-red-600">Couldn't load spending overview</p>;

  // UI-only filter for now — real filtering wires up once the API
  // supports a date-range query param instead of always returning everything.
  const series =
    range === "all" ? data.series : data.series.slice(-range);

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-medium">Income vs Expenses vs Savings</h2>
        <select
          value={range}
          onChange={(e) => {
            const val = e.target.value;
            setRange(val === "all" ? "all" : Number(val));
          }}
          className="rounded-md border px-2 py-1 text-sm text-gray-600"
        >
          {MONTH_FILTERS.map((opt) => (
            <option key={opt.label} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={series} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
          />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} name="Income" />
          <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
          <Line type="monotone" dataKey="savings" stroke="#6366f1" strokeWidth={2} name="Savings" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}