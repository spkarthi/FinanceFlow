import { Link } from "react-router-dom";
import { useTransactions } from "../hooks/useTransactions";
import CategoryPill from "./CategoryPill";
import MerchantIcon from "./MerchantIcon";

export default function TransactionsTable() {
  const { data, loading, error } = useTransactions();

  if (loading) return <div className="h-64 animate-pulse rounded-lg border bg-gray-100" />;
  if (error) return <p className="text-sm text-red-600">Couldn't load transactions</p>;

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-medium">Recent Transactions</h2>
        <Link
          to="/transactions"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          View all →
        </Link>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-xs uppercase text-gray-400">
            <th className="pb-2 font-medium">Merchant</th>
            <th className="pb-2 font-medium">Category</th>
            <th className="pb-2 font-medium">Date</th>
            <th className="pb-2 text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.transactions.slice(0, 8).map((txn) => {
            const topCategory = txn.category?.[0] ?? "Other";
            const isCredit = txn.amount >= 0;

            return (
              <tr key={txn.transactionId}>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <MerchantIcon category={topCategory} />
                    <span className="font-medium text-gray-900">
                      {txn.merchantName ?? txn.description}
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <CategoryPill category={topCategory} />
                </td>
                <td className="py-3 text-gray-500">
                  {new Date(txn.date).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td
                  className={`py-3 text-right font-medium ${
                    isCredit ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isCredit ? "+" : "-"}${Math.abs(txn.amount).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}