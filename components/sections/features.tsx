// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
import { Utensils, Truck, Heart, Clock, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    message: "Amazing meals! Lost 5kg in 2 months.",
    rating: 5,
  },
  {
    name: "Ahmad Rizki",
    message: "Perfect for busy professionals.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    message: "My kids love the Family Pack!",
    rating: 4,
  },
  {
    name: "David Chen",
    message: "Great for my fitness routine.",
    rating: 5,
  },
];

const mealPlans = [
  { name: "Healthy Start", price: "Rp 150K", meals: "21 meals" },
  { name: "Fitness Pro", price: "Rp 280K", meals: "21 meals" },
  { name: "Family Pack", price: "Rp 450K", meals: "21 meals" },
  { name: "Keto Specialist", price: "Rp 320K", meals: "21 meals" },
];

const nutritionStats = [
  { label: "Calories", value: "1800-2500", unit: "/day" },
  { label: "Protein", value: "25-45g", unit: "/meal" },
  { label: "Carbs", value: "40-70g", unit: "/meal" },
  { label: "Fats", value: "15-35g", unit: "/meal" },
];

const features = [
  {
    Icon: Utensils,
    name: "Meal Customization",
    description:
      "Tailor your meals to your dietary preferences, allergies, and nutritional goals.",
    href: "/menu",
    cta: "View Menu",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2 opacity-60">
          {mealPlans.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                "p-3 rounded-lg border bg-background/80 backdrop-blur-sm",
                "transform transition-all duration-300 hover:scale-105"
              )}
            >
              <div className="text-xs font-medium">{plan.name}</div>
              <div className="text-xs text-muted-foreground">{plan.price}</div>
              <div className="text-xs text-muted-foreground">{plan.meals}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    Icon: Users,
    name: "Satisfied Customers",
    description:
      "Thousands of happy customers across Indonesia with amazing testimonials.",
    href: "/contact",
    cta: "Read Reviews",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee pauseOnHover className="absolute top-10 [--duration:20s] ">
        {testimonials.map((testimonial, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start gap-1">
                <div className="text-sm font-medium">{testimonial.name}</div>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-base text-muted-foreground mt-4">
              {testimonial.message}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Truck,
    name: "Nationwide Delivery",
    description:
      "Fast, reliable delivery to major cities across Indonesia with temperature control.",
    href: "/subscriptions",
    cta: "See Coverage",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Clock className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-sm font-medium">24-48 Hours</div>
            <div className="text-xs text-muted-foreground">Delivery Time</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Heart,
    name: "Nutritional Transparency",
    description:
      "Detailed nutrition info for every meal to help you reach your health goals.",
    className: "col-span-3 lg:col-span-1",
    href: "/menu",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 p-4">
        <div className="grid grid-cols-2 gap-2 h-full">
          {nutritionStats.map((stat, idx) => (
            <div
              key={idx}
              className={cn(
                "p-2 rounded-lg bg-background/80 backdrop-blur-sm border",
                "flex flex-col justify-center items-center text-center",
                "transform transition-all duration-300 hover:scale-105"
              )}
            >
              <div className="text-xs font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.unit}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose SEA Catering?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing the best healthy meal experience
            with our premium services
          </p>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
