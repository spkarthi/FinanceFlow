import SummaryCards from "../components/SummaryCards";
import SpendingChart from "../components/SpendingChart";
import ExpensesByCategoryChart from "../components/ExpensesByCategoryChart";
import TransactionsTable from "../components/TransactionsTable";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <SummaryCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SpendingChart />
        <ExpensesByCategoryChart />
      </div>
      <TransactionsTable />
    </div>
  );
}