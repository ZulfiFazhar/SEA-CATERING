import { UserSidebarConfig, AdminSidebarConfig } from "@/types/sidebar";

export const userSidebarConfig = (
  name: string,
  email: string,
  avatar: string
): UserSidebarConfig => {
  return {
    user: {
      name: name,
      email: email,
      avatar: avatar,
      role: "user",
    },
    branding: {
      name: "Sea Catering",
      subtitle: "User Panel",
      logo: "ChefHat",
    },
    navMain: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: "Home",
        isActive: true,
        items: [
          { title: "Home", url: "/dashboard" },
          { title: "Quick Actions", url: "/dashboard/actions" },
        ],
      },
      {
        title: "Subscriptions",
        url: "/subscriptions",
        icon: "Utensils",
        items: [
          { title: "Active Plans", url: "/subscriptions/active" },
          { title: "Paused Plans", url: "/subscriptions/paused", badge: "2" },
          { title: "History", url: "/subscriptions/history" },
          { title: "New Subscription", url: "/subscriptions/new" },
        ],
      },
      {
        title: "Profile & Settings",
        url: "/profile",
        icon: "User",
        items: [
          { title: "Personal Info", url: "/profile/info" },
          { title: "Change Password", url: "/profile/password" },
          { title: "Notifications", url: "/profile/notifications" },
          { title: "Delivery Address", url: "/profile/address" },
        ],
      },
      {
        title: "Payment & Billing",
        url: "/billing",
        icon: "CreditCard",
        items: [
          { title: "Transaction History", url: "/billing/history" },
          { title: "Payment Methods", url: "/billing/methods" },
          { title: "Invoices", url: "/billing/invoices" },
        ],
      },
      {
        title: "Health Tracker",
        url: "/health",
        icon: "Activity",
        items: [
          { title: "Nutrition Overview", url: "/health/nutrition" },
          { title: "Progress", url: "/health/progress" },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Notifications",
        url: "/notifications",
        icon: "Bell",
        badge: "3",
      },
      {
        title: "Feedback",
        url: "/feedback",
        icon: "MessageSquare",
      },
      {
        title: "Help & Support",
        url: "/support",
        icon: "HelpCircle",
      },
    ],
  };
};

export const adminSidebarConfig = (
  name: string,
  email: string,
  avatar: string
): AdminSidebarConfig => {
  return {
    user: {
      name: name,
      email: email,
      avatar: avatar,
      role: "admin",
    },
    branding: {
      name: "Sea Catering",
      subtitle: "Admin Panel",
      logo: "Shield",
    },
    navMain: [
      {
        title: "Overview",
        url: "/admin",
        icon: "Home",
        isActive: true,
        items: [
          { title: "Dashboard", url: "/admin/dashboard" },
          { title: "KPI Summary", url: "/admin/kpi" },
        ],
      },
      {
        title: "Subscriptions",
        url: "/admin/subscriptions",
        icon: "Package",
        badge: "24",
        items: [
          { title: "All Subscriptions", url: "/admin/subscriptions" },
          { title: "Active Plans", url: "/admin/subscriptions/active" },
          { title: "Paused Plans", url: "/admin/subscriptions/paused" },
          { title: "Cancelled", url: "/admin/subscriptions/cancelled" },
          { title: "Bulk Actions", url: "/admin/subscriptions/bulk" },
        ],
      },
      {
        title: "User Management",
        url: "/admin/users",
        icon: "Users",
        items: [
          { title: "All Users", url: "/admin/users" },
          { title: "Active Users", url: "/admin/users/active" },
          { title: "Deactivated", url: "/admin/users/deactivated" },
          { title: "Admin Team", url: "/admin/users/admins" },
        ],
      },
      {
        title: "Meal Plans",
        url: "/admin/meal-plans",
        icon: "Utensils",
        items: [
          { title: "All Plans", url: "/admin/meal-plans" },
          { title: "Create New", url: "/admin/meal-plans/new" },
          { title: "Plan History", url: "/admin/meal-plans/history" },
        ],
      },
      {
        title: "Analytics & Reports",
        url: "/admin/analytics",
        icon: "BarChart3",
        items: [
          { title: "Revenue Reports", url: "/admin/analytics/revenue" },
          { title: "Subscription Growth", url: "/admin/analytics/growth" },
          { title: "User Analytics", url: "/admin/analytics/users" },
          { title: "Custom Reports", url: "/admin/analytics/custom" },
        ],
      },
      {
        title: "Content Management",
        url: "/admin/content",
        icon: "FileText",
        items: [
          {
            title: "Testimonials",
            url: "/admin/content/testimonials",
            badge: "5",
          },
          { title: "Moderation", url: "/admin/content/moderation" },
        ],
      },
      {
        title: "System Settings",
        url: "/admin/settings",
        icon: "Settings",
        items: [
          { title: "General", url: "/admin/settings/general" },
          { title: "Payment Gateway", url: "/admin/settings/payment" },
          { title: "Delivery", url: "/admin/settings/delivery" },
          { title: "Security", url: "/admin/settings/security" },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Notifications",
        url: "/admin/notifications",
        icon: "Bell",
        badge: "12",
      },
      {
        title: "Support Tickets",
        url: "/admin/support",
        icon: "HelpCircle",
        badge: "3",
      },
      {
        title: "Audit Logs",
        url: "/admin/audit",
        icon: "FileText",
      },
      {
        title: "System Health",
        url: "/admin/health",
        icon: "Activity",
      },
    ],
    projects: [
      {
        name: "Delivery Tracking",
        url: "/admin/delivery",
        icon: "Truck",
        badge: "Active",
      },
      {
        name: "Inventory",
        url: "/admin/inventory",
        icon: "Package",
      },
    ],
  };
};
