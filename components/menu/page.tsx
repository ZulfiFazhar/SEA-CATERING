"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star, Clock, Users, Utensils } from "lucide-react";

const mealPlans = [
  {
    id: 1,
    name: "Healthy Start",
    price: "Rp 150,000",
    pricePerDay: "Rp 25,000/day",
    description:
      "Perfect for beginners looking to start their healthy eating journey",
    image: "/api/placeholder/300/200",
    duration: "7 days",
    meals: "21 meals",
    servings: "1 person",
    features: [
      "Balanced nutrition",
      "Fresh ingredients",
      "Easy to prepare",
      "Dietary guidelines included",
    ],
    detailedDescription:
      "Our Healthy Start plan is designed for those taking their first steps towards a healthier lifestyle. Each meal is carefully crafted to provide balanced nutrition while being delicious and satisfying. Perfect for busy professionals who want to eat well without the hassle of meal planning.",
    nutritionInfo: {
      calories: "1,800-2,000 per day",
      protein: "25-30g per meal",
      carbs: "45-60g per meal",
      fats: "15-20g per meal",
    },
  },
  {
    id: 2,
    name: "Fitness Pro",
    price: "Rp 280,000",
    pricePerDay: "Rp 40,000/day",
    description:
      "High-protein meals designed for active individuals and fitness enthusiasts",
    image: "/api/placeholder/300/200",
    duration: "7 days",
    meals: "21 meals",
    servings: "1 person",
    features: [
      "High protein content",
      "Pre & post workout meals",
      "Muscle building focus",
      "Performance optimization",
    ],
    detailedDescription:
      "The Fitness Pro plan is tailored for athletes and fitness enthusiasts who need high-quality nutrition to fuel their workouts and recovery. Each meal is packed with lean proteins, complex carbohydrates, and essential nutrients to support your fitness goals.",
    nutritionInfo: {
      calories: "2,200-2,500 per day",
      protein: "35-45g per meal",
      carbs: "50-70g per meal",
      fats: "20-25g per meal",
    },
  },
  {
    id: 3,
    name: "Family Pack",
    price: "Rp 450,000",
    pricePerDay: "Rp 32,000/day",
    description: "Nutritious meals for the whole family, serving 2-4 people",
    image: "/api/placeholder/300/200",
    duration: "7 days",
    meals: "21 meals",
    servings: "2-4 people",
    features: [
      "Family-sized portions",
      "Kid-friendly options",
      "Variety of cuisines",
      "Cost-effective",
    ],
    detailedDescription:
      "Our Family Pack brings healthy eating to the entire household. With generous portions and kid-approved recipes, this plan makes it easy to feed your family nutritious meals without breaking the budget. Each meal is designed to please both adults and children.",
    nutritionInfo: {
      calories: "1,800-2,200 per day per person",
      protein: "25-35g per meal per person",
      carbs: "40-60g per meal per person",
      fats: "15-25g per meal per person",
    },
  },
  {
    id: 4,
    name: "Keto Specialist",
    price: "Rp 320,000",
    pricePerDay: "Rp 45,000/day",
    description: "Low-carb, high-fat meals following ketogenic diet principles",
    image: "/api/placeholder/300/200",
    duration: "7 days",
    meals: "21 meals",
    servings: "1 person",
    features: [
      "Ketogenic compliant",
      "High healthy fats",
      "Ultra low carbs",
      "Weight loss support",
    ],
    detailedDescription:
      "The Keto Specialist plan is meticulously designed for those following a ketogenic lifestyle. Every meal maintains the perfect macro ratios to keep you in ketosis while providing delicious, satisfying food that doesn't feel restrictive.",
    nutritionInfo: {
      calories: "1,600-1,900 per day",
      protein: "25-30g per meal",
      carbs: "5-10g per meal",
      fats: "25-35g per meal",
    },
  },
];

export default function MenuPage() {
  //   const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Meal Plans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted meal plans designed to meet your
            health and lifestyle goals
          </p>
        </div>

        {/* Meal Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mealPlans.map((plan) => (
            <Card
              key={plan.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {plan.pricePerDay}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-2">
                      {plan.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      for 7 days
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {plan.duration}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Utensils className="h-4 w-4" />
                    {plan.meals}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {plan.servings}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">See More Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        {plan.name}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {plan.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Plan Overview
                        </h3>
                        <p className="text-muted-foreground">
                          {plan.detailedDescription}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Plan Details</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span>{plan.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Meals:</span>
                              <span>{plan.meals}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Servings:</span>
                              <span>{plan.servings}</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                              <span>Price:</span>
                              <span className="text-primary">{plan.price}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Nutrition Info</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Calories:</span>
                              <span>{plan.nutritionInfo.calories}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Protein:</span>
                              <span>{plan.nutritionInfo.protein}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Carbs:</span>
                              <span>{plan.nutritionInfo.carbs}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Fats:</span>
                              <span>{plan.nutritionInfo.fats}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {plan.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <Star className="h-4 w-4 text-primary" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full" size="lg">
                        Subscribe to {plan.name}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
