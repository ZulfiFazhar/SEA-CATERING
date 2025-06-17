import {
  Utensils,
  Truck,
  Heart,
  //   Clock,
  Users,
  Shield,
  Award,
  Zap,
  CheckCircle,
} from "lucide-react";
import type {
  Testimonial,
  MealPlan,
  NutritionStat,
  DeliveryFeature,
  FeatureStats,
  FeatureSection,
} from "@/types/features";

// Testimonials Data
export const testimonialsData: Testimonial[] = [
  {
    name: "Sarah Johnson",
    message: "Amazing meals! Lost 5kg in 2 months with their keto plan.",
    rating: 5,
    role: "Fitness Enthusiast",
    avatar: "SJ",
  },
  {
    name: "Ahmad Rizki",
    message: "Perfect for busy professionals. Saves me 2 hours daily!",
    rating: 5,
    role: "Software Engineer",
    avatar: "AR",
  },
  {
    name: "Maria Santos",
    message: "My kids love the Family Pack! Healthy and delicious.",
    rating: 5,
    role: "Working Mom",
    avatar: "MS",
  },
  {
    name: "David Chen",
    message: "Great for my fitness routine. Perfectly balanced macros.",
    rating: 5,
    role: "Personal Trainer",
    avatar: "DC",
  },
  {
    name: "Lisa Wong",
    message: "Delivery is always on time and food stays fresh!",
    rating: 5,
    role: "Marketing Manager",
    avatar: "LW",
  },
  {
    name: "Budi Santoso",
    message: "Affordable and healthy. Best decision I've made!",
    rating: 5,
    role: "Student",
    avatar: "BS",
  },
];

// Meal Plans Data
export const mealPlansData: MealPlan[] = [
  {
    id: "healthy-start",
    name: "Healthy Start",
    price: "Rp 150K",
    meals: "21 meals",
    popular: false,
    gradient: "from-green-500/20 to-green-600/10",
    description: "Perfect for beginners starting their healthy journey",
    features: ["Balanced nutrition", "Portion control", "Easy to follow"],
    duration: "Weekly",
  },
  {
    id: "fitness-pro",
    name: "Fitness Pro",
    price: "Rp 280K",
    meals: "21 meals",
    popular: true,
    gradient: "from-blue-500/20 to-blue-600/10",
    description: "Designed for fitness enthusiasts and athletes",
    features: ["High protein", "Pre/post workout meals", "Performance focused"],
    duration: "Weekly",
  },
  {
    id: "family-pack",
    name: "Family Pack",
    price: "Rp 450K",
    meals: "21 meals",
    popular: false,
    gradient: "from-purple-500/20 to-purple-600/10",
    description: "Healthy meals for the whole family",
    features: ["Kid-friendly", "Large portions", "Family favorites"],
    duration: "Weekly",
  },
  {
    id: "keto-specialist",
    name: "Keto Specialist",
    price: "Rp 320K",
    meals: "21 meals",
    popular: false,
    gradient: "from-orange-500/20 to-orange-600/10",
    description: "Specialized ketogenic diet meals",
    features: ["Low carb", "High fat", "Ketosis optimized"],
    duration: "Weekly",
  },
];

// Nutrition Stats Data
export const nutritionStatsData: NutritionStat[] = [
  {
    id: "calories",
    label: "Calories",
    value: "1800-2500",
    unit: "/day",
    icon: Zap,
    color: "text-yellow-500",
    description: "Daily caloric intake based on your goals",
    category: "macro",
  },
  {
    id: "protein",
    label: "Protein",
    value: "25-45g",
    unit: "/meal",
    icon: Award,
    color: "text-red-500",
    description: "High-quality protein for muscle maintenance",
    category: "macro",
  },
  {
    id: "carbs",
    label: "Carbs",
    value: "40-70g",
    unit: "/meal",
    icon: Heart,
    color: "text-blue-500",
    description: "Complex carbohydrates for sustained energy",
    category: "macro",
  },
  {
    id: "fats",
    label: "Fats",
    value: "15-35g",
    unit: "/meal",
    icon: Shield,
    color: "text-green-500",
    description: "Healthy fats for optimal hormone production",
    category: "macro",
  },
];

