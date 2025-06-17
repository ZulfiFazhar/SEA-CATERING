"use client";

import * as React from "react";
import { Command } from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { SidebarData } from "@/types/sidebar";
import { getIcon } from "@/utils/icon-map";
import Link from "next/link";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: SidebarData;
}

export function AppSidebar({ data, ...props }: AppSidebarProps) {
  const { user, navMain, navSecondary, projects, branding } = data;

  // Convert string icons to components
  const processedNavMain = navMain.map((item) => ({
    ...item,
    icon: getIcon(item.icon),
  }));

  const processedNavSecondary = navSecondary.map((item) => ({
    ...item,
    icon: getIcon(item.icon),
  }));

  const processedProjects = projects?.map((item) => ({
    ...item,
    icon: getIcon(item.icon),
  }));

  const LogoIcon = branding?.logo ? getIcon(branding.logo) : Command;

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <LogoIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {branding?.name || "Sea Catering"}
                  </span>
                  <span className="truncate text-xs">
                    {branding?.subtitle || "Dashboard"}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={processedNavMain} />
        {processedProjects && <NavProjects projects={processedProjects} />}
        <NavSecondary items={processedNavSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
