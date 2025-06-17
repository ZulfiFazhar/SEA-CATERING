interface User {
  name: string;
  email: string;
  avatar: string;
  role?: "user" | "admin";
}

interface NavItem {
  title: string;
  url: string;
  badge?: string | number;
  isActive?: boolean;
}

interface NavMainItem {
  title: string;
  url: string;
  icon: string;
  isActive?: boolean;
  items?: NavItem[];
  badge?: string | number;
}

interface NavSecondaryItem {
  title: string;
  url: string;
  icon: string;
  badge?: string | number;
}

interface Project {
  name: string;
  url: string;
  icon: string;
  badge?: string | number;
}

// Main sidebar data interface
interface SidebarData {
  user: User;
  navMain: NavMainItem[];
  navSecondary: NavSecondaryItem[];
  projects?: Project[];
  branding?: {
    name: string;
    subtitle: string;
    logo: string;
  };
}

// Role-based sidebar configurations
interface UserSidebarConfig extends SidebarData {
  user: User & { role: "user" };
}

interface AdminSidebarConfig extends SidebarData {
  user: User & { role: "admin" };
}

export type {
  User,
  NavItem,
  NavMainItem,
  NavSecondaryItem,
  Project,
  SidebarData,
  UserSidebarConfig,
  AdminSidebarConfig,
};
