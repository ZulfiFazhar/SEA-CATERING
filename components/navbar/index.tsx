"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Utensils,
  Home,
  ChefHat,
  CreditCard,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthButton } from "@/components/auth/auth-button";
import { ModeToggle } from "@/components/theme/theme-switcher";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
    description: "Welcome to SEA Catering",
    color: "text-blue-500",
  },
  {
    name: "Menu",
    href: "/menu",
    icon: ChefHat,
    description: "Explore our delicious meals",
    color: "text-orange-500",
  },
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: CreditCard,
    description: "Choose your meal plan",
    color: "text-green-500",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Phone,
    description: "Get in touch with us",
    color: "text-purple-500",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const hideNavbar =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup");

  if (hideNavbar) {
    return null;
  }

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="w-full max-w-6xl flex justify-between items-center p-3 px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Utensils className="h-6 w-6 text-primary" />
          SEA Catering
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <AuthButton />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative h-9 w-9 hover:bg-accent transition-colors"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] p-0">
              <SheetHeader>
                <SheetTitle>
                  <div className="relative p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative p-3 bg-primary rounded-xl shadow-lg">
                          <Utensils className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-bold text-xl">SEA Catering</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            Healthy & Delicious
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <div className="p-4 space-y-1">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                  Navigation
                </div>
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-accent/50 hover:scale-[1.02] relative overflow-hidden border",
                        isActive
                          ? "bg-primary/5 text-primary border-primary/20 shadow-sm"
                          : "border-transparent hover:border-border"
                      )}
                    >
                      <div
                        className={cn(
                          "p-2.5 rounded-lg transition-all duration-300",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md scale-110"
                            : `bg-muted group-hover:${item.color} group-hover:bg-background group-hover:shadow-sm`
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-base truncate">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight
                        className={cn(
                          "h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Section */}
              <div className="p-4 space-y-4">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
                  Account
                </div>
                <div className="bg-gradient-to-r from-muted/50 to-transparent p-4 rounded-xl">
                  <AuthButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
