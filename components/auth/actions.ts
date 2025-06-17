/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  console.log("🔐 Login attempt for:", data.email);

  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword(data);

  if (authError) {
    console.error("❌ Login error:", authError.message);
    return {
      error: "Invalid email or password. Please try again.",
      success: false,
    };
  }

  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("role")
    .eq("id", authData.user?.id)
    .single();

  if (userError) {
    console.error("❌ Fetch user error:", userError.message);
    console.log("⚠️ User data not found, but login was successful");
  }

  console.log("✅ Login successful for user:", authData.user?.email);
  console.log("✅ User role:", userData?.role || "user");

  revalidatePath("/", "layout");

  if (userData?.role === "admin") {
    console.log("🔄 Redirecting to admin dashboard");
    redirect("/admin");
  } else {
    redirect("/dashboard");
  }
}

export async function signup(prevState: any, formData: FormData) {
  const supabase = await createClient();

  // Extract form data
  const formFields = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  console.log("📝 Signup attempt for:", formFields.email);

  // Check if user already exists (optional since Supabase will handle this)
  const { data: existingUser } = await supabase
    .from("users")
    .select("email")
    .eq("email", formFields.email.toLowerCase())
    .single();

  if (existingUser) {
    return {
      error: "An account with this email already exists.",
      success: false,
      message: "",
    };
  }

  // Sign up with Supabase - Trigger will automatically create user record
  const { data: authData, error } = await supabase.auth.signUp({
    email: formFields.email.toLowerCase().trim(),
    password: formFields.password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
      data: {
        full_name: formFields.fullName.trim(), // This will be used by trigger
      },
    },
  });

  if (error) {
    console.error("❌ Signup error:", error.message);
    return {
      error:
        error.message === "User already registered"
          ? "An account with this email already exists."
          : "Failed to create account. Please try again.",
      success: false,
      message: "",
    };
  }

  console.log("✅ Auth signup successful:", authData.user?.email);
  console.log("🔗 User record created automatically by trigger");

  // Optional: Verify that user record was created by trigger
  if (authData.user) {
    const { data: createdUser, error: fetchError } = await supabase
      .from("users")
      .select("id, name, email, role")
      .eq("id", authData.user.id)
      .single();

    if (fetchError) {
      console.error("⚠️ Could not verify user creation:", fetchError.message);
    } else {
      console.log("✅ User record verified:", createdUser);
    }
  }

  return {
    error: "",
    success: true,
    message:
      "Account created successfully! Please check your email to verify your account.",
  };
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("❌ Logout error:", error.message);
    return {
      error: "Failed to logout. Please try again.",
      success: false,
    };
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
