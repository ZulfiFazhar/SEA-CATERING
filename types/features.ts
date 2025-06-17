import { LucideIcon } from "lucide-react";

export interface Testimonial {
  name: string;
  message: string;
  rating: number;
  role: string;
  avatar: string;
  image?: string; // Optional profile image URL
}

export interface MealPlan {
  id: string;
  name: string;
  price: string;
  meals: string;
  popular: boolean;
  gradient: string;
  description?: string;
  features?: string[];
  duration?: string; // e.g., "Weekly", "Monthly"
}

export interface NutritionStat {
  id: string;
  label: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  color: string;
  description?: string;
  category?: "macro" | "vitamin" | "mineral";
}

export interface DeliveryFeature {
  id: string;
  text: string;
  icon: LucideIcon;
  description?: string;
}

export interface FeatureStats {
  label: string;
  value: string;
  description: string;
}

export interface FeatureSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  ctaText: string;
  gradient: string;
  className: string;
}
