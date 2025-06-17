"use client";

import { createContext, useContext, ReactNode } from "react";
import { userSidebarConfig, adminSidebarConfig } from "@/config/sidebar-config";
import { SidebarData } from "@/types/sidebar";

interface SidebarContextType {
  getUserSidebar: (name: string, email: string, avatar: string) => SidebarData;
  getAdminSidebar: (name: string, email: string, avatar: string) => SidebarData;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const getUserSidebar = (name: string, email: string, avatar: string) =>
    userSidebarConfig(name, email, avatar);
  const getAdminSidebar = (name: string, email: string, avatar: string) =>
    adminSidebarConfig(name, email, avatar);

  return (
    <SidebarContext.Provider value={{ getUserSidebar, getAdminSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
}
