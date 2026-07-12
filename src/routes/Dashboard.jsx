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
      <SummaryCards />

      {/* Charts and Budgets row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Charts container */}
        <div className="space-y-6 lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SpendingChart />
            </div>
            <div className="lg:col-span-2">
              <ExpensesByCategoryChart />
            </div>
          </div>
        </div>

        {/* Budgets sidebar */}
        <div className="lg:col-span-1">
          <BudgetsList />
        </div>
      </div>

      {/* Transactions and Bills/Alerts row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Recent Transactions */}
        <div className="lg:col-span-3">
          <TransactionsTable />
        </div>

        {/* Bills and Alerts sidebar */}
        <div className="space-y-6 lg:col-span-1">
          <UpcomingBills />
          <AlertsPanel />
        </div>
      </div>
    </div>
  );
}