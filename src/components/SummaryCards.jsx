import { Wallet, CreditCard, PiggyBank, TrendingUp } from "lucide-react";
import useSummary  from "../hooks/useSummary";
import StatCard from "./StatCard";

export default function SummaryCards() {
  const { data, loading, error } = useSummary();

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-lg border bg-gray-100" />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-sm text-red-600">Couldn't load summary</p>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Income"
        value={data.income.amount}
        percentChange={data.income.percentChange}
        icon={Wallet}
      />
      <StatCard
        label="Total Expenses"
        value={data.expenses.amount}
        percentChange={data.expenses.percentChange}
        icon={CreditCard}
      />
      <StatCard
        label="Total Savings"
        value={data.savings.amount}
        percentChange={data.savings.percentChange}
        icon={PiggyBank}
      />
      <StatCard
        label="Net Worth"
        value={data.netWorth.amount}
        percentChange={data.netWorth.percentChange}
        icon={TrendingUp}
      />
    </div>
  );
}