import { Calendar, ChevronDown, Bell } from "lucide-react";
import { currentUser, notificationCount } from "../data/dashboard";

// TODO(Task 007/008): swap currentUser/notificationCount for useUser() /
// useNotifications() hooks once the full dummy data layer is in place.

function Greeting({ title, showGreeting }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      {showGreeting && (
        <p className="mt-0.5 text-sm text-gray-500">
          Good morning, {currentUser.name}! 👋
        </p>
      )}
    </div>
  );
}

function DateRangePicker() {
  // UI only for now — Task 010/011 will wire this to actually filter
  // the charts/tables it sits next to.
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      <Calendar className="h-4 w-4 text-gray-400" />
      {currentUser.dateRangeLabel}
      <ChevronDown className="h-4 w-4 text-gray-400" />
    </button>
  );
}

function NotificationBell() {
  return (
    <button
      type="button"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
      aria-label={`${notificationCount} unread notifications`}
    >
      <Bell className="h-4.5 w-4.5 text-gray-500" />
      {notificationCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-medium text-white">
          {notificationCount}
        </span>
      )}
    </button>
  );
}

export default function Topbar({ title = "Dashboard", showGreeting = true, onMenuClick }) {
  return (
    <header className="flex flex-col gap-4 border-b border-gray-100 bg-white px-4 py-4 sm:px-6 md:px-8 md:py-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-between gap-4">
        {/* Mobile menu button */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50 md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <Greeting title={title} showGreeting={showGreeting} />
      </div>

      <div className="flex items-center gap-3">
        <DateRangePicker />
        <NotificationBell />
      </div>
    </header>
  );
}
