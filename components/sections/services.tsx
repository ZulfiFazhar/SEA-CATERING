import { CheckCircle } from "lucide-react";

export function Services() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Fresh Ingredients</h4>
              <p className="text-muted-foreground">
                Sourced daily from local farmers and trusted suppliers
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Flexible Subscriptions</h4>
              <p className="text-muted-foreground">
                Weekly, monthly, or one-time orders to fit your schedule
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Expert Nutritionists</h4>
              <p className="text-muted-foreground">
                Meals designed by certified nutrition professionals
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">24/7 Customer Support</h4>
              <p className="text-muted-foreground">
                We&apos;re here to help whenever you need us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
