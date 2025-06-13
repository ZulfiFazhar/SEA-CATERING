"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
// import Autoplay from "embla-carousel-autoplay";

const sampleTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    message:
      "SEA Catering has completely transformed my eating habits! The meals are delicious, nutritious, and perfectly portioned. I've lost 5kg in just 2 months!",
    rating: 5,
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    message:
      "As a busy professional, SEA Catering saves me so much time. The quality is outstanding and delivery is always on time. Highly recommended!",
    rating: 5,
    date: "2024-01-10",
  },
  {
    id: 3,
    name: "Maria Santos",
    message:
      "The Family Pack has been a game-changer for our household. My kids actually ask for seconds! Great variety and excellent value for money.",
    rating: 4,
    date: "2024-01-08",
  },
  {
    id: 4,
    name: "David Chen",
    message:
      "The Fitness Pro plan perfectly complements my workout routine. I can see the difference in my energy levels and muscle recovery.",
    rating: 5,
    date: "2024-01-05",
  },
  {
    id: 5,
    name: "Lisa Rahman",
    message:
      "Customer service is exceptional! They accommodated all my dietary restrictions and the meals still taste amazing. Thank you SEA Catering!",
    rating: 5,
    date: "2024-01-01",
  },
];

export function TestimonialCarousel() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Carousel
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //   }),
        // ]}
        className="w-full"
      >
        <CarouselContent>
          {sampleTestimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="p-1">
                <Card className="min-h-[250px]">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    <blockquote className="text-lg mb-6 text-muted-foreground italic max-w-2xl">
                      &quot;{testimonial.message}&quot;
                    </blockquote>

                    <div className="text-center">
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(testimonial.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
