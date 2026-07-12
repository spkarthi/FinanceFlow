const CATEGORY_STYLES = {
  "Food and Drink": "bg-purple-100 text-purple-700",
  "Housing": "bg-indigo-100 text-indigo-700",
  "Transportation": "bg-amber-100 text-amber-700",
  "Bills and Utilities": "bg-sky-100 text-sky-700",
  "Shopping": "bg-pink-100 text-pink-700",
  "Entertainment": "bg-teal-100 text-teal-700",
  "Health and Fitness": "bg-red-100 text-red-700",
  "Income": "bg-green-100 text-green-700",
  "Transfer": "bg-gray-100 text-gray-700",
};

const DEFAULT_STYLE = "bg-gray-100 text-gray-600";

export default function CategoryPill({ category }) {
  const style = CATEGORY_STYLES[category] ?? DEFAULT_STYLE;

  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}>
      {category}
    </span>
  );
}