/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";
import { useUserRole } from "@/hooks/use-user";
import { logout } from "@/components/auth/actions";
import { Loader2, Crown, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
      <>
        <Link href="/login">
          <Button size="sm">Get Started</Button>
        </Link>
      </>
    );
  }

  const displayName =
    user.user_metadata?.full_name || user.email?.split("@")[0] || "User";

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{displayName}</span>
        {!roleLoading && (
          <Badge
            variant={isAdmin ? "default" : "secondary"}
            className="text-xs"
          >
            {isAdmin && <Crown className="w-3 h-3 mr-1" />}
            {isAdmin ? "Admin" : "User"}
          </Badge>
        )}
      </div>
      <div className="flex gap-2">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            <UserIcon className="h-4 w-4" />
          </Button>
        </Link>
        <Button onClick={handleLogout} variant="outline" size="sm">
          Sign Out
        </Button>
      </div>
    </div>
  );
}
