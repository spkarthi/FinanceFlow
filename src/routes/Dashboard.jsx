import SpendingChart from "../components/SpendingChart";
import SummaryCards from "../components/SummaryCards";
import ExpensesByCategoryChart from "../components/ExpensesByCategoryChart";
export default function Dashboard() {
  return (<div className="space-y-6">
      <SummaryCards />
      <SpendingChart />
      <ExpensesByCategoryChart />
    </div>);
}