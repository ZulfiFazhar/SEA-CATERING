import { Badge } from "@/components/ui/badge";
import { featureStats } from "@/config/features-data";

export function FeaturesHeader() {
  return (
    <div className="text-center mb-20">
      <Badge variant="outline" className="mb-4">
        Why Choose Us
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
        Premium Healthy Meal Experience
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        We&apos;re committed to providing the best healthy meal experience with
        our premium services, expert nutritionists, and nationwide delivery
        network.
      </p>

      {/* Feature Stats */}
      <div className="flex items-center justify-center gap-8 mt-8">
        {featureStats.map((stat, idx) => (
          <div key={stat.label} className="text-center relative">
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            {idx < featureStats.length - 1 && (
              <div className="w-px h-12 bg-border absolute -right-4 top-0"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
