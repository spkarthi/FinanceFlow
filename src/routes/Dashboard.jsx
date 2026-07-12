import SummaryCards from "../components/SummaryCards";
import SpendingChart from "../components/SpendingChart";
import ExpensesByCategoryChart from "../components/ExpensesByCategoryChart";
import TransactionsTable from "../components/TransactionsTable";
import BudgetsList from "../components/BudgetsList";
import UpcomingBills from "../components/UpcomingBills";
import AlertsPanel from "../components/AlertsPanel";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <SummaryCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SpendingChart />
        <ExpensesByCategoryChart />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TransactionsTable />
        <BudgetsList />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <UpcomingBills />
        <AlertsPanel />
      </div>
    </div>
  );
}