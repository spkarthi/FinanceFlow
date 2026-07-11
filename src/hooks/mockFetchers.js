import summaryData from "../data/summary.json";
import transactionsData from "../data/transactions.json";
import spendingOverviewData from "../data/spendingOverview.json";
import expensesByCategoryData from "../data/expensesByCategory.json";
import budgetsData from "../data/budgets.json";
import billsData from "../data/bills.json";
import alertsData from "../data/alerts.json";

// Simulated network latency so loading states are actually visible/testable
// during development, instead of resolving instantly every time.
const mockDelay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const fetchSummary = () => mockDelay(summaryData);
export const fetchTransactions = () => mockDelay(transactionsData);
export const fetchSpendingOverview = () => mockDelay(spendingOverviewData);
export const fetchExpensesByCategory = () => mockDelay(expensesByCategoryData);
export const fetchBudgets = () => mockDelay(budgetsData);
export const fetchBills = () => mockDelay(billsData);
export const fetchAlerts = () => mockDelay(alertsData);