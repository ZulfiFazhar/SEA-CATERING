import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { mealPlans, featureSections } from "@/config/features-data";

// Create animated meal plans data
const animatedMealPlans = Array.from({ length: 3 }, () => mealPlans).flat();

// Meal Plan Card Component for AnimatedList
const MealPlanCard = ({
  name,
  price,
  meals,
  popular,
  gradient,
  description,
}: (typeof mealPlans)[0]) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[350px] cursor-pointer overflow-hidden rounded-xl p-3",
        "transition-all duration-200 ease-in-out hover:scale-[103%]"
      )}
    >
      {/* Gradient Background */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)} />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-semibold">{name}</div>
          {popular && (
            <Badge variant="secondary" className="text-xs px-2 py-0">
              Popular
            </Badge>
          )}
        </div>
        <div className="text-lg font-bold text-primary mb-1">{price}</div>
        <div className="text-xs text-muted-foreground mb-2">{meals}</div>
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </figure>
  );
};

export function MealCustomizationFeature() {
  const mealCustomizationFeature = featureSections[0];

  return (
    <div className="lg:col-span-4 group">
      <div
        className={cn(
          "relative h-full min-h-[500px] p-6 rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300",
          `bg-gradient-to-br ${mealCustomizationFeature.gradient}`
        )}
      >
        {/* Icon & Header */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {(() => {
              const IconComponent = mealCustomizationFeature.icon;
              return (
                <IconComponent className="h-6 w-6 text-primary-foreground" />
              );
            })()}
          </div>
          <h3 className="text-xl font-bold mb-2">
            {mealCustomizationFeature.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {mealCustomizationFeature.description}
          </p>
        </div>

        {/* Animated Meal Plans */}
        <div className="relative flex h-[280px] w-full flex-col overflow-hidden mb-6">
          <AnimatedList delay={2000}>
            {animatedMealPlans.map((plan, idx) => (
              <MealPlanCard {...plan} key={`${plan.id}-${idx}`} />
            ))}
          </AnimatedList>
        </div>

        {/* CTA */}
        <Link
          href={mealCustomizationFeature.href}
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
        >
          <span className="font-medium">
            {mealCustomizationFeature.ctaText}
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
