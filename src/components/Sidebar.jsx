import { NavLink } from "react-router-dom";
import { Crown, ChevronDown, Wallet, Flag } from "lucide-react";
import { navItems } from "../data/navigation";
import logo from "../assets/logo-icon.svg";

// TODO(Task 007/008): replace hardcoded user with useUser() hook once
// dummy data layer / API contract is in place.
const user = {
  name: "Saurabh Kumar",
  email: "saurabh@example.com",
  avatarUrl: null, // fallback to initials if no avatar
};

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/transactions", label: "Transactions" },
  { to: "/budgets", label: "Budgets" },
  { to: "/reports", label: "Reports" },
  { to: "/settings", label: "Settings" },
];

{links.map(({ to, label }) => (
  <NavLink
    key={to}
    to={to}
    className={({ isActive }) =>
      `block rounded-lg px-3 py-2 text-sm font-medium ${
        isActive ? "bg-slate-800 text-white" : "text-slate-400 hover:bg-slate-800/50"
      }`
    }
  >
    {label}
  </NavLink>
))}


function Logo() {
  return (
    <div className="flex items-center gap-2 px-6 py-5">
      <img src={logo} alt="FinanceFlow" className="h-9 w-9" />
      <span className="text-lg font-semibold text-gray-900">FinanceFlow</span>
    </div>
  );
}

function NavItem({ label, path, icon: Icon }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
          isActive ? "bg-purple-50 text-purple-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`
      }
    >
      <Icon className="h-4.5 w-4.5" />
      {label}
    </NavLink>
  );
}

function UpgradeCard() {
  return (
    <div className="mx-4 mb-4 rounded-xl bg-purple-50 p-4">
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100">
        <Crown className="h-5 w-5 text-purple-600" />
      </div>
      <p className="text-sm font-semibold text-gray-900">Upgrade to Premium</p>
      <p className="mt-1 text-xs text-gray-500">
        Unlock advanced insights, custom reports and more.
      </p>
      <button
        type="button"
        className="mt-3 w-full rounded-lg bg-purple-600 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
      >
        Upgrade Now
      </button>
    </div>
  );
}

function UserFooter() {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 border-t border-gray-100 px-4 py-4 text-left hover:bg-gray-50"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700">
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">{user.name}</p>
        <p className="truncate text-xs text-gray-500">{user.email}</p>
      </div>
      <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />
    </button>
  );
}

export default function Sidebar({ onClose }) {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-gray-100 bg-white">
      {/* Close button for mobile */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 md:hidden">
        <span className="text-sm font-medium text-gray-900">Menu</span>
        <button
          onClick={onClose}
          className="rounded-lg p-1 hover:bg-gray-100"
          aria-label="Close menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <Logo />

      <nav className="flex-1 space-y-1 overflow-y-auto px-4">
        {navItems.map((item) => (
          <NavItem key={item.path} {...item} />
        ))}
      </nav>

      <UpgradeCard />
      <UserFooter />
    </aside>
  );
}

