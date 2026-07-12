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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Main column — 3/4 width */}
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

        {/* Sidebar — 1/4 width */}
        <div className="space-y-6">
          <BudgetsList />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Main column — 3/4 width */}
        <div className="lg:col-span-3">
          <TransactionsTable />
        </div>

        {/* Sidebar — 1/4 width */}
        <div className="space-y-6">
          <UpcomingBills />
          <AlertsPanel />
        </div>
      </div>
    </div>
  );
}