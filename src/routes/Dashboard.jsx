import SpendingChart from "../components/SpendingChart";
import SummaryCards from "../components/SummaryCards";
export default function Dashboard() {
  return (<div className="space-y-6">
      <SummaryCards />
      <SpendingChart />
    </div>);
}