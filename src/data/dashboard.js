// Minimal dummy data to unblock Task 005 (Topbar) before the full
// data layer lands in Task 007/008. Once that's in place, this file's
// contents fold into data/summary.json and a proper useUser()/useNotifications() hook.

export const currentUser = {
  name: "Saurabh",
  dateRangeLabel: "May 1 - May 31, 2024",
};

export const notificationCount = 3;