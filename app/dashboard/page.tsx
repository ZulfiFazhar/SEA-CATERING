/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<string>("user");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/auth/login");
        return;
      }

      setUser(user);
      const role =
        user.user_metadata?.role || user.app_metadata?.role || "user";
      setUserRole(role);
      setLoading(false);
    };

    getUser();
  }, [router, supabase.auth]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">Loading...</div>
    );
  }

  return (
    <>
      {userRole === "admin" ? (
        // Admin Dashboard Content
        <>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-card overflow-hidden shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-medium">U</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-muted-foreground truncate">
                      User Management
                    </dt>
                    <dd className="text-lg font-medium text-foreground">
                      Manage Users
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-card overflow-hidden shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-medium">S</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-muted-foreground truncate">
                      Settings
                    </dt>
                    <dd className="text-lg font-medium text-foreground">
                      System Config
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-card overflow-hidden shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-medium">R</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-muted-foreground truncate">
                      Reports
                    </dt>
                    <dd className="text-lg font-medium text-foreground">
                      Analytics
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 min-h-[400px]">
            <h3 className="text-lg leading-6 font-medium text-foreground mb-4">
              Admin Dashboard
            </h3>
            <p className="text-muted-foreground">
              Welcome to the admin panel. You have full access to all features.
            </p>
          </div>
        </>
      ) : (
        // User Dashboard Content
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-card overflow-hidden shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-medium">P</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-muted-foreground truncate">
                      Profile
                    </dt>
                    <dd className="text-lg font-medium text-foreground">
                      View Profile
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-card overflow-hidden shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-medium">O</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-muted-foreground truncate">
                      Orders
                    </dt>
                    <dd className="text-lg font-medium text-foreground">
                      My Orders
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 min-h-[400px]">
            <h3 className="text-lg leading-6 font-medium text-foreground mb-4">
              User Dashboard
            </h3>
            <p className="text-muted-foreground">
              Welcome to your personal dashboard.
            </p>
          </div>
        </>
      )}
    </>
  );
}
