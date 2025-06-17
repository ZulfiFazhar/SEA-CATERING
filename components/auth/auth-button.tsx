/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";
import { useUserRole } from "@/hooks/use-user";
import { logout } from "@/components/auth/actions";
import {
  Loader2,
  Crown,
  LogOut,
  User as UserIcon,
  Settings,
  Shield,
  ChevronDown,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AuthButton() {
  const { user, loading: userLoading } = useUser();
  const { role, loading: roleLoading, isAdmin } = useUserRole();

  if (userLoading) {
    return (
      <Button disabled variant="ghost" size="sm">
        <Loader2 className="h-4 w-4 animate-spin" />
      </Button>
    );
  }

  if (!user) {
    return (
      <Link href="/login">
        <Button size="sm" className="font-medium">
          Get Started
        </Button>
      </Link>
    );
  }

  const displayName =
    user.user_metadata?.full_name || user.email?.split("@")[0] || "User";

  const userEmail = user.email || "";

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-auto px-3 py-2 hover:bg-accent transition-colors"
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 ring-2 ring-primary/10">
              <AvatarImage
                src={user.user_metadata?.avatar_url}
                alt={displayName}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-sm font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium leading-none">
                {displayName}
              </span>
              <span className="text-xs text-muted-foreground mt-0.5">
                {userEmail.length > 20
                  ? `${userEmail.slice(0, 20)}...`
                  : userEmail}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform data-[state=open]:rotate-180" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-72" align="end" forceMount>
        {/* User Info Header */}
        <DropdownMenuLabel className="font-normal p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
              <AvatarImage
                src={user.user_metadata?.avatar_url}
                alt={displayName}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-base font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold leading-none">
                {displayName}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Mail className="h-3 w-3" />
                {userEmail}
              </div>
              {!roleLoading && (
                <Badge
                  variant={isAdmin ? "default" : "secondary"}
                  className="text-xs w-fit mt-1"
                >
                  {isAdmin && <Crown className="w-3 h-3 mr-1" />}
                  {isAdmin ? "Administrator" : "User"}
                </Badge>
              )}
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Navigation Items */}
        <div className="px-1 py-1">
          <DropdownMenuItem asChild>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-accent transition-colors rounded-sm"
            >
              <UserIcon className="h-4 w-4" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Dashboard</span>
                <span className="text-xs text-muted-foreground">
                  View your overview
                </span>
              </div>
            </Link>
          </DropdownMenuItem>

          {isAdmin && (
            <DropdownMenuItem asChild>
              <Link
                href="/admin"
                className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-accent transition-colors rounded-sm"
              >
                <Shield className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Admin Panel</span>
                  <span className="text-xs text-muted-foreground">
                    Manage system
                  </span>
                </div>
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem asChild>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-accent transition-colors rounded-sm"
            >
              <Settings className="h-4 w-4" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Settings</span>
                <span className="text-xs text-muted-foreground">
                  Manage preferences
                </span>
              </div>
            </Link>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />

        {/* Logout */}
        <div className="px-1 py-1">
          <DropdownMenuItem
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-accent transition-colors rounded-sm"
          >
            <LogOut className="h-4 w-4" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Sign Out</span>
              <span className="text-xs opacity-70">End your session</span>
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