// Delivery Features Data
export const deliveryFeaturesData: DeliveryFeature[] = [
  {
    id: "temperature-controlled",
    text: "Temperature Controlled",
    icon: CheckCircle,
    description: "Meals stay fresh with advanced temperature control",
  },
  {
    id: "fast-delivery",
    text: "24-48 Hour Delivery",
    icon: CheckCircle,
    description: "Quick delivery to ensure freshness",
  },
  {
    id: "wide-coverage",
    text: "15+ Major Cities",
    icon: CheckCircle,
    description: "Extensive delivery network across Indonesia",
  },
  {
    id: "real-time-tracking",
    text: "Real-time Tracking",
    icon: CheckCircle,
    description: "Track your order from kitchen to doorstep",
  },
];

export const deliveryCitiesData = [
  {
    id: "jakarta",
    name: "Jakarta",
    region: "DKI Jakarta",
    population: "10.5M",
    color: "red",
    deliveryTime: "24 hours",
  },
  {
    id: "surabaya",
    name: "Surabaya",
    region: "Jawa Timur",
    population: "2.9M",
    color: "blue",
    deliveryTime: "36 hours",
  },
  {
    id: "bandung",
    name: "Bandung",
    region: "Jawa Barat",
    population: "2.5M",
    color: "green",
    deliveryTime: "36 hours",
  },
  {
    id: "medan",
    name: "Medan",
    region: "Sumatera Utara",
    population: "2.4M",
    color: "purple",
    deliveryTime: "48 hours",
  },
  {
    id: "semarang",
    name: "Semarang",
    region: "Jawa Tengah",
    population: "1.8M",
    color: "orange",
    deliveryTime: "36 hours",
  },
  {
    id: "yogyakarta",
    name: "Yogyakarta",
    region: "DI Yogyakarta",
    population: "0.4M",
    color: "teal",
    deliveryTime: "36 hours",
  },
];

// Feature Stats Data (Header Statistics)
export const featureStatsData: FeatureStats[] = [
  {
    label: "Happy Customers",
    value: "10,000+",
    description: "Satisfied customers nationwide",
  },
  {
    label: "Cities Covered",
    value: "15+",
    description: "Major cities across Indonesia",
  },
  {
    label: "Average Rating",
    value: "4.9",
    description: "Based on customer reviews",
  },
];

// Feature Sections Data
export const featureSectionsData: FeatureSection[] = [
  {
    id: "meal-customization",
    title: "Meal Customization",
    description:
      "Tailor your meals to your dietary preferences, allergies, and nutritional goals with our flexible meal plans.",
    icon: Utensils,
    href: "/menu",
    ctaText: "Explore Menu",
    gradient: "from-primary/5 via-primary/3 to-transparent",
    className: "lg:col-span-4",
  },
  {
    id: "happy-customers",
    title: "10,000+ Happy Customers",
    description:
      "Join thousands of satisfied customers who've transformed their eating habits with our premium meal delivery service.",
    icon: Users,
    href: "/testimonials",
    ctaText: "Read All Reviews",
    gradient: "from-pink-500/5 via-purple-500/5 to-blue-500/5",
    className: "lg:col-span-8",
  },
  {
    id: "nationwide-delivery",
    title: "Nationwide Delivery",
    description:
      "Fast, reliable delivery to 15+ major cities across Indonesia with real-time tracking and temperature control.",
    icon: Truck,
    href: "/delivery",
    ctaText: "Check Coverage",
    gradient: "from-blue-500/10 via-cyan-500/5 to-green-500/10",
    className: "lg:col-span-8",
  },
  {
    id: "nutritional-excellence",
    title: "Nutritional Excellence",
    description:
      "Detailed nutrition information for every meal, crafted by professional nutritionists to support your health goals.",
    icon: Heart,
    href: "/nutrition",
    ctaText: "View Details",
    gradient: "from-red-500/10 via-pink-500/5 to-orange-500/10",
    className: "lg:col-span-4",
  },
];

// Configuration Object
export const featuresConfig = {
  testimonials: testimonialsData,
  mealPlans: mealPlansData,
  nutritionStats: nutritionStatsData,
  deliveryFeatures: deliveryFeaturesData,
  featureStats: featureStatsData,
  featureSections: featureSectionsData,
} as const;

// Export individual arrays for convenience
export {
  testimonialsData as testimonials,
  mealPlansData as mealPlans,
  nutritionStatsData as nutritionStats,
  deliveryFeaturesData as deliveryFeatures,
  featureStatsData as featureStats,
  featureSectionsData as featureSections,
};
