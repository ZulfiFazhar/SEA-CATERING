import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("🔍 Middleware - Path:", request.nextUrl.pathname);
  console.log(
    "👤 Middleware - User:",
    user ? "Authenticated" : "Not authenticated"
  );

  // Public routes yang tidak memerlukan authentication
  const publicRoutes = [
    "/",
    "/login",
    "/signup",
    "/forgot-password",
    "/menu",
    "/about",
    "/contact",
  ];
  const authRoutes = ["/login", "/signup", "/forgot-password"];

  // Jika route public, allow access
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    // Jika user sudah login dan mencoba akses login/signup, redirect ke dashboard
    if (user && authRoutes.includes(request.nextUrl.pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
    return supabaseResponse;
  }

  // Jika route auth (confirmation, etc), allow access
  if (request.nextUrl.pathname.startsWith("/auth")) {
    return supabaseResponse;
  }

  // Protected routes - require authentication
  if (!user) {
    console.log("❌ No user, redirecting to login");
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Role-based access control untuk admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    console.log("🔐 Admin route detected, checking user role...");

    // Get user role from database
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    if (userError) {
      console.error("❌ Error fetching user role:", userError.message);
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    // Jika bukan admin, redirect ke dashboard
    if (userData?.role !== "admin") {
      console.log("❌ User is not admin, redirecting to dashboard");
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    console.log("✅ Admin access granted");
    return supabaseResponse;
  }

  // Dashboard route - accessible by both admin and user
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("✅ Dashboard access granted");
    return supabaseResponse;
  }

  console.log("✅ User authenticated, allowing access");
  return supabaseResponse;
}
