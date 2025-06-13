import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Utensils, Truck, Heart } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Meal Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Tailor your meals to your dietary preferences, allergies, and
                nutritional goals. Every meal is crafted just for you.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Nationwide Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Fresh, healthy meals delivered to major cities across Indonesia.
                Fast, reliable, and temperature-controlled delivery.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Nutritional Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Detailed nutritional information for every meal. Track calories,
                macros, and ingredients to meet your health goals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
