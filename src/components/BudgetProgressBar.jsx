function getThreshold(percentUsed) {
  if (percentUsed > 100) return { bar: "bg-red-500", text: "text-red-600" };
  if (percentUsed >= 80) return { bar: "bg-orange-500", text: "text-orange-600" };
  return { bar: "bg-green-500", text: "text-green-600" };
}

export default function BudgetProgressBar({ category, spent, limit, percentUsed }) {
  const { bar, text } = getThreshold(percentUsed);

  // Cap the visual width at 100% so an over-budget bar doesn't overflow
  // its track — the number itself (and color) still communicates overspend.
  const width = Math.min(percentUsed, 100);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700">{category}</span>
        <span className={`font-medium ${text}`}>{percentUsed.toFixed(1)}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full transition-all ${bar}`}
          style={{ width: `${width}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400">
        <span>${spent.toFixed(2)} spent</span>
        <span>${limit.toFixed(2)} limit</span>
      </div>
    </div>
  );
}