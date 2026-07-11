import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ label, value, percentChange, icon: Icon }) {
  const isUp = percentChange >= 0;

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        {Icon && (
          <div className="rounded-md bg-gray-100 p-2">
            <Icon className="h-4 w-4 text-gray-600" />
          </div>
        )}
      </div>

      <p className="mt-2 text-2xl font-semibold text-gray-900">
        ${Math.abs(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>

      <div
        className={`mt-2 flex items-center gap-1 text-sm font-medium ${
          isUp ? "text-green-600" : "text-red-600"
        }`}
      >
        {isUp ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        {Math.abs(percentChange).toFixed(1)}%
      </div>
    </div>
  );
}