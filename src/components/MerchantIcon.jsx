import {
  UtensilsCrossed,
  Home,
  Car,
  Zap,
  ShoppingBag,
  Clapperboard,
  HeartPulse,
  Wallet,
  ArrowLeftRight,
  CircleDollarSign,
} from "lucide-react";

const CATEGORY_ICONS = {
  "Food and Drink": UtensilsCrossed,
  "Housing": Home,
  "Transportation": Car,
  "Bills and Utilities": Zap,
  "Shopping": ShoppingBag,
  "Entertainment": Clapperboard,
  "Health and Fitness": HeartPulse,
  "Income": Wallet,
  "Transfer": ArrowLeftRight,
};

export default function MerchantIcon({ category }) {
  const Icon = CATEGORY_ICONS[category] ?? CircleDollarSign;
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
      <Icon className="h-4 w-4 text-gray-600" />
    </div>
  );
}