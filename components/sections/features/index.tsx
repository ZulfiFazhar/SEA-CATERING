import { FeaturesHeader } from "@/components/sections/features/header";
import { MealCustomizationFeature } from "@/components/sections/features/meal-customization";
import { HappyCustomersFeature } from "@/components/sections/features/happy-customer";
import { DeliveryFeature } from "@/components/sections/features/delivery";
import { NutritionalExcellenceFeature } from "@/components/sections/features/nutritional-excelence";
// import { FeaturesCTA } from "@/components/sections/features/cta";

export function Features() {
  return (
    <section
      id="features"
      className="pt-24 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturesHeader />

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <MealCustomizationFeature />
          <HappyCustomersFeature />
          <DeliveryFeature />
          <NutritionalExcellenceFeature />
        </div>

        {/* <FeaturesCTA /> */}
      </div>
    </section>
  );
}
