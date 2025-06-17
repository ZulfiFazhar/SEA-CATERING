"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import type {
  User,
  UserRole,
  UseUserReturn,
  UseUserRoleReturn,
} from "@/types/auth";

export function useUser(): UseUserReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const {
          data: { user: authUser },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) {
          throw new Error(authError.message);
        }

        setUser(authUser as User);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user as User);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return { user, loading, error };
}

export function useUserRole(): UseUserRoleReturn {
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getRole = async () => {
      try {
        setLoading(true);
        setError(null);

        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) {
          throw new Error(authError.message);
        }

        if (user) {
          const { data: userData, error: userError } = await supabase
            .from("users")
            .select("role")
            .eq("id", user.id)
            .single();

          if (userError) {
            // If user not found in users table, default to 'user' role
            if (userError.code === "PGRST116") {
              console.log(
                "User not found in users table, defaulting to 'user' role"
              );
              setRole("user");
            } else {
              throw new Error(userError.message);
            }
          } else {
            setRole(userData.role as UserRole);
          }
        } else {
          setRole(null);
        }
      } catch (err) {
        console.error("Error fetching user role:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch user role"
        );
        setRole("user"); // Default to user role on error
      } finally {
        setLoading(false);
      }
    };

    getRole();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT") {
        setRole(null);
        setLoading(false);
      } else if (session?.user) {
        // Re-fetch role when user signs in
        getRole();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return {
    role,
    loading,
    isAdmin: role === "admin",
    error,
  };
}

export function useUserWithRole() {
  const { user, loading: userLoading, error: userError } = useUser();
  const {
    role,
    loading: roleLoading,
    isAdmin,
    error: roleError,
  } = useUserRole();

  return {
    user,
    role,
    isAdmin,
    loading: userLoading || roleLoading,
    error: userError || roleError,
  };
}
