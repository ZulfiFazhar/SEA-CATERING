import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Subscription</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible plans to fit your lifestyle and budget. Cancel anytime.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Weekly Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Weekly Plan</CardTitle>
              <CardDescription>Perfect for trying us out</CardDescription>
              <div className="text-3xl font-bold">
                Rp 150,000
                <span className="text-lg text-muted-foreground">/week</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>7 days of meals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>21 meals total</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Free delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Nutritional guidance</span>
                </li>
              </ul>
              <Button className="w-full mt-6" asChild>
                <Link href="/login">Start Weekly Plan</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Monthly Plan */}
          <Card className="relative border-primary">
            <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle>Monthly Plan</CardTitle>
              <CardDescription>
                Best value for regular customers
              </CardDescription>
              <div className="text-3xl font-bold">
                Rp 520,000
                <span className="text-lg text-muted-foreground">/month</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Save Rp 80,000
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>30 days of meals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>90 meals total</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Free delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Meal customization</span>
                </li>
              </ul>
              <Button className="w-full mt-6" asChild>
                <Link href="/login">Start Monthly Plan</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Quarterly Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Quarterly Plan</CardTitle>
              <CardDescription>
                Maximum savings for committed users
              </CardDescription>
              <div className="text-3xl font-bold">
                Rp 1,350,000
                <span className="text-lg text-muted-foreground">/3 months</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Save Rp 210,000
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>90 days of meals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>270 meals total</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Free delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>VIP support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Full customization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Bonus consultations</span>
                </li>
              </ul>
              <Button className="w-full mt-6" asChild>
                <Link href="/login">Start Quarterly Plan</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I cancel my subscription anytime?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. There are
                  no cancellation fees, and you&apos;ll continue to receive
                  meals until the end of your billing period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How does delivery work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deliver fresh meals to your doorstep every few days to
                  ensure freshness. Delivery is included in all subscription
                  plans across major cities in Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I customize my meals?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Monthly and Quarterly subscribers can customize their
                  meal preferences, dietary restrictions, and portion sizes
                  through our dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
