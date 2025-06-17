"use client";

import Link from "next/link";
import {
  Utensils,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const hideFooter =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup");

  if (hideFooter) {
    return null;
  }

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 text-slate-200 py-12 relative overflow-hidden w-full">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Utensils className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                SEA Catering
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Healthy Meals, Anytime, Anywhere. Redefining meal delivery with
              nutritious, customizable meals across Indonesia.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/subscriptions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Meal Customization</li>
              <li className="text-muted-foreground">Nationwide Delivery</li>
              <li className="text-muted-foreground">Nutritional Consulting</li>
              <li className="text-muted-foreground">Subscription Plans</li>
              <li className="text-muted-foreground">24/7 Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-muted-foreground">Manager: Brian</div>
                  <a
                    href="tel:08123456789"
                    className="text-muted-foreground hover:text-primary"
                  >
                    08123456789
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@seacatering.co.id"
                  className="text-muted-foreground hover:text-primary"
                >
                  info@seacatering.co.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  All major cities in Indonesia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <div className="text-muted-foreground">
                  <div>Mon - Fri: 8AM - 8PM</div>
                  <div>Sat - Sun: 9AM - 6PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SEA Catering. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
