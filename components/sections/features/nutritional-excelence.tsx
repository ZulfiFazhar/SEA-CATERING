import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import Link from "next/link";
import { nutritionStats, featureSections } from "@/config/features-data";

// Create animated nutrition stats data
const animatedNutritionStats = Array.from(
  { length: 4 },
  () => nutritionStats
).flat();

// Nutrition Stat Card Component for AnimatedList
const NutritionStatCard = ({
  label,
  value,
  unit,
  icon,
  color,
  description,
}: (typeof nutritionStats)[0]) => {
  const IconComponent = icon;

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[350px] cursor-pointer overflow-hidden rounded-xl p-3",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white/80 dark:bg-background/80 backdrop-blur-sm border"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn("p-2.5 rounded-lg bg-muted shadow-sm", color)}>
          <IconComponent className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-primary">{value}</div>
          <div className="text-xs text-muted-foreground">
            {label} {unit}
          </div>
          {description && (
            <p className="text-xs text-muted-foreground/80 mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </figure>
  );
};

export function NutritionalExcellenceFeature() {
  const nutritionFeature = featureSections[3];

  return (
    <div className="lg:col-span-4 group">
      <div
        className={cn(
          "relative h-full min-h-[500px] p-6 rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300",
          `bg-gradient-to-br ${nutritionFeature.gradient}`
        )}
      >
        {/* Icon & Header */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {(() => {
              const IconComponent = nutritionFeature.icon;
              return (
                <IconComponent className="h-6 w-6 text-primary-foreground" />
              );
            })()}
          </div>
          <h3 className="text-xl font-bold mb-2">{nutritionFeature.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {nutritionFeature.description}
          </p>
        </div>

        {/* Animated Nutrition Stats */}
        <div className="relative flex h-[280px] w-full flex-col overflow-hidden mb-6">
          <AnimatedList delay={1500}>
            {animatedNutritionStats.map((stat, idx) => (
              <NutritionStatCard {...stat} key={`${stat.id}-${idx}`} />
            ))}
          </AnimatedList>
        </div>

        {/* CTA */}
        <Link
          href={nutritionFeature.href}
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
        >
          <span className="font-medium">{nutritionFeature.ctaText}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
